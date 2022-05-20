import { CompanyService } from "../service/CompanyService";
import { CategoryService } from "../service/CategoryService";

const testNonProfit = {
  name: "Test company",
  orgNr: 1245,
  description: "Company 1",
  type: "non-profit",
};
const testCustomer = {
  name: "Test company",
  orgNr: 1245,
  description: "Company 1",
  type: "customer",
};

let waterCategory;
let educationCategory;
let refugeeCategory;

describe("Company service", () => {
  beforeEach(async () => {
    waterCategory = await CategoryService.insert({ name: "Water" });
    educationCategory = await CategoryService.insert({ name: "Education" });
    refugeeCategory = await CategoryService.insert({ name: "Refugees" });
  });
  it("inserts and retrieves company", async () => {
    await CompanyService.insert(testNonProfit);
    expect(await CompanyService.find(testNonProfit)).toEqual(
      expect.arrayContaining([expect.objectContaining(testNonProfit)])
    );
  });

  it("finds a single company", async () => {
    await CompanyService.insert(testNonProfit);
    expect(await CompanyService.findOne(testNonProfit)).toEqual(
      expect.objectContaining(testNonProfit)
    );
  });

  it("updates a company", async function () {
    const company = await CompanyService.insert(testCustomer);
    await CompanyService.update(
      { name: "Test company" },
      { name: "Test company with new name" }
    );
    expect(
      await CompanyService.findOne({ name: "Test company with new name" })
    ).toEqual(
      expect.objectContaining({
        name: "Test company with new name",
        orgNr: company.orgNr,
        description: company.description,
        type: company.type,
      })
    );
  });

  it("deletes single company", async () => {
    const company = await CompanyService.insert(testCustomer);
    expect(await CompanyService.find({ name: "Test company" })).toHaveLength(1);
    await CompanyService.deleteOne({ company });
    expect(await CompanyService.find()).toHaveLength(0);
  });

  it("deletes all companies", async () => {
    await CompanyService.insert(testNonProfit);
    await CompanyService.insert(testCustomer);
    expect(await CompanyService.find()).toHaveLength(2);
    await CompanyService.deleteMany();
    expect(await CompanyService.find()).toHaveLength(0);
  });

  it("adds a list of categories by name to a company", async () => {
    await CompanyService.insert(testNonProfit);
    await CompanyService.addCategoriesToCompany(testNonProfit, [
      { name: "Water", weight: 1 },
      { name: "Education", weight: 2 },
    ]);
    const res = await CompanyService.findOne({ orgNr: testNonProfit.orgNr });
    expect(res.categories).toHaveLength(2);
    expect(res).toEqual(
      expect.objectContaining({
        categories: expect.arrayContaining([
          expect.objectContaining({ weight: 1, category: waterCategory._id }),
          expect.objectContaining({
            weight: 2,
            category: educationCategory._id,
          }),
        ]),
      })
    );
  });

  it("does not add duplicate categories", async () => {
    await CompanyService.insert(testNonProfit);
    await CompanyService.addCategoriesToCompany(testNonProfit, [
      { name: waterCategory.name, weight: 1 },
      {
        name: refugeeCategory.name,
        weight: 2,
      },
    ]);
    await CompanyService.addCategoriesToCompany(testNonProfit, [
      { name: waterCategory.name, weight: 1 },
      { name: educationCategory.name, weight: 2 },
    ]);
    const res = await CompanyService.findOne({ orgNr: testNonProfit.orgNr });
    expect(res.categories).toHaveLength(3);
    expect(res).toEqual(
      expect.objectContaining({
        categories: expect.arrayContaining([
          expect.objectContaining({ category: waterCategory._id, weight: 1 }),
          expect.objectContaining({
            category: educationCategory._id,
            weight: 2,
          }),
          expect.objectContaining({ category: refugeeCategory._id, weight: 2 }),
        ]),
      })
    );
  });

  it("returns a company with populated categories", async () => {
    const company = {
      name: "Test name",
      orgNr: 1234,
      description: "Test description",
      type: "customer",
      categories: [
        { category: waterCategory._id, weight: 1 },
        { category: educationCategory._id, weight: 2 },
      ],
    };
    await CompanyService.insert(company);
    const res = await CompanyService.findOnePopulated({ company });
    expect(res).toEqual(
      expect.objectContaining({
        categories: expect.arrayContaining([
          expect.objectContaining({
            category: expect.objectContaining({ name: "Water" }),
            weight: 1,
          }),
          expect.objectContaining({
            category: expect.objectContaining({ name: "Education" }),
            weight: 2,
          }),
        ]),
      })
    );
  });
});

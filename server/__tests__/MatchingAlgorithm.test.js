import { MatchingService } from "../service/MatchingService";
import { CompanyService } from "../service/CompanyService";
import { CategoryService } from "../service/CategoryService";

describe("Matching service", () => {
  const categories = [
    { name: "Refugees" },
    { name: "Water" },
    { name: "Education" },
    { name: "Emergency response" },
  ];
  const testNonProfit = {
    name: "Test non-profit",
    orgNr: 1234,
    description: "A fictional non-profit",
    type: "non-profit",
  };
  const customerCategories = [
    { name: "Refugees", weight: 2 },
    { name: "Water", weight: 1 },
    { name: "Education", weight: 1 },
  ];
  beforeEach(async () => {
    for (const category of categories) {
      await CategoryService.insert(category);
    }
    await CompanyService.insert(testNonProfit);
    await CompanyService.addCategoriesToCompany(testNonProfit, [
      { name: "Refugees", weight: -1 },
      { name: "Water", weight: -1 },
    ]);

    const nonProfit = await CompanyService.findOne({
      orgNr: testNonProfit.orgNr,
    });

    if (nonProfit.categories.length !== 2) {
      throw new Error("Categories not correctly added!");
    }
  });

  it("should return list of matching non-profits", async () => {
    const res = await MatchingService.findMatchForCustomer(customerCategories);

    expect(res).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          nonProfit: expect.objectContaining(testNonProfit),
        }),
      ])
    );
  });

  it("should return a percentage match for each non-profit", async () => {
    const res = await MatchingService.findMatchForCustomer(customerCategories);

    expect(res).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          percentage: expect.any(Number),
          nonProfit: expect.any(Object),
        }),
      ])
    );
  });

  it("should not match to non-profit if it doesn't have core value", async () => {
    const npWithoutCoreValue = {
      name: "Test non-profit",
      orgNr: 9876,
      description: "A fictional non-profit without core value",
      type: "non-profit",
    };
    await CompanyService.insert(npWithoutCoreValue);
    await CompanyService.addCategoriesToCompany(npWithoutCoreValue, [
      { name: "Water", weight: -1 },
      { name: "Education", weight: -1 },
    ]);
    const res = await MatchingService.findMatchForCustomer(customerCategories);
    expect(res).toHaveLength(1);
  });

  it("should sort matched non-profit by percentage match", async () => {
    const hundredPercentMatch = {
      name: "Test non-profit",
      orgNr: 9876,
      description: "A fictional non-profit with 100% customer match",
      type: "non-profit",
    };
    await CompanyService.insert(hundredPercentMatch);
    await CompanyService.addCategoriesToCompany(hundredPercentMatch, [
      { name: "Water", weight: -1 },
      { name: "Education", weight: -1 },
      { name: "Refugees", weight: -1 },
    ]);

    const res = await MatchingService.findMatchForCustomer(customerCategories);
    expect(res).toHaveLength(2);
    expect(res[0]).toEqual(
      expect.objectContaining({
        percentage: expect.any(Number),
        nonProfit: expect.objectContaining(hundredPercentMatch),
      })
    );
    expect(res[1]).toEqual(
      expect.objectContaining({
        percentage: expect.any(Number),
        nonProfit: expect.objectContaining(testNonProfit),
      })
    );
  });
});

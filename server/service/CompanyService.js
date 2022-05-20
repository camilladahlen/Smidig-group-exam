import { Company } from "../model/Company.js";
import { CategoryService } from "./CategoryService.js";

const CompanyService = (function () {
  return {
    insert: async function (document) {
      const company = new Company(document);
      await company.save();
      return company;
    },
    find: async function (query) {
      return Company.find(query);
    },
    findPopulated: async function (query) {
      return Company.find(query).populate("categories.category");
    },
    findOne: async function (query) {
      return Company.findOne(query);
    },
    findOnePopulated: async function (query) {
      return Company.findOne(query).populate("categories.category");
    },
    deleteOne: async function (query) {
      return Company.deleteOne(query);
    },
    update: async function (filter, query) {
      return Company.updateOne(filter, query);
    },
    deleteMany: async function (query) {
      return Company.deleteMany(query);
    },
    exists: async function (query) {
      return Company.exists(query);
    },
    addCategoriesToCompany: async function (company, namesAndWeights) {
      //If the categories exist in the db, they will end up in this array
      const foundCategories = await CategoryService.find({
        name: { $in: namesAndWeights.map((e) => e.name) },
      });

      //Create map of (k=weight, v=name) for faster lookups
      const weightMap = new Map(
        namesAndWeights.map((entry) => {
          return [entry.name, entry.weight];
        })
      );

      //Create the array of categories we want to store (only containing categories in the db)
      const arrayToStore = foundCategories.map((e) => ({
        category: e._id,
        weight: weightMap.get(e.name),
      }));

      const c = await CompanyService.findOne({ orgNr: company.orgNr });
      const storedCategories = c.categories;

      //Merge storedCategories and arrayToStore

      storedCategories.forEach((stored) => {
        if (
          arrayToStore.findIndex(
            (toAdd) => toAdd.category.toString() === stored.category.toString()
          ) === -1
        ) {
          arrayToStore.push(stored);
        }
      });
      await Company.updateOne(
        { orgNr: company.orgNr },
        { $set: { categories: arrayToStore } }
      );
      return Company.findOne({ company });
    },
  };
})();

export { CompanyService };

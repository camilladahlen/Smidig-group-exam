import { CompanyService } from "./CompanyService.js";
import { CategoryService } from "./CategoryService.js";

const MatchingService = (function () {
  const calculatePercentage = (customerCategories, nonProfitCategories) => {
    console.log(`customerCategories: ${JSON.stringify(customerCategories)}`);
    console.log(`nonProfitCategories: ${JSON.stringify(nonProfitCategories)}`);
    const matchingCategories = nonProfitCategories.filter(
      (c) =>
        customerCategories.findIndex((x) => x.name === c.category.name) !== -1
    );
    return (matchingCategories.length / customerCategories.length) * 100;
  };
  return {
    findMatchForCustomer: async function (categories) {
      //Create array of customer categories with weight == 2, then pass that in with the query
      const coreCategoryNames = categories
        .filter((c) => c.weight === 2)
        .map((c) => c.name);

      const coreCategories = await CategoryService.find({
        name: { $in: coreCategoryNames },
      });

      const matchingNonProfits = await CompanyService.findPopulated(
        coreCategories.length === 0
          ? { type: "non-profit" }
          : {
              type: "non-profit",
              "categories.category": { $in: coreCategories },
            }
      );

      let result = [];
      matchingNonProfits.forEach((c) => {
        const percentage = calculatePercentage(categories, c.categories);
        result.push({ nonProfit: c, percentage: percentage });
      });
      result.sort((a, b) => {
        if (a.percentage > b.percentage) {
          return -1;
        } else if (a.percentage < b.percentage) {
          return 1;
        }
        return 0;
      });
      return result;
    },
  };
})();

export { MatchingService };

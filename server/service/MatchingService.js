import { CompanyService } from "./CompanyService";

const MatchingService = (function () {
  const calculatePercentage = (customerCategories, nonProfitCategories) => {
    const matchingCategories = nonProfitCategories.filter(
      (c) =>
        customerCategories.findIndex(
          (x) => x.category.toString() === c.category.toString()
        ) !== -1
    );
    return (matchingCategories.length / customerCategories.length) * 100;
  };
  return {
    findMatchForCustomer: async function (query) {
      const storedCustomer = await CompanyService.findOne(query);
      //Create array of customer categories with weight == 2, then pass that in with the query
      const coreCategories = storedCustomer.categories
        .filter((c) => c.weight === 2)
        .map((c) => c.category);
      console.log(`coreCategories: ${JSON.stringify(coreCategories)}`);
      const matchingNonProfits = await CompanyService.find({
        type: "non-profit",
        "categories.category": { $in: coreCategories },
      });

      console.log(`matchingNonProfits: ${JSON.stringify(matchingNonProfits)}`);

      let result = [];
      matchingNonProfits.forEach((c) => {
        const percentage = calculatePercentage(
          storedCustomer.categories,
          c.categories
        );
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

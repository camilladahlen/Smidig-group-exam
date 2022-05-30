import { CompanyService } from "./service/CompanyService.js";
import { CategoryService } from "./service/CategoryService.js";

export async function CreateMockData() {
  const categories = [
    { name: "Water" },
    { name: "Education" },
    { name: "Female rights" },
    { name: "Emergency response" },
  ];

  for (const category of categories) {
    if (!(await CategoryService.exists(category))) {
      await CategoryService.insert(category);
    }
  }

  const companies = [
    {
      name: "Redd Barna",
      orgNr: 1234,
      description:
        "Redd Barna is a Norwegian charity organization aiming to protect childrens rights, both long term and when in need of emergency aid.\n",
      type: "non-profit",
      logo: "https://www.reddbarna.no/content/uploads/2021/01/ReddBarna_Logo_Horiz_ColPos_RGB.png",
      viewMoreInfo: {
        extendedInfo:
          "Redd Barna is a Norwegian charity organization aiming to protect childrens rights, both long term and when in need of emergency aid.\n" +
          "\n" +
          "Giving kids a good and safe education is Redd Barnas main focus. They focus on kids in low income areas, areas affected by conflict, and other vulnerable kids like minorities, girls and children with disabilities as they are often discriminated against. \n" +
          "\n" +
          "Despite the progress that has been made throughout the last couple of decades, there is still a lot of work to be done to make sure all kids have acess to a good and safe education.\n",
        photos: [],
        adminPercentage: 7.4,
        stats: [
          {
            icon: "fa-stethoscope",
            number: "27,9",
            description:
              "million children received help through health programs in 2020",
          },
          {
            icon: "fa-graduation-cap",
            number: "12",
            description:
              "million children received schooling through our educational programs in 2020",
          },
        ],
      },
    },
    {
      name: "Amnesty",
      orgNr: 2345,
      description:
        "Amnesty International is a global movement of more than 10 million people who take injustice personally. We are campaigning for a world where human rights are enjoyed by all.\n",
      type: "non-profit",
      logo: "https://amnesty.no/sites/default/files/vedlegg/yellow_logo_digital_use_0.png",
      viewMoreInfo: {
        extendedInfo:
          "Founded in 1961, Amnesty International is a global movement of more than 10 million people in over 150 countries and territories who campaign to end abuses of human rights.\n" +
          "\n" +
          "Amnesty is funded by members and people like you. They are independent of any political ideology, economic interest or religion. No government is beyond scrutiny. No situation is beyond hope. \n" +
          "\n" +
          "Amnesty has among other things been working to ensure a safe education for girls around the world, without fear of being punished.",
        photos: [],
        adminPercentage: 3.2,
        stats: [],
      },
    },
    {
      name: "Unicef",
      orgNr: 3456,
      description:
        "UNICEF works in over 190 countries and territories to save children’s lives, to defend their rights, and to help them fulfil their potential, from early childhood through adolescence. And we never give up.\n",
      type: "non-profit",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/UNICEF_FLAG.png/640px-UNICEF_FLAG.png",
      viewMoreInfo: {
        extendedInfo:
          "UNICEF works to create lasting change and strengthen the rights for all children. As the worlds largest aid organisation for children, and as an important part of the UN, we have a unique influence in over 190 countries. We fight to save the lives of children, protecting the most vulnerable and build a better future in the most pressured places in the world. \n" +
          "\n" +
          "A child born from a mother with education has 50% higher chances of survival. Education boosts knowledge about hygiene, nutrition, vaccination and generall health, as well as securing an income for the children in their future. ",
        photos: [],
        adminPercentage: 3.4,
        stats: [],
      },
    },
    {
      name: "Plan",
      orgNr: 4567,
      description:
        "Plan International is an independent development and humanitarian organisation that advances children’s rights and equality for girls. We strive for a just world, working together with children, young people, our supporters and partners.\n",
      type: "non-profit",
      logo: "https://kommunikasjon.ntb.no/data/images/00030/6ff3894d-f5dc-41b5-ba20-ad444e02f593.jpg/social",
      viewMoreInfo: {
        extendedInfo:
          "Plan Norway is a norwegian aid work foundation, and is a part of Plan International. \n" +
          "\n" +
          "Founded in 1937, Plan International is a development and humanitarian organisation that advances children’s rights and equality for girls. We strive for a just world, working together with children, young people, our supporters and partners.\n" +
          "\n" +
          "Plan is politically and religiously independent.",
        photos: [],
        adminPercentage: 7,
        stats: [],
      },
    },
  ];

  for (const company of companies) {
    if (!(await CompanyService.exists({ orgNr: company.orgNr }))) {
      await CompanyService.insert(company);
      if (company.name === "Redd Barna") {
        await CompanyService.addCategoriesToCompany({ orgNr: company.orgNr }, [
          { name: "Water", weight: -1 },
          { name: "Education", weight: -1 },
          { name: "Female rights", weight: -1 },
        ]);
      }
      if (company.name === "Amnesty") {
        await CompanyService.addCategoriesToCompany({ orgNr: company.orgNr }, [
          { name: "Emergency response", weight: -1 },
          { name: "Education", weight: -1 },
          { name: "Female rights", weight: -1 },
        ]);
      }
      if (company.name === "Unicef") {
        await CompanyService.addCategoriesToCompany({ orgNr: company.orgNr }, [
          { name: "Water", weight: -1 },
          { name: "Education", weight: -1 },
          { name: "Female rights", weight: -1 },
          { name: "Emergency response", weight: -1 },
        ]);
      }
      if (company.name === "Plan") {
        await CompanyService.addCategoriesToCompany({ orgNr: company.orgNr }, [
          { name: "Water", weight: -1 },
          { name: "Education", weight: -1 },
        ]);
      }
    }
  }
}

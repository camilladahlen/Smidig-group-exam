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
        "Redd Barna is a Norwegian charity organization aiming to protect childrens rights, both long term and when in need of emergency aid.<br>",
      type: "non-profit",
      logo: "https://www.reddbarna.no/content/uploads/2021/01/ReddBarna_Logo_Horiz_ColPos_RGB.png",
      viewMoreInfo: {
        extendedInfo:
          "Redd Barna is a Norwegian charity organization aiming to protect childrens rights, both long term and when in need of emergency aid. " +
          "<br>" +
          "Giving kids a good and safe education is Redd Barnas main focus. They focus on kids in low income areas, areas affected by conflict, and other vulnerable kids like minorities, girls and children with disabilities as they are often discriminated against." +
          "&img&" +
          "Despite the progress that has been made throughout the last couple of decades, there is still a lot of work to be done to make sure all kids have acess to a good and safe education.  Our mission is to inspire breakthroughs in the way the world treats children, and to achieve immediate and lasting change in their lives. The situation facing the majority of the worlds’ children is a matter of serious concern. Save the Children Norway has the technical expertise and capacity to deliver results, even more so as we are joining forces with the global Save the Children." +
          "Our advocacy and campaign work addresses the rights of the poorest and most marginalized children and towards Governments to close the opportunity gaps and ensure equitable progress and outcomes for children.<br>" +
          "<br>" +
          "Save the Children fights for children’s right to education, health and enough to eat, and to live in peace and with hope for the future." +
          "<br>" +
          "For more information visit <a href='https://www.reddbarna.no/' target='_blank'>https://www.reddbarna.no/</a>",

        photos: [
          "https://premium.vgc.no/v2/images/0cd048b9-f763-4e22-a92f-3c0b074bfd1e?fit=crop&format=auto&h=1365&w=2048&s=e4bde6800503a96f63eb0bb9c622cfde8a48e342",
          "https://files.nettsteder.regjeringen.no/wpuploads01/blogs.dir/431/files/ninja-forms/5/CH1121727-800x533.jpg",
          "https://shared.cdn.smp.schibsted.com/v2/images/7333f643-4a42-454c-b903-ba8a95ff40f4?fit=crop&h=630&w=1200&s=307c3fd5f9869bab3572d05e1e9958e3448077b2",
        ],
        adminPercentage: 7.4,
        stats: [
          {
            icon: "fa-stethoscope",
            number: "27.9",
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
        "Amnesty International is a global movement of more than 10 million people who take injustice personally. We are campaigning for a world where human rights are enjoyed by all.<br>",
      type: "non-profit",
      logo: "https://amnesty.no/sites/default/files/vedlegg/yellow_logo_digital_use_0.png",
      viewMoreInfo: {
        extendedInfo:
          "Founded in 1961, Amnesty International is a global movement of more than 10 million people in over 150 countries and territories who campaign to end abuses of human rights.<br>" +
          "<br>" +
          "Amnesty is funded by members and people like you. They are independent of any political ideology, economic interest or religion. No government is beyond scrutiny. No situation is beyond hope. <br>" +
          "<br>" +
          "&img&" +
          "Amnesty has among other things been working to ensure a safe education for girls around the world, without fear of being punished. " +
          "We investigate and expose the facts, whenever and wherever abuses happen.<br>" +
          "We lobby governments, and other powerful groups such as companies. Making sure they keep their promises and respect international law.<br> " +
          "<br>" +
          "By telling the powerful stories of the people we work with, we mobilize millions of supporters around the world to campaign for change and to stand in defence of activists on the frontline. <br>" +
          "We support people to claim their rights through education and training. <br>" +
          "<br>" +
          "For more information visit <a href='https://amnesty.no' target='_blank'>https://amnesty.no</a>",
        photos: [
          "https://amnesty.no/sites/default/files/styles/hero_la/public/2018-08/pride_kirkenes.jpg?itok=slouTxVg",
          "https://media.snl.no/media/150273/standard_compressed_NTB_PvSv04Uzx5c.jpg",
          "https://i.wpimg.pl/1200x/filerepo.grupawp.pl/api/v1/display/embed/58ed7d1b-56f4-44e0-a8c6-ed4aa3372c06",
        ],
        adminPercentage: 3.2,
        stats: [
          {
            icon: "fa-solid fa-handcuffs",
            number: "30.000",
            description:
              "norwegian people signed our campaign to release Evelyn Hernandez from 30 years in prison for having a stillborn baby. With your help we managed to release her and many people like her who have been wrongfully convicted.",
          },
        ],
      },
    },
    {
      name: "Unicef",
      orgNr: 3456,
      description:
        "UNICEF works in over 190 countries and territories to save children’s lives, to defend their rights, and to help them fulfil their potential, from early childhood through adolescence. And we never give up.<br>",
      type: "non-profit",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/UNICEF_FLAG.png/640px-UNICEF_FLAG.png",
      viewMoreInfo: {
        extendedInfo:
          "UNICEF works to create lasting change and strengthen the rights for all children. As the worlds largest aid organisation for children, and as an important part of the UN, we have a unique influence in over 190 countries. We fight to save the lives of children, protecting the most vulnerable and build a better future in the most pressured places in the world. <br>" +
          "<br>" +
          "&img&" +
          "A child born from a mother with education has 50% higher chances of survival. Education boosts knowledge about hygiene, nutrition, vaccination and generall health, as well as securing an income for the children in their future. " +
          "UNICEF provides safe spaces and educational materials to help displaced and refugee children who have been forced out of school get back to learning." +
          "Before, during and after humanitarian emergencies, UNICEF is on the ground, bringing lifesaving help and hope to children and families. Non-political and impartial, we are never neutral when it comes to defending children’s rights and safeguarding their lives and futures. " +
          "UNICEF provides more children with clean water, life-saving food and vaccines, education and protection from violence than any other humanitarian organisation." +
          "<br>" +
          "For more information visit <a href='https://unicef.org' target='_blank'>https://unicef.org</a>",
        photos: [
          "https://www.unicef.no/sites/default/files/2020-10/Publikasjoner_UN0298278_hero.jpg",
          "https://unicef.libpx.com/eu-west-1/images-production/uni146415_012e49f7694da9fd_b0a63959ac039105.jpg?format=jpg&quality=75&width=412&height=412&signature=fafef993d9d19b07dec00076b004657d65e335da",
          "https://www.unicef.no/sites/default/files/2020-10/un011310_hero.jpg",
        ],
        adminPercentage: 3.4,
        stats: [
          {
            icon: "fa-graduation-cap",
            number: "43",
            description:
              "million children received education materials through UNICEF’s education programs in 2020",
          },
          {
            icon: "fa-solid fa-venus",
            number: "3.2",
            description:
              "million girls were reached with skills, empowerment and employability training in 2020",
          },
        ],
      },
    },
    {
      name: "Plan",
      orgNr: 4567,
      description:
        "Plan International is an independent development and humanitarian organisation that advances children’s rights and equality for girls. We strive for a just world, working together with children, young people, our supporters and partners.<br>",
      type: "non-profit",
      logo: "https://kommunikasjon.ntb.no/data/images/00030/6ff3894d-f5dc-41b5-ba20-ad444e02f593.jpg/social",
      viewMoreInfo: {
        extendedInfo:
          "Plan Norway is a norwegian aid work foundation, and is a part of Plan International. <br>" +
          "<br>" +
          "Founded in 1937, Plan International is a development and humanitarian organisation that advances children’s rights and equality for girls. We strive for a just world, working together with children, young people, our supporters and partners.<br>" +
          "<br>" +
          "&img&" +
          "We see clear links between fulfilling children’s rights, achieving gender equality and ending child poverty. Every girl and boy has the right to be healthy, educated, protected, valued and respected in their own community and beyond. <br>" +
          "<br>" +
          "We support these rights from when children are born to when they reach adulthood. We work to ensure that girls and boys know their rights, and have the skills, knowledge and confidence to fulfil them. This approach inspires and empowers children and communities to create long-lasting change.<br>" +
          "<br>" +
          "Girls have the power to change the world. Our ambition is to work beside them, and together we take action so 100 million girls learn, lead, decide and thrive.<br>" +
          "<br>" +
          "For more information visit <a href='https://www.plan-international.org/' target='_blank'>https://www.plan-international.org/</a>",
        photos: [
          "https://plan.fi/wp-content/uploads/2021/06/Plan-international-banner.jpg",
          "https://plan-international.org/tachyon/2022/01/UGA-school.jpg?fit=1024%2C1024",
          "https://planinternational.imgix.net/uploaded/2019/01/201611-UGA-273.jpg?w=768&h=369&fit=crop&crop=faces&auto=compress,format",
        ],
        adminPercentage: 7,
        stats: [
          {
            icon: "fa-solid fa-venus",
            number: "5.7",
            description:
              "million girls were reached in protection against violence in 2020",
          },
          {
            icon: "fa-graduation-cap",
            number: "6.1",
            description: "million girls got better access to education in 2020",
          },
        ],
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
    } else {
      await CompanyService.update({ orgNr: company.orgNr }, company);
    }
  }
}

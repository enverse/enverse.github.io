type ReferalData = Array<{
  referrer: {
    firstName: string;
    lastName: string;
    position: string;
    company: { name: string; logoUrl: string };
  };
  referral: {
    title: string;
    referralText: string;
  };
  project?: {
    appLogoUrl: string;
    projectUrl: string;
  };
}>;

const data: ReferalData = [
  {
    referrer: {
      firstName: "Charlotte",
      lastName: "Hallvist",
      position: "Director of Communications",
      company: {
        name: "UNOPS Iraq center",
        logoUrl: "/assets/image/unops-referral_72x72.webp",
      },
    },
    referral: {
      title: "CTO-as-a-service",
      referralText:
        "Enverse Labs came on board to support us with the development of our software which helps <b>displaced populations</b> in Iraq access <b>life-saving information about the humanitarian response</b>. Among other things, they conducted an <b>extensive analysis of our existing software and codebase</b> to help identify pain points and much-needed upgrades. The team was professional, responsive, and very knowledgeable and <b>we would happily work with them again.</b>",
    },
  },
  {
    referrer: {
      firstName: "Seira",
      lastName: "Yun",
      position: "Founder & CEO",
      company: {
        name: "Socious",
        logoUrl: "/assets/image/socious-ceo_72x72.webp",
      },
    },
    referral: {
      title: "Landing page and CTO-as-a-service",
      referralText:
        "Helped with design of landing page and offered support while communicating with the external developement team of the Socious App",
    },
    project: {
      appLogoUrl: "/assets/image/socious-app.png",
      projectUrl: "https://socious.io/",
    },
  },
  {
    referrer: {
      firstName: "Kévin",
      lastName: "Eghriagi",
      position: "Founder & CEO",
      company: {
        name: "Hérétique",
        logoUrl: "/assets/image/heretique-ceo_72x72.webp",
      },
    },
    referral: {
      title: "Dévelopement de dérive",
      referralText:
        "<b>Lorem ipsum dolor sit amet</b>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. Ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr !",
    },
    project: {
      appLogoUrl: "/assets/image/derive-app.png",
      projectUrl: "https://derive.today",
    },
  },
];

export default data;

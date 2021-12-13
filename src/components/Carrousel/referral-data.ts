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
      lastName: "Hallqvist",
      position: "Director of Communications",
      company: {
        name: "UNOPS Iraq center",
        logoUrl: "/assets/image/unops-referral_72x72.webp",
      },
    },
    referral: {
      title: "Software for displaced populations in Iraq",
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
      title: "Landing page and UX design for Socious admin",
      referralText:
        "Jesse and Chris are talented professionals who really care about <b>social and environmental impact</b>. They are also fun to work with! If you are working on a social/environmental project, they will be great partners because they <b>share your mission.</b>",
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
      referralText: "<b>TBD</b>",
    },
    project: {
      appLogoUrl: "/assets/image/derive-app.png",
      projectUrl: "https://derive.today",
    },
  },
];

export default data;

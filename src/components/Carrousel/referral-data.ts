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
    appLogoUrl?: string;
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
      title: "A new face for the leading social impact app",
      referralText:
        "Enverse are talented professionals who really care about <b>social and environmental impact</b>. They are also fun to work with! If you are working on a social/environmental project, they will be great partners because they <b>share your mission.</b>",
    },
    project: {
      appLogoUrl: "/assets/image/socious-app.png",
      projectUrl: "https://socious.io/",
    },
  },
  {
    referrer: {
      firstName: "Kévin",
      lastName: "Echraghi",
      position: "Founder & CEO",
      company: {
        name: "Hérétique",
        logoUrl: "/assets/image/heretique-ceo_optimized.jpg",
      },
    },
    referral: {
      title: "Dévelopement de Dérive",
      referralText:
        "Enverse are helping us build the next version of <b>Dérive</b>. Thanks to their skills in development, <b>eco-conception and project management<b>, they allow us to continue developing a lightweight and pertinent application. Their strength of proposal, their listening skills, their rigor and their good mood make them ideal partners to develop our projects in confidence and in good intelligence.",
    },
    project: {
      projectUrl: "https://derive.today",
    },
  },
];

export default data;

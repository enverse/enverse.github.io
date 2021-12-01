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
      position: "Director of Operations",
      company: { name: "UNOPS", logoUrl: "/assets/image/unops-logo.jpg" },
    },
    referral: {
      title: "CTO-as-a-service",
      referralText:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. Ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr !",
    },
  },
  {
    referrer: {
      firstName: "Seira",
      lastName: "Yun",
      position: "Founder & CEO",
      company: { name: "Socious", logoUrl: "/assets/image/socious-logo.png" },
    },
    referral: {
      title: "CTO-as-a-service for Socious",
      referralText:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. Ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr !",
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
        logoUrl: "/assets/image/heretique-logo.png",
      },
    },
    referral: {
      title: "Dévelopement de dérive",
      referralText:
        "<b>Lorem<b> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. Ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr !",
    },
    project: {
      appLogoUrl: "/assets/image/derive-app.png",
      projectUrl: "https://derive.today",
    },
  },
];

export default data;

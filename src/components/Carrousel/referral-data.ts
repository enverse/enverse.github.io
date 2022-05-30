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
      firstName: 'Kévin',
      lastName: 'Echraghi',
      position: 'Founder & CEO',
      company: {
        name: 'Hérétique',
        logoUrl: '/static/assets/image/heretique-ceo_optimized.jpg'
      }
    },
    referral: {
      title: 'A light and powerful app for Dérive',
      referralText:
        'Enverse are helping us build the next version of Dérive. Thanks to their skills in development, eco-conception and project management, they allow us to continue developing a lightweight and pertinent application. Their strength of proposal, their listening skills, their rigor and their good mood make them ideal partners to develop our projects in confidence and in good intelligence.'
    },
    project: {
      appLogoUrl: '/static/assets/image/project-image-derive.webp',
      projectUrl: 'https://baladesentimentale.fr/'
    }
  },
  {
    referrer: {
      firstName: 'Charlotte',
      lastName: 'Hallqvist',
      position: 'Director of Communications',
      company: {
        name: 'UNOPS',
        logoUrl: '/static/assets/image/unops-referral_72x72.webp'
      }
    },
    referral: {
      title: 'Software for displaced populations in Iraq',
      referralText:
        'Enverse Labs came on board to support us with the development of our software which helps displaced populations in Iraq access life-saving information about the humanitarian response. Among other things, they conducted an extensive analysis of our existing software and codebase to help identify pain points and much-needed upgrades. The team was professional, responsive, and very knowledgeable and we would happily work with them again.'
    }
  },
  {
    referrer: {
      firstName: 'Seira',
      lastName: 'Yun',
      position: 'Founder & CEO',
      company: {
        name: 'Socious',
        logoUrl: '/static/assets/image/socious-ceo_72x72.webp'
      }
    },
    referral: {
      title: 'A new face for the leading social impact app',
      referralText:
        'Enverse are talented professionals who really care about social and environmental impact. They are also fun to work with! If you are working on a social/environmental project, they will be great partners because they share your mission.'
    },
    project: {
      appLogoUrl: '/static/assets/image/socious-app_221x393.png',
      projectUrl: 'https://socious.io/'
    }
  }
];

export default data;

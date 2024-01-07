export type TitleItem = {
  title: string;
};

export type HeroItem = {
  _id: number;
  title: string;
  img: string;
  contents: {
    name: string;
    subtitle: string;
    info: string;
  };
};

export type aboutItem = {
  _id: number;
  title: string;
  img: string;
  contents: {
    paragraphOne: string;
    paragraphTwo: string;
    paragraphThree: string;
    paragraphFour: string;
    paragraphFive: string;
    paragraphSix: string;
  };
};

export type ExperienceItem = {
  _id: number;
  title: string;
  company: string;
  date: string;
  info: string;
};

export type CaseStudyItem = {
  _id: number;
  title: string;
  img: string;
  meta: {
    name: string;
    info: string;
    tech: string[];
    url: string;
    repo: string;
  };
  contents: {
    sectionOne: {
      img: string;
      intro: string;
      features: [
        {
          name: string;
          info: string;
        }
      ];
    };
    sectionTwo: {
      img: string;
      features: [
        {
          name: string;
          info: string;
        },
        {
          name: string;
          info: string;
        }
      ];
    };
    sectionThree: {
      img: string;
      features: [
        {
          name: string;
          info: string;
        },
        {
          name: string;
          info: string;
        }
      ];
    };
  };
};

export type ProjectItem = {
  _id: number;
  type: string;
  name: string;
  img: string;
  info: string;
  tech: [string];
  url: string;
  repo: string;
};

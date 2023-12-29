export type TitleItem = {
  title: string;
};

export type ExperienceItem = {
  _id: number;
  title: string;
  company: string;
  date: string;
  info: string;
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

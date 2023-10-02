export type Project = {
  title: string;
  images: ProjectImage[];
  description: string;
  url: { source: string; live: string };
  techs: { name: string; color: string; background: string }[];
};

export type ProjectImage = { alt: string; src: string };

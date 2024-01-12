export type Project = {
  en: {
    title: string;
    images: {
      alt: string;
      src: string;
    }[];
    description: string;
    links: {
      source: string;
      live: string;
    };
    url: {
      source: string;
      live: string;
    };
    techs: {
      color: string;
      name: string;
      background: string;
    }[];
  }[];
  fr: {
    title: string;
    images: {
      alt: string;
      src: string;
    }[];
    description: string;
    url: {
      source: string;
      live: string;
    };
    links: {
      source: string;
      live: string;
    };
    techs: {
      color: string;
      name: string;
      background: string;
    }[];
  }[];
};

export type ProjectImage = { alt: string; src: string };

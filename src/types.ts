export interface Link {
  SourceCode: string;
  websiteLink: string;
}

export interface ProjectProps {
  image: string;
  description: string;
  links?: Link[];
}

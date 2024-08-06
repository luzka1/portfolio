export interface IAppContext {
  dataProject: IProject[];
}
export interface IProject {
  img: any;
  name: string;
  tiny_description: string;
  full_description?: string;
  git_link?: string;
  proj_link?: string;
}

export interface IItemExperience {
  id: number;
  description: string;
}

export interface ITextsHeader {
  name: string;
  linkTo: string;
}

export interface ISection {
  title?: string;
  subtitle?: string;
  text?: string;
  email?: string;
  subject?: string;
  message?: string;
  buttons?: string[] | string;
  button?: string;
  itemsExp?: IItemExperience[];
}

export interface IBanner {
  subtitle: string[];
  buttons: string[];
  scroll: string;
}

export interface IFooter {
  texts: ITextsHeader[];
  rights: string;
}

export interface IPageProjects {
  title: string;
  subtitle: string;
}

export interface IPageProject {
  title: string;
  subtitle: string;
}

export interface IHeader {
  texts: ITextsHeader[];
}

export interface IData {
  header: IHeader;
  banner: IBanner;
  section1: ISection;
  section2: ISection;
  section3: ISection;
  section4: ISection;
  footer: IFooter;
  projectsPage: IPageProjects;
  projectPage: IPageProject;
}

export interface ITextsContext {
  data: IData;
  setData: (value: IData) => void;
}

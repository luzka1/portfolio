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

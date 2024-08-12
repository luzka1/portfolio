import { createContext, useEffect, useState } from "react";
import Parse from "parse";
import { IProjectsContext, ProjectProps } from "../interfaces/Project.interface";

const ProjectsContext = createContext<IProjectsContext>({} as IProjectsContext);

export function ProjectsProvider(props: any) {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  const fetchProjects = async () => {
    const Project = Parse.Object.extend("project"); 
    const query = new Parse.Query(Project);

    try {
      const results = await query.find();
      const projectsData = results.map((project) => ({
        id: project.id,
        img: project.get("img"),
        name: project.get("name"),
        tiny_description: project.get("tiny_description"),
        full_description: project.get("full_description"),
        proj_link: project.get("proj_link"),
        git_link: project.get("git_link"),
        techs: project.get("techs") || [],
      }));
      setProjects(projectsData); 
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    }
  };

  
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
}

export default ProjectsContext;

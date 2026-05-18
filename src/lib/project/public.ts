import { projectRepository } from "../../repositories/project";

export const findAllPosts = async () => {
  return await projectRepository.findAll();
};

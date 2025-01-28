import { Route, Routes } from "react-router-dom";
import { Home, ProjectsPage, Error, ProjectPage } from "../pages";

export const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
    </>
  );
};

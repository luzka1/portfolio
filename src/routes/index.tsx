import { Route, Routes, useLocation } from "react-router-dom";
import { Home, ProjectsPage, Error, ProjectPage } from "../pages";


export const Rotas = () => {
  const location = useLocation();

  const hiddenComponents =
    location.pathname === "/error";

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

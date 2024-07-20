import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages";

export const Rotas = () => {
  const location = useLocation();

  const hiddenComponents =
    location.pathname === "/error";

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

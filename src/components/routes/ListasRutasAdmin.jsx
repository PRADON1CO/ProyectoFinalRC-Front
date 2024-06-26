import { Routes, Route } from "react-router-dom";
import Administrador from "../pages/Administrador";

const ListasRutasAdmin = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Administrador></Administrador>}
      ></Route>
    </Routes>
  );
};

export default ListasRutasAdmin;

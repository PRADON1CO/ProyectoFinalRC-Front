import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Inicio from "./components/pages/Inicio";
import DetalleDelPlan from "./components/pages/DetalleDelPlan";
import Menu from "./components/common/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import Contacto from "./components/pages/Contacto";
import Administrador from "./components/pages/Administrador";
import FormularioClase from "./components/clases/FormularioClase";
import { useState } from "react";
import ListasRutasAdmin from "./components/routes/ListasRutasAdmin";
import RutasPotegidas from "./components/routes/RutasPotegidas";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuariofitfactory")) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
  return (
    <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        <Route
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route path="/administrador/creaar" element={<FormularioClase></FormularioClase>}></Route>
        <Route path="/administrador/editar" element={<FormularioClase></FormularioClase>}></Route>

        <Route path="*" element={<Error404></Error404>}></Route>
        <Route
          path="/administrador/formulario"
          element={<FormularioClase></FormularioClase>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

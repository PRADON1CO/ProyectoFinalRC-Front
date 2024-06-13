import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Inicio from "./components/pages/Inicio";
import DetalleDelPlan from "./components/pages/DetalleDelPlan";
import FormularioPlanes from "./components/pages/Planes/FormularioPlanes";

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element = {<FormularioPlanes></FormularioPlanes>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

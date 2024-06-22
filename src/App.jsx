import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Inicio from "./components/pages/Inicio";
import DetalleDelPlan from "./components/pages/DetalleDelPlan";
import Menu from "./components/common/Menu"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/common/Footer';
import Error404 from './components/pages/Error404';
import Login from './components/pages/Login';
import Contacto from './components/pages/Contacto';
import Administrador from './components/pages/Administrador';



function App() {

  return (
      <BrowserRouter>
      <Menu></Menu>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/contacto' element={<Contacto></Contacto>}></Route>
          <Route path='/administrador' element={<Administrador></Administrador>}></Route>
          <Route path='*' element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
  )
}

export default App

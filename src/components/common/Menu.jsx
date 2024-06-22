import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logoRecortado.png";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bgVerde">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" className="imgLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <NavLink href="#" to="/" className="nav-link fontWeight">Inicio</NavLink>
            <NavLink href="#" to="/administrador" className="nav-link fontWeight">Administrador</NavLink>
            <NavLink href="#" to="/contacto" className="nav-link fontWeight">Contacto</NavLink>
            <NavLink href="#" to="" className="nav-link fontWeight d-lg-none d-md-none">Nosotros</NavLink>
            <NavLink href="#" to="" className="nav-link fontWeight">Productos</NavLink>
            <NavLink href="#" to="/login" className="nav-link fontWeight">Login</NavLink>
          </Nav>
          <div className="navbar">
            <p><i className="bi bi-cloud-hail-fill"></i> 9°c</p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logoRecortado.png";

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
            <Nav.Link href="#" className="nav-link fontWeight">Inicio</Nav.Link>
            <Nav.Link href="#" className="nav-link fontWeight">Administrador</Nav.Link>
            <Nav.Link href="#" className="nav-link fontWeight">Contacto</Nav.Link>
            <Nav.Link href="#" className="nav-link fontWeight d-lg-none d-md-none">Nosotros</Nav.Link>
            <Nav.Link href="#" className="nav-link fontWeight">Login</Nav.Link>
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

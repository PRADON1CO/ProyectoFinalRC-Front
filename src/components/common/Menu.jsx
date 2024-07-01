import { Container, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logoRecortado.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {

  const navegacion = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('usuariofitfactory');
    setUsuarioLogueado("");
    navegacion("/");
  };
  return (
    <Navbar expand="lg" className="bgVerde">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="Logo" className="imgLogo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-link fontWeight">
              Inicio
            </NavLink>
            {
            usuarioLogueado.length > 0 ? (
              <>
                <NavLink
                
                  to="/administrador"
                  className="nav-link fontWeight"
                >
                  Administrador
                </NavLink>
                <Button
                  variant="link"
                  className="nav-link fontWeight"
                  onClick={logout}
                >
                  logout
                </Button>
              </>
            ) : (
              <>
                <NavLink
                  
                  to="/contacto"
                  className="nav-link fontWeight"
                >
                  Contacto
                </NavLink>
                <NavLink
                  
                  to="/nosotros"
                  className="nav-link fontWeight d-lg-none d-md-none"
                >
                  Nosotros
                </NavLink>
                <NavLink to="*" className="nav-link fontWeight">
                  Productos
                </NavLink>
                <NavLink to="/login" className="nav-link fontWeight">
                  Login
                </NavLink>
              </>
            )}
          </Nav>
          <div className="navbar">
            <p>
              <i className="bi bi-cloud-hail-fill"></i> 9°c
            </p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

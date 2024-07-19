import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import logo from "../../assets/logoRecortado.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container fluid className="pt-1 mt-auto bgVerde">
        <Row>
          <Col md={12} lg={3} className="text-center">
            <img src={logo} alt="" className="" />
          </Col>
          <Col className="d-none d-md-block text-white">
            <h4 className="text-white">Opciones</h4>
            <Link className="text-decoration-none link-dark text-white" to="/">
              <p>Inicio</p>
            </Link>
            <Link
              className="text-decoration-none link-dark text-white"
              to="/contacto"
            >
              <p>Contacto</p>
            </Link>
            <Link
              className="text-decoration-none link-dark text-white"
              to="/nosotros"
            >
              <p>Nosotros</p>
            </Link>
            <Link
              className="text-decoration-none link-dark text-white"
              to="/login"
            >
              <p>Login</p>
            </Link>
          </Col>
          <Col xs={12} md={4} lg={3} className="">
            <h4 className="text-white">Información</h4>
            <Link className="text-decoration-none link-dark text-white" to="*">
              <p>Políticas de privacidad</p>
            </Link>
            <Link className="text-decoration-none link-dark text-white" to="*">
              <p>Legal</p>
            </Link>
            <Link className="text-decoration-none link-dark text-white" to="*">
              <p>Promociones</p>
            </Link>
            <Link className="text-decoration-none link-dark text-white" to="*">
              <p>Horarios de atención</p>
            </Link>
          </Col>
          <Col xs={12} md={4} lg={3} className="">
            <h4 className="text-white">Contacto</h4>
            <div>
              <div>
                <p className="text-white link-dark">
                  <i className="bi bi-whatsapp"></i> 123-1234567
                </p>
                <p className="text-white link-dark">
                  <i className="bi bi-instagram"></i> FitFactory
                </p>
                <p className="text-white link-dark">
                  <i className="bi bi-facebook"></i> FitFactory
                </p>
                <p className="text-white link-dark">
                  <i className="bi bi-geo-alt-fill"></i> Gral. Paz 576
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bg-dark py-1">
        <p className="text-center  text-white">
          &copy; FitFactory . Todos los derechos reservados. 2024.
        </p>
      </div>
    </>
  );
};

export default Footer;

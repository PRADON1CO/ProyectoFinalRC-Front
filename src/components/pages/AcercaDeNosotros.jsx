import { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import brian from "../../assets/brian.png";
import natashav from "../../assets/natashav.jpg";
import esteban from "../../assets/esteban.png";
const AcercaDeNosotros = () => {
  return (
    <section className="container">
      <h2 className="text-center mt-5">Sobre Nosotros</h2>
      <hr />
      <p>
        En Fit Factory, no solo te ofrecemos un lugar para hacer ejercicio, sino
        un ambiente donde cada paso que das te acerca más a tu mejor versión.
        Desde que abrimos nuestras puertas, nos hemos dedicado a ser más que un
        gimnasio: somos una comunidad comprometida con tu bienestar integral.{" "}
        <br />
        En nuestras instalaciones modernas y equipadas con la última tecnología,
        encontrarás todo lo que necesitas para alcanzar tus metas fitness. Desde
        máquinas de cardio de última generación hasta una amplia gama de pesos
        libres y equipos de entrenamiento funcional, cada rincón de Fit Factory
        está diseñado para maximizar tu rendimiento y comodidad.Pero más allá de
        las pesas y las máquinas, en Fit Factory creemos en el poder de la
        motivación personalizada. Nuestros entrenadores certificados no solo te
        guiarán en cada ejercicio, sino que también te inspirarán a superar tus
        límites. Entendemos que cada persona es única, por lo que adaptamos
        nuestros programas para satisfacer tus necesidades individuales y
        objetivos específicos.
      </p>
      <hr />
      <h2 className="text-center mt-5">Nuestro Local</h2>
      <hr />
      <section className="container">
        <article>
          <Row>
            <Col md={4} sm={12} className="mb-3">
              <Card>
                <img
                  src="https://images.pexels.com/photos/19132571/pexels-photo-19132571/free-photo-of-hombre-deporte-en-pie-de-pie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="imagen de local 1"
                  className="w-100 rounded-4"
                />
              </Card>
            </Col>
            <Col md={4} sm={12} className="mb-3">
              <Card>
                <img
                  src="https://images.pexels.com/photos/19254708/pexels-photo-19254708/free-photo-of-hombre-deporte-fitnes-fitness.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="imagen de local 2"
                  className="w-100 rounded-4"
                />
              </Card>
            </Col>
            <Col md={4} sm={12} className="mb-3">
              <Card>
                <img
                  src="https://images.pexels.com/photos/19132621/pexels-photo-19132621/free-photo-of-mujer-deporte-atleta-ropa-de-deporte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="imagen de local 3"
                  className="w-100 rounded-4"
                />
              </Card>
            </Col>
          </Row>
        </article>
        <article className="mt-5">
          <h2 className="text-center mb-3">Nuestro Equipo</h2>
          <hr />
          <Row>
            <Col md={4} sm={12} className="mb-3">
              <Card className="h-100">
                <div className="card-img-container">
                  <Card.Img variant="top" src={brian} alt="brian prado" />
                </div>
                <Card.Body>
                  <Card.Title className="text-center">Brian Nicolas Prado</Card.Title>
                  <div className="d-flex justify-content-center">
                  <a href="https://www.linkedin.com/in/brian-nicol%C3%A1s-prado-83553a270/"><i class="bi bi-linkedin text-dark tamanioIconosNosotros px-2 "></i></a>
                  <a href="https://github.com/PRADON1CO"><i class="bi bi-github text-dark tamanioIconosNosotros px-2"></i></a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12} className="mb-3">
              <Card className="h-100">
                <div className="card-img-container">
                  <Card.Img variant="top" src={natashav} alt="Valdez Natasha" />
                </div>
                <Card.Body>
                  <Card.Title>Natasha Valdez</Card.Title>
                  <Card.Text>Desarrollador FullStack - @RollingCode</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12} className="mb-3">
              <Card className="h-100">
                <div className="card-img-container">
                  <Card.Img variant="top" src={esteban} alt="Esteban Lopez" />
                </div>
                <Card.Body>
                  <Card.Title>Esteban Lopez</Card.Title>
                  <Card.Text>Desarrollador FullStack - @RollingCode</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </article>
      </section>
    </section>
  );
};

export default AcercaDeNosotros;

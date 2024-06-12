import { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";


const AcercaDeNosotros = () => {
  return (
    <Container className="my-3 mainSection">
      <h1>Acerca de FitFactory</h1>

      {/* Sección del gimnasio */}
      <section className="mb-5">
        <h2 className="mt-5">Sobre FitFactory</h2>
        <p>
          FitFactory es un gimnasio dedicado a mejorar la salud y el bienestar de nuestros
          miembros. Ofrecemos una variedad de clases, equipo de última generación, y un
          ambiente amigable y motivador.
        </p>
      </section>

      {/* Sección de nuestros profesores */}
      <section className="mb-5">
        <h2>Nuestros Profesores</h2>
        <Row>
          <Col md={4} sm={6} xs={12} className="mb-3">
            <Card className="h-100">
              <div className="card-img-container">
                <Card.Img variant="top" src="https://images.pexels.com/photos/28080/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = 'Maria Lopez' />
              </div>
              <Card.Body>
                <Card.Title>María López</Card.Title>
                <Card.Text>
                  Experta en CrossFit y entrenamiento funcional.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6} xs={12} className="mb-3">
            <Card className="h-100">
              <div className="card-img-container">
                <Card.Img variant="top" src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg" alt = 'José Martínez' />
              </div>
              <Card.Body>
                <Card.Title>José Martínez</Card.Title>
                <Card.Text>
                  Especialista en musculación y desarrollo de fuerza.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6} xs={12} className="mb-3">
            <Card className="h-100">
              <div className="card-img-container">
                <Card.Img variant="top" src="https://images.pexels.com/photos/4753993/pexels-photo-4753993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = 'Ana Fernández'/>
              </div>
              <Card.Body>
                <Card.Title>Ana Fernández</Card.Title>
                <Card.Text>
                  Instructora de Taebo y bienestar integral.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Sección de nuestro equipo de trabajo */}
      <section className="mb-5">
        <h2>Nuestro Equipo de Trabajo</h2>
        <Row>
          <Col md={4} sm={6} xs={12} className="mb-3">
            <Card className="h-100">
              <div className="card-img-container">
                <Card.Img variant="top" src="https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg" alt = 'Laura García' />
              </div>
              <Card.Body>
                <Card.Title>Laura García</Card.Title>
                <Card.Text>
                  Recepcionista y atención al cliente.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6} xs={12} className="mb-3">
            <Card className="h-100">
              <div className="card-img-container">
                <Card.Img variant="top" src="https://images.pexels.com/photos/25365249/pexels-photo-25365249/free-photo-of-foto-de-chico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = 'Carlos Sánchez' />
              </div>
              <Card.Body>
                <Card.Title>Carlos Sánchez</Card.Title>
                <Card.Text>
                  Coordinador de eventos y actividades.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6} xs={12} className="mb-3">
            <Card className="h-100">
              <div className="card-img-container">
                <Card.Img variant="top" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = 'Lucía Rodríguez' />
              </div>
              <Card.Body>
                <Card.Title>Lucía Rodríguez</Card.Title>
                <Card.Text>
                  Nutricionista y consultora de salud.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Área de fotos tipo banner */}
      <section className="mb-5">
        <h2>Galería de Fotos</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 banner-img"
              src="https://images.pexels.com/photos/866023/pexels-photo-866023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Entrenamiento en grupo"
            />
            <Carousel.Caption>
              <h3>Entrenamiento en grupo</h3>
              <p>Motivación y trabajo en equipo.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 banner-img"
              src="https://images.pexels.com/photos/19801353/pexels-photo-19801353/free-photo-of-oscuro-deporte-gimnasio-pesas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="mancuernas"
            />
            <Carousel.Caption>
              <h3>Equipos de última generación</h3>
              <p>Máquinas modernas para un entrenamiento efectivo.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 banner-img"
              src="https://images.pexels.com/photos/4944958/pexels-photo-4944958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Entrenamiento"
            />
            <Carousel.Caption>
              <h3>Clases variadas</h3>
              <p>Desde yoga hasta entrenamiento de alta intensidad.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Área de los desarrolladores */}
      <section>
        <h2>Desarrolladores del Sistema</h2>
        <Row>
          <Col md={6} sm={12} className="mb-3">
            <Card className="h-100">
              <div className="card-img-container">
                <Card.Img variant="top" 
                  src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt ='brian prado'/>
              </div>
              <Card.Body>
                <Card.Title>Brian Nicolas Prado</Card.Title>
                <Card.Text>
                  Desarrollador FullStack - @RollingCode
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={12} className="mb-3">
            <Card className="h-100">
            <div className="card-img-container">
                <Card.Img variant="top" 
                  src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = 'Esteban Lopez' />
              </div>
              <Card.Body>
                <Card.Title>Esteban Lopez</Card.Title>
                <Card.Text>
                Desarrollador FullStack - @RollingCode
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default AcercaDeNosotros;

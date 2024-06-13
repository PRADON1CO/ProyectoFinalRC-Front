import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Carousel } from 'react-bootstrap';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormularioInscripcion = () => {
  const [form, setForm] = useState({
    nombreSocio: '',
    apellidoSocio: '',
    telefonoSocio: '',
    emailSocio: '',
    planSolicitado: '',
    notasSocio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', form);
    Swal.fire({
      title: 'Solicitud enviada',
      text: `Gracias por tu interés, ${form.nombreSocio}. Nos pondremos en contacto contigo pronto.`,
      icon: 'success'
    });
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center">Formulario de Inscripción - FitFactory</h1>

      <Carousel className="mb-5 carousel-custom">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/669577/pexels-photo-669577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Producto de suplemento 1"
          />
          <Carousel.Caption>
            <h3>¡Descuento en suplementos!</h3>
            <p>Inscríbete hoy y obtén descuentos en productos seleccionados.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/932048/pexels-photo-932048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Producto de suplemento 2"
          />
          <Carousel.Caption>
            <h3>¡Descuento en suplementos!</h3>
            <p>Inscríbete hoy y obtén descuentos en productos seleccionados.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2388626/pexels-photo-2388626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Producto de suplemento 3"
          />
          <Carousel.Caption>
            <h3>¡Descuento en suplementos!</h3>
            <p>Inscríbete hoy y obtén descuentos en productos seleccionados.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formNombreSocio">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombreSocio"
                value={form.nombreSocio}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formApellidoSocio">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="apellidoSocio"
                value={form.apellidoSocio}
                onChange={handleChange}
                placeholder="Ingresa tu apellido"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formTelefonoSocio" className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            name="telefonoSocio"
            value={form.telefonoSocio}
            onChange={handleChange}
            placeholder="Ingresa tu teléfono"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmailSocio" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="emailSocio"
            value={form.emailSocio}
            onChange={handleChange}
            placeholder="Ingresa tu email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPlanSolicitado" className="mb-3">
          <Form.Label>Plan Solicitado</Form.Label>
          <Form.Control
            as="select"
            name="planSolicitado"
            value={form.planSolicitado}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un plan</option>
            <option value="Plan solo musculacion">Plan solo musculación</option>
            <option value="Plan solo clases">Plan solo clases</option>
            <option value="Plan Full">Plan Full</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formNotasSocio" className="mb-4">
          <Form.Label>Notas</Form.Label>
          <Form.Control
            as="textarea"
            name="notasSocio"
            value={form.notasSocio}
            onChange={handleChange}
            placeholder="Cuéntanos sobre ti y tus objetivos"
            rows={4}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Enviar solicitud de inscripción
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormularioInscripcion;

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../../styles/contacto.css';

const Contacto = () => {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeMensaje = (e) => {
    setMensaje(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías añadir la lógica para enviar el formulario, por ejemplo, usando una API o un servicio de correo electrónico
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);
    // Limpia los campos después del envío si es necesario
    setEmail('');
    setMensaje('');
  };

  return (
    <>
      <section className="bannerContact d-flex justify-content-center align-items-center bannerContacto">
        <div className=""></div>
          <div className="mt-3 mt-md-0 text-content">
            <p className="mb-0 fw-bold text-center">
              Contáctanos
            </p>
            <h1 className="text-center">¿Dónde estamos?</h1>
          </div>
      </section>
      <section className='bg-body-secondary'> 
        <div className="mt-3 w-100 d-flex flex-column align-items-center my-4 gap-3 gap-md-2 text-center">
          <p>
            <i className="fa-solid fa-location-dot fs-2 me-2 "></i>
            General Paz 576, San Miguel de Tucumán, Tucumán
          </p>
          <p title="WhatsApp">
            <i className="bi bi-whatsapp"></i>
            123-1234567
          </p>
        </div>
        <article>
          <div className="mb-4">
            <div className=" w-100 d-flex align-items-center justify-content-center container">
              <iframe
                className="rounded-3"
                width="600" 
                height="450" 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Gral.%20Paz%20576,%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n,%20Tucum%C3%A1n+(Ambiente%20Bohemio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </article>
        <div className="d-flex justify-content-center my-5 gap-2">
          <button to="*" target="_blank" title="facebook" className='border-0 tamanioIconos bg-body-secondary'>
          <i className="bi bi-facebook"></i>
          </button>
          <button to="*" target="_blank" title="instagram" className='border-0 tamanioIconos bg-body-secondary'>
            <i className="bi bi-instagram"></i>
          </button>
          <button to="*" target="_blank" title="twitter" className='border-0 tamanioIconos bg-body-secondary'>
            <i className="bi bi-twitter-x"></i>
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <Form
            className="text-center formContact mb-4"
            method="POST"
            action={`https://formsubmit.co/brunomadozzo@gmail.com`}
            onSubmit={handleSubmit}
          >
            <h2 className="mt-3 mb-4">Contáctate con nosotros</h2>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
              <Form.Label className="fw-bold mt-2">Email:</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="email"
                required
                minLength={3}
                maxLength={265}
                pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"
                value={email}
                onChange={handleChangeEmail}
              />
            </Form.Group>
            <Form.Group className="text-start" controlId="formBasicmessage">
              <Form.Label className="fw-bold">Mensaje:</Form.Label>
              <Form.Control
                name="mensaje"
                as="textarea"
                placeholder="Escribe un mensaje"
                className="textareaContact"
                required
                minLength={10}
                maxLength={350}
                value={mensaje}
                onChange={handleChangeMensaje}
              />
            </Form.Group>
            <Form.Control
              type="text"
              hidden
              id="inputNext"
              name="_next"
              value="https://ambiente-bohemio-restaurante.netlify.app/contacto"
              readOnly
            />
            <Form.Control
              type="text"
              hidden
              name="_subject"
              value=" *MENSAJE* - AMBIENTE BOHEMIO"
              readOnly
            />
            <Form.Control
              type="text"
              hidden
              name="_autoresponse"
              value="Gracias por comunicarte con nosotros! En breve responderemos tu mensaje - Ambiente Bohemio"
              readOnly
            />
            <div className="text-end mt-3 d-flex justify-content-center">
              <Button type="submit" className="px-5 bgVerde border-0">
                Enviar
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Contacto;

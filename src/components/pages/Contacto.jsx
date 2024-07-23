import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../../styles/contacto.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (email) => {
    console.log("enviando");
  };

  const alerta = ()=>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "En este momento no se puede contactar con nosotros!",
    });
  }

  return (
    <>
      <section className="bannerContact d-flex justify-content-center align-items-center bannerContacto">
        <div className=""></div>
        <div className="mt-3 mt-md-0 text-content">
          <p className="mb-0 fw-bold text-center">Contáctanos</p>
          <h1 className="text-center">¿Dónde estamos?</h1>
        </div>
      </section>
      <section className="bg-body-secondary">
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
          <Link
            to="*"
            title="facebook"
            className="border-0 tamanioIconos bg-body-secondary"
          >
            <i className="bi bi-facebook"></i>
          </Link>
          <Link
            to="*"
            title="instagram"
            className="border-0 tamanioIconos bg-body-secondary"
          >
            <i className="bi bi-instagram"></i>
          </Link>
          <Link
            to="*"
            title="twitter"
            className="border-0 tamanioIconos bg-body-secondary"
          >
            <i className="bi bi-twitter-x"></i>
          </Link>
        </div>
        <div className="d-flex justify-content-center">
          <Form
            className="text-center formContact mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="mt-3 mb-4">Contáctate con nosotros</h2>
            <Form.Group className="mb-3 text-start" controlId="fomBasicEmail">
              <Form.Label className="fw-bold">Correo electronico:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: nicolas@mail.com"
                className="bg-white"
                {...register("email", {
                  required: "El correo es obligatorio",
                  minLength: {
                    value: 4,
                    message: "El email debe contener al menos 4 caracteres",
                  },
                  maxLength: {
                    value: 250,
                    message:
                      "El email debe contener como máximo 250 caracteres",
                  },
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El correo debe ser un email valido Ej: nombre@mail.com",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="text-start" controlId="formBasicMessage">
              <Form.Label className="fw-bold">Mensaje:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="bg-white"
                {...register("message", {
                  required: "El mensaje es obligatorio",
                  minLength: {
                    value: 4,
                    message: "El mensaje debe contener al menos 4 caracteres",
                  },
                  maxLength: {
                    value: 450,
                    message:
                      "El mensaje debe contener como máximo 450 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.message?.message}
              </Form.Text>
            </Form.Group>
            <div className="text-end mt-3 d-flex justify-content-center">
              <Button type="submit" onClick={alerta} className=" btn px-5 bgVerde border-0">
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

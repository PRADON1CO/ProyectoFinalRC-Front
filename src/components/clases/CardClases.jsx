import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const CardClases = () => {
  return (
    <Col md={4} lg={4} className="mb-3">
      <Card className="h-100 border-0 efectoCard">
        <div>
          <img
            src="https://images.pexels.com/photos/8436769/pexels-photo-8436769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="card-img-top-nueva"
          />
        </div>
        <Card.Body>
          <Card.Title className="">Yoga</Card.Title>
          <Card.Text>
            <p>Descripción: jhasdhxkasjdhkshdsahdsa</p>
            <p>Fecha: Lunes y Jueves</p>
            <p>Instructor: Lucas Gomez</p>
            <span className="fw-bold">Hora: 8:00 am - 9:00 am</span>
          </Card.Text>
        </Card.Body>
        <div className="text-center pb-2">
        <Button className="bgVerde border-0 w-auto">Solicitar Turno</Button>
        </div>
      </Card>
    </Col>
  );
};

export default CardClases;

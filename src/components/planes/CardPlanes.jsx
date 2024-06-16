import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const CardPlanes = () => {
  return (
    <Col md={5} lg={5} className="mb-3">
      <Card className="h-100 border-0 efectoCard">
        <div className="bgVerde py-2 border-2">
            <h4 className="text-center font-weight-bold">FitFactory</h4>
            <h2 className="text-center font-weight-bold">Musculasion</h2>
        </div>
        <div className="p-2">
            <p className="py-1 p-precio">Mensual  <span>$ 33.900</span></p>
            <hr  className="colorVerde"/>
            <p className="py-1 p-precio">Trimestre  <span>$ 66.000</span></p>
            <hr  className="colorVerde"/>
            <p className="py-1 p-precio colorVerde fw-bold">Semestre Premiun  <span>$ 90.000</span></p>
            <hr  className="colorVerde"/>
            <div className="d-flex justify-content-center mt-3">
              <Button className="w-auto bgVerde border-0">Obtener Plan</Button>
            </div>
        </div>
      </Card>
    </Col>
  );
};

export default CardPlanes;

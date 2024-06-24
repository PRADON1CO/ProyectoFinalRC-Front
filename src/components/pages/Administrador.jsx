import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/administrador.css";
import ItemClase from "../clases/ItemClase";

const Administrador = () => {
  return (
    <div className='fondoAdmin'>
      <section className="container mainSection ">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-5 ">Gestionar Clases</h1>
          <Link className="btn bgVerde" to={"/administrador/crear"}>
            <i className="bi bi-file-earmark-plus fs-4"></i>
          </Link>
        </div>
        <hr />
        <Table responsive  bordered hover>
          <thead>
            <tr className="text-center">
              <th>Cod</th>
              <th>Profesor/a</th>
              <th>Fecha</th>
              <th>Horario</th>
              <th>URL de Imagen</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <ItemClase></ItemClase>
            <ItemClase></ItemClase>
            <ItemClase></ItemClase>
            <ItemClase></ItemClase>
            <ItemClase></ItemClase>
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default Administrador;

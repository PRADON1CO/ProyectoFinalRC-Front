import { Button, Container, Row } from "react-bootstrap";
import promocion from "../../assets/promocion.png";
import CardClases from "../clases/CardClases";
import CardPlanes from "../planes/CardPlanes";
import CardInstructor from "../clases/CardInstructor";
import { useEffect, useState } from "react";
import { listarClases } from "../helpers/queries";
import planes from "../planes/planes.js";


const Inicio = () => {
  const [clases, setClases] = useState([]);

  useEffect(() => {
    obtenerClases();
  }, []);

  const obtenerClases = async () => {
    const respuesta = await listarClases();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setClases(datos);
    } else {
      console.log("Error al obtener los productos");
    }
  };

  return (
    <div className="mainSection">
      <div className="banner text-center p-1">
        <h3 className="">
          Desarrolla tu fuerza interior. Supérate a ti mismo y alcanza tus metas
        </h3>
        <button className="p-1 rounded-2 bgVerde mt-2 text-white">
          Comenzar Ahora
        </button>
      </div>
      <Container className="py-2">
        <div className="text-center">
          <img src={promocion} alt="" className="promocion text" />
        </div>
        <div className="py-2">
          <h2 className="text-center pb-2">- Nuestra Clases -</h2>
          <Row>
            {clases.map((cardClases) => (
              <CardClases key={cardClases.id} clase={cardClases}></CardClases>
            ))}
          </Row>
        </div>
        <h2 className="text-center pb-2">- Planes -</h2>
        <Row className="justify-content-center">
            {
              planes.map((cardPlanes) => (
                <CardPlanes key={cardPlanes.id} plan={cardPlanes}></CardPlanes>
              ))
            }
        </Row>

        <h2 className="text-center">- Nuestros Instructores -</h2>
        <Row className="justify-content-center">
          {clases.map((instructores) => (
            <CardInstructor
              key={instructores.id}
              instructor={instructores}
            ></CardInstructor>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Inicio;

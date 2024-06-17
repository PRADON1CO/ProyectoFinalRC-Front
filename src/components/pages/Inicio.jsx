import { Button, Container, Row } from "react-bootstrap";
import promocion from "../../assets/promocion.png";
import CardClases from "../clases/CardClases";
import CardPlanes from "../planes/CardPlanes";
import CardInstructor from "../clases/CardInstructor";

const Inicio = () => {
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
            <CardClases></CardClases>
            <CardClases></CardClases>
            <CardClases></CardClases>
          </Row>
        </div>
        <h2 className="text-center pb-2">- Planes -</h2>
        <Row className="justify-content-center">
        <CardPlanes></CardPlanes>
        <CardPlanes></CardPlanes>
        <CardPlanes></CardPlanes>
        </Row>
        <h2 className="text-center">- Nuestros Instructores -</h2>
        <Row className="justify-content-center">
          <CardInstructor></CardInstructor>
          <CardInstructor></CardInstructor>
          <CardInstructor></CardInstructor>
        </Row>
      </Container>
    </div>
  );
};

export default Inicio;

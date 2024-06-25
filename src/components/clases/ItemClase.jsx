import { Button } from "react-bootstrap";

const ItemClase = ({clase, setClases}) => {
  return (
    <tr>
      <td className="text-center">{clase.nombreClase}</td>
      <td>{clase.nombreProfesor}</td>
      <td className="">{clase.fecha}</td>
      <td>{clase.horario}</td>
      <td className="text-center">
        <img
          src={clase.imagen}
          className="imgAdministrador"
          alt={clase.nombreProfesor}
        ></img>
      </td>
      <td className="text-center">
        <button className="btn m-1 btnOpciones">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btnOpciones">
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default ItemClase;

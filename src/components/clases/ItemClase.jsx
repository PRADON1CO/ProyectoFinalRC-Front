import { Button } from "react-bootstrap";

const ItemClase = () => {
  return (
    <tr>
      <td className="text-center">1</td>
      <td>Martina Gomez</td>
      <td className="">Lunes y martes</td>
      <td>16:00 a 17:30</td>
      <td className="text-center">
        <img
          src="https://images.pexels.com/photos/2905825/pexels-photo-2905825.jpeg?auto=compress&cs=tinysrgb&w=300"
          className="imgAdministrador"
          alt="Gomez"
        ></img>
      </td>
      <td className="text-center">
        <Button className="m-1 btnOpciones">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button className="btnOpciones">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemClase;

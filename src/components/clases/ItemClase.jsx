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
          src="https://media.istockphoto.com/id/1398385367/es/foto/feliz-mujer-de-negocios-millennial-con-gafas-posando-con-las-manos-cruzadas.jpg?b=1&s=612x612&w=0&k=20&c=yeKcWYj6Tsx14UZBVZDYmSZKLEKtq6uM3RfOZjqdMWk="
          className="imgAdministrador"
          alt="Gomez"
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

import { Button } from "react-bootstrap";
import { eliminarClaseAPI, listarClases } from "../helpers/queries";
import Swal from "sweetalert2";

const ItemClase = ({ clase, setClases }) => {

  const borrarClase = () => {
    Swal.fire({
      title: "¿Estas seguro de borrar la clase?",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // pedir a la api realizar el delete
        const respuesta = await eliminarClaseAPI(clase.id);

        console.log(respuesta);
        Swal.fire({
          title: "Clase eliminada",
          text: `La clase ( ${clase.nombreClase} ) fue eliminado correctamente.`,
          icon: "success",
        });
        //Actualizar tabla
        //Pedir los datos actualizados a la api
        const respuestaListaClases = await listarClases();
        if (respuestaListaClases.status === 200) {
          const datosActualizados = await respuestaListaClases.json();
          //Actualizar el state de productos
          setClases(datosActualizados);
        }
      } else {
        Swal.fire({
          title: "Error al eliminar el producto",
          text: `El producto ( ${clase.nombreClase} ) no pudo ser eliminado.`,
          icon: "error",
        });
      }
    });
  };

  return (
    <tr>
      <td className="text-center">{clase.id}</td>
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
          <i className="bi bi-trash" onClick={borrarClase} ></i>
        </button>
      </td>
    </tr>
  );
};

export default ItemClase;

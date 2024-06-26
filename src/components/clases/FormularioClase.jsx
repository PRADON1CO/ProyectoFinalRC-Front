import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearClase } from "../helpers/queries";
import Swal from "sweetalert2";

const FormularioClase = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const claseValidado = async (clase) => {
    console.log(clase)
    //tengo que pedir a la api crear el producto
        const respuesta= await crearClase(clase)
        console.log(respuesta)
        if (respuesta.status === 201){
          Swal.fire({
            title: "Clase Creada!",
            text: `La clase ( ${clase.nombreClase} ) fue creada correctamente`,
            icon: "success"
          });
          reset()
        }else{
            Swal.fire({
                title: "Ocurrio un error!",
                text: `El producto " ${clase.nombreClase} " no fue creado. Intenta nuevamente en unos minutos`,
                icon: "error"
              });
        }
  };

  return (
    <section className="mainSection bg-black">
      <div className="container text-white ">
        <h1 className="display-4 mt-5">Administrar Clase</h1>
        <hr />
        <Form className="my-4" onSubmit={handleSubmit(claseValidado)}>
          <Form.Group className="mb-3" controlId="formNombreClase">
            <Form.Label>Clase*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Yoga"
              {...register("nombreClase", {
                required: "El nombre de la clase es obligatoria",
                minLength: {
                  value: 2,
                  message:
                    "Debe ingresar como minimo 2 caracteres para el nombre de la clase",
                },
                maxLength: {
                  value: 50,
                  message:
                    "Debe ingresar como maximo 50 caracteres para el nombre de la clase",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreClase?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNombreProfesor">
            <Form.Label>Instructor*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Paula Gomez"
              {...register("nombreProfesor", {
                required: "El nombre del instructor es obligatoria",
                minLength: {
                  value: 2,
                  message:
                    "Debe ingresar como minimo 2 caracteres para el nombre del profesor",
                },
                maxLength: {
                  value: 50,
                  message:
                    "Debe ingresar como maximo 50 caracteres para el nombre del profesor",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreProfesor?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              {...register("imagen", {
                required: "La imagen es obligatoria",
                pattern: {
                  value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                  message: "Debe ingresar una URL valida (jpg|jpeg|gif|png)",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescripcion">
            <Form.Label>Descripción breve de la clase*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej:la clase incluye una serie de posturas físicas (asanas), ejercicios de respiración (pranayama) y una breve meditación o relajación final."
              as="textarea"
              {...register("descripcion_breve", {
                required: "La descripcion breve de la clase es obligatoria",
                minLength: {
                  value: 5,
                  message:
                    "Debe ingresar como minimo 5 caracteres para la descripcion breve",
                },
                maxLength: {
                  value: 80,
                  message:
                    "Debe ingresar como maximo 80 caracteres para la descripcion breve",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcion_breve?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFecha">
            <Form.Label>Fecha*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Lunes a jueves"
              {...register("fecha", {
                required: "La fecha es obligatoria",
                minLength: {
                  value: 2,
                  message:
                    "Debe ingresar como minimo 2 caracteres para la fecha",
                },
                maxLength: {
                  value: 50,
                  message:
                    "Debe ingresar como maximo 50 caracteres para la fecha",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.fecha?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formHora">
            <Form.Label>Horario*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: 04 pm - 05:00 pm "
              {...register("horario", {
                required: "El horario es obligatoria",
                minLength: {
                  value: 2,
                  message:
                    "Debe ingresar como minimo 2 caracteres para la horario",
                },
                maxLength: {
                  value: 50,
                  message:
                    "Debe ingresar como maximo 50 caracteres para la horario",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.horario?.message}
            </Form.Text>
          </Form.Group>

          <Button type="submit" className="bgVerde border-0">
            Guardar
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default FormularioClase;

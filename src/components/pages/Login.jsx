import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import '../../styles/login.css';
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="d-flex mainSection">
      <section className="d-none d-sm-block">
        <img
          src="https://images.pexels.com/photos/1092878/pexels-photo-1092878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="mesero sirviendo a clientes"
          title="mesero sirviendo a clientes"
          className="imgLogin h-100"
        />
      </section>
      <section className="sectionLogin bg-white">
        <div className="text-center">
          <h1 className="my-4">Inicia sesión</h1>
        </div>
        <Form className="px-2 px-md-5 pb-2 formText">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej: juan@mail.com"
              {...register("correo", {
                required: "El correo es obligatorio",
                minLength: {
                  value: 3,
                  message: "El correo debe contener al menos 3 carácteres",
                },
                maxLength: {
                  value: 250,
                  message: "El correo debe contener como máximo 250 carácteres",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Ingrese una direccion de correo válida",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.correo?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese una contraseña"
              {...register("password", {
                required: "El password es obligatorio",
                minLength: { value: 8, message: "El mínimo es de 8 caracteres" },
                maxLength: { value: 12, message: "El máximo es de 12 caracteres" },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  message:
                    "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.password?.message}
            </Form.Text>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button className="mx-auto mb-3 bgVerde border-0" variant="success" type="submit">
              Ingresar
            </Button>
          </div>
          <div className="d-flex justify-content-center">
            <Link to='*' className="btn btn-link text-dark">¿Has olvidado tu contraseña?</Link>
          </div>
          <div className="d-flex justify-content-center">
            <Link to='*' className="btn btn-danger mx-auto mb-3 mt-1 mt-lg-3">
              <i className="fa-brands fa-google"></i> Ingresar con Google
            </Link>
          </div>
          <div className="d-flex justify-content-center">
            <Link to='*' className="btn btn-primary mx-auto mb-2 my-lg-3">
              <i className="fa-brands fa-facebook"></i> Ingresar con Facebook
            </Link>
          </div>
          <div className="d-flex justify-content-center flex-column">
          <Link to='*' className="text-center text-dark">¿Aún no te creaste una cuenta? </Link>
          <Link to='*' className="btn btn-link text-dark">Crear cuenta</Link>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default Login;
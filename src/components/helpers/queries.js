// Trabajer la logica y declarar el usuario
const userAdmin = {
  email: "admin@fitfactory.com",
  password: "Fitfac1234",
};

export const login = (usuario) => {
  if (
    usuario.email === userAdmin.email &&
    usuario.password === userAdmin.password
  ) {
    sessionStorage.setItem(
      "usuariofitfactory",
      JSON.stringify(userAdmin.email)
    );
    return true;
  } else {
    return false;
  }
};

const URIClases = import.meta.env.VITE_API_CLASES;

//GET
export const listarClases = async () => {
  try {
    const respuesta = await fetch(URIClases);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const obtenerClase = async (id) => {
  try {
    const respuesta = await fetch(URIClases+ id);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

//POST
export const crearClase = async (claseNueva) => {
  try {
    const respuesta = await fetch(URIClases, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(claseNueva),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

//Delete
export const eliminarClaseAPI = async (id) => {
  try {
    const respuesta = await fetch(URIClases + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

//PATCH
export const editarClase = async (claseActualizada, id) => {
  try {
    const respuesta = await fetch(URIClases + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(claseActualizada),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

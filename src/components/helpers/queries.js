// Trabajer la logica y declarar el usuario


//GET
export const listarClases = async ()=> {
    try{
        const respuesta = await fetch ('http://localhost:3000/clases');
        return respuesta;
    }catch(error){
        console.error(error)
    }
}


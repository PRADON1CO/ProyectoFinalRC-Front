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

//POST
export const crearClase = async(claseNueva)=>{
    try{
        const respuesta = await fetch ('http://localhost:3000/clases',{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(claseNueva)
        });
        return respuesta;
    }catch(error){
        console.error(error)
    }
};

//Delete
export const eliminarClaseAPI = async(id)=>{
    try{
        const respuesta = await fetch ('http://localhost:3000/clases/'+id,{
            method: "DELETE",
        });
        return respuesta;
    }catch(error){
        console.error(error)
    }
};

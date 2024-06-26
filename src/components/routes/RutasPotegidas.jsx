import { Children } from "react";
import { Navigate } from "react-router-dom";


const RutasPotegidas = ({Children}) => {
    const userAdmin = JSON.parse(sessionStorage.getItem("usuariofitfactory")) || null
    if (!userAdmin){
        return <Navigate to={"/login"}></Navigate>
    }else{
        return Children
    }
};

export default RutasPotegidas;
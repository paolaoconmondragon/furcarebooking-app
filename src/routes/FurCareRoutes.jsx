import { Navigate, Route, Routes } from "react-router-dom";
import Citas from "../components/Citas";
import NuevaCita from "../components/NuevaCita";
import Clientes from "../components/Clientes";
import NuevoCliente from "../components/NuevoCliente";

export default function FurCareRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Navigate to={'/citas'}/>}/>
            <Route exact path="/citas" element={<Citas/>}/>
            <Route exact path="/nuevaCita" element={<NuevaCita/>}/>
            <Route exact path="/clientes" element={<Clientes/>}/>
            <Route exact path="/nuevocliente" element={<NuevoCliente/>} />
        </Routes>
        </>
    )
    
}
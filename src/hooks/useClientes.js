import Swal from "sweetalert2";
import { nuevoCliente } from "../services/clientesService";

export function useClientes(){

    const handleClickNuevoCliente = (cliente) =>{
        nuevoCliente(cliente);
        Swal.fire({
            title: 'El cliente se ha registrado correctamente.',
            text:'Los datos se han guardado correctamente en el sistema.',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar'
        })
    }

    return{
        handleClickNuevoCliente
    }
}
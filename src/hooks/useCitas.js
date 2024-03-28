import Swal from "sweetalert2";

export function useCitas(){
    
    const handleClickEdit = () =>{
        Swal.fire({
            title: "Quieres editar la cita?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Editar",
            denyButtonText: `No editar`
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Cita editada correctamente!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("No se ha podido guardar los cambios de la cita", "", "info");
            }
        });
    }

    const handleClickFinalizar = () =>{
        Swal.fire({
            title: "¿Estás seguro que quieres finalizar la cita?",
            text: "No se podrá revertir la cita una vez finalizada.",
            icon: "question",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Aceptar"
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "¡Cita finalizada!",
                text: "La cita ha sido finalizada correctamente.",
                icon: "success"
              });
            }
        });
    }

    const handleClickCancelar = () =>{
        Swal.fire({
            title: "¿Estás seguro que quieres cancelar la cita?",
            text: "No se podrá recuperar la cita una vez cancelada.",
            icon: "question",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Aceptar"
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "¡Cita cancelada!",
                text: "La cita ha sido cancelada correctamente.",
                icon: "success"
              });
            }
        });
    }

    return{
        handleClickEdit,
        handleClickFinalizar,
        handleClickCancelar
    }
}
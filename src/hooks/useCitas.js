import Swal from "sweetalert2";
import { cancelarCita, editarCita, finalizarCita, nuevaCita } from "../services/citasService";
import { useNavigate } from "react-router-dom";

export function useCitas(){

  const navigate = useNavigate();
    
  const handleClickEdit = (idCita, cita) =>{
    editarCita(idCita, cita);
    Swal.fire({
        title: 'La cita se ha editado correctamente.',
        text:'Los datos se han editado correctamente en el sistema.',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
    })
  }

  const handleClickFinalizar = (idCita) =>{
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
          finalizarCita(idCita); 
          Swal.fire({
            title: "¡Cita finalizada!",
            text: "La cita ha sido finalizada correctamente.",
            icon: "success"
          });
          navigate("/");
        }
    });
  }

  const handleClickCancelar = (idCita) =>{
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
          cancelarCita(idCita);
          Swal.fire({
            title: "¡Cita cancelada!",
            text: "La cita ha sido cancelada correctamente.",
            icon: "success"
          });
          navigate("/");
        }
    });
  }

  const handleClickNuevaCita = (cita) =>{
    nuevaCita(cita);
    Swal.fire({
        title: 'La cita se ha registrado correctamente.',
        text:'Los datos se han guardado correctamente en el sistema.',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
    })
}

  return{
    handleClickNuevaCita,
    handleClickFinalizar,
    handleClickCancelar,
    handleClickEdit
  }
}
import axios from 'axios';

const BASE_URL= "http://localhost:8080/citas";

export const finalizarCita = async(idCita) =>{
    try{
        return await axios.put(`${BASE_URL}/finalizarCita/${idCita}`);
    } catch(error){
        console.log(error)
    }
}

export const cancelarCita = async(idCita) =>{
    try {
        return await axios.delete(`${BASE_URL}/cancelarCita/${idCita}`)
    } catch (error) {
        console.log(error)
    }
}

export const nuevaCita = async(cita) =>{
    try {
        return await axios.post(`${BASE_URL}`, cita);
    } catch (error) {
        console.log(error)
    }
}
// export const editarCitas = async(id)=>{
//     await axios.delete(`${BASE_URL}/${id}`);
// }
import axios from "axios";

const BASE_URL= "http://localhost:8080/clientes";

export const nuevoCliente = async(cliente) =>{
    try{
        return await axios.post(`${BASE_URL}`, cliente);
    } catch(error){
        console.log(error)
    }
}
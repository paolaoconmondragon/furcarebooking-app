import React, { useEffect, useState } from 'react'
import CardCliente from './CardCliente'
import axios from 'axios';

export default function Clientes(){
    const BASE_URL="http://localhost:8080/clientes";

    //Variable de estado - dentro del hook useState se le da el valor inicial de esa variable, además proporciona el setter
    const [clientes, setClientes] = useState([]);

    //hacer efectos o eventos en base de las dependencias que se fijen, un array vacío significa ejecutarlo cuando cargue el componente
    useEffect(()=>{
        cargarClientes();
    }, []);

    const cargarClientes = async() => {
        const resultado = await axios.get(BASE_URL);
        setClientes(resultado.data);
    }

    return (
    <>
        <div className="col-sm-10 col-md-9 col-lg-10 py-3">
            <h2 className='text-center mb-5'>Clientes registrados</h2>
            <div className="row col-sm-12 col-md-12 col-lg-12">
                {
                    clientes.map((cliente, indice)=>(
                        <CardCliente key={indice} cliente={cliente}/>
                    ))
                } 
            </div>
        </div>    
    </>
    ) 
   
}
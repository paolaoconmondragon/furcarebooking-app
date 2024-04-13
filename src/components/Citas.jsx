import React, { useEffect, useState } from 'react'
import CardCita from './CardCita'
import axios from 'axios';

export default function Citas(){
    const BASE_URL= "http://localhost:8080/citas"; 

    const [citas, setCitas] = useState([]);
    
    useEffect(()=>{
        cargarCitas();
    }, []);

    const cargarCitas = async() => {
        const resultado = await axios.get(BASE_URL);
        setCitas(resultado.data);
        console.log(resultado.data);
    }

    return (
    <>
        <div className="col-sm-10 col-md-9 col-lg-10 py-3">
            <h2 className='text-center mb-5'>Citas registradas</h2>
            <div className="row col-sm-12 col-md-12 col-lg-12">
                {
                    citas.map((cita, indice)=>(
                        <CardCita key={indice} cita={cita}/>
                    ))
                }
            </div>
        </div>
    </>
    ) 
   
}
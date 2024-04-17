import React from 'react'
import { CardCitaBotones } from './CardCitaBotones';

export default function CardCita({cita}){

    return (
        <>
            <div className="card border-primary col-sm-2 col-md-3 col-lg-3 card mb-4 mx-4">
                <div className="card-body">
                    <h5 className="card-title font-weight-bold mb-2">{cita.cliente.nombre} {cita.cliente.apellidos}</h5>
                    <p className="card-text ">Dni: {cita.cliente.dni}</p>
                    <p className="card-text">Fecha: {cita.fecha} </p>
                    <p className="card-text">Hora: {cita.hora}</p>
                    <p className="card-text">Mascota: {cita.mascota.nombre}</p>
                    <p className="card-text">Tipo de cita: {cita.tipo == "C" ? "Consulta veterinaria" : "Peluquería"}</p>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-12 mb-3'>
                    {cita.estado == "P" && <CardCitaBotones idCita={cita.id} fechaCita={cita.fecha} horaCita={cita.hora}/>}
                </div>
            </div>
        </>
    )
}
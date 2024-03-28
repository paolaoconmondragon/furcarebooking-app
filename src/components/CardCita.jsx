import React from 'react'
import { useCitas } from '../hooks/useCitas'

export default function CardCita(){

    const {handleClickEdit, handleClickFinalizar, handleClickCancelar} = useCitas();

    return (
        <>
            <div className="card border-primary col-sm-2 col-md-3 col-lg-3 card mb-4 mx-4">
                <div className="card-body">
                    <h5 className="card-title font-weight-bold mb-2">Toreto Gutierrez Egea</h5>
                    <p className="card-text ">Dni: 12345678Z</p>
                    <p className="card-text">Fecha: 01/03/2024 </p>
                    <p className="card-text">Hora: 12:30 PM</p>
                    <p className="card-text">Mascota: Pepito</p>
                    <p className="card-text">Tipo de cita: Peluquería</p>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-12 mb-3'>
                    <button onClick={handleClickEdit} type="button" className="btn btn-success btn-sm m-1">
                        <i className="bi bi-pencil-square m-1"></i>Editar
                    </button>
                    <button onClick={handleClickFinalizar} type="button" className="btn btn-primary btn-sm m-1">
                        <i className="bi bi-check2-circle m-1"></i>Finalizar
                    </button>
                    <button onClick={handleClickCancelar} type="button" className="btn btn-danger btn-sm">
                        <i className="bi bi-x-circle-fill m-1"></i>Cancelar
                    </button>
                </div>        
            </div>
            
        </>
    )
}
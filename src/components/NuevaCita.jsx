import React from 'react'
import FormularioNuevaCita from './FormularioNuevaCita'

export default function NuevaCita(){
    return (
    <>
    <div className="col-sm-10 col-md-9 col-lg-10 py-3">
            <h2 className='text-center' >Nueva Cita</h2>
            <div className="row col-sm-12 col-md-12 col-lg-12">
                <FormularioNuevaCita/>
            </div>
        </div>    
    </>
    ) 
   
}
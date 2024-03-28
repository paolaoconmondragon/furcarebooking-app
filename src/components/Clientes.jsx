import React from 'react'
import CardCliente from './CardCliente'

export default function Clientes(){
    return (
    <>
        <div className="col-sm-10 col-md-9 col-lg-10 py-3">
            <h2 className='text-center mb-5'>Clientes registrados</h2>
            <div className="row col-sm-12 col-md-12 col-lg-12">
                <CardCliente/>
                <CardCliente/>
                <CardCliente/>
                <CardCliente/>
            </div>
        </div>    
    </>
    ) 
   
}
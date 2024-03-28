import React from 'react'
import CardCita from './CardCita'

export default function Citas(){
    return (
    <>
        <div className="col-sm-10 col-md-9 col-lg-10 py-3">
            <h2 className='text-center mb-5'>Citas registradas</h2>
            <div className="row col-sm-12 col-md-12 col-lg-12">
                <CardCita/>
                <CardCita/>
                <CardCita/>
                <CardCita/>
                <CardCita/>
                <CardCita/>
                <CardCita/>
            </div>
        </div>
    </>
    ) 
   
}
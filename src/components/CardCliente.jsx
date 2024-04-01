import React from 'react'
import CardMascota from './CardMascota'

export default function CardCliente({cliente}){

    return (
    <>
        <div className="card border-primary col-sm-5 col-md-5 col-lg-5 mb-3 mx-4">
            <div className="row g-0">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="row card-body">
                        <div className=" col-sm-2 col-md-2 col-lg-2">
                            <div className="card" style={{width:'80px', height:'80px'}}>
                                <img src="./img/avatar1.png" className="img rounded-start" alt="..."/>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-10 col-lg-10">
                            <h5 className="card-title text-center" style={{marginTop:'10px'}}>{cliente.nombre} {cliente.apellidos}</h5>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 pt-4">
                            <p className="card-text ">Dni: {cliente.dni}</p>
                            <p className="card-text">Email:  {cliente.correo}</p>
                            <p className="card-text">Tel:  {cliente.telefono}</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 pb-2">
                        <div className="card text-start">
                            <div className="card-header">
                               <h5>Mascotas</h5>
                            </div>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope='col'>Tipo de mascota</th>
                                        <th scope='col'>Nombre</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { 
                                        cliente.mascotas.map((mascota, indice)=>(
                                            <CardMascota key={indice} mascota={mascota} indice={indice} />
                                        ))
                                    }
                                </tbody>
                            </table>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )    
}
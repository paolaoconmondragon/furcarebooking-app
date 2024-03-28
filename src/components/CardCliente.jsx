import React from 'react'

export default function CardCliente(){
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
                            <h5 className="card-title text-center" style={{marginTop:'10px'}}>Paca López Fernandez</h5>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 pt-4">
                            <p className="card-text ">Dni: 12345678Z</p>
                            <p className="card-text">Email: pacalopez@email.com</p>
                            <p className="card-text">Tel: 666888999</p>
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
                                        <th scope='col'>Dni</th>
                                        <th scope='col'>Nombre</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row" style={{padding:'10px'}}>1</th>
                                    <td>Perro</td>
                                    <td>12345678Y</td>
                                    <td>Otto</td>
                                </tr>
                                <tr>
                                    <th scope="row" style={{padding:'10px'}}>2</th>
                                    <td>Gato</td>
                                    <td>5784578Y</td>
                                    <td>Mantequilla</td>
                                </tr>
                                <tr>
                                    <th scope="row" style={{padding:'10px'}}>3</th>
                                    <td>Cobaya</td>
                                    <td>35336688Y</td>
                                    <td>Noa</td>
                                </tr>
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
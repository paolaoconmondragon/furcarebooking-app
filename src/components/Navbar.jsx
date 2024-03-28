import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 " style={{backgroundColor: '#0F1D4D'}}>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100 ">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                        <span className="fs-4 d-none d-sm-inline text-light" >Menú</span>
                    </a>
                    <ul className="nav nav-tabs card-header-tabs flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start text-dark" id="menu" role="tablist">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/citas">
                            <i className="bi bi-calendar2-fill p-2" style={{fontSize:'18px'}}></i>
                                Citas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/clientes">
                                <i className="bi bi-file-person p-2" style={{fontSize:'18px'}}/>
                                Clientes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/nuevaCita">
                                <i className="bi bi-calendar-plus-fill p-2" style={{fontSize:'18px'}}></i>
                                Nueva Cita
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/nuevoCliente">
                                <i className="bi-person-fill-add p-2" style={{fontSize:'18px'}}></i>
                                Nuevo Cliente
                            </Link>
                        </li>
                        <li className='justify-content-end'>
                        <img src="./huella.png" className="mx-5 mt-5" style={{width:'50px'}} alt="..."/>
                                <p className='text-light mx-4'>FurCareBooking</p>
                        </li> 
                    </ul>
                </div>
        </div>
    )
}
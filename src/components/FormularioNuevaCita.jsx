import React, { useEffect, useState } from 'react'
import "./FormularioNuevos.css"
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'
import axios from 'axios';
import { useCitas } from "../hooks/useCitas";
import { useNavigate } from "react-router-dom";

export default function FormularioNuevaCita(){

    const{register, handleSubmit, formState: {errors}} = useForm();

    
    const BASE_URL="http://localhost:8080/clientes";

    const [clientes, setClientes] = useState([]);
    const [mascotas, setMascotas] = useState([]);


    useEffect(()=>{
        cargarClientes();
    }, []);

    const cargarClientes = async() => {
        const resultado = await axios.get(BASE_URL);
        setClientes(resultado.data);
    }

    const {handleClickNuevaCita} = useCitas();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // Crear el objeto Date desde la fecha en formato de cadena "YYYY-MM-DD"
        const fecha = new Date(data.fecha);

        // Extraer el día, mes y año del objeto Date
        const dia = fecha.getDate().toString().padStart(2, '0'); // Agrega cero a la izquierda si es necesario
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // getMonth() devuelve mes desde 0 (enero) hasta 11 (diciembre)
        const año = fecha.getFullYear();

        
        let nuevaCita = {
            estado: "P",
            hora: data.hora,
            // Formatear y retornar la nueva cadena de fecha "DD/MM/YYYY"
            fecha: `${dia}/${mes}/${año}`,
            tipo: data.tipoCita,
            cliente:{
                id:data.cliente
            },
            mascota:{
               id: data.mascota
            }
        }
        handleClickNuevaCita(nuevaCita);
        navigate("/citas");
    }

    const onError = (errors) =>{
        console.log(errors)
        Swal.fire({
            title: 'Faltan datos por informar correctamente.',
            text:'Por favor, revisa los datos de la cita.',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar'
        })
    }
    
    function listaMascotas(e){
        let idCliente = e.target.value;
        let clienteSeleccionado = clientes.find(cliente => cliente.id == idCliente);
        setMascotas(clienteSeleccionado.mascotas)
    }

    return (
        <>
        <div className='col-sm-10 col-md-9 col-lg-12 m-3' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <form className='card border-primary' onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <label htmlFor="cliente" className="form-label">Cliente</label>
                        <select className="form-select" id="cliente" {...register("cliente",  {
                                required: {value: "El cliente es requerido"}, onChange: listaMascotas
                        })}>
                            <option value={""}>Selecciona un cliente</option>
                            {clientes.map((cliente, indice)=>(
                                <option key={indice} value={cliente.id}>{cliente.nombre} {cliente.apellidos} - {cliente.dni}</option>
                            ))}
                        </select>
                        {errors.cliente?.type === "required" && (
                            <span>El cliente es requerido</span>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 col-md-6 col-lg-6 mb-2">
                        <label htmlFor="mascota" className="form-label">Mascota</label>
                        <select className="form-select" id="mascota" {...register("mascota",  {
                            required: {value: "La mascota es requerida"},
                        })} >
                            <option value={""}>Selecciona una mascota</option>
                            {mascotas.map((mascota, indice)=>(
                                <option key={indice} value={mascota.id}>{mascota.nombre}</option>
                            ))}
                        </select>
                        {errors.mascota?.type === "required" && (
                            <span>La mascota es requerida</span>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 col-md-6 col-lg-6 mb-2">
                        <label className="form-label">Fecha</label>
                        <input type="date" className="form-control" id="fecha" min={new Date().toJSON().slice(0, 10)} date={new Date('13/04/2024').toLocaleString()}
                        {...register("fecha",{
                                required: {value: true, message: "La fecha es requerida"}
                        })}/>
                        {errors.fecha && <span>{errors.fecha.message}</span>}
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-6 mb-5">
                        <label className="form-label">Hora</label>
                        <input type="time" className="form-control" id="hora"
                        {...register("hora",{
                            required: {value: true, message: "La hora es requerida",
                            },pattern: { value:/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
                            message: "Hora no válida",},
                            })}/>
                            {errors.hora && <span>{errors.hora.message}</span>}
                    </div>
                </div>
                <div className="col-sm-10 col-md-6 col-lg-6 mb-5">
                    <select id='tipoCita' className="form-select" {...register("tipoCita",{
                        required: {value: true, message: "El tipo de cita es requerido"}
                    })}>
                        <option value={""}>Tipo de Cita</option>
                        <option value={"P"}>Peluquería</option>
                        <option value={"C"}>Consulta Veterinaria</option>
                    </select>
                    {errors.tipoCita?.type === "required" && (
                        <span>{errors.tipoCita.message}</span>
                    )}
                </div>
                <div className="col-md-12 col-lg-12" style={{textAlign:'right'}}>
                    <button type="reset" className="btn btn-secondary mb-3 mx-4">Limpiar campos</button>
                    <button type="submit" className="btn btn-primary mb-3">Guardar</button>
                </div>
            </form>
        </div>
        </>
    )
}
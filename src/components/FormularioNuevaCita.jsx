import React from 'react'
import "./FormularioNuevos.css"
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'


export default function FormularioNuevaCita(){
    const{register, handleSubmit, formState: {errors}} = useForm()
    
    const onSubmit = (data) => {
        console.log(data)
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

    return (
        <>
        <div className='col-sm-10 col-md-9 col-lg-12 m-3' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <form className='card border-primary' onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="row">
                    <div className="col-md-6 col-12 my-md-0 my-2">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombreInput" aria-describedby="nombre" autoComplete='off' {...register("nombre", {
                            required: { value: true, message: "Nombre es requerido",}, maxLength: 20, minLength: 2,})}/>
                        {errors.nombre?.type === "required" && <span>Nombre requerido</span>}
                        {errors.nombre?.type === "maxLength" && (
                            <span>Nombre no debe ser mayor a 20 caracteres</span>
                        )}
                        {errors.nombre?.type === "minLength" && (
                            <span>Nombre debe ser mayor a 2 caracteres</span>
                        )}
                    </div>
                    <div className="col-md-6 col-12 my-md-0 my-2">
                        <label className="form-label">Apellidos</label>
                        <input type="text" className="form-control" id="nombreInput" aria-describedby="apellidos" autoComplete='off' {...register("apellidos", {
                            required: {value: true, message: "Apellidos es requerido",},maxLength: 20, minLength: 2,})}/>
                        {errors.apellidos?.type === "required" && <span>Apellidos requerido</span>}
                        {errors.apellidos?.type === "maxLength" && (
                            <span>Apellidos no debe ser mayor a 20 caracteres</span>
                        )}
                        {errors.apellidos?.type === "minLength" && (
                            <span>apellidos debe ser mayor a 2 caracteres</span>
                        )}
                    </div>
                    <div className="col-md-6 col-12 my-md-0 my-2">
                        <label className="form-label">Dni</label>
                        <input type="text" className="form-control" id="dni" aria-describedby="dni" autoComplete='off' {...register("dni",{
                            required: { value: true, message: "Dni es requerido",}, pattern:{value:/^(ES|)([0-9]{8}[A-Z]|[A-Z][0-9]{7}[0-9A-Z])$/,
                            message: "Dni no válido",},})}/>
                            {errors.dni && <span>{errors.dni.message}</span>}

                    </div>
                    <div className="col-md-6 col-12 my-md-0 my-2">
                        <label className="form-label">Correo</label>
                        <input type="email" className="form-control" id="email" autoComplete='off'{...register("correo",{
                            required: {value: true, message: "Correo es requerido",
                            },pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: "Correo no válido",},
                            })}/>
                        {errors.correo && <span>{errors.correo.message}</span>}
                    </div>
                    <div className="col-md-6 col-12 mb-2">
                        <label className="form-label">Teléfono</label>
                        <input type="tel" className="form-control" id="telefono" autoComplete='off' pattern="[0-9]{9}" {...register("telefono",{
                            required: {value: true, message: "Teléfono es requerido",
                            },pattern: { value:/^(\+?34)?(6\d{2}|7[1-9]\d{1})\d{6}$/,
                            message: "Teléfono no válido",},
                            })}/>
                        {errors.telefono && <span>{errors.telefono.message}</span>}

                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-6 mb-2">
                        <label className="form-label">Fecha</label>
                        <input type="date" className="form-control" id="fecha" min={new Date().toJSON().slice(0, 10)}
                        {...register("fecha",{
                                required: {value: true, message: "Fecha es requerida"}
                        })}/>
                        {errors.fecha && <span>{errors.fecha.message}</span>}
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-6 mb-5">
                        <label className="form-label">Hora</label>
                        <input type="time" className="form-control" id="hora" {...register("hora",{
                            required: {value: true, message: " Hora es requerido",
                            },pattern: { value:/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
                            message: "Hora no válida",},
                            })}/>
                            {errors.hora && <span>{errors.hora.message}</span>}
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-6 mb-5">
                        <label htmlFor="mascota" className="form-label">Mascota</label>
                            <select className="form-select" id="mascota" required>
                                <option>Elige..</option>
                                <option value={1}>Otto</option>
                                <option value={2}></option>
                            </select>
                        <div className="invalid-feedback">
                            Seleccionar una mascota es obligatorio
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-8 mb-5">
                        <select className="form-select">
                            <option>Tipo de Cita</option>
                            <option value={1}>Peluquería</option>
                            <option value={2}>Consulta Veterinaria</option>
                        </select>
                    </div>
                    <div className="col-md-12 col-lg-12" style={{textAlign:'right'}}>
                        <button type="reset" className="btn btn-secondary mb-3 mx-4">Limpiar campos</button>
                        <button type="submit" className="btn btn-primary mb-3">Guardar</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}
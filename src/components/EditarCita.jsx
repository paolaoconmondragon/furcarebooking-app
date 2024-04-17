import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useCitas } from '../hooks/useCitas';
import { useNavigate } from 'react-router-dom';

export function EditarCita({show, setShow, idCita, fechaCita, horaCita}){
    const{register, handleSubmit, formState: {errors}, setValue} = useForm();

    const {handleClickEdit} = useCitas();
    
    const navigate = useNavigate();

    const handleClose = () => setShow(false);

    useEffect(()=>{
        //split es una función que parte un String en base al caracter que le pases y todos los elementos que ha "partido" los ordena en un array
        //ej: "22/04/2024" lo convierte en un array de tres elementos, es decir se mostrará de la sig. forma: ["22", "04", "2024"]
        const [editCitaDia, editCitaMes, editCitaYear] = fechaCita.split("/");

        //Se parsea la fecha en el formato que lo pueda interpretar el input Date
        const fechaFormateada =  `${editCitaYear}-${editCitaMes}-${editCitaDia}`;

        setValue("fechaEditar", fechaFormateada);
        setValue("horaEditar", horaCita);
    }, []);

    const onSubmit = (data) => {
        // Crear el objeto Date desde la fecha en formato de cadena "YYYY-MM-DD"
        const fecha = new Date(data.fechaEditar);

        // Extraer el día, mes y año del objeto Date
        const dia = fecha.getDate().toString().padStart(2, '0'); // Agrega cero a la izquierda si es necesario
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // getMonth() devuelve mes desde 0 (enero) hasta 11 (diciembre)
        const año = fecha.getFullYear();

        
        let editarCita = {
            hora: data.horaEditar,
            // Formatear y retornar la nueva cadena de fecha "DD/MM/YYYY"
            fecha: `${dia}/${mes}/${año}`,
        }
        handleClickEdit(idCita, editarCita);
        navigate("/");
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
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Editar Cita
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='card border-primary' onSubmit={handleSubmit(onSubmit, onError)}>
                        <div className="row">
                            <div className="col-sm-10 col-md-6 col-lg-6 mb-2 px-5">
                                <label className="form-label">Fecha</label>
                                <input type="date" className="form-control border-primary" id="fechaEditar" min={new Date().toJSON().slice(0, 10)} date={new Date('13/04/2024').toLocaleString()}
                                {...register("fechaEditar",{
                                        required: {value: true, message: "La fecha es requerida"}
                                })}/>
                                {errors.fecha && <span>{errors.fecha.message}</span>}
                            </div>
                            <div className="col-sm-10 col-md-6 col-lg-4 mb-5">
                                <label className="form-label">Hora</label>
                                <input type="time" className="form-control border-primary" id="horaEditar"
                                {...register("horaEditar",{
                                    required: {value: true, message: "La hora es requerida",
                                    },pattern: { value:/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
                                    message: "Hora no válida",},
                                    })}/>
                                    {errors.hora && <span>{errors.hora.message}</span>}
                            </div>
                            <div className="col-md-11" style={{textAlign:'right'}}>
                                <button type='reset' onClick={handleClose} className="btn btn-secondary mb-3 mx-4">Cancelar</button>
                                <button type="submit" className="btn btn-primary mb-3">Guardar cambios</button>
                            </div>
                        </div>
                    </form>
                    </Modal.Body>
            </Modal>
        </>
    );
}

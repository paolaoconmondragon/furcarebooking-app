import { useState } from 'react';
import { useCitas } from '../hooks/useCitas'
import { EditarCita } from './EditarCita';

export function CardCitaBotones({idCita, fechaCita, horaCita}){
    
    const {handleClickFinalizar, handleClickCancelar} = useCitas();
    
    const [show, setShow] = useState(false);
    const handleShowEditCita = () => setShow(true);

    return(
        <>
            <button onClick={handleShowEditCita} type="button" className="btn btn-success btn-sm m-1">
                <i className="bi bi-pencil-square m-1"></i>Editar
            </button>                
            <button onClick={() => handleClickFinalizar(idCita)}  type="button" className="btn btn-primary btn-sm m-1">
                <i className="bi bi-check2-circle m-1"></i>Finalizar
            </button>
            <button onClick={() => handleClickCancelar(idCita)} type="button" className="btn btn-danger btn-sm">
                <i className="bi bi-x-circle-fill m-1"></i>Cancelar
            </button>

            <EditarCita key={idCita} show={show} setShow={setShow} idCita={idCita} fechaCita={fechaCita} horaCita={horaCita}/>
        </>
    )
}
import { useCitas } from '../hooks/useCitas'

export function CardCitaBotones({idCita}){
    
    const {handleClickEdit, handleClickFinalizar, handleClickCancelar} = useCitas();

    return(
        <>
            <button onClick={() => {handleClickEdit}} type="button" className="btn btn-success btn-sm m-1">
                <i className="bi bi-pencil-square m-1"></i>Editar
            </button>                
            <button onClick={() => handleClickFinalizar(idCita)}  type="button" className="btn btn-primary btn-sm m-1">
                <i className="bi bi-check2-circle m-1"></i>Finalizar
            </button>
            <button onClick={() => handleClickCancelar(idCita)} type="button" className="btn btn-danger btn-sm">
                <i className="bi bi-x-circle-fill m-1"></i>Cancelar
            </button>
        </>
    )
}
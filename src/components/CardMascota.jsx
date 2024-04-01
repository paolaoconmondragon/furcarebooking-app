export default function CardMascota({mascota, indice}){

    function checkTipoMascota(tipoMascota){
        switch (tipoMascota) {
            case "R":
                return "Roedor";
                break;
            case "P":
                return "Perro";
                break;
            case "G":
                return "Gato";
                break;
            case "A":
                return "Ave";
                break;
            default:
                return "No definido";
                break;
        }
    }

    return(
        <>
            <tr key={indice}>
                <th scope="row" style={{padding:'10px'}}>{indice + 1}</th>
                <td>{checkTipoMascota(mascota.tipo)}</td>
                <td>{mascota.nombre}</td>
            </tr>
        </>
    )

}
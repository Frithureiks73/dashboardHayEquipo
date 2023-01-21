import React from 'react';

function FilaTabla(props) {
    return (
        <React.Fragment>
            <tr>
                <td>{props.nombre_equipo}</td>
                <td>{props.restriccion[1].nombre}</td>
                <td>{props.restriccion[0].nombre}</td>                
                <td>{props.usuario_equipo.nombre_jugador}</td>
            </tr>
        </React.Fragment>
    )
}

export default FilaTabla;
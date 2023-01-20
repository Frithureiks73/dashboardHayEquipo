import React from 'react';
import PropTypes from 'prop-types'

function FilaTabla(props) {
    return (
        <React.Fragment>
            <tr>
                <td>{props.nombreEquipo}</td>
                <td>{props.juegaContra}</td>
                <td>{props.RestriccionEdad}</td>                
                <td>{props.capitan}</td>
            </tr>
        </React.Fragment>
    )
}

FilaTabla.propTypes = {
    nombreEquipo: PropTypes.string.isRequired,
    juegaContra: PropTypes.string.isRequired,
    RestriccionEdad: PropTypes.string.isRequired,    
    capitan: PropTypes.string.isRequired,
}

export default FilaTabla;
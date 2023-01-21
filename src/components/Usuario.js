import React from 'react';
import imagenFondo from '../assets/images/lionelcampeon.jpg'

function Usuario(props) {
    return (
        <React.Fragment>
            <div className="card-body">
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={imagenFondo} alt="Foto de Perfil" />
                </div>
                <p>{props.nombre}{props.apellido}{props.dni} --- LIONEL MESSI</p>
                <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle de Usuario</a>
            </div>
        </React.Fragment>
    )
}

export default Usuario;
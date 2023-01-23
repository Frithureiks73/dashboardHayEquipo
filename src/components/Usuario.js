import React from 'react';
import imagenPerfil from '../assets/images/lionelcampeon.jpg'

function Usuario(props) {
    return (
        <React.Fragment>
            <div className="card-body">
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={props.foto_perfil ? "http://localhost:3000/img/img-users/" + props.foto_perfil : imagenPerfil} alt="Foto de Perfil" />
                </div>
                <p className='font-weight-bold'>¡Bienvenido {props.nombre} {props.apellido}!</p>
                <p className='font-weight-bold'>D.N.I.:</p><p> {props.dni} </p>
                <p className='font-weight-bold'>Email:</p><p> {props.email} </p>
                <p className='font-weight-bold'>Usuario N°:</p><p> {props.id} </p>
                <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle de Usuario</a>
            </div>
        </React.Fragment>
    )
}

export default Usuario;
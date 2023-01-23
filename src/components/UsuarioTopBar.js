import React from 'react';
import foto from '../assets/images/lioavatar.jpg';

function UsuarioTopBar(props) {
    return (
        <React.Fragment>
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{props.nombre ? props.nombre + props.apellido : "Lionel Messi"}</span>
                    <img className="img-profile rounded-circle" src={foto} alt="Lionel Messi - Campeón del Mundo" width="60" />
                </a>
            </li>
        </React.Fragment>
    )
}

export default UsuarioTopBar;
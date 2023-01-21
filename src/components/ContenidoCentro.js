import React from "react";
import UltimoUsuario from "./UltimoUsuario";
import CiudadesInDb from "./CiudadesInDb";

function ContenidoCentro() {
    return (
        <React.Fragment>
            <div className="row">
                <UltimoUsuario />
                <CiudadesInDb />
            </div>
        </React.Fragment>
    );
}

export default ContenidoCentro;
import React from "react";
import UltimoUsuario from "./UltimoUsuario";
import CanchasInDb from "./CanchasInDb";

function ContenidoCentro() {
    return (
        <React.Fragment>
            <div className="row">
                <UltimoUsuario />
                <CanchasInDb />
            </div>
        </React.Fragment>
    );
}

export default ContenidoCentro;
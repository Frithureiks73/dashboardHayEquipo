import React from "react";
import ContenidoTotales from "./ContenidoTotales";
import ContenidoCentro from "./ContenidoCentro";
import Tabla from "./Tabla";

function ContenidoPrincipal() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Hay Equipo Dashboard</h1>
                </div>
                <ContenidoTotales />
                <ContenidoCentro />
                <Tabla />
            </div>
        </React.Fragment>
    );
}

export default ContenidoPrincipal;
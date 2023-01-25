import React, { useState, useEffect } from "react";
import Usuario from "./Usuario";

function UltimoUsuario() {

    const [usuarioFinal, setUsuarioFinal] = useState([]);

    useEffect(() => {
        fetch('https://www.hayequipo-4o7m.onrender.com/ultimo/')
            .then(respuesta => {
                console.log(respuesta)
                return respuesta.json()
            })
            .then(ultimoUser => {
                console.log(ultimoUser);
                setUsuarioFinal(ultimoUser.data)
            })
            .catch(error => console.log(error))
    }, [usuarioFinal])

    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último Usuario Creado</h5>
                    </div>
                    {usuarioFinal.length === 0 && <p>CARGANDO...</p>}
                    <Usuario {...usuarioFinal} />
                </div>
            </div>
        </React.Fragment>
    )
}


export default UltimoUsuario;
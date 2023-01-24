import React, { Component } from "react";
import Usuario from "./Usuario";

class UltimoUsuario extends Component {
    constructor() {
        super();
        this.state = {
            usuarioFinal: []
        }
    }

    componentDidMount() {
        fetch('https://hayequipo-4o7m.onrender.com/ultimo/')
            .then(respuesta => {
                console.log(respuesta)
                return respuesta.json()
            })
            .then(ultimoUser => {
                console.log(ultimoUser);
                this.setState({ usuarioFinal: ultimoUser.data })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Último Usuario Creado</h5>
                        </div>
                        <Usuario {...this.state.usuarioFinal}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default UltimoUsuario;
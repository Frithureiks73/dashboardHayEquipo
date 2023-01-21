import React, { Component } from 'react';
import FilaTabla from './FilaTabla';
import TituloFooterTabla from './TituloFooterTabla';

class Tabla extends Component {
    constructor() {
        super();
        this.state = {
            equiposList: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/productsApi/')
            .then(respuesta => {
                console.log(respuesta)
                return respuesta.json()
            })
            .then(equipos => {
                this.setState({ equiposList: equipos.data })
            })
            .catch(error => console.log(error))
    }


    render() {
        return (
            <React.Fragment>
                {/*<!-- PRODUCTS LIST -->*/}
                <h1 className="h3 ml-4 mb-0 text-gray-800">Todos los Equipos</h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <TituloFooterTabla />
                                </thead>
                                <tfoot>
                                    <TituloFooterTabla />
                                </tfoot>
                                <tbody>
                                    {this.state.equiposList.map((equipo, index) => {
                                        return <FilaTabla  {...equipo} key={index} />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Tabla;
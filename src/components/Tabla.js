import React, { useState, useEffect } from 'react';
import FilaTabla from './FilaTabla';
import TituloFooterTabla from './TituloFooterTabla';

function Tabla() {

    const [equiposList, setEquiposList] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/productsApi/')
            .then(respuesta => {
                console.log(respuesta)
                return respuesta.json()
            })
            .then(equipos => {
                setEquiposList(equipos.data)
            })
            .catch(error => console.log(error))
    }, [])

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
                                {equiposList.length === 0 && <p>CARGANDO...</p>}
                                {equiposList.map((equipo, index) => {
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


export default Tabla;
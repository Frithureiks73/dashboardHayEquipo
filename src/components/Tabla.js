import React from 'react';
import FilaTabla from './FilaTabla';

import TituloFooterTabla from './TituloFooterTabla';

let equiposTabla = [{
    nombreEquipo: "BRASIL",
    juegaContra: "SOLO MUJERES",
    RestriccionEdad: "MAYORES DE 30 AÑOS",    
    capitan: "PELÉ"
},
{
    nombreEquipo: "ARGENTINA",
    juegaContra: "SOLO HOMBRES",
    RestriccionEdad: "MENORES DE 40 AÑOS",
    capitan: "MESSI"
},
{
    nombreEquipo: "ITALIA",
    juegaContra: "MIXTO",
    RestriccionEdad: "MENORES DE 40 AÑOS",
    capitan: "BUFFÓN"
},
{
    nombreEquipo: "HOLANDA",
    juegaContra: "SOLO MUJERES",
    RestriccionEdad: "MAYORES DE 30 AÑOS",
    capitan: "PROFE JERO"
}]



function Tabla() {
    return (
        <React.Fragment>
            {/*<!-- PRODUCTS LIST -->*/}
            <h1 className="h3 ml-4 mb-0 text-gray-800"> Todos los Equipos</h1>

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
                                {
                                    equiposTabla.map((equipo, index) => {
                                        return <FilaTabla  {...equipo} key={index} />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Tabla;
import React from "react";
import Tarjeta from "./Tarjeta";


let equipos = {
    color: "primary",
    titulo: "Total de Equipos",
    valor: 44,
    icono: "fa-solid fa-futbol",
}

let jugadores = {
    color: "success",
    titulo: "Total de Jugadores",
    valor: 23,
    icono: "fa-solid fa-user",
}

let desafios = {
    color: "warning",
    titulo: "Total de Desafios",
    valor: 100,
    icono: "fa-solid fa-trophy",
}

let tarjetaProps = [equipos, jugadores, desafios];

function ContentRowMovies() {
    return (
        <React.Fragment>
            <div className="row">
                {
                    tarjetaProps.map((producto, index) => {
                        return <Tarjeta  {...producto} key={index} />
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default ContentRowMovies;
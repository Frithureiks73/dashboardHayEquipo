import React, { useState, useEffect } from "react";
import Tarjeta from "./Tarjeta";

function ContenidoTotales() {

    const [tarjetaProps, setTarjetaProps] = useState([{
        color: "primary",
        titulo: "Total de Equipos",
        valor: 10,
        icono: "fa-solid fa-futbol",
    },
    {
        color: "success",
        titulo: "Total de Jugadores",
        valor: 10,
        icono: "fa-solid fa-user",
    },
    {
        color: "warning",
        titulo: "Total de Desafios",
        valor: 10,
        icono: "fa-solid fa-trophy",
    }])

    useEffect(() => {
        Promise.all([
            fetch("http://localhost:3000/productsApi/").then(equipos => equipos.json()),
            fetch("http://localhost:3000/usersApi/").then(usuarios => usuarios.json()),
            fetch("http://localhost:3000/reservaApi/").then(desafios => desafios.json())
        ]).then((data) => {
            console.log(data)
            setTarjetaProps([{
                color: "primary",
                titulo: "Total de Equipos",
                valor: data[0].total,
                icono: "fa-solid fa-futbol",
            },
            {
                color: "success",
                titulo: "Total de Jugadores",
                valor: data[1].total,
                icono: "fa-solid fa-user",
            },
            {
                color: "warning",
                titulo: "Total de Desafios",
                valor: data[2].total,
                icono: "fa-solid fa-trophy",
            }])
        })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <React.Fragment>
            <div className="row">
                {tarjetaProps.map((propiedades, index) => {
                    return <Tarjeta  {...propiedades} key={index} />
                })}
            </div>
        </React.Fragment>
    );
}

export default ContenidoTotales
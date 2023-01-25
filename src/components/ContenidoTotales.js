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
            fetch("https://hayequipo-4o7m.onrender.com/productsApi/").then(equipos => equipos.json()),
            fetch("https://hayequipo-4o7m.onrender.com/usersApi/").then(usuarios => usuarios.json()),
            fetch("https://hayequipo-4o7m.onrender.com/reservaApi/").then(desafios => desafios.json())
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
    }, [tarjetaProps])

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
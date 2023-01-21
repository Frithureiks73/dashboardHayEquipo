import React, { Component } from "react";
import Tarjeta from "./Tarjeta";

class ContenidoTotales extends Component {
    constructor() {
        super();
        this.state = {
            tarjetaProps: [{
                color: "primary",
                titulo: "Total de Equipos",
                valor: 33,
                icono: "fa-solid fa-futbol",
            },
            {
                color: "success",
                titulo: "Total de Jugadores",
                valor: 7,
                icono: "fa-solid fa-user",
            },
            {
                color: "warning",
                titulo: "Total de Desafios",
                valor: 55,
                icono: "fa-solid fa-trophy",
            }]
        }
    }

    componentDidMount() {
        /* fetch('http://localhost:3000/productsApi/')
            .then(respuesta => {
                console.log(respuesta)
                return respuesta.json()
            })
            .then(equipos => {
                this.setState([{
                    color: "primary",
                    titulo: "Total de Equipos",
                    valor: equipos.total,
                    icono: "fa-solid fa-futbol"
                }])
            })
            .catch(error => console.log(error))

        fetch('http://localhost:3000/usersApi/')
            .then(respuesta => {
                console.log(respuesta)
                return respuesta.json()
            })
            .then(usuarios => {
                this.setState([...{
                    color: "primary",
                    titulo: "Total de Equipos",
                    valor: usuarios.total,
                    icono: "fa-solid fa-futbol"
                }])
            })
            .catch(error => console.log(error))

        fetch('http://localhost:3000/usersApi/')
            .then(respuesta => {
                console.log(respuesta)
                return respuesta.json()
            })
            .then(desafios => {
                this.setState([...{
                    color: "primary",
                    titulo: "Total de Equipos",
                    valor: desafios.total,
                    icono: "fa-solid fa-futbol"
                }])
            })
            .catch(error => console.log(error)) */
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    {
                        this.state.tarjetaProps.map((propiedades, index) => {
                            return <Tarjeta  {...propiedades} key={index} />
                        })
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default ContenidoTotales;
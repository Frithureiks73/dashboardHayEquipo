import React, { Component } from "react";
import Tarjeta from "./Tarjeta";

class ContentRowMovies extends Component {
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
		/* fetch('http://localhost:3002/productsApi/')
			.then(equipos => {
				console.log(equipos)
				return equipos.json()
			})
			.then(equipos => {
				this.setState({ tarjetaProps: equipos.total })
			})
			.catch(error => console.log(error)) */
	}

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    {
                        this.state.tarjetaProps.map((producto, index) => {
                            return <Tarjeta  {...producto} key={index} />
                        })
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default ContentRowMovies;
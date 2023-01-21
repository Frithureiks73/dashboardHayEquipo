import React, { Component } from "react";
import Ciudades from "./Ciudades";

class CiudadesInDb extends Component {
	constructor() {
		super();
		this.state = {
			ciudadesList: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3002/productsApi/')
			.then(respuesta => {
				console.log(respuesta)
				return respuesta.json()
			})
			.then(ciudades => {
				this.setState({ ciudadesList: ciudades.data })
			})
			.catch(error => console.log(error))
	}

	render() {
		return (
			<React.Fragment>
				<div className="col-lg-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h5 className="m-0 font-weight-bold text-gray-800">Ubicación de los Complejos</h5>
						</div>
						<div className="card-body">
							<div className="row">
								{this.state.ciudadesList.map((ciudad, index) => {
									return <Ciudades {...ciudad} key={index} />
								})}
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default CiudadesInDb;
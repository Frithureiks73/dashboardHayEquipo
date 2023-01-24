import React, { Component } from "react";
import Canchas from "./Canchas";

class CanchasInDb extends Component {
	constructor() {
		super();
		this.state = {
			canchasList: []
		}
	}

	componentDidMount() {
		fetch('https://hayequipo-4o7m.onrender.com/complejoApi/')
			.then(respuesta => {
				console.log(respuesta)
				return respuesta.json()
			})
			.then(Canchas => {
				this.setState({ canchasList: Canchas.data })
			})
			.catch(error => console.log(error))
	}

	render() {
		return (
			<React.Fragment>
				<div className="col-lg-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h5 className="m-0 font-weight-bold text-gray-800">Canchas Asociadas</h5>
						</div>
						<div className="card-body">
							<div className="row">
								{this.state.canchasList.map((cancha, index) => {
									return <Canchas {...cancha} key={index} />
								})}
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default CanchasInDb;
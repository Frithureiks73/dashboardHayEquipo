import React from 'react';
import image from '../assets/images/logo.png';
import { Link, Route, Routes } from 'react-router-dom';
import CiudadesInDb from './CiudadesInDb';
import ContentWrapper from './ContentWrapper';
import UltimoUsuario from './UltimoUsuario';
import ContenidoTotales from './ContenidoTotales';
import NotFound from './NotFound';

function SideBar() {
	return (
		<React.Fragment>
			<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

				{/* <!-- Sidebar - Marca --> */}
				<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
					<div className="sidebar-brand-icon">
						<img className="w-100" src={image} alt="Hay Equipo" />
					</div>
				</a>

				{/* <!-- Divider --> */}
				<hr className="sidebar-divider my-0" />

				{/* <!-- Nav Item - Dashboard --> */}
				<li className="nav-item active">
					<Link className="nav-link" to="/">
						<i className="fas fa-fw fa-tachometer-alt"></i>
						<span>Dashboard - Hay Equipo</span>
					</Link>
				</li>

				{/* <!-- Divider --> */}
				<hr className="sidebar-divider" />

				{/* <!-- Heading --> */}
				<div className="sidebar-heading">Acciones</div>

				{/* <!-- Nav Item - Complejos --> */}
				<li className="nav-item">
					<Link className="nav-link collapsed" to="/CiudadesInDb">
						<i className="fas fa-fw fa-folder"></i>
						<span>Complejos</span>
					</Link>
				</li>

				{/* <!-- Nav Item - Último Usuario --> */}
				<li className="nav-item">
					<Link className="nav-link" to="/UltimoUsuario">
						<i className="fas fa-fw fa-chart-area"></i>
						<span>Último Usuario</span>
					</Link>
				</li>

				{/* <!-- Nav Item - Totales --> */}
				<li className="nav-item">
					<Link className="nav-link" to="/ContenidoTotales">
						<i className="fas fa-fw fa-table"></i>
						<span>Totales</span>
					</Link>
				</li>
				{/* <!-- Divider --> */}
				<hr className="sidebar-divider d-none d-md-block" />
			</ul>
			<Routes>
				<Route path="/" element={<ContentWrapper />} />
				<Route path="/CiudadesInDb" element={<CiudadesInDb />} />
				<Route path="/UltimoUsuario" element={<UltimoUsuario />} />
				<Route path="/ContenidoTotales" element={<ContenidoTotales />} />
				<Route component={NotFound} />
			</Routes>
		</React.Fragment>
	);
}

export default SideBar;
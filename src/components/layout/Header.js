import React from 'react';

//React Router
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="row no-gutters header__wrapper align-items-center">
					<div className="col col-md-3 d-flex justify-content-between align-items-center">
						<Link to="/">
							<img
								src="/assets/img/pastel2.png"
								alt="LM Pasteleria Artesanal"
								className="header__img img-fluid"
							/>
						</Link>
						<h1 className="header__heading d-block d-md-none">
							LM Pasteleria
						</h1>
						<span id="mobileNav" className="d-block d-md-none hamburguesa">
							<i id="icono" className="fas fa-bars"></i>
						</span>
					</div>
					<div
						id="navbarWrapper"
						className="col col-md-6 header__navbarWrapper"
					>
						<nav className="header__navbar d-flex align-items-center justify-content-center justify-content-md-between flex-column flex-md-row">
							<NavLink
								className="header__navbarLink"
								exact
								to="/"
								activeClassName="selected"
							>
								Inicio
							</NavLink>
							<NavLink
								className="header__navbarLink"
								exact
								to="/sobremi"
								activeClassName="selected"
							>
								Sobre Mi
							</NavLink>
							<NavLink
								className="header__navbarLink"
								exact
								to="/menu"
								activeClassName="selected"
							>
								Menu
							</NavLink>
							<NavLink
								className="header__navbarLink"
								exact
								to="/contacto"
								activeClassName="selected"
							>
								Contacto
							</NavLink>
						</nav>
					</div>
					<div className="col-3 d-none d-md-block header__redes">
						<a href="https://www.facebook.com/LeeilaMartin" target="_blank" rel="noopener noreferrer" >
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="https://www.instagram.com/lm.pasteleriaa" target="_blank" rel="noopener noreferrer" >
							<i className="fab fa-instagram"></i>
						</a>
						<a href="!#" target="_blank">
							<i className="fab fa-youtube"></i>
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

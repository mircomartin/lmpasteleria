import React from 'react';

//Router Dom
import { Link } from 'react-router-dom';

export const AboutContact = () => {
	return (
		<div className="container aboutContact">
			<div className="row">
				<div className="col-12">
					<h2 className="aboutContact__title">
						PASTELES DISEÑADOS A TU GUSTO Y ESTILO
					</h2>
				</div>
			</div>
			<div className="row aboutContact__wrapper">
				<figure className="col-12 col-md-6 mb-2 mb-md-0" data-aos="flip-right">
					<img
						src="/assets/img/sobremiIndex.webp"
						alt="Leila Martin"
						className="aboutContact__img"
					/>
					<Link
						to="/sobremi"
						className="presentacion__picsButton aboutContactBoton"
					>
						Conóceme
					</Link>
				</figure>
				<figure className="col-12 col-md-6" data-aos="flip-left">
					<img
						src="/assets/img/contactoIndex2.webp"
						alt="Pastel de Cumpleaños"
						className="aboutContact__img"
					/>
					<Link to="/contacto" className="presentacion__picsButton aboutContactBoton">
						Contacto
					</Link>
				</figure>
			</div>
		</div>
	);
};

import React from 'react';

export const Sobremi = () => {
	return (
		<main className="main">
			<div className="container">
				<div className="row no-gutters sobremi align-content-center justify-content-center">
					<div className="col-12" data-aos="zoom-in">
						<h2 className="sobremi__title">Sobre mí</h2>
						<p className="sobremi__subtitle">LEILA MARTÍN - PASTELERA</p>
					</div>
					<div
						className="col-12 col-md-8 sobremi__wrapperImg"
						data-aos="zoom-in"
					>
						<figure>
							<img
								src="/assets/img/about.webp"
								alt="Leila Martin Pastelera"
								className="sobremi__img"
							/>
						</figure>
						<p className="sobremi__historia">
							Hola!, Soy Leila ,les quiero contar cómo comenzó este amor
							hacia la pastelería. Cuando era muy chica veía a mi abuela
							hacer tortas de cumpleaños , para el mate y todo tipo de
							postre para la familia y yo la ayudaba. Un día me dijo que si
							yo amaba tanto hacer esto porque no iba a aprender y ahí
							comenzó esta gran pasión... con el paso del tiempo me fui
							perfeccionando con distintos tipos de cursos referentes a la
							pastelería.
						</p>
						<p className="sobremi__historia">
							El primer regalo de mi familia fue una batidora profesional y
							así comencé muy de abajo a preparar pequeñas cosas , con sus
							defectos pero a la vez aprendiendo. Día a día sigo aprendiendo
							y así fue que comencé a poner mi impronta en las distintas
							variedades de pasteles , decoraciones y postres . Hoy soy yo
							la que le enseño algunas cosas a mi abuela. Ya hace un año que
							comencé este camino y estoy agradecida a mi familia y a todos
							los que confiaron en mi en mis comienzos, hoy gracias a dios
							crecí muchísimo.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

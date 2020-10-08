import React, { useState } from 'react';

//Axios
import axios from 'axios';

//Swal
import Swal from 'sweetalert2';

export const Contacto = ({history}) => {
	const [formValues, setFormValues] = useState({
		nombre: '',
		email: '',
		mensaje: '',
	});

    const { nombre, email, mensaje } = formValues;
    
    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = e => {
		e.preventDefault()
		
		if(nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '' ) {
			Swal.fire('Warning!', 'Todos los CAMPOS son OBLIGATORIOS', 'warning');
			return false
		}else{
			axios.post('https://lmpasteleriabd.herokuapp.com/mensajes', formValues)
			Swal.fire('Exito!', 'Tu mensaje se envio con exito!', 'success');

			history.push("/")
		}
    }

	return (
		<main className="main">
			<div className="container contacto" data-aos="zoom-in">
				<div className="row no-gutters contacto__wrapperTitle">
					<div className="col-12">
						<h2 className="contacto__title">Contacto</h2>
					</div>
				</div>
				<div className="row justify-content-center align-items-center">
					<div className="col-12 col-md-8 mb-5">
						<div className="contacto__details d-flex align-items-center justify-content-around">
							<div className="d-flex align-items-center">
								<i className="fab fa-whatsapp mr-2"></i>{' '}
								<span>3413 72-4544</span>
							</div>
							<div className="d-flex align-items-center">
								<i className="fab fa-instagram mr-2"></i>
								<a
									href="https://www.instagram.com/lm.pasteleriaa"
									target="_blank"
									rel="noopener noreferrer"
								>
									@lm.pasteleriaa
								</a>
							</div>
						</div>
						<p className="contacto__datos">
							Podes contactarme via Instagram, tambien podes enviarme un
							Watsapp. Ademas te dejo el formulario de contacto!
						</p>
					</div>
					<form onSubmit={handleSubmit} className="col-12 col-md-8 contacto__form">
						<div className="row">
							<div className="col-12 col-md-6 mb-3">
								<input
									type="text"
									name="nombre"
									className="contacto__input"
									placeholder="Nombre"
                                    value={nombre}
                                    onChange={handleChange}
								/>
							</div>
							<div className="col-12 col-md-6 mb-3">
								<input
									type="email"
									name="email"
									className="contacto__input"
									placeholder="Email"
                                    value={email}
                                    onChange={handleChange}
								/>
							</div>
							<div className="col-12">
								<textarea
									name="mensaje"
									placeholder="Mensaje..."
									className="contacto__input mb-3 area"
                                    value={mensaje}
                                    onChange={handleChange}
								/>
								<div className="d-flex justify-content-center">
									<button className="contacto__enviar">Enviar</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

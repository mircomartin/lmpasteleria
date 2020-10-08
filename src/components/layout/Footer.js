import React from 'react';

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-auto">
						<p className="footer__parrafo">
							© 2020 Creado por{' '}
							<a
								href="https://mmdiseno.netlify.app/"
								target="_blank"
								className="footer__enlace"
								rel="noopener noreferrer"
							>
								MM Developer
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

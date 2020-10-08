import React from 'react';

export const MenuCard = ({ pastel }) => {
	return (
		<div className="col-12 col-md-4 single mb-5">
			<figure className="single__wrapperImg">
				<img src={pastel.img.url} className="img-fluid single__img" alt="" />
			</figure>
			<div className="single__body">
				<h2 className="single__title">{pastel.titulo}</h2>
				<p className="single__description">{pastel.descripcion}</p>
			</div>
		</div>
	);
};

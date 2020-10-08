import React from 'react';

export const InstagramCard = ({ i }) => {
	return (
		<figure className="col-12 col-md-3 mb-2 mb-md-auto">
			<div className="instagram__wrapperImg">
				<a href="https://www.instagram.com/lm.pasteleriaa/" target="_blank" rel="noopener noreferrer">
					<img src={i.img} alt={i.title} className="img-fluid instagram__img" />
    				<figcaption />
				</a>
			</div>
		</figure>
	);
};

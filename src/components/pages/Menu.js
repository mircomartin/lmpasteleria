import React, { useState, useEffect } from 'react';

//Axios
import axios from 'axios';

//Components
import { MenuCard } from '../menu/MenuCard';
import { Spinner } from '../layout/Spinner';
import { Paginacion } from '../menu/Paginacion';

export const Menu = () => {
	const [pasteles, setPasteles] = useState([]);
	const [loading, setLoading] = useState();

	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(6);

	const consultaBd = async () => {
		setLoading(true);

		const { data } = await axios.get('https://lmpasteleriabd.herokuapp.com/pasteles');

		setPasteles(data);

		setLoading(false);
	};

	useEffect(() => {
		consultaBd();
	}, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = pasteles.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<main className="main">
			<div className="container menu">
				<div className="row no-gutters menu__wrapperTitle" data-aos="zoom-in">
					<div className="col-12">
						<h2 className="menu__title">Menu</h2>
					</div>
				</div>
				<div className="row menu__wrapperSubtitle">
					<div className="col-12">
						<p className="menu__subTitle">
							Estas son algunas de las delicias que preparo.
						</p>
					</div>
				</div>
				<div className="row">
					{loading ? (
						<Spinner />
					) : (
						currentPosts.map((pastel) => (
							<MenuCard key={pastel._id} pastel={pastel} />
						))
					)}
				</div>
				<div className="row justify-content-center align-content-center my-4">
					<Paginacion
						postsPerPage={postsPerPage}
						totalPosts={pasteles.length}
						paginate={paginate}
					/>
				</div>
			</div>
		</main>
	);
};

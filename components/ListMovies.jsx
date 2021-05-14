import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Modal from 'react-modal';

const ListMovies = () => {
	const [movies, setMovies] = useState([]);
	const [movie, setMovie] = useState({});
	const [page, setPage] = useState(2);
	const [modalOpen, setOpen] = useState(false);

	function openModal() {
		setOpen(true);
	}
	function closeModal() {
		setOpen(false);
	}

	const obtenerResultado = async () => {
		await axios
			.get(
				'https://api.themoviedb.org/3/movie/popular?api_key=f94556c96168acd61cd6d55d3ab285ec&language=es-ES&page=1'
			)
			.then(function (response) {
				console.log(response.data);
				setMovies(response.data.results);
			})
			.catch(function (error) {
				console.error(error);
			});
	};
	const siguiente = async (e) => {
		console.log('siguiente:', setPage);
		await axios
			.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=f94556c96168acd61cd6d55d3ab285ec&language=es-ES&page=${page}`
			)
			.then(function (response) {
				console.log(response.data);
				// setMovies(response.data.results);
				setMovies(movies.concat(response.data.results));
			})
			.catch(function (error) {
				console.error(error);
			});
		setPage(page + 1);
	};
	useEffect(() => {
		obtenerResultado();
		if (modalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [setMovies]);

	useEffect(() => {
		if (modalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [modalOpen]);

	const seleccionarPelicula = (id) => {
		console.log(id);
		const peli = movies.filter((item) => {
			return item.id == id ? item : null;
		});
		console.log(peli[0]);
		setMovie(peli[0]);
		openModal();
	};

	return (
		<div>
			<h1 className="text-white text-5xl font-Montserrat font-bold mb-12">
				Todas las peliculas
			</h1>
			<InfiniteScroll
				dataLength={movies.length}
				next={siguiente}
				hasMore={true}
				loader={<h4>Loading...</h4>}
			>
				<div className="flex w-full justify-start gap-x-5 gap-y-12 flex-wrap">
					{movies
						? movies.map((item, index) => {
								return (
									<div
										className="h-80 w-56 relative rounded-lg overflow-hidden"
										key={index}
										onClick={() => seleccionarPelicula(item.id)}
									>
										{item.poster_path ? (
											<img
												className="h-full w-full  absolute inset-0 z-10"
												src={
													'https://image.tmdb.org/t/p/original' +
													item.poster_path
												}
												alt={item.original_title}
											/>
										) : null}
										<div className="z-20 bg-black bg-opacity-70 text-left absolute w-1/2 top-7 border-amarrillo border-2 border-l-0 rounded-r-full  flex py-2 items-center justify-center">
											<img src="/estrella.svg" alt="estella" className="mr-2" />
											<h3 className="text-white text-28px font-bold font-Montserrat">
												{item.vote_average}
											</h3>
										</div>
									</div>
								);
						  })
						: 'No se encontro la pelicula'}
				</div>
			</InfiniteScroll>
			<Modal
				isOpen={modalOpen}
				onRequestClose={closeModal}
				className="Modal"
				overlayClassName="Overlay"
				contentLabel="Example Modal"
				ariaHideApp={false}
			>
				{movie && (
					<div className="flex justify-between">
						<img
							className=" w-1/2"
							src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
							alt={movie.tile}
						/>
						<div>
							<h2>{movie.title}</h2>
							<p>{movie.overview}</p>
						</div>
					</div>
				)}
			</Modal>
		</div>
	);
};

export default React.memo(ListMovies);

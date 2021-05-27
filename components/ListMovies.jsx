import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';

const ListMovies = () => {
	const [movies, setMovies] = useState([]);
	const [movie, setMovie] = useState({});
	const [page, setPage] = useState(2);
	const [pageTop, setPageTop] = useState(2);
	const [modalOpen, setOpen] = useState(false);

	const moviesRedux = useSelector((store) => store.movies.movie);
	const busquedaRedux = useSelector((store) => store.movies.search);
	const busquedaEstado = useSelector((store) => store.movies.busquedaActiva);

	function openModal() {
		setOpen(true);
	}
	function closeModal() {
		setOpen(false);
	}

	const changeData = (data) => {
		// console.log('aqui data ' + data);
		if (data == 'todos') {
			setMovies(moviesRedux);
		}
		if (data == 'buscar') {
			setMovies(busquedaRedux);
		} else {
			setMovies(moviesRedux);
		}
	};

	const siguiente = async (e) => {
		if (busquedaEstado == 'todos') {
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
			console.log('estoy en todos: ');
		} else {
			await axios
				.get(
					`https://api.themoviedb.org/3/movie/top_rated?api_key=f94556c96168acd61cd6d55d3ab285ec&language=es-ES&page=${pageTop}`
				)
				.then(function (response) {
					console.log(response.data);
					// setMovies(response.data.results);
					setMovies(movies.concat(response.data.results));
				})
				.catch(function (error) {
					console.error(error);
				});
			setPageTop(pageTop + 1);
		}
	};
	useEffect(() => {
		if (modalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [modalOpen]);

	useEffect(() => {
		changeData(busquedaEstado);
	}, [busquedaEstado, moviesRedux, busquedaRedux]);

	const seleccionarPelicula = (id) => {
		console.log(id);
		if (busquedaEstado !== 'buscar') {
			const peli = movies.filter((item) => {
				return item.id == id ? item : null;
			});
			setMovie(peli[0]);
			openModal();
		} else {
			const peli = busquedaRedux.filter((item) => {
				return item.id == id ? item : null;
			});
			setMovie(peli[0]);
			openModal();
		}
	};

	return (
		<div>
			<h1 className="text-white text-2xl mt-5 md:text-5xl font-Montserrat font-bold mb-12">
				Todas las peliculas
			</h1>
			{busquedaEstado !== 'buscar' ? (
				<InfiniteScroll
					dataLength={movies.length}
					next={siguiente}
					hasMore={true}
					loader={<h4>Loading...</h4>}
				>
					<div className="flex w-full justify-center gap-x-5 gap-y-12 flex-wrap">
						{movies &&
							movies.map((item, index) => {
								return (
									<div
										className="h-80 w-56 relative rounded-lg overflow-hidden cursor-pointer"
										key={index}
										onClick={() => seleccionarPelicula(item.id)}
									>
										{item.poster_path ? (
											<img
												className="h-full w-full object-cover absolute inset-0 z-10"
												src={
													'https://image.tmdb.org/t/p/w342' + item.poster_path
												}
												alt={item.original_title}
											/>
										) : null}
										<div className="z-20 bg-black bg-opacity-70 text-left absolute w-1/2 top-7 border-amarrillo border-2 border-l-0 rounded-r-full  flex py-2 items-center justify-center">
											<figure className="mr-2">
												<Image
													src="/estrella.svg"
													alt="estella"
													height={20}
													width={20}
												/>
											</figure>
											<h3 className="text-white text-28px font-bold font-Montserrat">
												{item.vote_average}
											</h3>
										</div>
									</div>
								);
							})}
					</div>
				</InfiniteScroll>
			) : (
				<div className="flex w-full justify-center gap-x-5 gap-y-12 flex-wrap">
					{movies &&
						movies.map((item, index) => {
							return (
								<div
									className="h-80 w-56 relative rounded-lg overflow-hidden cursor-pointer"
									key={index}
									onClick={() => seleccionarPelicula(item.id)}
								>
									{item.poster_path ? (
										<img
											className="h-full w-full object-cover absolute inset-0 z-10"
											src={'https://image.tmdb.org/t/p/w342' + item.poster_path}
											alt={item.original_title}
										/>
									) : null}
									<div className="z-20 bg-black bg-opacity-70 text-left absolute w-1/2 top-7 border-amarrillo border-2 border-l-0 rounded-r-full  flex py-2 items-center justify-center">
										<figure className="mr-2">
											<Image
												src="/estrella.svg"
												alt="estella"
												height={20}
												width={20}
											/>
										</figure>
										<h3 className="text-white text-28px font-bold font-Montserrat">
											{item.vote_average}
										</h3>
									</div>
								</div>
							);
						})}
				</div>
			)}

			<Modal
				isOpen={modalOpen}
				onRequestClose={closeModal}
				className="Modal"
				overlayClassName="Overlay"
				contentLabel="Example Modal"
				ariaHideApp={false}
			>
				{movie && (
					<div className="h-full pb-10">
						<div className="w-full text-right">
							<p
								onClick={closeModal}
								className="text-white font-bold text-right mt-5 inline-block text-4xl mr-5 cursor-pointer"
							>
								X
							</p>
						</div>
						<div className="flex h-full md:justify-between items-center flex-col lg:flex-row">
							<img
								className="md:w-1/4 w-2/4 h-60 info-img ml-0 md:ml-28 mb-10 md:mb-0"
								src={'https://image.tmdb.org/t/p/w342' + movie.poster_path}
								alt={movie.tile}
							/>
							<div className="w-full md:w-1/2 px-5">
								<h2 className="font-Montserrat text-2xl md:text-5xl font-bold mb-2">
									{movie.title}
								</h2>
								<p className="font-Montserra text-base  md:text-lg font-normal leading-7">
									{movie.overview}
								</p>
							</div>
						</div>
					</div>
				)}
			</Modal>
		</div>
	);
};

export default ListMovies;

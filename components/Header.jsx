import React, { useState } from 'react';
import Image from 'next/image';
import { getSearch, getMovieAction, getTopRated } from '../redux/movieDucks';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

const Header = () => {
	const dispatch = useDispatch();
	const { register, handleSubmit, reset } = useForm();
	const [menuMovil, setMenuMovil] = useState(false);

	const probando = (e) => {
		console.log(e.pelicula);
		dispatch(getSearch(e.pelicula));
	};
	const probando2 = (e) => {
		console.log(e.pelicula2);
		dispatch(getSearch(e.pelicula2));
		setMenuMovil(false);
	};

	return (
		<div className="flex flex-wrap lg:flex-nowrap items-center py-6 justify-between">
			<Image
				src="/logo-blockmaster.svg"
				alt="Logo block master"
				width={106}
				height={64}
			/>
			<div className="block lg:hidden mr-5">
				<button
					onClick={() => setMenuMovil(!menuMovil)}
					className="flex focus:outline-none items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
				>
					<svg
						className="h-3 w-3 fill-current text-white "
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title className="text-white">Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			{menuMovil && (
				<div className="lg:hidden w-full md:flex md:justify-between md:items-center mt-5">
					<nav>
						<ul className="flex gap-10 text-xs sm:text-base text-white font-inter">
							<li>
								<button onClick={() => dispatch(getMovieAction())}>
									Todas
								</button>
							</li>
							<li>
								<button onClick={() => dispatch(getTopRated())}>
									Mas valoradas
								</button>
							</li>
							<li>
								<button href="">Menos Valoradas</button>
							</li>
						</ul>
					</nav>
					<form
						onSubmit={handleSubmit(probando2)}
						className="h-11 w-full md:w-1/2 mt-3 md:mt-0 self-end flex items-center justify-between rounded-md overflow-hidden bg-white pl-3"
					>
						<input
							{...register('pelicula2')}
							className="w-full h-full focus:outline-none"
							type="text"
							placeholder="Busca tu pelicula favorita"
						/>
						<button
							type="submit"
							className="py-2 px-6 h-full bg-amarrillo flex items-center"
						>
							<Image
								src="/lupa.svg"
								alt="Lupa del buscador"
								width={20}
								height={20}
							/>
						</button>
					</form>
				</div>
			)}

			<div className="lg:flex w-full items-center justify-evenly hidden ">
				<nav>
					<ul className="flex gap-10 text-base text-white font-inter">
						<li>
							<button onClick={() => dispatch(getMovieAction())}>Todas</button>
						</li>
						<li>
							<button onClick={() => dispatch(getTopRated())}>
								Mas valoradas
							</button>
						</li>
						<li>
							<button href="">Menos Valoradas</button>
						</li>
					</ul>
				</nav>
				<form
					onSubmit={handleSubmit(probando)}
					className="h-11 w-1/2 self-end flex items-center justify-between rounded-md overflow-hidden bg-white pl-3"
				>
					<input
						{...register('pelicula')}
						className="w-full h-full focus:outline-none"
						type="text"
						placeholder="Busca tu pelicula favorita"
					/>
					<button
						type="submit"
						className="py-2 px-6 h-full bg-amarrillo flex items-center"
					>
						<Image
							src="/lupa.svg"
							alt="Lupa del buscador"
							width={20}
							height={20}
						/>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Header;

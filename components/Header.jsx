import React from 'react';
import Image from 'next/image';
import { getSearch } from '../redux/movieDucks';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

const Header = () => {
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm();

	const probando = (e) => {
		console.log(e.pelicula);
		dispatch(getSearch(e.pelicula));
	};

	return (
		<div className="flex items-center py-6 justify-between">
			<Image
				src="/logo-blockmaster.svg"
				alt="Logo block master"
				width={106}
				height={64}
			/>
			<nav>
				<ul className="flex gap-10 text-base text-white font-inter">
					<li>
						<a href="">Todas</a>
					</li>
					<li>
						<a href="">Mas valoradas</a>
					</li>
					<li>
						<a href="">Menos Valoradas</a>
					</li>
				</ul>
			</nav>
			<form
				onSubmit={handleSubmit(probando)}
				className="h-11 w-1/2 flex items-center justify-between rounded-md overflow-hidden bg-white pl-3"
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
	);
};

export default Header;

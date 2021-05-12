import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListMovies = () => {
	const [movies, setMovies] = useState([
		{
			id: 1,
			name: 'Hard Kill',
			score: 7.1,
			img: '/hardKill.png',
		},
		{
			id: 2,
			name: 'Hard Kill',
			score: 7.1,
			img: '/hardKill.png',
		},
		{
			id: 3,
			name: 'Hard Kill',
			score: 7.1,
			img: '/hardKill.png',
		},
		{
			id: 4,
			name: 'Hard Kill',
			score: 7.1,
			img: '/hardKill.png',
		},
		{
			id: 5,
			name: 'Hard Kill',
			score: 7.1,
			img: '/hardKill.png',
		},
		{
			id: 6,
			name: 'Hard Kill',
			score: 7.1,
			img: '/hardKill.png',
		},
		{
			id: 7,
			name: 'Hard Kill',
			score: 7.1,
			img: '/hardKill.png',
		},
		{
			id: 8,
			name: 'Hard Kill',
			score: 7.1,
			img: '/hardKill.png',
		},
		{
			id: 9,
			name: 'Hard Kill',
			score: 7.1,
			img: '/hardKill.png',
		},
		{
			id: 10,
			name: 'Hard Kill',
			score: 7.1,
			img: '/hardKill.png',
		},
		{
			id: 11,
			name: 'Hard Kill',
			score: 7.1,
			img: '/hardKill.png',
		},
		{
			id: 12,
			name: 'Hard Kill',
			score: 7.1,
			img: '/hardKill.png',
		},
		{
			id: 13,
			name: 'Hard Kill',
			score: 7.1,
			img: '/hardKill.png',
		},
		{
			id: 14,
			name: 'Hard Kill',
			score: 7.1,
			img: '/hardKill.png',
		},
		{
			id: 15,
			name: 'Hard Kill',
			score: 7.1,
			img: '/hardKill.png',
		},
	]);

	const obtenerResultado = async () => {
		const options = {
			method: 'GET',
			url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
			params: { s: 'Avengers Endgame', page: '1', r: 'json' },
			headers: {
				'x-rapidapi-key': '7914a77878mshc48efe144fa7706p119633jsn313454eac2fe',
				'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
			},
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	useEffect(() => {
		obtenerResultado();
	}, []);

	return (
		<div>
			<h1 className="text-white text-5xl font-Montserrat font-bold mb-12">
				Todas las peliculas
			</h1>
			<div className="flex w-full justify-start gap-x-5 gap-y-12 flex-wrap">
				{movies
					? movies.map((item) => {
							return (
								<div
									className="h-80 w-56 relative rounded-lg overflow-hidden"
									key={item.id}
								>
									<img
										className="h-full w-full  absolute inset-0 z-10"
										src={item.img}
										alt={item.name}
									/>
									<div className="z-20 bg-black bg-opacity-70 text-left absolute w-1/2 top-7 border-amarrillo border-2 border-l-0 rounded-r-full  flex py-2 items-center justify-center">
										<img src="/estrella.svg" alt="estella" className="mr-2" />
										<h3 className="text-white text-28px font-bold font-Montserrat">
											{item.score}
										</h3>
									</div>
								</div>
							);
					  })
					: 'No se encontro la pelicula'}
			</div>
		</div>
	);
};

export default ListMovies;

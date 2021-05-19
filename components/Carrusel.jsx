import React, { useEffect, useState } from 'react';

const Carrusel = () => {
	const [trasiones, setTrasiones] = useState();
	const cambiarCarrusel = (e) => {
		const traslate = {
			1: '-translate-x-0',
			2: '-translate-x-full',
			3: '-translate-x-200',
		};
		setTrasiones(traslate[e.target.innerText]);
	};

	useEffect(() => {
		setInterval(() => {
			let number = Math.floor(Math.random() * 3) + 1;

			const traslate = {
				1: '-translate-x-0',
				2: '-translate-x-full',
				3: '-translate-x-200',
			};
			setTrasiones(traslate[number]);
		}, 5000);
	}, []);

	return (
		<div className="overflow-x-hidden">
			<div id="contenedor" className={`container ${trasiones}`}>
				<img
					className="h-full object-cover w-full"
					src="/mulan.png"
					alt="mulan"
				/>
				<img
					className="h-full object-cover w-full"
					src="/raya.png"
					alt="raya"
				/>
				<img
					className="h-full object-cover w-full"
					src="/unidos.png"
					alt="unidos"
				/>
			</div>
			<ul className="flex justify-center gap-x-3 items-center">
				<li
					onClick={(e) => cambiarCarrusel(e)}
					className="py-2 cursor-pointer px-4 punto  rounded-full bg-white text-black"
				>
					1
				</li>
				<li
					onClick={(e) => cambiarCarrusel(e)}
					className="py-2 cursor-pointer px-4 punto rounded-full bg-white text-black"
				>
					2
				</li>
				<li
					onClick={(e) => cambiarCarrusel(e)}
					className="py-2 cursor-pointer px-4 punto rounded-full bg-white text-black"
				>
					3
				</li>
			</ul>
		</div>
	);
};

export default Carrusel;

import React from 'react';
import Image from 'next/image';

const Slider = () => {
	return (
		<div className="mb-14">
			<div className="w-full h-80 bg-white rounded-xl overflow-x-hidden flex snap-x">
				<div
					className="snap-start w-full h-full flex overflow-hidden  text-white text-4xl font-bold flex-shrink-0 bg-black relative"
					id="slide-1"
				>
					<img
						src="/mulan.png"
						className="h-full w-full object-cover absolute inset-0 z-10"
					/>
					<div className="z-20 self-end flex gap-x-4 text-left font-Montserrat font-bold mb-8 ml-6">
						<button className="text-lg text-black rounded px-6 py-2 flex items-center bg-amarrillo">
							<img src="/play.svg" alt="play" className="mr-3" />
							VER AHORA
						</button>
						<button className="text-lg text-amarrillo rounded border-amarrillo border-2 flex items-center px-6 py-2 bg-black">
							<img src="/plus.svg" alt="mas" className="mr-3" />
							VER DESPÚES
						</button>
					</div>
				</div>
				<div
					className="snap-start w-full h-full flex overflow-hidden  text-white text-4xl font-bold flex-shrink-0 bg-black relative"
					id="slide-2"
				>
					<img
						src="/raya.png"
						className="h-full w-full object-cover absolute inset-0 z-10"
					/>
					<div className="z-20 self-end flex gap-x-4 text-left font-Montserrat font-bold mb-8 ml-6">
						<button className="text-lg text-black rounded px-6 py-2 flex items-center bg-amarrillo">
							<img src="/play.svg" alt="play" className="mr-3" />
							VER AHORA
						</button>
						<button className="text-lg text-amarrillo rounded border-amarrillo border-2 flex items-center px-6 py-2 bg-black">
							<img src="/plus.svg" alt="mas" className="mr-3" />
							VER DESPÚES
						</button>
					</div>
				</div>
				<div
					className="snap-start w-full h-full flex overflow-hidden  text-white text-4xl font-bold flex-shrink-0 bg-black relative"
					id="slide-3"
				>
					<img
						src="/unidos.png"
						className="h-full w-full object-cover absolute inset-0 z-10"
					/>
					<div className="z-20 self-end flex gap-x-4 text-left font-Montserrat font-bold mb-8 ml-6">
						<button className="text-lg text-black rounded px-6 py-2 flex items-center bg-amarrillo">
							<img src="/play.svg" alt="play" className="mr-3" />
							VER AHORA
						</button>
						<button className="text-lg text-amarrillo rounded border-amarrillo border-2 flex items-center px-6 py-2 bg-black">
							<img src="/plus.svg" alt="mas" className="mr-3" />
							VER DESPÚES
						</button>
					</div>
				</div>
			</div>
			<div className="flex mt-8 justify-center">
				<a
					className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
					href="#slide-1"
				>
					1
				</a>
				<a
					className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
					href="#slide-2"
				>
					2
				</a>
				<a
					className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
					href="#slide-3"
				>
					3
				</a>
			</div>
		</div>
	);
};

export default Slider;

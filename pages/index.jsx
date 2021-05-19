import Head from 'next/head';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Carrusel from '../components/Carrusel';
import ListMovies from '../components/ListMovies';

export default function Home() {
	return (
		<div className="bg-black min-h-screen">
			<div className="max-w-1366 bg-transparent mx-auto">
				<div className="max-w-1200 mx-auto bg-black">
					<Header />
					{/* <Slider /> */}
					<Carrusel />
					<ListMovies />
				</div>
			</div>
		</div>
	);
}

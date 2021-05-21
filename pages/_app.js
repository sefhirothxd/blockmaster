import '../styles/tailwind.css';
import { Provider } from 'react-redux';
import generateStore from '../redux/store';

function MyApp({ Component, pageProps }) {
	const store = generateStore();

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;

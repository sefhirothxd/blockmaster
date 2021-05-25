import axios from 'axios';

//constantes
const dataInicial = {
	movie: [],
	search: [],
	busquedaActiva: 'todos',
};

const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
const GET_TOP_RATED = 'GET_TOP_RATED';
const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
const NO_CONTENT = 'NO_CONTENT';

//reducer
export default function movieReducer(state = dataInicial, action) {
	switch (action.type) {
		case GET_MOVIE_SUCCESS:
			return {
				...state,
				movie: action.payload,
				busquedaActiva: 'todos',
			};
		case SEARCH_MOVIE_SUCCESS:
			return { ...state, search: action.payload, busquedaActiva: 'buscar' };
		case GET_TOP_RATED:
			return { ...state, movie: action.payload, busquedaActiva: 'top' };
		case NO_CONTENT:
			return { ...state, busquedaActiva: 'todos' };
		default:
			return state;
	}
}

//acciones
export const getMovieAction = () => async (dispatch, getState) => {
	try {
		const res = await axios.get(
			'https://api.themoviedb.org/3/movie/popular?api_key=f94556c96168acd61cd6d55d3ab285ec&language=es-ES&page=1'
		);
		dispatch({
			type: GET_MOVIE_SUCCESS,
			payload: res.data.results,
		});
	} catch (error) {
		console.log(error);
	}
};
export const getTopRated = () => async (dispatch, getState) => {
	try {
		const res = await axios.get(
			'https://api.themoviedb.org/3/movie/top_rated?api_key=f94556c96168acd61cd6d55d3ab285ec&language=es-ES&page=1'
		);
		dispatch({
			type: GET_TOP_RATED,
			payload: res.data.results,
		});
	} catch (error) {
		console.log(error);
	}
};
export const getSearch = (movie) => async (dispatch, getState) => {
	if (movie.trim() === '') {
		try {
			dispatch({
				type: NO_CONTENT,
			});
		} catch (error) {
			console.log(error);
		}
	} else {
		try {
			const res = await axios.get(
				`https://api.themoviedb.org/3/search/movie?api_key=f94556c96168acd61cd6d55d3ab285ec&language=es-ES&query=${movie}&page=1&include_adult=false`
			);
			dispatch({
				type: SEARCH_MOVIE_SUCCESS,
				payload: res.data.results,
			});
		} catch (error) {
			console.log(error);
		}
	}
};

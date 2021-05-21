import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import movieReducer, { getMovieAction } from './movieDucks';

const rootReducer = combineReducers({
	movies: movieReducer,
});

// const composeEnhancers =
// 	(typeof window !== 'undefined' &&
// 		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
// 	compose;

export default function generateStore() {
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunk))
	);
	getMovieAction()(store.dispatch);
	return store;
}

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ThunkMiddleware from 'redux-thunk'
// import CreateLogger from 'redux-logger'
import news from '../reducers'
import { loadingBarReducer } from 'react-redux-loading-bar'

const finalCreateStore = compose(
	applyMiddleware(ThunkMiddleware)
)(createStore)

const reducer = combineReducers({
	news,
	loadingBar: loadingBarReducer,
	router: routerReducer
})

export default function configureStore() {
	const store = finalCreateStore(
		reducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
	return store
}
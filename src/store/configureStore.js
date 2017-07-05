import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ThunkMiddleware from 'redux-thunk'
// import ReduxLogger from 'redux-logger'
import app from '../reducers'

const finalCreateStore = compose(
	applyMiddleware(ThunkMiddleware)
)(createStore)

const reducer = combineReducers({
	app,
	router: routerReducer
})

export default function configureStore() {
	const store = finalCreateStore(
		reducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
	return store
}
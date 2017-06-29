import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer } from 'react-router-redux'
import ThunkMiddleware from 'redux-thunk'
import ReduxLogger from 'redux-logger'
import rootReducer from '../reducers'

const finalCreateStore = compose(
	applyMiddleware(ThunkMiddleware, ReduxLogger)
)(createStore)

const reducer = combineReducers({
	rootReducer,
	routing: routerReducer
})

console.log(Object.assign({}, rootReducer, {
	routing: routerReducer
}))

export default function configureStore() {
	const store = finalCreateStore(reducer)
	return store
}
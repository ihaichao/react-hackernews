import React from 'react'
import { Route, Switch } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import { ConnectedRouter } from 'react-router-redux'
import NewsHeader from '../components/NewsHeader/NewsHeader'
import NewsList from '../containers/NewsList/NewsList'
import LoadingBar from 'react-redux-loading-bar'

const history = createHistory()

export default (
	<ConnectedRouter history={history}>
		<div>
			<LoadingBar style={{ position: 'fixed', top: 0, left: 0, height: '2px', color: '#f60' }} />
			<NewsHeader />
			<Switch>
				<Route path="/new/:page?" component={NewsList} />
				<Route path="/show/:page?" component={NewsList} />
				<Route path="/ask/:page?" component={NewsList} />
				<Route path="/job/:page?" component={NewsList} />
				<Route path="/:page?" component={NewsList} />
			</Switch>
		</div>
	</ConnectedRouter>
)
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import NewsHeader from '../components/NewsHeader/NewsHeader'
import NewsList from '../containers/NewsList/NewsList'

const history = createHistory()

export default (
	<ConnectedRouter history={history}>
		<div>
			<NewsHeader />
			<Switch>
				<Route path="/:page?" component={NewsList} />
				<Route path="/new/:page?" component={NewsList} />
				<Route path="/show/:page?" component={NewsList} />
				<Route path="/ask/:page?" component={NewsList} />
				<Route path="/jobs/:page?" component={NewsList} />
			</Switch>
		</div>
	</ConnectedRouter>
)
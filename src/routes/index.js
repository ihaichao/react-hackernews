import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import NewsHeader from '../components/NewsHeader/NewsHeader'
import NewsList from '../containers/NewsList/NewsList'
import LoadingBar from 'react-redux-loading-bar'

export default (
	<HashRouter>
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
	</HashRouter>
)
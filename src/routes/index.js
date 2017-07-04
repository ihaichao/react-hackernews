import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NewsList from '../containers/NewsList/NewsList'

export default (
	<Router>
		<Switch>
			{/*<Redirect from="/" to="/1" />*/}
			<Route path="/:page" component={NewsList} />
			<Route path="/new/:page" component={NewsList} />
			<Route path="/show/:page" component={NewsList} />
			<Route path="/ask/:page" component={NewsList} />
			<Route path="/jobs/:page" component={NewsList} />
		</Switch>
	</Router>
)
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NewsList from '../containers/NewsList/NewsList'

export default (
	<Router>
		<Switch>
			<Route path="/" component={NewsList} />
			<Route path="/new" component={NewsList} />
			<Route path="/show" component={NewsList} />
			<Route path="/ask" component={NewsList} />
			<Route path="/jobs" component={NewsList} />
		</Switch>
	</Router>
)
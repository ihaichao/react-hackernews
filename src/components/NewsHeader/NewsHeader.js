import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './NewsHeader.styl'

export default class NewsHeader extends Component {
	render () {
		return (
			<div className="news-header">
				<div className="logo"></div>
				<div className="nav">
					<NavLink to="/" className="title">Hacker News</NavLink>
					<NavLink to="/new" className="tab" activeClassName="selected">new</NavLink>
					<NavLink to="/show" className="tab" activeClassName="selected">show</NavLink>
					<NavLink to="/ask" className="tab" activeClassName="selected">ask</NavLink>
					<NavLink to="/job" className="tab" activeClassName="selected">jobs</NavLink>
				</div>
				<span className="project-info">Built by Zhang Zongzheng | <a href="https://github.com/ihaichao/react-hackernews" className="source">Source</a></span>
			</div>
		)
	}
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NewsHeader.styl'

export default class NewsHeader extends Component {
	render () {
		return (
			<div className="news-header">
				<div className="logo"></div>
				<ul className="nav">
					<li><Link to="/" className="title">Hacker News</Link></li>
					<li><Link to="new" className="tab">new</Link></li>
					<li><Link to="show" className="tab">show</Link></li>
					<li><Link to="ask" className="tab">ask</Link></li>
					<li><Link to="job" className="tab">jobs</Link></li>
				</ul>
				<span className="project-info">Built by Zhang Zongzheng | <a href="https://github.com/ihaichao/react-hackernews" className="source">Source</a></span>
			</div>
		)
	}
}

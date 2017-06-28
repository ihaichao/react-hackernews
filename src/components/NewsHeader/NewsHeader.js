import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NewsHeader.styl'

export default class NewsHeader extends Component {
	render () {
		return (
			<div className="news-header">
				<div className="logo"></div>
				<ul className="nav">
					<li><Link to="/"><a className="title">Hacker News</a></Link></li>
					<li><Link to="/new"><a className="tab">new</a></Link></li>
					<li><Link to="/show"><a className="tab">show</a></Link></li>
					<li><Link to="/ask"><a className="tab">ask</a></Link></li>
					<li><Link to="/job"><a className="tab">jobs</a></Link></li>
				</ul>
				<span className="project-info">Built by Zhang Zongzheng | <a href="https://github.com/ihaichao/react-hackernews" className="source">Source</a></span>
			</div>
		)
	}
}

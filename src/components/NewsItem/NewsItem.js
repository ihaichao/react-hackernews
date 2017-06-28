import React, { Component } from 'react'
import './NewsItem.styl'

export default class NewsItem extends Component {
	constructor (props) {
		super(props)
		console.log(this.props)
	}
	render () {
		return (
			<div className="item">
				<span className="index">1.</span>
				<p>
					<a className="title" target="_blank" rel="noopener noreferrer">title</a>
					<span className="domain">
						(domain)
					</span>
				</p>
				<p className="subtext">
					<span>
						1 points by
						<a href="//news.ycombinator.com/user?id=" target="_blank" rel="noopener noreferrer">by</a>
					</span>
					1 hour ago
					<span className="comments-link">
						| <a href="//news.ycombinator.com/item?id=" target="_blank" rel="noopener noreferrer">link</a>
					</span>
				</p>
			</div>
		)
	}
}
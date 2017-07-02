import React, { Component } from 'react'
import './NewsItem.styl'

export default class NewsItem extends Component {
	getDomain (url) {
		const urlParser = document.createElement('a')
		urlParser.href = url
  	return urlParser.hostname
	}

	getTimeFromNow (time) {
		const between = Date.now() / 1000 - Number(time)
		if (between < 3600) {
			return this.pluralize(~~(between / 60), ' minute')
		} else if (between < 86400) {
			return this.pluralize(~~(between / 3600), ' hour')
		} else {
			return this.pluralize(~~(between / 86400), ' day')
		}
	}

	pluralize (num, label) {
    if (num === 0 || num === 1) {
        return num + label
    }
    return num + label + 's'
	}

	render () {
		const item = this.props
		return (
			<div className="item">
				<span className="index">{item.index}.</span>
				<p>
					<a className="title" target="_blank" rel="noopener noreferrer">{item.title}</a>
					<span className="domain">{this.getDomain(item.url)}</span>
				</p>
				<p className="subtext">
					<span>
						{item.score} points by
						<a href="//news.ycombinator.com/user?id={item.by}" target="_blank" rel="noopener noreferrer">{item.by}</a>
					</span>
					{this.getTimeFromNow(item.time)} hour ago
					<span className="comments-link">
						| <a href="//news.ycombinator.com/item?id={item.id}" target="_blank" rel="noopener noreferrer">{this.pluralize(item.descendants, 'comment')}</a>
					</span>
				</p>
			</div>
		)
	}
}
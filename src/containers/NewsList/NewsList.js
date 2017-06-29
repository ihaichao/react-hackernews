import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchListData } from '../../actions'
import NewsItem from  '../../components/NewsItem/NewsItem'
import './NewsList.styl'

class NewsList extends Component {
	componentWillMount () {
		this.props.dispatch(fetchListData('new'))
	}

	render () {
		// console.log('props =====>', this.props)
		const { items } = this.props

		return (
			<div className="news-view">
				{(items && items.length > 0) && items.map(item => <NewsItem index={item.index} title={item.title} url={item.url} score={item.score} by={item.by} time={item.time} descendants={item.descendants} />)}
			</div>
		)
	}
}

export default connect(state => {
	console.log('state =======>', state)
	return {
		items: state.rootReducer.items
	}
})(NewsList)
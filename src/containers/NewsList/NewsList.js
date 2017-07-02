import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchListData } from '../../actions'
import NewsHeader from '../../components/NewsHeader/NewsHeader'
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
				<NewsHeader />
				{(items && items.length > 0) && items.map((item, index) => 
					<NewsItem key={item.id} index={index} title={item.title} url={item.url} score={item.score} by={item.by} time={item.time} descendants={item.descendants} />
				)}
			</div>
		)
	}
}

export default connect(state => {
	return {
		items: state.items
	}
})(NewsList)
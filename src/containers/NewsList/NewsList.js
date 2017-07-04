import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchListData } from '../../actions'
import NewsHeader from '../../components/NewsHeader/NewsHeader'
import NewsItem from  '../../components/NewsItem/NewsItem'
import './NewsList.styl'

class NewsList extends Component {
	componentWillMount () {
		this.fetchData()
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.location.pathname !== this.props.location.pathname) {
			this.fetchData()
		}
	}

	fetchData () {
		const type = this.getType()
		const page = this.getPage()
		this.props.dispatch(fetchListData(type, page))
	}

	getType () {
		return this.props.location.pathname.replace(/[/\d]/g, '') || 'top'
	}

	getPage () {
		return Number(this.props.match.params.page || '1')
	}

	getPath () {
		return this.props.location.pathname.replace(/\d/g, '')
	}

	hasMore () {
		const { itemsPerPage, list } = this.props
		const type = this.getType()
		const page = this.getPage()
    const maxPage = Math.ceil(list[type].length / itemsPerPage)
		return page < maxPage
	}
	
	render () {
		// console.log(this.props)
		const { itemsPerPage, isLoading, items } = this.props
		const page = this.getPage()
		const path = this.getPath()
		const hasMore = this.hasMore()

		return (
			<div className={isLoading ? 'news-view loading' : 'news-view'}>
				<NewsHeader />
				<div className="news-list">
					{(items && items.length > 0) && items.map((item, index) => 
						<NewsItem key={item.id} index={(page - 1) * itemsPerPage + index + 1} title={item.title} url={item.url} score={item.score} by={item.by} time={item.time} descendants={item.descendants} />
					)}
				</div>
				{items.length > 0 &&
				<div className="pagination">
					{page > 1 && <Link to={path + (page - 1)}>&lt; prev</Link>}
					{hasMore && <Link to={path + (page + 1)}>more...</Link>}
				</div>}
			</div>
		)
	}
}

export default connect(state => {
	// console.log(state)
	return {
		itemsPerPage: state.app.itemsPerPage,
		isLoading: state.app.isLoading,
		items: state.app.items,
		list: state.app.list
	}
})(NewsList)
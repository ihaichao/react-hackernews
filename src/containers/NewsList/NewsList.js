import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { fetchListData } from '../../actions'
import NewsItem from  '../../components/NewsItem/NewsItem'
import './NewsList.styl'

class NewsList extends Component {
	componentWillMount () {
		this.fetchData(this.props)
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.location.pathname !== this.props.location.pathname) {
			window.scrollTo(0, 0)
			this.fetchData(nextProps)
		}
	}

	fetchData (props) {
		props.actions.showLoading()
		const type = this.getType(props)
		const page = this.getPage(props)
		props.actions.fetchListData(type, page).then(() => {
			props.actions.hideLoading()
		})
	}

	getType (props) {
		return props.location.pathname.replace(/[/\d]/g, '') || 'top'
	}

	getPage (props) {
		return Number(props.match.params.page || '1')
	}

	getPath (props) {
		return this.getType(props) === 'top' ? '/' : '/' + this.getType(props) + '/'
	}

	hasMore () {
		const { itemsPerPage, list } = this.props
		const type = this.getType(this.props)
		const page = this.getPage(this.props)
    const maxPage = Math.ceil(list[type].length / itemsPerPage)
		return page < maxPage
	}
	
	render () {
		const { itemsPerPage, isLoading, items } = this.props
		const page = this.getPage(this.props)
		const path = this.getPath(this.props)
		const hasMore = this.hasMore(this.props)

		return (
			<div className="news-view">
				{!isLoading && <div className="news-list">
					{(items && items.length > 0) && items.map((item, index) => 
						<NewsItem key={item.id} page={page} itemsPerPage={itemsPerPage} index={index} title={item.title} url={item.url} score={item.score} by={item.by} time={item.time} descendants={item.descendants} />
					)}
				</div>}
				{isLoading && <div className="loading">Loading...</div>}
				{items.length > 0 &&
				<div className="pagination">
					{page > 1 && <Link to={path + (page - 1)}>&lt; prev</Link>}
					{hasMore && <Link to={path + (page + 1)}>more...</Link>}
				</div>}
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ showLoading, hideLoading, fetchListData }, dispatch),
})

export default connect(state => {
	return {
		itemsPerPage: state.news.itemsPerPage,
		isLoading: state.news.isLoading,
		items: state.news.items,
		list: state.news.list
	}
}, mapDispatchToProps)(NewsList)
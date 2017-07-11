/**
 * Actions
 * @author zhangzongzheng
 * @date 2017-06-25
 */

import { fetchIdsByType, fetchItems } from '../services'

export const RECEIVE_LIST_IDS = 'RECEIVE_LIST_IDS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'

export function receiveListIds (newsType, json) {
	return {
		type: RECEIVE_LIST_IDS,
		newsType: newsType,
		ids: json
	}
}

export function receiveItems (items) {
	return {
		type: RECEIVE_ITEMS,
		items: items
	}
}

export function fetchListData (type, page) {
	return (dispatch, getState) => {
		return fetchIdsByType(type)
			.then(ids => dispatch(receiveListIds(type, ids)))
			.then(() => fetchItemsByPage(getState(), type, page))
			.then(items => dispatch(receiveItems(items)))
	}
}

export function fetchItemsByPage (state, type, page) {
	const itemsPerPage = state.news.itemsPerPage
	page = page || 1
	const start = (page - 1) * itemsPerPage
	const end = page * itemsPerPage
	const ids = state.news.list[type].slice(start, end)
	if (ids.length) {
		return fetchItems(ids)
	} else {
		return Promise.resolve()
	}
}
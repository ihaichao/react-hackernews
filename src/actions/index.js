/**
 * Actions
 * @author zhangzongzheng
 * @date 2017-06-25
 */

import { fetchIdsByType, fetchItems } from '../services'

export const RECEIVE_LIST_DATA = 'RECEIVE_LIST_DATA'

export function receiveListData (json) {
	return {
		type: RECEIVE_LIST_DATA,
		ids: json
	}
}

export function fetchListData (type, page) {
	return dispatch => {
		console.log(1)
		return fetchIdsByType(type)
			.then(ids => {
				console.log(ids)
				dispatch(receiveListData(ids))
			})
	}
}
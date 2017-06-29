/**
 * Actions
 * @author zhangzongzheng
 * @date 2017-06-25
 */

import { fetchIdsByType, fetchItems } from '../services'

export const RECEIVE_LIST_IDS = 'RECEIVE_LIST_IDS'

export function receiveListIds (json) {
	return {
		type: RECEIVE_LIST_IDS,
		ids: json
	}
}

export function fetchListData (type, page) {
	return dispatch => {
		return fetchIdsByType(type)
			.then(ids => {
				console.log(ids)
				dispatch(receiveListIds(ids))
			})
	}
}
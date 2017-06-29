/**
 * Reducers
 * @author zhangzongzheng
 * @date 2017-06-25
 */

const initialState = {
	items: []
}

export default function newsList (state = initialState, action) {
	console.log(action)
	switch (action.type) {
		case 'RECEIVE_LIST_IDS':
			return Object.assign({}, state, { items: action.ids })
		default:
			return state
	}
}
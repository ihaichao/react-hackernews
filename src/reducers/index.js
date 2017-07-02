/**
 * Reducers
 * @author zhangzongzheng
 * @date 2017-06-25
 */

const initialState = {
	itemsPerPage: 30,
	items: [],
	list: {
		top: [],
	  new: [],
	  show: [],
	  ask: [],
	  job: []
	}
}

export default function newsList (state = initialState, action) {
	switch (action.type) {
		case 'RECEIVE_LIST_IDS':
			return Object.assign({}, state, { list: { [action.newsType]: action.ids } })
		case 'RECEIVE_ITEMS':
			return Object.assign({}, state, { items: action.items })
		default:
			return state
	}
}
/**
 * Reducers
 * @author zhangzongzheng
 * @date 2017-06-25
 */

const initialState = {
	items: []
}

export default function newsList (state = initialState, action) {
	switch (action.type) {
		case 'RECEIVE_LIST_DATA':
			return Object.assign({}, state, { items: action.ids })
	}
}
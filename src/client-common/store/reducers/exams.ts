import { GET_ALL_EXAMS } from '../types'

const initialState = {
	exams: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case GET_ALL_EXAMS:
		return {
			...state,
			exams: action.payload,
		}
	default:
		return state
	}
}

export default reducer

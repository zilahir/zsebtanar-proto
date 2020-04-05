import { GET_TEACHER_CLASSROOM } from '../types'

const initialState = {
	classrooms: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case GET_TEACHER_CLASSROOM:
		return {
			...state,
			classrooms: action.payload.classrooms,
		}
	default:
		return state
	}
}

export default reducer

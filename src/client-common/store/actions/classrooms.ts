import { GET_TEACHER_CLASSROOM } from '../types'

export const getClassRooms = classrooms => dispath => (
	dispath({
		type: GET_TEACHER_CLASSROOM,
		payload: classrooms,
	})
)

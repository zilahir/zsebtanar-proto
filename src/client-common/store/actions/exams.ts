import { GET_TEACHER_CLASSROOM } from '../types'

export const getExams = exams => dispath => (
	dispath({
		type: GET_TEACHER_CLASSROOM,
		payload: exams,
	})
)

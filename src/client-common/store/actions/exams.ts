import { GET_ALL_EXAMS } from '../types'

export const getExams = exams => dispath => (
	dispath({
		type: GET_ALL_EXAMS,
		payload: exams,
	})
)

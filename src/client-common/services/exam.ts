import { cloudFnPost, cloudFnGet } from '../util/firebase'

export const createNewExam = newExamObject => (
	cloudFnPost(`exam/insert`, newExamObject, { withToken: true }).then()
)

export const getAllExam = ownerId => (
	cloudFnGet(`exam/getall`, { ownerId }, { withToken: true }).then(result => {
		return result.data.exams
	})
)
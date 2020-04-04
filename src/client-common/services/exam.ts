import { cloudFnPost } from '../util/firebase'
export const createNewExam = newExamObject => (
	cloudFnPost(`exam/insert`, newExamObject, { withToken: true }).then()
)
import { cloudFnPost } from '../util/firebase'
export const createNewClassRoom = newclassRoomObject => (
	cloudFnPost(`classroom/insert`, newclassRoomObject, { withToken: true }).then()
)
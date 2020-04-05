import { cloudFnPost, cloudFnGet } from '../util/firebase'

export const createNewClassRoom = newclassRoomObject => (
	cloudFnPost(`classroom/insert`, newclassRoomObject, { withToken: true }).then()
)

export const getAllClassRoom = ownerId => (
	cloudFnGet(`classroom/getall`, { ownerId }, { withToken: true }).then(result => {
		return result.data.classRooms
	})
)

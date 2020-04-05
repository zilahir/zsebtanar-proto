import { cloudFnPost, cloudFnGet } from '../util/firebase'
import { getClassRooms } from 'client-common/store/actions/classrooms'


export const createNewClassRoom = newclassRoomObject => (
	cloudFnPost(`classroom/insert`, newclassRoomObject, { withToken: true }).then()
)

export const getAllClassRoom = ownerId => (
	cloudFnGet(`classroom/getall`, { ownerId }, { withToken: true }).then(result => {
		getClassRooms(result)
	})
)

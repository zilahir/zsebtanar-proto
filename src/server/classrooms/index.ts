import * as express from 'express'
import { errorHandler } from '../utils/error'

import { admin } from '../utils/firebase'
export const route = express.Router()
const DB = admin.database()
const ClassRooms = DB.ref('classrooms')

route.post('/insert',
	(req, res) => {
		const body = req.body
		const key = DB.ref('classrooms').push().key
		ClassRooms.child(key).set({
			name: body.name,
			ownerId: body.ownerId,
		})
		res.status(200).send({
			success: true
		})
	}
)
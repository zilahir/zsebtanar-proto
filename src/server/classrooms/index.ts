import * as express from 'express'
import { errorHandler } from '../utils/error'

import { admin } from '../utils/firebase'
import curry from 'ramda/es/curry'
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
			createdAt: new Date().toLocaleDateString()
		})
		res.status(200).send({
			success: true
		})
	}
)

route.get('/getall',
	(req, res) => {
		const body = req.body
		let result = []
		ClassRooms.on('value', (snap) => {
			snap.forEach(item => {
				const currVal = item.val()
				currVal.ownerId === body.ownerId
				result.push(currVal)
			})
		})
		res.status(200).send({
			success: true,
			classRooms: [...result]
		})
	}
)

// TODO: implement delete API function
import * as express from 'express'
import { errorHandler } from '../utils/error'

import { admin } from '../utils/firebase'
export const route = express.Router()
const DB = admin.database()
const Exams = DB.ref('exams')

route.post('/insert',
	(req, res) => {
		const body = req.body
		const key = DB.ref('exams').push().key
		Exams.child(key).set({
			name: body.name,
            classId: body.classId,
            examDate: body.date,
            taskList: body.taskList,
            ownerId: body.ownerId,
		})
		res.status(200).send({
			success: true
		})
	}
)

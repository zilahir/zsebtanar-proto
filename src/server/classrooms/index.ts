import * as express from 'express'
import { errorHandler } from '../utils/error'

export const route = express.Router()

route.post('/insert', [
	errorHandler((req, res) => {
		const body = req.body
		res.status(200).send({
			success: true
		})
	})
])
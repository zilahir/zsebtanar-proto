import * as React from 'react'
import { connect } from 'react-redux'

import { DialogHeader } from './base/DialogHeader'
import { DialogBody } from './base/DialogBody'
import { Dialog } from './base/Dialog'

// const MATH_TASKLIST_KEY = 'LA4J0N_CrzuVOjy0xyg'  //TODO this needs to be dynamically

interface TaskListModalProps {
	session: state.Session
}

interface TaskListModalState {
	state: 'init' | 'loading' | 'finished' | 'error'
}

const mapStateToProps = state => ({
	session: state.app.session,
})

export const TaskListModal = connect<{}, TaskListModalProps, ui.ModalProps>(mapStateToProps)(
	class TaskListModal extends React.Component<
	TaskListModalProps & ui.ModalProps,
	TaskListModalState
	> {
		state = {
			state: 'init'
		} as TaskListModalState

		render() {
			const props = this.props
			console.debug('props', this.props)
			return (
				<div>
					<Dialog className="taskList">
					<DialogHeader onClose={props.close} >Feladatok kiválasztása</DialogHeader>
					<DialogBody>
						<p>
							hello
						</p>
					</DialogBody>
					</Dialog>
				</div>
			)
		}
	}
)

export default TaskListModal
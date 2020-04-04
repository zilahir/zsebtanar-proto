import * as React from 'react'
import { connect } from 'react-redux'

import { DialogHeader } from './base/DialogHeader'
import { DialogBody } from './base/DialogBody'
import { Dialog } from './base/Dialog'

interface TaskListModalProps {
	session: state.Session
}

const mapStateToProps = state => ({
	session: state.app.session,
})

export const TaskListModal = connect<{}, TaskListModalProps, ui.ModalProps>(mapStateToProps)(
	class TaskListModal extends React.Component<
	TaskListModalProps & ui.ModalProps
	> {

		render() {
			const props = this.props
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
import * as React from 'react'
import { Button } from 'client-common/component/general/Button'

import './ClassPage.scss'

class ClassManage extends React.Component<{}> {
    state = {
        invitee: null,
    }

    handleFormChange(e) {
        this.setState({
            invitee: e.target.value
        })
    }

    inviteUser() {
        const newInviteObject = {
            email: this.state.invitee
        }
        console.debug('newInviteObject', newInviteObject)
    }

    render() {
        return  (
            <div className="row">
                <div className="col-lg-12">
                    <div className="classWrapper">
                        <h3>
                            Osztály gépház
                        </h3>
                        <div className="invite">
                        <div className="oneInput">
                            <input
                                name="invitee"
                                type="text"
                                onChange={(e) => this.handleFormChange(e)}
                                placeholder="Diák email címe"
                                className="form-control"
                                value={this.state.invitee}
                            />
                            </div>
                        </div>
                        <div className="submit-container">
                            <Button
                                className="btn-success"
                                disabled={!this.state.invitee}
                                onAction={() => this.inviteUser()}
                            >
                                Meghívás
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default ClassManage
import * as React from 'react'
import { Button } from 'client-common/component/general/Button'
import { Icon } from 'client-common/component/general/Icon'

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
        return newInviteObject
    }

    handleAction(action, payload) {
        switch(action) {
            case 'edit': {
                console.debug('edit', payload)
            }
        }
    }

    render() {
        return  (
            <div className="row">
                <div className="col-lg-12">
                    <div className="classWrapper">
                        <h2>
                            Osztály gépház
                        </h2>
                        <div className="invite">
                            <h3>
                                Diák meghívása az osztályba
                            </h3>
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
                        <div className="student-list">
                            <h3>
                                Diákok az osztályban
                            </h3>
                            <table className="table table-hover table mt-3 student-list-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Név</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                            <tbody>
                                {
                                    Array(10).fill(10).map((c, i) => (
                                        <tr>
                                            <td key={i}>{i + 1}</td>
                                            <td>
                                                {`Név ${i + 1}`}
                                            </td>
                                            <td>
                                                {`diak-${i}@gmail.com`}
                                            </td>
                                            <td className="actions">
                                                <p
                                                    onClick={() => this.handleAction('edit', {studentId: i})}
                                                >
                                                    <Icon fa="pencil" />
                                                </p>
                                                <Icon fa="times" />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default ClassManage
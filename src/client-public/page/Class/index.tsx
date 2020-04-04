import * as React from 'react'
import classnames from 'classnames'

import { Icon } from 'client-common/component/general/Icon'
import './ClassPage.scss'
import { Button } from 'client-common/component/general/Button'

class ClassPage extends React.Component<{}> {
    state = {
        isNewClassFormVisible: false,
        className: null,
    }

    toggleNewClassForm() {
        console.debug('clicked', true)
        this.setState({
            isNewClassFormVisible: !this.state.isNewClassFormVisible,
        })
    }

    handleFormChange(e) {
        this.setState({
            className: e.target.value
        })
    }
    creteNewClassRoom() {
        alert("creating new classroom")
    }
    render() {
        return  (
            <div className="row">
                <div className="col-lg-12">
                    <div className="teacherWrapper">
                        <p
                            onClick={() => this.toggleNewClassForm()}
                        >
                            <Icon fa={this.state.isNewClassFormVisible ? 'minus' : 'plus'} /> {
                                this.state.isNewClassFormVisible ? 'Mező elrejtése' : 'Új osztály létrehozása'
                            }
                        </p>
                        <div className={classnames(
                            "newclass-form",
                            this.state.isNewClassFormVisible ? 'visible' : 'hidden'
                        )}>
                            <div className="oneInput">
                                <input
                                    name="className"
                                    type="text"
                                    onChange={(e) => this.handleFormChange(e)}
                                    placeholder="Osztály neve"
                                    className="form-control"
                                />
                            </div>
                            <div className="submit-container">
                                <Button
                                    disabled={!this.state.className}
                                    className={classnames(
                                        "btn-success"
                                    )}
                                    onAction={() => this.creteNewClassRoom()}
                                >
                                    Osztly létrehozása
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <h3>
                        Saját osztályaim
                    </h3>
                    <div className="classroom-list">
                    <table className="table table-hover table mt-3 class-list-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Osztály neve</th>
                                <th>Létrehozva</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array(10).fill(10).map((c, i) => (
                                    <tr>
                                        <td key={i}>{i + 1}</td>
                                        <td>
                                            {`Osztály ${i + 1}`}
                                        </td>
                                        <td>
                                            {new Date().toLocaleDateString()}
                                        </td>
                                        <td className="actions">
                                            <Icon fa="pencil" />
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
            )
    }
}

export default ClassPage
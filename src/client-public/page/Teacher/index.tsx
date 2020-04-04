import * as React from 'react'
import classnames from 'classnames'

import { Icon } from 'client-common/component/general/Icon'
import './Teacher.module.scss'
import { Button } from 'client-common/component/general/Button'

class TeacherPage extends React.Component<{}> {
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
                    <div className="classroom-list">
                        
                    </div>
                </div>
            </div>
            )
    }
}

export default TeacherPage
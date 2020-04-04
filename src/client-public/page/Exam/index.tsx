import * as React from 'react'
import classnames from 'classnames'

import { Icon } from 'client-common/component/general/Icon'
import './Exam.scss'
import { Button } from 'client-common/component/general/Button'

class ExamPage extends React.Component<{}> {
    state = {
        isNewExamFormVisible: false,
        examName: null,
    }

    toggleNewClassForm() {
        console.debug('clicked', true)
        this.setState({
            isNewExamFormVisible: !this.state.isNewExamFormVisible,
        })
    }

    handleFormChange(e) {
        this.setState({
            examName: e.target.value
        })
    }
    creteNewClassRoom() {
        alert("creating new exam")
    }
    render() {
        return  (
            <div className="row">
                <div className="col-lg-12">
                    <div className="examWrapper">
                        <p
                            onClick={() => this.toggleNewClassForm()}
                        >
                            <Icon fa={this.state.isNewExamFormVisible ? 'minus' : 'plus'} /> {
                                this.state.isNewExamFormVisible ? 'Mező elrejtése' : 'Új dolgozat létrehozása'
                            }
                        </p>
                        <div className={classnames(
                            "newexam-form",
                            this.state.isNewExamFormVisible ? 'visible' : 'hidden'
                        )}>
                            <div className="oneInput">
                                <input
                                    name="className"
                                    type="text"
                                    onChange={(e) => this.handleFormChange(e)}
                                    placeholder="Dolgozat neve"
                                    className="form-control"
                                />
                            </div>
                            <div className="submit-container">
                                <Button
                                    disabled={!this.state.examName}
                                    className={classnames(
                                        "btn-success"
                                    )}
                                    onAction={() => this.creteNewClassRoom()}
                                >
                                    Dolgozat létrehozása
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <h3>
                        Dolgozatok
                    </h3>
                    <div className="exam-list">
                    <table className="table table-hover table mt-3 exam-list-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Feladatok</th>
                                <th>Létrehozva</th>
                                <th>Határidő</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array(10).fill(10).map((c, i) => (
                                    <tr>
                                        <td key={i}>{i + 1}</td>
                                        <td>
                                            {`Dolgozat ${i + 1}`}
                                        </td>
                                        <td>
                                            {new Date().toLocaleDateString()}
                                        </td>
																				<td>
                                            {new Date("2020-05-01").toLocaleDateString()}
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

export default ExamPage
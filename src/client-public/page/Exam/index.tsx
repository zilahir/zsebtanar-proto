import * as React from 'react'
import classnames from 'classnames'
import { History } from 'history'
import DatePicker from "react-datepicker"

import { Icon } from 'client-common/component/general/Icon'
import './Exam.scss'
import { Button } from 'client-common/component/general/Button'

interface ExamPageProps {
    history: History
}

class ExamPage extends React.Component<ExamPageProps> {
    state = {
        isNewExamFormVisible: false,
        examName: null,
        selectedExamDate: new Date()
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

    handleAction(action, payload) {
        switch(action) {
            case 'edit': {
                this.props.history.push(`/exam/${payload.examId}`)
            }
        }
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
                            <div className="oneInput">
                            <select
                                className="form-control"
                                onChange={null}
                                >
                                <option value="osztaly1">Osztály #1</option>
                                </select>
                            </div>
                            <div className="oneInput">
                              <DatePicker
                                selected={this.state.selectedExamDate}
                                onChange={null}
                                showTimeSelect
                                dateFormat="Pp"
                                className={classnames(
                                    "form-control",
                                    "exam-date"
                                )}
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
                                <th>Kitöltöttség</th>
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
                                        <td>
                                            <span>
                                                1/99
                                            </span>
                                        </td>
                                        <td className="actions">
                                            <p
                                                onClick={() => this.handleAction('edit', {examId: i})}
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
            )
    }
}

export default ExamPage
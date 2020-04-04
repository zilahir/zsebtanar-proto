import * as React from 'react'
import classnames from 'classnames'
import { pipe } from 'ramda'
import { RouteComponentProps } from 'react-router'
import DatePicker from "react-datepicker"
import { connect } from 'react-redux'
import { Icon } from 'client-common/component/general/Icon'
import { Button } from 'client-common/component/general/Button'
import { openTaskListModal, openExerciseSearch } from 'client-common/store/actions/modal'

import './Exam.scss'
import { withRouter } from 'react-router'
import { createNewExam } from 'client-common/services/exam'


interface ExamPageDispatchProps {
    openExerciseSearch: typeof openTaskListModal,
}

interface ExamPageProps {
    session: state.Session
}

const mapStateToProps = (state: state.Root) => ({
    session: state.app.session
})

interface ExamProps extends ExamPageDispatchProps, RouteComponentProps<{}> {}

type AllProps = ExamPageProps & ExamProps

export const ExamPage = pipe(
    withRouter,
    connect<{}, ExamPageDispatchProps, ExamProps>(
        mapStateToProps,
        { openExerciseSearch }
    )
)(
    class ExamPage extends React.Component<AllProps> {
        state = {
            isNewExamFormVisible: false,
            examName: null,
            selectedExamDate: new Date(),
            selectedClass: null,
            taskList: []
        }

        toggleNewExamForm() {
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

        createNewExam() {
            const newExamObject = {
                name: this.state.examName,
                date: this.state.selectedExamDate,
                classId: this.state.selectedClass,
                taskList: this.state.taskList,
                ownerId: this.props.session.user.uid
            }
            createNewExam(newExamObject)
            console.debug('newExamObject', newExamObject)
        }

        handleAction(action, payload) {
            switch(action) {
                case 'edit': {
                    console.debug(payload)
                    this.props.history.push(`exam/${payload.examId}`)
                }
            }
        }

        addExercise(exercise) {
            this.setState({
                taskList: {
                    ...this.state.taskList,
                    exercise,
                }
            })
        }

        openExercise() {
            this.props.openExerciseSearch({
                onSuccess: this.addExercise
            })
        }

        render() {
            return  (
                <div className="row">
                    <div className="col-lg-12">
                        <div className="examWrapper">
                            <p
                                onClick={() => this.toggleNewExamForm()}
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
                                    onChange={c => this.setState({selectedClass: c.target.value})}
                                    >
                                        <option value="osztaly1">Osztály #1</option>
                                        <option value="osztaly2">Osztály #2</option>
                                    </select>
                                </div>
                                <div className="oneInput">
                                    <DatePicker
                                        selected={this.state.selectedExamDate}
                                        onChange={d  => this.setState({selectedExamDate: d})}
                                        showTimeSelect
                                        dateFormat="Pp"
                                        className={classnames(
                                            "form-control",
                                            "exam-date"
                                        )}
                                    />
                                </div>
                                <div className="oneInput">
                                    <input
                                        type="text"
                                        placeholder="Feladatok"
                                        onClick={() => this.openExercise()}
                                        className="form-control"
                                    />
                                </div>
                                <div className="submit-container">
                                    <Button
                                        disabled={!this.state.examName}
                                        className={classnames(
                                            "btn-success"
                                        )}
                                        onAction={() => this.createNewExam()}
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
)
import * as React from 'react'
import classnames from 'classnames'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import { Icon } from 'client-common/component/general/Icon'
import './ClassPage.scss'
import { Button } from 'client-common/component/general/Button'
import { createNewClassRoom, getAllClassRoom } from 'client-common/services/classroom'
import { getClassRooms } from '../../../client-common/store/actions/classrooms'
import pipe from 'ramda/es/pipe'

interface ClassPageProps {
    session: state.Session,
    classrooms: state.App["classrooms"],
}

interface ClassPageDispatchProps {
    getClassRooms: typeof getClassRooms
  }

const mapStateToProps = (state: state.Root) => ({
    session: state.app.session,
    classrooms: state.app.classrooms,
})

type AllProps = ClassPageProps & RouteComponentProps<{}> & ClassPageDispatchProps


export const ClassPage = pipe(
    withRouter,
    connect<ClassPageProps, {}, RouteComponentProps<{}>>(
        mapStateToProps,
        { getClassRooms },
    )
)(
    class ClassPage extends React.Component<AllProps> {
    state = {
        isNewClassFormVisible: false,
        className: null,
    }

    toggleNewClassForm() {
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
        const newClassObject = {
            name: this.state.className,
            ownerId: this.props.session.user.uid
        }
        createNewClassRoom(newClassObject)
    }

    handleAction(action, payload) {
        switch(action) {
            case 'edit': {
                this.props.history.push(`/class/${payload.classId}`)
            }
        }
    }

    componentDidMount() {
        Promise.all([
            getAllClassRoom(this.props.session.user.uid)
        ]).then(res => {
            this.props.getClassRooms(res[0])
        })
    }
    render() {
        console.debug('classrooms', this.props.classrooms)
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
                                this.props.classrooms.classrooms.map((currClass, i) => (
                                    <tr>
                                        <td key={i}>{i + 1}</td>
                                        <td>
                                            {`Osztály ${i + 1}`}
                                        </td>
                                        <td>
                                            {new Date().toLocaleDateString()}
                                        </td>
                                        <td className="actions">
                                            <p
                                                role="button"
                                                onClick={() => this.handleAction('edit', {classId: i })}
                                            >
                                                <Icon fa="pencil" />
                                            </p>
                                            <p>
                                                <Icon fa="times" />
                                            </p>
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
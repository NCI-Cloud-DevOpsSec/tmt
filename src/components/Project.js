import React from 'react'

import { css } from 'glamor'
import { Auth } from 'aws-amplify'
import { observer } from 'mobx-react'

import UserStore from '../mobx/UserStore'
import { primary } from '../theme'

import { API, graphqlOperation } from 'aws-amplify'
import { getTesterProjects, listProject } from '../graphql'

const ProjectWithData = observer(class Project extends React.Component {
    signOut = async () => {
        try {
            await Auth.signOut()
        } catch (err) {
            console.log('error signing out')
        }
    }

    constructor() {
        super();
        this.projects = {
            "data": {
                "getUser": {
                    "projects": {
                        "items": []
                    }
                }
            }
        }
    }

    componentDidMount() {

        const { email, id, designation, group } = UserStore
        if (group === "Executive" || group === "Admin") {
            API.graphql(graphqlOperation(listProject)).then(result => {
                this.projects = result.data.listProject
            }).catch(err => {
                console.log("Error getting user projects!", err)
            })
        }
        else {
            API.graphql(graphqlOperation(getTesterProjects, { email: email })).then(result => {
                this.projects = result.data.listProject
            }).catch(err => {
                console.log("Error getting user projects!", err)
            })
        }

    }

    render() {
        const { email, id, designation, group } = UserStore
        return (
            <div {...css(styles.container)}>
                <p {...css(styles.title)}>Projects</p>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Unique ID</th>
                            <th>Description</th>
                            <th>Test Cases</th>
                            <th>Run Results</th>
                        </tr>
                    </thead>
                    {this.projects.data.getUser.projects.items.length !== 0 ?
                        <tbody>
                            {this.projects.data.getUser.projects.items.map(userProjects => {
                                <tr>
                                    <td {...css(styles.tableData)}>{userProjects.name}</td>
                                    <td {...css(styles.tableData)}>{userProjects.projectId}</td>
                                    <td {...css(styles.tableData)}>{userProjects.description}</td>
                                    <td {...css(styles.tableData)}>{userProjects.results.items.length}</td>
                                    <td {...css(styles.tableData)}>{userProjects.testCases.items.length}</td>
                                </tr>
                            })}
                            <tr>
                                {((group === "Admin") || (group === "Manager")) ?
                                    <tr>
                                        <td colSpan='5' {...css(styles.tableData)}> <button>Add Project</button> </td>
                                    </tr> :
                                    <br />
                                }
                            </tr>
                        </tbody> :
                        <tbody>
                            <tr>
                                {(group === "Tester") ?
                                    <td colSpan='5' {...css(styles.tableData)}> You are yet to be assigned with a Project </td> :
                                    ((group === "Admin") || (group === "Manager")) ?
                                        <td colSpan='5' {...css(styles.tableData)}> <button {...css(styles.button)}>Add Project</button> </td> :
                                        <br />
                                }
                            </tr>
                        </tbody>
                    }
                </table>

            </div>
        )
    }
})

const styles = {
    button: {
        margin: '10px 10px 0px',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededed',
        cursor: 'pointer'
    },
    createButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededed',
        cursor: 'pointer'
    },
    buttonText: {
        fontWeight: 500
    },
    container: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        border: `2px solid ${primary}`,
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 500,
        margin: 0,
        borderBottom: `2px solid ${primary}`,
        paddingBottom: 4
    },
    tableRow: {
        'text-align': 'center',
        alignItems: 'center'
    },
    tableData: {
        'text-align': 'center',
        alignItems: 'center'
    }
}

export default ProjectWithData

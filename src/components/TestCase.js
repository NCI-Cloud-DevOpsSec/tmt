import React from 'react'

import { css } from 'glamor'
import { observer } from 'mobx-react'

import UserStore from '../mobx/UserStore'
import { primary } from '../theme'

import { API, graphqlOperation } from 'aws-amplify'
import { listProjectWithTestCases, listTestCaseInProject, getTesterProjects, getTestCaseById, createTestcase } from '../graphql'

const TestCaseWithData = observer(class TestCase extends React.Component {

    constructor() {
        super();
        this.state = {
            projects: {
                "items": []
            },
            isAddRowHidden: true,
            projectIds: [],
            testCases: {
                "items": []
            },
            testCaseId: '',
            testCaseDescription: '',
            testCaseName: '',
            testCaseModule: '',
            testCaseProjectId: [],
            selectedProject: '',
            validationError: ''
        }
        this.onAddNewTestCaseDescriptionChange = this.onAddNewTestCaseDescriptionChange.bind(this);
        this.onAddNewTestCaseIdChange = this.onAddNewTestCaseIdChange.bind(this);
        this.onAddNewTestCaseNameChange = this.onAddNewTestCaseNameChange.bind(this);
        this.onAddNewTestCaseModuleChange = this.onAddNewTestCaseModuleChange.bind(this);
        this.onProjectChange = this.onProjectChange.bind(this);
    }

    onAddNewTestCaseNameChange = event => {
        this.setState({
            testCaseName: event.target.value
        })
    }

    onAddNewTestCaseModuleChange = event => {
        this.setState({
            testCaseModule: event.target.value
        })
    }

    onAddNewTestCaseDescriptionChange = event => {
        this.setState({
            testCaseDescription: event.target.value
        })
    }

    onAddNewTestCaseIdChange = event => {
        this.setState({
            testCaseId: event.target.value
        })
    }

    onAddTestCaseClick = event => {
        if(this.state.isAddRowHidden){
            this.setState({
                isAddRowHidden: false
            })
        }
        else{
            this.setState({
                isAddRowHidden: true
            })
        }
    }

    onCreateTestCaseClick = event => {
        if (this.state.testCaseId !== "" &&
            this.state.testCaseName !== "" &&
            this.state.testCaseDescription !== "" &&
            this.state.testCaseModule !== "" &&
            this.state.testCaseProjectId !== undefined) {
            API.graphql(graphqlOperation(getTestCaseById, { projectId: this.state.selectedProject, testCaseId: this.state.testCaseId }))
                .then(result => {
                    if (result.data.listTestCase.items.length === 0) {
                        API.graphql(graphqlOperation(createTestcase, {
                            testCaseId: this.state.testCaseId,
                            projectId: this.state.selectedProject,
                            name: this.state.testCaseName,
                            description: this.state.testCaseDescription,
                            module: this.state.testCaseModule
                        })).then(result => {
                        }).catch(err => {
                            console.log("Error creation new test case in 2", err)
                            alert("Error creating test case! Make sure to 'Add Test Case' and fill all enables fields before 'Create Test Case'")
                        })
                    }
                    else {
                        alert("Test Case ID already available. Provide an unique Test Case ID")
                    }
                }).catch(err => {
                    console.log("Error Creating new test case in 1", err)
                    alert("Error creating test case! Contact Support")
                })
        }
        else {
            alert("Perform 'Add Test Case' and fill all details before performing 'Create Test Case'")
        }
    }

    componentDidMount() {

        const { email, group } = UserStore
        if (group === "Executive" || group === "Admin") {
            API.graphql(graphqlOperation(listProjectWithTestCases))
            .then(result => {
                this.setState({
                    projects: result.data.listProject,
                })
                if(result.data.listProject.items.length !== 0){
                    let projectIDsFromApi = result.data.listProject.items.map(data => {
                        return {
                            value: data.projectId,
                            display: data.projectId
                        }
                    })
                    this.setState({
                        projectIds: [{
                            value: '',
                            display: 'Select a project to load Test Cases'
                        }].concat(projectIDsFromApi)
                    })
                }
            }).catch(err => {
                console.log("Error getting user projects!", err)
            })
        }
        else {
            API.graphql(graphqlOperation(getTesterProjects, { email: email }))
            .then(result => {
                this.setState({
                    projects: result.data.listProject
                })
                if(result.data.listProject.items.length !== 0){
                    let projectIDsFromApi = result.data.listProject.items.map(data => {
                        return {
                            value: data.projectId,
                            display: data.projectId
                        }
                    })
                    this.setState({
                        projectIds: [{
                            value: '',
                            display: 'Select a project to load Test Cases'
                        }].concat(projectIDsFromApi)
                    })
                }
            }).catch(err => {
                console.log("Error getting user projects!", err)
            })
        }

    }

    onProjectChange = event => {
        this.setState({
            selectedProject: event.target.value,
            validationError: event.target.value === "" ? "You must select a Project" : ""
        });
        API.graphql(graphqlOperation(listTestCaseInProject, { projectId: event.target.value }))
            .then(result => {
                this.setState({
                    testCases: result.data.listTestCase
                })
            }).catch(err => {
                console.log("Error listing test cases in the selected project", err)
            })
    }

    render() {
        const { group } = UserStore
        return (
            <div {...css(styles.container)}>
                <p {...css(styles.title)}>Test Cases
                    <select {...css(styles.projectSelector)}
                        id="projects" value={this.state.selectedProject}
                        onChange={this.onProjectChange}>
                        {
                            this.state.projectIds.map(projects => {
                                return (
                                <option key={projects.value} value={projects.value}
                                    title={this.state.selectedProject}>
                                    {projects.display}
                                </option>
                                )
                            })
                        }
                    </select>
                </p>
                <table {...css(styles.table)}>
                    <thead>
                        <tr {...css(styles.tableRow)}>
                            <th>Name</th>
                            <th>Test Case ID</th>
                            <th>Description</th>
                            <th>Module</th>
                            <th>Test Steps</th>
                        </tr>
                        <tr {...css(styles.tableRow)} hidden={this.state.isAddRowHidden}>
                            <td {...css(styles.tableData)}>
                                <input {...css(styles.addProjectField)} type="text" onChange={this.onAddNewTestCaseNameChange} placeholder="Name"></input>
                            </td>
                            <td {...css(styles.tableData)}>
                                <input type="text" onChange={this.onAddNewTestCaseIdChange} placeholder="Recommended ID: 'TC_Ascending Number'"></input>
                            </td>
                            <td {...css(styles.tableData)}>
                                <textarea onChange={this.onAddNewTestCaseDescriptionChange} ></textarea>
                            </td>
                            <td {...css(styles.tableData)}>
                                <input type="text" onChange={this.onAddNewTestCaseModuleChange} placeholder="Mofule Name"></input>
                            </td>
                            <td {...css(styles.tableData)}>
                                <input type="number" disabled={true} value={0}></input>
                            </td>
                        </tr>
                    </thead>
                    {this.state.testCases.items.length !== 0 ?
                        <tbody>
                            {this.state.testCases.items.map((testCases) => {
                                return (
                                    <tr {...css(styles.tableRow)}>
                                        <td {...css(styles.tableData)}>{testCases.name}</td>
                                        <td {...css(styles.tableData)}>{testCases.testCaseId}</td>
                                        <td {...css(styles.tableData)}>{testCases.description}</td>
                                        <td {...css(styles.tableData)}>{testCases.module}</td>
                                        <td {...css(styles.tableData)}>{testCases.testSteps.items.length}</td>
                                    </tr>
                                )
                            })}
                            {((group === "Admin") || (group === "Manager")) ?
                                <tr {...css(styles.tableRow)}>
                                    <td {...css(styles.tableData)} >
                                        <button {...css(styles.button)} onClick={this.onAddTestCaseClick}>Add Test Case</button> </td>
                                    <td {...css(styles.tableData)}>
                                        <button {...css(styles.button)} onClick={this.onCreateTestCaseClick}>Create Test Case</button> </td>
                                </tr> :
                                <tr>
                                    <br />
                                </tr>
                            }
                        </tbody> :
                        <tbody>
                            {(group === "Tester") ?
                                <tr {...css(styles.tableRow)}>
                                    <td colSpan='5' {...css(styles.tableData)}> Yet to create test cases to this project </td>
                                </tr> :
                                ((group === "Admin") || (group === "Manager")) ?
                                    <tr {...css(styles.tableRow)}>
                                        <td {...css(styles.tableData)} >
                                        <button {...css(styles.button)} onClick={this.onAddTestCaseClick}>Add Test Case</button> </td>
                                    <td {...css(styles.tableData)}>
                                        <button {...css(styles.button)} onClick={this.onCreateTestCaseClick}>Create Test Case</button> </td>
                                    </tr> :
                                    <tr>
                                        <td colSpan='5' {...css(styles.tableData)}> Yet to create test cases to this project </td>
                                    </tr>
                            }

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
        height: '80%',
        position: 'absolute',
        left: '50%',
        top: '55%',
        width: '100%',
        'overflowY': 'scroll',
        transform: 'translate(-50%, -50%)'
    },
    title: {
        fontSize: 20,
        fontWeight: 500,
        margin: 0,
        borderBottom: `2px solid ${primary}`,
        paddingBottom: 4
    },
    table: {
        width: '100%',
    },
    tableRow: {
        'textAlign': 'center',
        alignItems: 'center',
        width: '100%',
        border: `2px solid ${primary}`
    },
    tableData: {
        'textAlign': 'center',
        alignItems: 'center',
        'verticalAlign': 'middle',
        border: `2px solid ${primary}`
    },
    addProjectField: {
        width: '80%',
        height: '100%'
    },
    projectSelector: {
        margin: '10px 10px 0px',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededed',
        cursor: 'pointer'
    }
}

export default TestCaseWithData

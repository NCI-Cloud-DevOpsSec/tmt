import React from 'react'

import { css } from 'glamor'
import { observer } from 'mobx-react'

import UserStore from '../mobx/UserStore'
import { primary } from '../theme'

import { API, graphqlOperation } from 'aws-amplify'
import { getTesterProjects, listProject, createProject, getProjectById } from '../graphql'

import MultipleValueTextInput from 'react-multivalue-text-input';

const ProjectWithData = observer(class Project extends React.Component {

    constructor() {
        super();
        this.state = {
            projects: {
                "items": []
            },
            isAddRowHidden: true,
            projectName: '',
            projectId: '',
            projectDescription: '',
            testers: []
        }
        this.onAddNewProjectDescriptionChange = this.onAddNewProjectDescriptionChange.bind(this);
        this.onAddNewProjectIdChange = this.onAddNewProjectIdChange.bind(this);
        this.onAddNewProjectNameChange = this.onAddNewProjectNameChange.bind(this);

    }

    onAddNewProjectNameChange = event => {
        this.setState({
            projectName: event.target.value
        })
    }

    onAddNewProjectDescriptionChange = event => {
        this.setState({
            projectDescription: event.target.value
        })
    }

    onAddNewProjectIdChange = event => {
        this.setState({
            projectId: event.target.value
        })
    }

    onAddProjectClick = event => {
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

    onCreateProjectClick = event => {
        if (this.state.projectId !== "" && this.state.name !== "" && this.state.testers !== "") {
            API.graphql(graphqlOperation(getProjectById, { projectId: this.state.projectId }))
                .then(result => {
                    if (result.data.listProject.items.length === 0) {
                        API.graphql(graphqlOperation(createProject, {
                            projectId: this.state.projectId,
                            name: this.state.projectName,
                            description: this.state.projectDescription,
                            testers: this.state.testers
                        })).then(result => {
                        }).catch(err => {
                            console.log("Error Creating new project", err)
                            alert("Error creating project! Make sure to 'Add Project' and fill all enables fields before 'Create Project'")
                        })
                    }
                    else{
                        alert("Project ID already available. Provide an unique Project ID")
                    }
                }).catch(err => {
                    console.log("Error Creating new project", err)
                    alert("Error creating project! Contact Support")
                })
        }
        else {
            alert("Perform 'Add Project' and fill all details before performing 'Create Project'")
        }
    }

    componentDidMount() {

        const { email, group } = UserStore
        if (group === "Executive" || group === "Admin") {
            API.graphql(graphqlOperation(listProject))
            .then(result => {
                this.setState({
                    projects: result.data.listProject
                })
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
            }).catch(err => {
                console.log("Error getting user projects!", err)
            })
        }

    }

    render() {
        const { group } = UserStore
        return (
            <div {...css(styles.container)}>
                <p {...css(styles.title)}>Projects</p>
                <table {...css(styles.table)}>
                    <thead>
                        <tr {...css(styles.tableRow)}>
                            <th>Name</th>
                            <th>Project ID</th>
                            <th>Description</th>
                            <th>Testers</th>
                        </tr>
                        <tr {...css(styles.tableRow)} hidden={this.state.isAddRowHidden}>
                            <td {...css(styles.tableData)}>
                                <input {...css(styles.addProjectField)} type="text" onChange={this.onAddNewProjectNameChange} placeholder="Name"></input>
                            </td>
                            <td {...css(styles.tableData)}>
                                <input type="text" onChange={this.onAddNewProjectIdChange} placeholder="Recommended ID: 'Project Name_Random number'"></input>
                            </td>
                            <td {...css(styles.tableData)}>
                                <textarea onChange={this.onAddNewProjectDescriptionChange} ></textarea>
                            </td>
                            <td {...css(styles.tableData)}>
                                <MultipleValueTextInput
                                    onItemAdded={(item, allItems) =>
                                        this.setState({
                                            testers: allItems
                                        })
                                    }
                                    onItemDeleted={(item, allItems) =>
                                        this.setState({
                                            testers: allItems
                                        })
                                    }
                                    name="project_testers"
                                    placeholder="Press Enter after each email address"
                                />
                            </td>
                        </tr>
                    </thead>
                    {this.state.projects.items.length !== 0 ?
                        <tbody>
                            {this.state.projects.items.map((userProjects) => {
                                return (
                                    <tr {...css(styles.tableRow)}>
                                        <td {...css(styles.tableData)}>{userProjects.name}</td>
                                        <td {...css(styles.tableData)}>{userProjects.projectId}</td>
                                        <td {...css(styles.tableData)}>{userProjects.description}</td>
                                        <td {...css(styles.tableData)}><ul>{userProjects.testers.map(value=>{
                                            return( <li>{value}</li> )
                                        })}</ul></td>
                                    </tr>
                                )
                            })}
                            {((group === "Admin") || (group === "Manager")) ?
                                <tr {...css(styles.tableRow)}>
                                    <td {...css(styles.tableData)} >
                                        <button {...css(styles.button)} onClick={this.onAddProjectClick}>Add Project</button> </td>
                                    <td {...css(styles.tableData)}>
                                        <button {...css(styles.button)} onClick={this.onCreateProjectClick}>Create Project</button> </td>
                                </tr> :
                                <tr>
                                    <br />
                                </tr>
                            }
                        </tbody> :
                        <tbody>
                            {(group === "Tester") ?
                                <tr {...css(styles.tableRow)}>
                                    <td colSpan='5' {...css(styles.tableData)}> You are yet to be assigned with a Project </td>
                                </tr> :
                                ((group === "Admin") || (group === "Manager")) ?
                                    <tr {...css(styles.tableRow)}>
                                        <td  {...css(styles.tableData)} > <button {...css(styles.button)} onClick={this.onAddProjectClick}>Add Project</button> </td>
                                        <td  {...css(styles.tableData)} > <button {...css(styles.button)} onClick={this.onCreateProjectClick}>Create Project</button> </td>
                                    </tr> :
                                    <tr>
                                        <td colSpan='5' {...css(styles.tableData)}> No Projects Yet to view </td>
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
    }
}

export default ProjectWithData

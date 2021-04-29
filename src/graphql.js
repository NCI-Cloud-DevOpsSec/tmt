import graphql from 'graphql-tag'
import gql from 'graphql-tag';

// mutations
const createUser = `
  mutation($email: String!, $username: String!, $group: String!, $designation: String!) {
    createUser(input: {
        username: $username
        email: $email
        group: $group
        designation: $designation
    }) {
      id
      username
      email
      group
      designation
      createdAt
    }
  }
`

const createProject = `
  mutation($projectId: String!, $name: String!, $description: String!, $testers: [String!]!) {
    createProject(input: {
      projectId: $projectId
      name: $name
      description: $description
      testers: $testers
    }
    ) {
      id
      name
      testers
      projectId
      description
    }
  }
`

const createTestcase = `
  mutation($testCaseId: String!, $projectId: String!, $name: String!, $description: String!, $module: String!) {
    createTestcase(input: {
      testCaseId: $testCaseId
      projectId: $projectId
      name: $name
      description: $description
      module: $module
    }
    ) {
      name
      module
      id
      description
      testCaseId
      projectId
    }
  }
`

const updateUser = `
mutation ($id: ID!, $designation: String, $group: String) {
  updateUser(input: {
    id: $id, 
    designation: $designation,
    group: $group
  }) 
  {
    id
    group
    email
    designation
    createdAt
  }
}
`
//Queries

const getUser = graphql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      username
      group
      designation
    }
  }
`
const getTesterProjects = graphql`
query getTesterProjects($email: String!){
  listProject(filter: {testers: {contains: $email}}) {
    items {
      description
      id
      name
      projectId
      results {
        items {
          runId
        }
      }
      testCases {
        items {
          testCaseId
        }
      }
      testers
    }
  }
}
`

const getUserByEmail = graphql`
  query listUsers ($email: String!){
    listUsers (filter: {email: {eq: $email}}){
      items {
        id
        email
        username
        group
        designation
        createdAt
      }
    }
  }
`

const listUsers = graphql`
  query listUsers {
    listUsers {
      items {
        id
        email
        username
        group
        designation
        createdAt
      }
    }
  }
`

const listProject = graphql`
  query listProject {
    listProject {
      items {
      id
      name
      projectId
      description
      results {
        items {
          runId
        }
      }
      testCases {
        items {
          testCaseId
        }
      }
      testers
    }
    }
  }
`

const getProjectById = graphql`
query getProjectById ($projectId: String!){
  listProject(filter: {projectId: {eq: $projectId}}) {
    items {
      projectId
    }
  }
}
`

const getTestCaseById = graphql`
query getTestCaseById ($projectId: String!, $testCaseId: String!){
  listTestCase(filter: {projectId: {eq: $projectId}, and: {testCaseId: {eq: $testCaseId}}}) {
    items {
      testCaseId
    }
  }
}
`

const listProjectWithTestCases = graphql`
  query listProjectWithTestCases {
    listProject {
    items {
      projectId
      testCases {
        items {
          id
          module
          name
          description
          testSteps {
            items {
              testStepId
            }
          }
          testCaseId
          testCaseProjectId
        }
      }
    }
  }
  }
`

const listTestCaseInProject = graphql`
query listTestCaseInProject ($projectId: String!){
  listTestCase(filter: {projectId: {eq: $projectId}}) {
    items {
      description
      module
      name
      projectId
      testCaseId
      testSteps {
        items {
          testStepId
        }
      }
    }
  }
}
`

const onCreateUser = gql`subscription OnCreateUser {
  onCreateUser {
    id
    email
    group
    designation
    username
    createdAt
  }
}
`;

export {
  createUser,
  createProject,
  createTestcase,
  updateUser,
  getUser,
  getTesterProjects,
  getUserByEmail,
  getProjectById,
  getTestCaseById,
  listUsers,
  listProject,
  listProjectWithTestCases,
  listTestCaseInProject,
  onCreateUser
}

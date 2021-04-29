/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProjectLink = /* GraphQL */ `
  subscription OnCreateProjectLink($projectLinkUserId: ID!) {
    onCreateProjectLink(projectLinkUserId: $projectLinkUserId) {
      id
      user {
        id
        group
        username
        email
        dateOfBirth
        designation
        projects {
          items {
            id
            user {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            projectLinkUserId
            project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            projectLinkProjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        testCases {
          items {
            id
            testCaseId
            projectId
            name
            description
            module
            project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            testSteps {
              nextToken
            }
            author {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            authorId
            testCaseProjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        results {
          items {
            id
            runId
            Project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            author {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            authorId
            resultProjectId
            reports {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      projectLinkUserId
      project {
        id
        projectId
        name
        description
        results {
          items {
            id
            runId
            Project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            author {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            authorId
            resultProjectId
            reports {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        testCases {
          items {
            id
            testCaseId
            projectId
            name
            description
            module
            project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            testSteps {
              nextToken
            }
            author {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            authorId
            testCaseProjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        associated {
          items {
            id
            user {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            projectLinkUserId
            project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            projectLinkProjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        testers
        createdAt
        updatedAt
      }
      projectLinkProjectId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTestCase = /* GraphQL */ `
  subscription OnCreateTestCase($testCaseProjectId: ID!) {
    onCreateTestCase(testCaseProjectId: $testCaseProjectId) {
      id
      testCaseId
      projectId
      name
      description
      module
      project {
        id
        projectId
        name
        description
        results {
          items {
            id
            runId
            Project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            author {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            authorId
            resultProjectId
            reports {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        testCases {
          items {
            id
            testCaseId
            projectId
            name
            description
            module
            project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            testSteps {
              nextToken
            }
            author {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            authorId
            testCaseProjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        associated {
          items {
            id
            user {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            projectLinkUserId
            project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            projectLinkProjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        testers
        createdAt
        updatedAt
      }
      testSteps {
        items {
          id
          testStepId
          description
          testCase {
            id
            testCaseId
            projectId
            name
            description
            module
            project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            testSteps {
              nextToken
            }
            author {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            authorId
            testCaseProjectId
            createdAt
            updatedAt
          }
          testStepTestCaseId
          createdAt
          updatedAt
        }
        nextToken
      }
      author {
        id
        group
        username
        email
        dateOfBirth
        designation
        projects {
          items {
            id
            user {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            projectLinkUserId
            project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            projectLinkProjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        testCases {
          items {
            id
            testCaseId
            projectId
            name
            description
            module
            project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            testSteps {
              nextToken
            }
            author {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            authorId
            testCaseProjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        results {
          items {
            id
            runId
            Project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            author {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            authorId
            resultProjectId
            reports {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      authorId
      testCaseProjectId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateResult = /* GraphQL */ `
  subscription OnCreateResult($resultProjectId: ID!) {
    onCreateResult(resultProjectId: $resultProjectId) {
      id
      runId
      Project {
        id
        projectId
        name
        description
        results {
          items {
            id
            runId
            Project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            author {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            authorId
            resultProjectId
            reports {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        testCases {
          items {
            id
            testCaseId
            projectId
            name
            description
            module
            project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            testSteps {
              nextToken
            }
            author {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            authorId
            testCaseProjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        associated {
          items {
            id
            user {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            projectLinkUserId
            project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            projectLinkProjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        testers
        createdAt
        updatedAt
      }
      author {
        id
        group
        username
        email
        dateOfBirth
        designation
        projects {
          items {
            id
            user {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            projectLinkUserId
            project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            projectLinkProjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        testCases {
          items {
            id
            testCaseId
            projectId
            name
            description
            module
            project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            testSteps {
              nextToken
            }
            author {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            authorId
            testCaseProjectId
            createdAt
            updatedAt
          }
          nextToken
        }
        results {
          items {
            id
            runId
            Project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            author {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            authorId
            resultProjectId
            reports {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      authorId
      resultProjectId
      reports {
        items {
          id
          result {
            id
            runId
            Project {
              id
              projectId
              name
              description
              testers
              createdAt
              updatedAt
            }
            author {
              id
              group
              username
              email
              dateOfBirth
              designation
              createdAt
              updatedAt
              owner
            }
            authorId
            resultProjectId
            reports {
              nextToken
            }
            createdAt
            updatedAt
          }
          totalExecuted
          totalPass
          totalFail
          totalResultUndetermined
          testCaseReport {
            items {
              id
              testCaseId
              testCaseStatus
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTestStep = /* GraphQL */ `
  subscription OnCreateTestStep($testStepTestCaseId: ID!) {
    onCreateTestStep(testStepTestCaseId: $testStepTestCaseId) {
      id
      testStepId
      description
      testCase {
        id
        testCaseId
        projectId
        name
        description
        module
        project {
          id
          projectId
          name
          description
          results {
            items {
              id
              runId
              authorId
              resultProjectId
              createdAt
              updatedAt
            }
            nextToken
          }
          testCases {
            items {
              id
              testCaseId
              projectId
              name
              description
              module
              authorId
              testCaseProjectId
              createdAt
              updatedAt
            }
            nextToken
          }
          associated {
            items {
              id
              projectLinkUserId
              projectLinkProjectId
              createdAt
              updatedAt
            }
            nextToken
          }
          testers
          createdAt
          updatedAt
        }
        testSteps {
          items {
            id
            testStepId
            description
            testCase {
              id
              testCaseId
              projectId
              name
              description
              module
              authorId
              testCaseProjectId
              createdAt
              updatedAt
            }
            testStepTestCaseId
            createdAt
            updatedAt
          }
          nextToken
        }
        author {
          id
          group
          username
          email
          dateOfBirth
          designation
          projects {
            items {
              id
              projectLinkUserId
              projectLinkProjectId
              createdAt
              updatedAt
            }
            nextToken
          }
          testCases {
            items {
              id
              testCaseId
              projectId
              name
              description
              module
              authorId
              testCaseProjectId
              createdAt
              updatedAt
            }
            nextToken
          }
          results {
            items {
              id
              runId
              authorId
              resultProjectId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        authorId
        testCaseProjectId
        createdAt
        updatedAt
      }
      testStepTestCaseId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
      id
      group
      username
      email
      dateOfBirth
      designation
      projects {
        items {
          id
          user {
            id
            group
            username
            email
            dateOfBirth
            designation
            projects {
              nextToken
            }
            testCases {
              nextToken
            }
            results {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          projectLinkUserId
          project {
            id
            projectId
            name
            description
            results {
              nextToken
            }
            testCases {
              nextToken
            }
            associated {
              nextToken
            }
            testers
            createdAt
            updatedAt
          }
          projectLinkProjectId
          createdAt
          updatedAt
        }
        nextToken
      }
      testCases {
        items {
          id
          testCaseId
          projectId
          name
          description
          module
          project {
            id
            projectId
            name
            description
            results {
              nextToken
            }
            testCases {
              nextToken
            }
            associated {
              nextToken
            }
            testers
            createdAt
            updatedAt
          }
          testSteps {
            items {
              id
              testStepId
              description
              testStepTestCaseId
              createdAt
              updatedAt
            }
            nextToken
          }
          author {
            id
            group
            username
            email
            dateOfBirth
            designation
            projects {
              nextToken
            }
            testCases {
              nextToken
            }
            results {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          authorId
          testCaseProjectId
          createdAt
          updatedAt
        }
        nextToken
      }
      results {
        items {
          id
          runId
          Project {
            id
            projectId
            name
            description
            results {
              nextToken
            }
            testCases {
              nextToken
            }
            associated {
              nextToken
            }
            testers
            createdAt
            updatedAt
          }
          author {
            id
            group
            username
            email
            dateOfBirth
            designation
            projects {
              nextToken
            }
            testCases {
              nextToken
            }
            results {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          authorId
          resultProjectId
          reports {
            items {
              id
              totalExecuted
              totalPass
              totalFail
              totalResultUndetermined
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
      id
      group
      username
      email
      dateOfBirth
      designation
      projects {
        items {
          id
          user {
            id
            group
            username
            email
            dateOfBirth
            designation
            projects {
              nextToken
            }
            testCases {
              nextToken
            }
            results {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          projectLinkUserId
          project {
            id
            projectId
            name
            description
            results {
              nextToken
            }
            testCases {
              nextToken
            }
            associated {
              nextToken
            }
            testers
            createdAt
            updatedAt
          }
          projectLinkProjectId
          createdAt
          updatedAt
        }
        nextToken
      }
      testCases {
        items {
          id
          testCaseId
          projectId
          name
          description
          module
          project {
            id
            projectId
            name
            description
            results {
              nextToken
            }
            testCases {
              nextToken
            }
            associated {
              nextToken
            }
            testers
            createdAt
            updatedAt
          }
          testSteps {
            items {
              id
              testStepId
              description
              testStepTestCaseId
              createdAt
              updatedAt
            }
            nextToken
          }
          author {
            id
            group
            username
            email
            dateOfBirth
            designation
            projects {
              nextToken
            }
            testCases {
              nextToken
            }
            results {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          authorId
          testCaseProjectId
          createdAt
          updatedAt
        }
        nextToken
      }
      results {
        items {
          id
          runId
          Project {
            id
            projectId
            name
            description
            results {
              nextToken
            }
            testCases {
              nextToken
            }
            associated {
              nextToken
            }
            testers
            createdAt
            updatedAt
          }
          author {
            id
            group
            username
            email
            dateOfBirth
            designation
            projects {
              nextToken
            }
            testCases {
              nextToken
            }
            results {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          authorId
          resultProjectId
          reports {
            items {
              id
              totalExecuted
              totalPass
              totalFail
              totalResultUndetermined
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
      id
      group
      username
      email
      dateOfBirth
      designation
      projects {
        items {
          id
          user {
            id
            group
            username
            email
            dateOfBirth
            designation
            projects {
              nextToken
            }
            testCases {
              nextToken
            }
            results {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          projectLinkUserId
          project {
            id
            projectId
            name
            description
            results {
              nextToken
            }
            testCases {
              nextToken
            }
            associated {
              nextToken
            }
            testers
            createdAt
            updatedAt
          }
          projectLinkProjectId
          createdAt
          updatedAt
        }
        nextToken
      }
      testCases {
        items {
          id
          testCaseId
          projectId
          name
          description
          module
          project {
            id
            projectId
            name
            description
            results {
              nextToken
            }
            testCases {
              nextToken
            }
            associated {
              nextToken
            }
            testers
            createdAt
            updatedAt
          }
          testSteps {
            items {
              id
              testStepId
              description
              testStepTestCaseId
              createdAt
              updatedAt
            }
            nextToken
          }
          author {
            id
            group
            username
            email
            dateOfBirth
            designation
            projects {
              nextToken
            }
            testCases {
              nextToken
            }
            results {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          authorId
          testCaseProjectId
          createdAt
          updatedAt
        }
        nextToken
      }
      results {
        items {
          id
          runId
          Project {
            id
            projectId
            name
            description
            results {
              nextToken
            }
            testCases {
              nextToken
            }
            associated {
              nextToken
            }
            testers
            createdAt
            updatedAt
          }
          author {
            id
            group
            username
            email
            dateOfBirth
            designation
            projects {
              nextToken
            }
            testCases {
              nextToken
            }
            results {
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          authorId
          resultProjectId
          reports {
            items {
              id
              totalExecuted
              totalPass
              totalFail
              totalResultUndetermined
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;

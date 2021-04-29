/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
      testers
      createdAt
      updatedAt
    }
  }
`;
export const listProject = /* GraphQL */ `
  query ListProject(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProject(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTestCase = /* GraphQL */ `
  query GetTestCase($id: ID!) {
    getTestCase(id: $id) {
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
export const listTestCase = /* GraphQL */ `
  query ListTestCase(
    $filter: ModelTestCaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestCase(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getTestStep = /* GraphQL */ `
  query GetTestStep($id: ID!) {
    getTestStep(id: $id) {
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
export const listTestStep = /* GraphQL */ `
  query ListTestStep(
    $filter: ModelTestStepFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestStep(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        testStepTestCaseId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResult = /* GraphQL */ `
  query GetResult($id: ID!) {
    getResult(id: $id) {
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
export const listResult = /* GraphQL */ `
  query ListResult(
    $filter: ModelResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResult(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        resultProjectId
        reports {
          items {
            id
            result {
              id
              runId
              authorId
              resultProjectId
              createdAt
              updatedAt
            }
            totalExecuted
            totalPass
            totalFail
            totalResultUndetermined
            testCaseReport {
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
      nextToken
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
      id
      result {
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
        resultProjectId
        reports {
          items {
            id
            result {
              id
              runId
              authorId
              resultProjectId
              createdAt
              updatedAt
            }
            totalExecuted
            totalPass
            totalFail
            totalResultUndetermined
            testCaseReport {
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
      totalExecuted
      totalPass
      totalFail
      totalResultUndetermined
      testCaseReport {
        items {
          id
          testCaseId
          testCaseStatus
          report {
            id
            result {
              id
              runId
              authorId
              resultProjectId
              createdAt
              updatedAt
            }
            totalExecuted
            totalPass
            totalFail
            totalResultUndetermined
            testCaseReport {
              nextToken
            }
            createdAt
            updatedAt
          }
          testStepReports {
            items {
              id
              testStepId
              testStepStatus
              testStepArtefacts
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
export const listReport = /* GraphQL */ `
  query ListReport(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReport(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        totalExecuted
        totalPass
        totalFail
        totalResultUndetermined
        testCaseReport {
          items {
            id
            testCaseId
            testCaseStatus
            report {
              id
              totalExecuted
              totalPass
              totalFail
              totalResultUndetermined
              createdAt
              updatedAt
            }
            testStepReports {
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
      nextToken
    }
  }
`;
export const getTestCaseReport = /* GraphQL */ `
  query GetTestCaseReport($id: ID!) {
    getTestCaseReport(id: $id) {
      id
      testCaseId
      testCaseStatus
      report {
        id
        result {
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
        totalExecuted
        totalPass
        totalFail
        totalResultUndetermined
        testCaseReport {
          items {
            id
            testCaseId
            testCaseStatus
            report {
              id
              totalExecuted
              totalPass
              totalFail
              totalResultUndetermined
              createdAt
              updatedAt
            }
            testStepReports {
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
      testStepReports {
        items {
          id
          testStepId
          testStepStatus
          testStepArtefacts
          testCaseReport {
            id
            testCaseId
            testCaseStatus
            report {
              id
              totalExecuted
              totalPass
              totalFail
              totalResultUndetermined
              createdAt
              updatedAt
            }
            testStepReports {
              nextToken
            }
            createdAt
            updatedAt
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
export const listTestCaseReport = /* GraphQL */ `
  query ListTestCaseReport(
    $filter: ModelTestCaseReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestCaseReport(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        testCaseId
        testCaseStatus
        report {
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
        testStepReports {
          items {
            id
            testStepId
            testStepStatus
            testStepArtefacts
            testCaseReport {
              id
              testCaseId
              testCaseStatus
              createdAt
              updatedAt
            }
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
  }
`;
export const getTestStepReport = /* GraphQL */ `
  query GetTestStepReport($id: ID!) {
    getTestStepReport(id: $id) {
      id
      testStepId
      testStepStatus
      testStepArtefacts
      testCaseReport {
        id
        testCaseId
        testCaseStatus
        report {
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
        testStepReports {
          items {
            id
            testStepId
            testStepStatus
            testStepArtefacts
            testCaseReport {
              id
              testCaseId
              testCaseStatus
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTestStepReport = /* GraphQL */ `
  query ListTestStepReport(
    $filter: ModelTestStepReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestStepReport(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        testStepId
        testStepStatus
        testStepArtefacts
        testCaseReport {
          id
          testCaseId
          testCaseStatus
          report {
            id
            result {
              id
              runId
              authorId
              resultProjectId
              createdAt
              updatedAt
            }
            totalExecuted
            totalPass
            totalFail
            totalResultUndetermined
            testCaseReport {
              nextToken
            }
            createdAt
            updatedAt
          }
          testStepReports {
            items {
              id
              testStepId
              testStepStatus
              testStepArtefacts
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const createTestcase = /* GraphQL */ `
  mutation CreateTestcase(
    $input: CreateTestCaseInput!
    $condition: ModelTestCaseConditionInput
  ) {
    createTestcase(input: $input, condition: $condition) {
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
export const createTestStep = /* GraphQL */ `
  mutation CreateTestStep(
    $input: CreateTestStepInput!
    $condition: ModelTestStepConditionInput
  ) {
    createTestStep(input: $input, condition: $condition) {
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
export const createResult = /* GraphQL */ `
  mutation CreateResult(
    $input: CreateResultInput!
    $condition: ModelResultConditionInput
  ) {
    createResult(input: $input, condition: $condition) {
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
export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
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
export const createTestCaseReport = /* GraphQL */ `
  mutation CreateTestCaseReport(
    $input: CreateTestCaseReportInput!
    $condition: ModelTestCaseReportConditionInput
  ) {
    createTestCaseReport(input: $input, condition: $condition) {
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
export const createTestStepReport = /* GraphQL */ `
  mutation CreateTestStepReport(
    $input: CreateTestStepReportInput!
    $condition: ModelTestStepReportConditionInput
  ) {
    createTestStepReport(input: $input, condition: $condition) {
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
export const createProjectLink = /* GraphQL */ `
  mutation CreateProjectLink(
    $input: CreateProjectLinkInput!
    $condition: ModelProjectLinkConditionInput
  ) {
    createProjectLink(input: $input, condition: $condition) {
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
export const updateProjectLink = /* GraphQL */ `
  mutation UpdateProjectLink(
    $input: UpdateProjectLinkInput!
    $condition: ModelProjectLinkConditionInput
  ) {
    updateProjectLink(input: $input, condition: $condition) {
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

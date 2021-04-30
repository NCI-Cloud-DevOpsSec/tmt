describe('Project Negative Flow:', function () {
    // Step 1: setup the application state
    beforeEach(function () {
        Cypress.config('defaultCommandTimeout', 60000);
        cy.visit('/');
    });

    describe('Project Validation:', () => {
        it('Validate Project create Negative functionality', () => {
            // Step 2: Take an action (Sign in)
            expect(userDetails.username, 'username was set').to.be.a('string').and.not.be.empty

            if (typeof userDetails.password !== 'string' || !userDetails.password) {
                throw new Error('Missing password value, set using CYPRESS_password=...')
            }

            cy.get(selectors.usernameInput).type(userDetails.username);
            cy.get(selectors.signInPasswordInput).type(userDetails.password);
            cy.get(selectors.signInSignInButton).contains('Sign In').click();

            // Step 3: Make an assertion (Check for sign-out text)
            cy.get(selectors.signOutButton).contains('Sign Out');

            // Step 4: Create Project Positive Flow
            cy.get(selectors.headerProjects).contains('Projects').click();
            cy.get(selectors.addProjectButton).contains('Add Project').click();
            cy.get(selectors.addNewProjectName).type('Cypress Test Name');
            cy.get(selectors.addNewProjectID).type(projectId);
            cy.get(selectors.addNewProjectDescription).type('Cypress Test Description');
            cy.get(selectors.addNewProjectTesters).type(userDetails.testerUserName).type('{enter}');
            cy.get(selectors.createProjectButton).contains('Create Project').click();

            // Step 5: Validate created project ID
            cy.get(selectors.headerProfile).contains('Profile').click();
            cy.get(selectors.headerProjects).contains('Projects').click();
            cy.get("td:contains('" + projectId + "')").should('exist')

            // Step 6: Create same project ID and validate is alert present
            cy.get(selectors.headerProjects).contains('Projects').click();
            cy.get(selectors.addProjectButton).contains('Add Project').click();
            cy.get(selectors.addNewProjectName).type('Cypress Test Name');
            cy.get(selectors.addNewProjectID).type(projectId);
            cy.get(selectors.addNewProjectDescription).type('Cypress Test Description');
            cy.get(selectors.addNewProjectTesters).type(userDetails.testerUserName).type('{enter}');
            cy.get(selectors.createProjectButton).contains('Create Project').click();

            cy.on("window:alert", (str) => {
                expect(str).to.equal("Project ID already available. Provide an unique Project ID");
            });

        });
    });

});

export const projectId = Date.now()

export const userDetails = {
    username: Cypress.env('username'),
    password: Cypress.env('password'),
    testerUserName: Cypress.env('testerUserName'),
    group: 'Admin'
}

export const selectors = {
    // Auth component classes
    usernameInput: '[data-test="username-input"]',
    signInPasswordInput: '[data-test="sign-in-password-input"]',
    signInSignInButton: '[data-test="sign-in-sign-in-button"]',
    signOutButton: '[data-testid="signOut"]',
    headerProjects: '[data-testid="headerProjects"]',
    headerProfile: '[data-testid="headerProfile"]',
    addProjectButton: '[data-testid="addButton"]',
    createProjectButton: '[data-testid="createButton"]',
    addNewProjectName: '[data-testid="addNewProjectName"]',
    addNewProjectID: '[data-testid="addNewProjectID"]',
    addNewProjectDescription: '[data-testid="addNewProjectDescription"]',
    addNewProjectTesters: '[data-testid="addNewProjectTesters"]'

}
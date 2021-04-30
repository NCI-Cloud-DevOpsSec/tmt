describe('Profile:', function () {
    // Step 1: setup the application state
    beforeEach(function () {
        Cypress.config('defaultCommandTimeout', 60000);
        cy.visit('/');
    });

    describe('Profile Validation:', () => {
        it('Validate user profile details', () => {
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

            cy.get(selectors.usernameLabel).should('have.text', userDetails.username)
            cy.get(selectors.userGroupLabel).should('have.text', userDetails.group)

        });
    });

});

export const userDetails = {
    username: Cypress.env('username'),
    password: Cypress.env('password'),
    group: 'Admin'
}

export const selectors = {
    // Auth component classes
    usernameLabel: '[data-testid="userEmailValue"]',
    userGroupLabel: '[data-testid="profileGroup"]',
    usernameInput: '[data-test="username-input"]',
    signInPasswordInput: '[data-test="sign-in-password-input"]',
    signInSignInButton: '[data-test="sign-in-sign-in-button"]',
    signOutButton: '[data-testid="signOut"]'
}
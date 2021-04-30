describe('Authenticator:', function () {
    // Step 1: setup the application state
    beforeEach(function () {
        Cypress.config('defaultCommandTimeout', 60000);
        cy.visit('/');
    });

    describe('Sign In:', () => {
        it('allows a user to signin', () => {
            // Step 2: Take an action (Sign in)
            expect(login.username, 'username was set').to.be.a('string').and.not.be.empty
            if (typeof login.password !== 'string' || !login.password) {
                throw new Error('Missing password value, set using CYPRESS_password=...')
            }

            cy.get(selectors.usernameInput).type(login.username);
            cy.get(selectors.signInPasswordInput).type(login.password);
            cy.get(selectors.signInSignInButton).contains('Sign In').click();

            // Step 3: Make an assertion (Check for sign-out text)
            cy.get(selectors.signOutButton).contains('Sign Out');
        });
    });

});

export const login = {
    username: Cypress.env('username'),
    password: Cypress.env('password')
}

export const selectors = {
    // Auth component classes
    usernameInput: '[data-test="username-input"]',
    signInPasswordInput: '[data-test="sign-in-password-input"]',
    signInSignInButton: '[data-test="sign-in-sign-in-button"]',
    signOutButton: '[data-testid="signOut"]'
}
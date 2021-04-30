describe('Profile:', function () {
    // Step 1: setup the application state
    beforeEach(function () {
        Cypress.config('defaultCommandTimeout', 10000);
        cy.visit('/');
    });

    describe('Profile Validation:', () => {
        it('Compare user details', () => {
            // Step 2: Take an action (Sign in)
            expect(userDetails.username, 'username was set').to.be.a('string').and.not.be.empty

            cy.get(selectors.usernameLabel).should('have.text', userDetails.username)
            cy.get(selectors.userGroupLabel).should('have.text', userDetails.group)

        });
    });

});

export const userDetails = {
    username: Cypress.env('username'),
    group: 'Admin'
}

export const selectors = {
    // Auth component classes
    usernameLabel: 'data-testid="userEmailValue"',
    userGroupLabel: 'data-testid="profileGroup"'
}
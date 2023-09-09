Cypress.Commands.add('Login', (user = Cypress.env('user_username'), password = Cypress.env('user_password')) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type(user)
    cy.get('[name="password"]').type(password, {log: false})
    cy.get('[type="submit"]').click()
        
})

Cypress.Commands.add('Adciona_user', (admin = Cypress.env('user_admin'), password = Cypress.env('user_password')) => {
    cy.contains('span', 'Admin').click()
    cy.contains('button', 'Add ').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(admin)
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(password, {log: false})
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password, {log: false})
    cy.get('.oxd-autocomplete-text-input > input').type('Orange Test')
    cy.contains('Orange Test').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.contains('Enabled').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.get('[type="submit"]').click()
    cy.get('.oxd-text--toast-title').should('be.visible', 'Success')
})

Cypress.Commands.add('Busca_login',(admin = Cypress.env('user_admin')) => {
    cy.wait(3000)
    cy.get('.oxd-grid-4 > :nth-child(1)').type(admin)
    cy.get('[type="submit"]').should('be.visible')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
})

Cypress.Commands.add('Delete_login',() => {
    cy.wait(3000)
    cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()
    cy.wait(3000)
    cy.get('.oxd-button--label-danger').click()
    cy.get('.oxd-text--toast-title').should('be.visible', 'Success')
})

Cypress.Commands.add('Logout',() => {
    cy.get('.oxd-userdropdown-tab').click()
    cy.contains('.oxd-userdropdown-link', 'Logout').click()
})
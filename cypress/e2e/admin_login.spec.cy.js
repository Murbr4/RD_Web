describe('Crud', () => {

  it('Regressivo_Login', () => {
    cy.Login()
    cy.Adciona_user()
    cy.Busca_login()
    cy.Delete_login()
    cy.Logout()
  })
})
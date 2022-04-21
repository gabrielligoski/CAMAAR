import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
Given("que eu esteja logado como aluno no CAMAAR", () => {
    // TODO: implementar corretamente depois da issue #9
    cy.visit("/");
    cy.get("[type='email']").type('user')
    cy.get("[type='password']").type('pass')
    cy.contains('Entrar').click()
  })
  
  And("eu estou na página de relatório do aluno", () => {
    cy.visit("/#/student");
  })

  Then("eu deveria ver o botão 'GERAR PDF'", () => {
    cy.contains('Gerar PDF').should('exist')
  })
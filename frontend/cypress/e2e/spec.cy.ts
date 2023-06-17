/// <reference types="cypress" />

describe('E2E test for react', () => {
  it('Should login', () => {
    cy.visit('http://localhost:3000')

    //Enter username and password
    cy.get('[data-testid="username-input"]').type('1234')
    cy.get('[data-testid="username-input"]').should('have.value', '1234');

    //assert that form contain username and password and login
    cy.get('[data-testid="password-input"]').type('1234')
    cy.get('[data-testid="password-input"]').should('have.value', '1234');
    cy.wait(1000); 

    cy.get('button').click()

    //assert the url endpoint (should be /homepage)
    cy.url().should('match', /\/homepage$/);
    cy.get('[data-testid="profile"]').click();

    
  })
})
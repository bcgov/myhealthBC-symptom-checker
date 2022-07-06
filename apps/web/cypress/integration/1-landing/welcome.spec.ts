/// <reference types="cypress" />

describe('Landing page', () => {
  it('has welcome message', () => {
    cy.visit('http://localhost:3030');
    cy.contains('COVID 19 self-assessment tool');
  });
});

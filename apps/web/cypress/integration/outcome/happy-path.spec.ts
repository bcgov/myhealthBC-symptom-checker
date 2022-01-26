import { createYield } from 'typescript';

describe('Happy path outcome', () => {
  it('without covid test details', () => {
    cy.visit('http://localhost:3030');
    cy.contains('Start assessment');
    cy.get('button[title="Start assessment"]').click();
    cy.contains('Severe difficulty breathing');
    cy.get('input[label="severe"]').check('false');
    cy.get('button[title="Continue"]').click();
    cy.contains('Inability to lie down because of difficulty breathing');
    cy.get('input[label="breathing"]').check('false');
    cy.get('button[title="Continue"]').click();
    cy.contains('Are you experiencing new or worsening symptoms?');
    cy.get('button[title="Continue"]').click();
    cy.get('input[label="tested"]').check('false', { force: true });
    cy.contains('Have you received a new COVID-19 test result?');
    cy.get('button[title="Continue"]').click();
    cy.contains('You do not need a COVID-19 test at this time.');
  });

  it('with covid test details', () => {
    cy.visit('http://localhost:3030');
    cy.contains('Start assessment');
    cy.get('button[title="Start assessment"]').click();
    cy.contains('Severe difficulty breathing');
    cy.get('input[label="severe"]').check('false');
    cy.get('button[title="Continue"]').click();
    cy.contains('Inability to lie down because of difficulty breathing');
    cy.get('input[label="breathing"]').check('false');
    cy.get('button[title="Continue"]').click();
    cy.contains('Are you experiencing new or worsening symptoms?');
    cy.get('button[title="Continue"]').click();
    cy.get('input[label="tested"]').check('true', { force: true });
    cy.contains('Have you received a new COVID-19 test result?');
    // cy.contains('Please enter the details of your COVID-19 test');
    cy.get('button[title="Continue"]').click();
    cy.contains('You do not need a COVID-19 test at this time.');
  });
});

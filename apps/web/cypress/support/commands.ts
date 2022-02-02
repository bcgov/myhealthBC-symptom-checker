// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('home', () => {
  return cy.visit('http://localhost:3030');
});

Cypress.Commands.add('startAssessment', () => {
  return cy.get('button').contains('Start assessment').click();
});

Cypress.Commands.add('continue', () => {
  return cy.get('button').contains('Continue').click();
});

Cypress.Commands.add('back', () => {
  return cy.get('button').contains('Go back').click();
});

Cypress.Commands.add('yes', () => {
  return cy.get('#yes').click();
});

Cypress.Commands.add('no', () => {
  return cy.get('#no').click();
});

Cypress.Commands.add('selectSymptom', (symptom: string) => {
  return cy.get(`input[name="symptoms.${symptom}"]`).click();
});

Cypress.Commands.add('setTestDate', (date: string) => {
  return cy.get(`input[type="text"`).type(date);
});

Cypress.Commands.add('selectTestResult', (text: string) => {
  return cy.get('select').select(text);
});

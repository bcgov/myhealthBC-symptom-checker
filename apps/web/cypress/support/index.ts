// ***********************************************************
// This example support/index.tsx is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

/// <reference types="cypress" />

// Import commands.ts using ES2015 syntax:
import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      home(): Chainable<Element>;
      startAssessment(): Chainable<Element>;
      continue(): Chainable<Element>;
      back(): Chainable<Element>;
      yes(): Chainable<Element>;
      no(): Chainable<Element>;
      selectSymptom(symptom: string): Chainable<Element>;
      selectRadio(selectRadio: string): Chainable<Element>;
      setTestDate(testDate: string): Chainable<Element>;
      selectTestResult(text: string): Chainable<Element>;
      checkContents(tests: string[]): Chainable<Element>;
    }
  }
}

// Alternatively you can use CommonJS syntax:
// require('./commands')

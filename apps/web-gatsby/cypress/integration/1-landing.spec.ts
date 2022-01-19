import 'cypress';

describe('Landing Page', () => {
  it('has a title', () => {
    cy.visit('http://localhost:3030');
    cy.contains('Welcome');
  });
});

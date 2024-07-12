// cypress/e2e/example.cy.js
describe('Open Home Page', () => {
    it('should open the home page', () => {
      cy.visit('/');
    });
  });
  
  describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.youtube.com');
    });
  });
  
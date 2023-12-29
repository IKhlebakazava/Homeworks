const menuItem = require('../../pages/menuItem');

describe('Check clicking menu item', function () {
  it('Check that after clickin API menu item page has href leading to #Commands ', () => {
    menuItem.navigate('https://docs.cypress.io/')
    menuItem.clickLinkMenuItem('API');
    cy.get('.breadcrumbs__link').last().should('have.text', 'Why Cypress?');
  })
});
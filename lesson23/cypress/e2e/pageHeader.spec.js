const pageHeader = require('../../pages/pageHeader');

describe('Check page header', function () {
  it('Page header should be equal to Why Cypres', () => {
      pageHeader.navigate('https://docs.cypress.io/')
      pageHeader.headerWrapper.should('have.text', 'Why Cypress?');
  })
});
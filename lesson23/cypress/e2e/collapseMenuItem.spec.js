const sideCollapsibleMenuPage = require('../../pages/sideCollapsibleMenuPage');

describe('Check clicking menu item', function () {
  it('Check that after clickin API menu item page has href leading to #Commands ', () => {
    sideCollapsibleMenuPage.navigate('https://docs.cypress.io/')
    sideCollapsibleMenuPage.clickLinkMenuItem('API');
    sideCollapsibleMenuPage.clickLinkMenuItem('Overview');
    cy.get('.theme-doc-sidebar-menu.menu__list li:first')
      .invoke('attr', 'class')
      .should('include', 'collapsed');
  })
});

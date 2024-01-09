const BasePage = require('./basePage');

class PageHeader extends BasePage {
    get headerWrapper() {
        return cy.get('.headerWrapper_tu51 h1');
    }
}

module.exports = new PageHeader();
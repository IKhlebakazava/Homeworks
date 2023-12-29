class BasePage {
    navigate(url) {
        cy.visit(url);
    }
    clickLinkMenuItem(text) {
        cy.contains('a', text).click();
    }
}

module.exports = BasePage;
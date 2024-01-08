const BasePage = require("./basePage");

class SearchFunctionalityPage extends BasePage {
  get searchButton() { return $('span.DocSearch-Button-Container'); }
  get searchInput() { return $('#docsearch-input'); }
  get firstResult() { return $('#docsearch-item-0 span.DocSearch-Hit-title'); }

  async searchFor(query) {
    await this.click(this.searchButton);
    await this.setValue(this.searchInput, query);
  }

  async getFirstResultText() {
    return await this.getText(this.firstResult);
  }
}

module.exports = new SearchFunctionalityPage()
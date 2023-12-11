import { BasePage } from './basePage.js';

class SearchFunctionalityPage extends BasePage {
  constructor() {
    super()
  }
  get searchButton() { return $('span.DocSearch-Button-Container'); }
  get searchInput() { return $('#docsearch-input'); }
  get firstResult() { return $('#docsearch-item-0 span.DocSearch-Hit-title'); }

  async searchFor(query) {
    await this.click(this.searchButton);
//    await this.waitForEnabled(this.searchInput);
    await this.setValue(this.searchInput, query);
  }

  async getFirstResultText() {
    return await this.getText(this.firstResult);
  }
}

export default new SearchFunctionalityPage()
//export const searchFunctionalityPage = new SearchFunctionalityPage();
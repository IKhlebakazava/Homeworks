const BasePage = require('../basePage.js');

class Search extends BasePage {
  constructor(page) {
    super(page);
  }

  get searchButton() {
    return this.page.locator('.DocSearch-Button-Placeholder')
  }

  get searchField() {
    return this.page.locator('.DocSearch-Input')
  }

  get searchItems() {
    return this.page.locator('#docsearch-item-0');
  }

  get sidebar() {
    return this.page.locator('.sidebar_njMd')
  }
 
  async searchByText(searchText){
    await this.searchButton.click();
    await this.searchField.fill(searchText);
    await this.searchItems.waitFor({state: "visible", timeout: 10000});
    await this.page.keyboard.press('Enter');
    await this.sidebar.waitFor({state: "visible", timeout: 5000});
    
  }
}

module.exports = Search;

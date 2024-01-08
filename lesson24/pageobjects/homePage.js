const BasePage = require('./basePage.js');

class HomePage extends BasePage {
  constructor() {
    super();
  }

  get mainTitle() { return $('.hero__subtitle'); }

  async getTitle() {
    return await this.getText(this.mainTitle);
  }
}

module.exports = new HomePage();

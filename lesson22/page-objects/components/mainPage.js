const BasePage = require('../basePage.js');

class MainPage extends BasePage {
    constructor(page) {
      super(page);
    }
  
    async getHeroTitleText() {
      return await this.page.textContent('.hero__title');
    }
  }

module.exports = MainPage;

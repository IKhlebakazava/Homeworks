const BasePage = require('../basePage.js');

class SwitchModePage extends BasePage {
    constructor(page) {
      super(page);
    }

    async switch() {
        await this.page.locator('.toggle_vylO').click();
    }    


    async getDataThemeValue() {
      await this.page.waitForSelector('html');
      return await this.page.getAttribute('html', 'data-theme');
  }
  }

module.exports = SwitchModePage;

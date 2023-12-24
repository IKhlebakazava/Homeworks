const BasePage = require('../basePage.js');

class Footer extends BasePage {
    constructor(page) {
      super(page);
    }

    get gitHubButton() {
     return this.page.locator('//a[@class="footer__link-item" and text()="GitHub"]') 
    }

    async gitHubNavigate() {
    await this.gitHubButton.click();
    }
}

module.exports = Footer;

import { BasePage } from './basePage.js';

class LanguageChangePage extends BasePage {
  constructor() {
    super()
  }
  get languageSelector() { return $('//*[@id="__docusaurus"]//a[@class="navbar__link"]'); }
  get languageChangeDropDown() { return $('//a[@class="dropdown__link" and text() = "Deutsch"]'); }
  get navbarLinkText() { return $('//a[@class="navbar__link"]'); }

  async changeLanguage() {
    await this.click(this.languageSelector);
//    await this.waitForEnabled(this.languageChangeDropDown);
    await this.click(this.languageChangeDropDown);
  }

  async getNavbarLinkText() {
    return await this.getText(this.navbarLinkText);
  }
}

export default new LanguageChangePage()
//export const languageChangePage = new LanguageChangePage();
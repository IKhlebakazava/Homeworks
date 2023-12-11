import { expect } from 'chai';
import languageChangePage from '../pageObjects/languageChange.js';

describe('Checking the language change on the WebdriverIO site', () => {
  beforeEach(async () => {
    await languageChangePage.navigate('https://webdriver.io/');
  });

  it('Should change the language', async () => {
    await languageChangePage.changeLanguage();
    const navbarLinkText = await languageChangePage.getNavbarLinkText();
    expect(navbarLinkText).to.equal('Deutsch');
  });
});

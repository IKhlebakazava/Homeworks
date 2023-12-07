import {expect} from 'chai';

describe('Checking the language change on the WebdriverIO site', () => {
    beforeEach(async () => {
        await browser.url('https://webdriver.io/');
  });

it('Should change the language', async () => {
    const languageSelector = await $('//*[@id="__docusaurus"]//a[@class="navbar__link"]');
    await languageSelector.waitForEnabled();
    await languageSelector.click();
    const languageChangeDropDown = await $('//a[@class="dropdown__link" and text() = "Deutsch"]');
    await languageChangeDropDown.waitForEnabled();
    await languageChangeDropDown.click();
    const navbarLinkText = await $('//a[@class="navbar__link"]').getText();
    expect(await navbarLinkText).to.equal('Deutsch');
  });
});

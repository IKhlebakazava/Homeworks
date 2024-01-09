import {expect} from 'chai';

describe('Checking navigation across sections', () => {
    beforeEach(async () => {
        await browser.url('https://webdriver.io/');
  });

it('Should navigate to Docs section and display the correct header', async () => {
    const docsLink = await $("div.navbar__items a[href='/docs/api");
    await docsLink.waitForEnabled();
    await docsLink.click();
    const docsPageHeader = await $('#__docusaurus_skipToContent_fallback h1');
    expect(await docsPageHeader.isDisplayed(), 'Getting Started').to.be.true;
  });

it('Should navigate to API section and display the correct header', async () => {
    const docsLink = await $("div.navbar__items a[href='/docs/api");
    await docsLink.waitForEnabled();
    await docsLink.click();
    const apiLink = await $("div.navbar__items a[href='/docs/api']");
    await apiLink.waitForEnabled();
    await apiLink.click();
    const apiPageHeader = await $('#__docusaurus_skipToContent_fallback h1');
    expect(await apiPageHeader.isDisplayed(), 'Introduction').to.be.true;
  });
});

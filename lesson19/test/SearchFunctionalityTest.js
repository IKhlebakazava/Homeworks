import {expect} from 'chai';

describe('Checking search functionality', () => {
    beforeEach(async () => {
        await browser.url('https://webdriver.io/');
  });

it('First link should contain the entered word', async () => {
    const searchButton = await $('span.DocSearch-Button-Container');
    await searchButton.waitForEnabled();
    await searchButton.click();
    const searchInput = await $('#docsearch-input');
    await searchInput.waitForEnabled();
    await searchInput.setValue('Frameworks');
    const firstResult = await $('#docsearch-item-0 span.DocSearch-Hit-title');
    await firstResult.waitForEnabled();
    expect(await firstResult.getText()).to.contain('Frameworks');
  });
});

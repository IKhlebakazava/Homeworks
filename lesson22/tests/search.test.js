const { test, expect } = require('@playwright/test');
const BasePage = require('../page-objects/basePage');
const Search = require('../page-objects/components/searchPage');

test.describe('Playwright search functionality check', () => {
  let basePage;
  let search;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    search = new Search(page);
  });

  test('search results should contain the entered word ', async ({page}) => {
    await basePage.navigate('https://playwright.dev/');
    await search.searchByText('chrome');
    expect(await basePage.getPageTitle()).toEqual('Chrome extensions | Playwright');
  });
});

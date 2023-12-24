const { test, expect } = require('@playwright/test');
const MainPage = require('../page-objects/components/mainPage.js');
const BasePage = require('../page-objects/basePage.js');

test.describe('MainPage Tests', () => {
  let basePage;
  let mainPage;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    mainPage = new MainPage(page);
  });

  test('Check MainPage title', async () => {
    await basePage.navigate('https://playwright.dev/');
    const heroTitleText = await mainPage.getHeroTitleText();
    expect(heroTitleText).toBe('Playwright enables reliable end-to-end testing for modern web apps.');
  });
});

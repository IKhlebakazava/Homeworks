const { test, expect } = require('@playwright/test');
const BasePage = require('../page-objects/basePage');
const Footer = require('../page-objects/components/footerPage');

test.describe('Playwright GitHub link check', () => {
  let basePage;
  let footer;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    footer = new Footer(page);
  });

  test('should open GitHub page when clicking on the GitHub link in the footer', async ({ page }) => {
    await basePage.navigate('https://playwright.dev/');
    await footer.gitHubNavigate();

    const [githubPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.click('text=GitHub'),
    ]);
    expect(githubPage.url()).toBe('https://github.com/microsoft/playwright');
  });
});

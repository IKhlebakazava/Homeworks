const { test, expect } = require('@playwright/test');
const SwitchModePage = require('../page-objects/components/switchModePage.js');
const BasePage = require('../page-objects/basePage.js');

test.describe('Switch mode between light to dark', () => {
  let basePage;
  let switchModePage;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    switchModePage = new SwitchModePage(page);
  });

  test('Should change mode from light to dark', async () => {
    await basePage.navigate('https://playwright.dev/');
    const changeMode = await switchModePage.getDataThemeValue();
    await switchModePage.switch();
    expect(changeMode !== await switchModePage.getDataThemeValue());
  });
});

const { Given, Then, When } = require('@wdio/cucumber-framework');
const homePage = require('../pageobjects/homePage');
const { expect } = require('@wdio/globals');

Given('user is on the home page', async () => {
  await homePage.navigate('https://webdriver.io/');
});

When('user gets the title of the home page', async () => {
  this.title = await homePage.getTitle();
});

Then('the title should be {string}', async (expectedTitle) => {
  expect(this.title).toContain(expectedTitle);
});

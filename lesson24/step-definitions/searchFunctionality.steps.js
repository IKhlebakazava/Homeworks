const { Given, When, Then } = require("@wdio/cucumber-framework");
const SearchFunctionalityPage = require("../pageobjects/searchFunctionalityPage");
const { expect } = require('@wdio/globals');

Given('user is on the search functionality page', async () => {
  await SearchFunctionalityPage.navigate('https://webdriver.io/');
});

When('user searches for "Frameworks"', async () => {
  await SearchFunctionalityPage.searchFor('Frameworks');
});

Then('the first result should contain "Frameworks"', async () => {
  const firstResult = await SearchFunctionalityPage.getFirstResultText();
  expect(firstResult).toContain('Frameworks');
});

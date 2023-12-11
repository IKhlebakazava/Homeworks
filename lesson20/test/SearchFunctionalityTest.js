import { expect } from 'chai';
import searchFunctionalityPage from '../pageObjects/searchFunctionality.js';

describe('Checking search functionality', () => {
  beforeEach(async () => {
    await searchFunctionalityPage.navigate('https://webdriver.io/');
  });

  it('First link should contain the entered word', async () => {
    const query = 'Frameworks';
    await searchFunctionalityPage.searchFor(query);
    const firstResultText = await searchFunctionalityPage.getFirstResultText();
    expect(firstResultText).to.contain(query);
  });
});

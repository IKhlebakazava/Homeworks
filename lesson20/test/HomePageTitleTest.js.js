import { expect } from 'chai';
import homePage from '../pageObjects/homePage.js';

describe('Checking the Home Page Title', () => {
  beforeEach(async () => {
    await homePage.navigate('https://webdriver.io/');
  });

  it('Title on the home page should be "Next-gen browser and mobile automation test framework for Node.js"', async () => {
    const title = await homePage.getTitle();
    expect(title).to.equal('Next-gen browser and mobile automation test framework for Node.js');
  });
});

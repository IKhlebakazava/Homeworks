import {expect} from 'chai';

describe('Checking the Home Page Title', () => {
  beforeEach(async () => {
    await browser.url('https://webdriver.io/');
});

it('Title on the home page should be "Next-gen browser and mobile automation test framework for Node.js"', async () => {
    const title = await $('.hero__subtitle').getText();
    expect(title).to.equal('Next-gen browser and mobile automation test framework for Node.js');
  });
});

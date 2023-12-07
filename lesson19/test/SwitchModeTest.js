import {expect} from 'chai';

describe('Checking switch between dark and light mode', () => {
    beforeEach(async () => {
        await browser.url('https://webdriver.io/');
  });

it('Should switch to dark mode by clicking on the mode switcher', async () => {
    const changeModeButton = await $('.clean-btn.toggleButton_gllP');
    await changeModeButton.waitForEnabled();
    await changeModeButton.click();
    const modeColor = await $('.plugin-pages.plugin-id-default');
    expect(await modeColor.getAttribute('data-theme')).to.contain('dark');
  });
});

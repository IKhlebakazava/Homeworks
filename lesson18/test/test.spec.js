const {Builder, By, until, Key} = require('selenium-webdriver')
const {expect} = require('chai')

describe ('ChromeDriver tests',() => {
    let driver
before (async() => {
    driver = await new Builder().forBrowser( 'chrome').build();
    await driver.manage().window().setSize({width: 1920, height: 1080});
    await driver.get ('https://chromedriver.chromium.org/home');    
})
after (async () => {
    await driver.quit();
})

it ('Title names should be named correctly', async () =>{
    const mainTitleChromeDriver = await driver.findElement(By.css('span.Rn3Z1b.C9DxTc'));
    expect (await mainTitleChromeDriver.getText()).to.equal('ChromeDriver') 
    const chromeExtensionsLink = await driver.findElement(By.xpath('//a[@class="aJHbb dk90Ob jgXgSe HlqNPb" and text()="Chrome Extensions"]'));
    await chromeExtensionsLink.click()
    const mainTitleChromeExtensions = await driver.findElement(By.css('span.Rn3Z1b'));
    await driver.executeScript('document.querySelector("span.Rn3Z1b").setAttribute("style", "color:yellow")');
    expect (await mainTitleChromeExtensions.getText()).to.equal('Chrome Extensions') 
})

it ('First link should contain the entered word', async () => {
    const searchButton = await driver.findElement(By.css('div.RBEWZc'));
    await driver.wait(until.elementIsVisible(searchButton), 10000);
    await searchButton.click();
    const searchInput = await driver.findElement(By.css('input.whsOnd.zHQkBf'));
    await driver.wait(until.elementIsVisible(searchInput), 10000);
    await searchInput.sendKeys('driver', Key.RETURN);
    const firstResult = await driver.wait(until.elementLocated(By.xpath('//div[@class="lZsZxe"]/div[1]')))
    expect(await firstResult.getText()).to.contain('driver');
});
})

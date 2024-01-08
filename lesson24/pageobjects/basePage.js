class BasePage {
    
    async navigate(url) {
      await browser.url(url);
    }

    async click(element) {
        await element.click();
      }
    
      async setValue(element, value) {
        await element.setValue(value);
      }
    
      async getText(element) {
        return await element.getText();
      }
    
  }

  module.exports = BasePage
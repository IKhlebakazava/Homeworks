class BaseElements {
    async clickElement(element) {
      await element.waitForClickable();
      await element.click()
    }
  
    async setValue(element, text) {
      await element.waitForDisplayed();
      await element.setValue(text);
    }
  
    async getText(element) {
      await element.waitForDisplayed();
      return element.getText();
    }

    async inputText(element, text) {
        await element.waitForClickable();
        await element.setValue(text);
      }
  }
  
  export default BaseElements;
  //export { BaseElements };
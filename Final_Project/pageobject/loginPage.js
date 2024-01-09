import MainPage from "./mainPage.js";

class LoginPage extends MainPage {

   
    get loginByEmailButton() {
        return $('#loginFormLoginEmailLink');
      }
      
      get loginByPhoneButton() {
        return $('#loginFormLoginPhoneLink');
      }
    
      get emailInputField() {
        return $('.i-input[type="email"]');
      }
    
      get passwordInputField() {
        return $('.i-input[type="password"]');
      }
      
      get enterButton() {
        return $('.i-button[form="loginForm"]');
      }

      get phoneInputField() {
        return $('.i-button[form="loginForm"]');
      }

      get getSmsButton() {
        return $('//*[@id="phoneForm"]/button[@value="login"]');
      }

      get phoneErrorMessage() {
        return $('//div[@class="i-popover__line" and text()="Этот номер телефона не зарегистрирован. Проверьте его на ошибки, введите другой или зарегистрируйтесь"]');
      }

      get emailErrorMessage() {
        return $('//div[@class="i-popover__line" and text()="Адрес электронной почты не зарегистрирован. "]');
      }

      get missNumberError() {
        return $('//div[@class="i-popover__line" and text()="Введите номер мобильного телефона белорусских опереторов"]');
      }

      get loginTitle() {
        return $('//span[@class="user-bar__title" and text()="Мой OZ"]')
      }

      async loginByEmail(email, password) {
        await this.clickElement(this.loginByEmailButton);
        await this.inputText(this.emailInputField, email);
        await this.inputText(this.passwordInputField, password);
        await this.clickElement(this.enterButton);
        await this.emailErrorMessage.waitForDisplayed()
      }
      async loginByCorrectEmail(email, password) {
        await this.clickElement(this.loginByEmailButton);
        await this.inputText(this.emailInputField, email);
        await this.inputText(this.passwordInputField, password);
        await this.clickElement(this.enterButton);
        await this.loginTitle.waitForDisplayed()
      }

      async loginByPhone(phone) {
        await this.clickElement(this.loginByPhoneButton);
        await this.inputText(this.phoneInputField, phone);
        await this.clickElement(this.getSmsButton);
        await this.phoneErrorMessage.waitForDisplayed()
      }

      async loginByPhoneMissNumber(phone) {
        await this.clickElement(this.loginByPhoneButton);
        await this.clickElement(this.getSmsButton);
        await this.missNumberError.waitForDisplayed()
      }
    }
    
    export default new LoginPage();
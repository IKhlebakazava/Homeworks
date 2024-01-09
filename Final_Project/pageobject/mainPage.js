import BasePage from "./basePage.js";

class MainPage extends BasePage {
  constructor() {
    super()
  }

  get agreeCookiesButton() {
    return $(' button.btn.btn-sm.btn-dark.me-2');
  }
  get loginButton() {
    return $('//span[@class="user-bar__title" and text()="Войти"]');
  }

  async acceptCookies() {
    await this.clickElement(this.agreeCookiesButton)
  }
  
  async goToLoginPage() {
    await this.clickElement(this.loginButton)
  }

}

export default MainPage;
//export { MainPage };
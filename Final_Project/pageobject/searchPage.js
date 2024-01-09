import MainPage from "./mainPage.js";

class SearchPage extends MainPage {

    get searchField() {
        return $('#top-s');
      }
    get searchButton() {
        return $('.search-form__submit');
      }

    get navigateHeader(){
        return $('//strong[@class="main-nav__header" and text()="Все товары"]')
      }



      async searchPageNavigate(value) {
        console.log(this.searchField);
        await this.setValue(this.searchField, value);
        await this.clickElement(this.searchButton);
        await this.navigateHeader.waitForDisplayed() 
    }

      async pushSearchButton(value) {
        await this.inputText(this.searchField, value);
        await this.clickElement(this.loginByEmailButton);     
    }

}



export default new SearchPage();
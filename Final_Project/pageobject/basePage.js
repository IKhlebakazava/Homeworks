import BaseElements from "../helpers/baseelements.js";


class BasePage extends BaseElements {
    async navigate(url) {
        await browser.url(url);
    }
}

export default BasePage;
//export { BasePage };
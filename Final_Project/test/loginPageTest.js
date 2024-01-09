import { expect } from 'chai';
import loginPage from '../pageobject/loginPage.js';

describe('Checking login functionality', () => {
    beforeEach(async () => {
        await loginPage.navigate('https://oz.by/');
    });

    
 
    it('An error message should appear when you enter an unregistered phone number: "Этот номер телефона не зарегистрирован. Проверьте его на ошибки, введите другой или зарегистрируйтесь"', async () => {
        await loginPage.goToLoginPage();
        await loginPage.loginByPhoneMissNumber(); 
        const loginByPhoneErrorMsg = await loginPage.getText(loginPage.missNumberError);
        expect(loginByPhoneErrorMsg).equal('Введите номер мобильного телефона белорусских опереторов');
    });

    it('An error message should appear when you enter an unregistered email: "Адрес электронной почты не зарегистрирован. Зарегистрироваться"', async () => {
        await loginPage.goToLoginPage();
        await loginPage.loginByEmail('asdas@as.cc', 'kefwhiu'); 
        const loginErrorMsg = await loginPage.getText(loginPage.emailErrorMessage);
        expect(loginErrorMsg).equal('Адрес электронной почты не зарегистрирован. Зарегистрироваться');
    });
    
    it('Should succesfully login with correct login and passvord', async () => {
        await loginPage.goToLoginPage();
        await loginPage.loginByCorrectEmail('test.khia@gmail.com', '59IE2L'); 
        const userLogin = await loginPage.getText(loginPage.loginTitle);
        expect(userLogin).equal('Мой OZ');
    });

    
});


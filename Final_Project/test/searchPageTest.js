import { expect } from 'chai';
import searchPage from '../pageobject/searchPage.js';

describe('Checking search functionality', () => {
    beforeEach(async () => {
        await searchPage.navigate('https://oz.by/');
    });

    it('Should go to the search page', async () => {
        await searchPage.searchPageNavigate('сказки'); 
        const navigateTitle = await searchPage.getText(searchPage.navigateHeader);
        expect(navigateTitle).equal('Все товары');
    });
});
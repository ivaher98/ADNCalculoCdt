import { browser, by, element } from 'protractor';

export class DataAssignPage {
    async navigateTo() {
        await browser.get('/');
    }

    async getMountLending() {
        await element(by.css('#mountLending')).getText();
    }

    async getDays() {
        await element(by.css('#days')).getText();
    }

    async getButtonCalculate() {
        await element(by.css('#btnCalculate')).click();
    }

    async makeCdt(amount: number, days: number){
        element(by.css('#mountLending')).sendKeys(amount);
        element(by.css('#days')).sendKeys(days);
        element(by.css('#btnCalculate')).click();
    }
}

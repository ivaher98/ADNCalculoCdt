import { browser, by, element } from 'protractor';

export class DataAssignPage {
    async navigateTo() {
        await browser.get('/');
    }

    async getMountLending() {
        return element(by.id('mountLending')).getText();
    }

    async getDays() {
        element(by.id('days')).getText();
    }

    async getButtonCalculate() {
        return element(by.id('btnCalculate')).click();
    }

    async makeCdt(amount: number, days: number){
        element(by.id('mountLending')).sendKeys(amount);
        element(by.id('days')).sendKeys(days);
        element(by.id('btnCalculate')).click();
    }
}

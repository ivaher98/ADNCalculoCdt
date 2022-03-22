import { browser, by, element } from 'protractor';

export class HomePage {
    navigateTo() {
        return browser.get('/');
    }

    getMountLending() {
        return element(by.id('mountLending')).getText();
    }

    getDays() {
        element(by.id('days')).getText();
    }

    getButtonCalculate() {
        return element(by.id('btnCalculate')).click();
    }

    makeCdt(amount: number, days: number){
        element(by.id('mountLending')).sendKeys(amount);
        element(by.id('days')).sendKeys(days);
        element(by.id('btnCalculate')).click();
    }
}

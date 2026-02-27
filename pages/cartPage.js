const { By, until } = require('selenium-webdriver');

class CartPage {
    constructor(driver) {
        this.driver = driver;
        this.placeOrderBtn = By.xpath("//button[contains(text(),'Place Order')]");
        this.nameInput = By.id('name');
        this.countryInput = By.id('country');
        this.cityInput = By.id('city');
        this.cardInput = By.id('card');   
        this.monthInput = By.id('month');
        this.yearInput = By.id('year'); 
        this.purchaseBtn = By.xpath("//button[contains(text(),'Purchase')]");
        this.successCheck = By.css('.sweet-alert h2');
    }

    async clickPlaceOrder() {
        const btn = await this.driver.wait(until.elementLocated(this.placeOrderBtn), 10000);
        await btn.click();
    }

    async fillForm(userData) {
    // Esperamos a que el campo Name sea visible
    const inputName = await this.driver.wait(until.elementLocated(this.nameInput), 10000);
    await this.driver.wait(until.elementIsVisible(inputName), 5000); 

    // IMPORTANTE: Acceder a las propiedades del objeto userData
    await inputName.sendKeys(userData.name); 
    await this.driver.findElement(this.countryInput).sendKeys(userData.country);
    await this.driver.findElement(this.cityInput).sendKeys(userData.city);
    await this.driver.findElement(this.cardInput).sendKeys(userData.card);
    await this.driver.findElement(this.monthInput).sendKeys(userData.month);
    await this.driver.findElement(this.yearInput).sendKeys(userData.year);
}

    async completePurchase() {
        const btn = await this.driver.findElement(this.purchaseBtn);
        await btn.click();
    }

    async getConfirmationMessage() {
        const msg = await this.driver.wait(until.elementLocated(this.successCheck), 10000);
        return await msg.getText();
    }
}

module.exports = CartPage;
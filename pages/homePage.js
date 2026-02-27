const { By, until } = require('selenium-webdriver');

class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://www.demoblaze.com/';
        this.cartLink = By.id('cartur');
        this.addToCartBtn = By.linkText('Add to cart');
    }

    async load() {
        await this.driver.get(this.url);
        await this.driver.manage().window().maximize();
    }

    async selectProduct(productName) {
        const product = await this.driver.wait(until.elementLocated(By.linkText(productName)), 10000);
        await product.click();
    }

    async addProductToCart() {
        const btn = await this.driver.wait(until.elementLocated(this.addToCartBtn), 5000);
        await btn.click();
        await this.driver.wait(until.alertIsPresent(), 5000);
        await (await this.driver.switchTo().alert()).accept();
    }

    async goToCart() {
        await this.driver.findElement(this.cartLink).click();
    }
}
module.exports = HomePage;
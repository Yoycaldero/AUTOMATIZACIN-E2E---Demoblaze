const { Builder } = require('selenium-webdriver');
const HomePage = require('../pages/homePage'); 
const CartPage = require('../pages/cartPage'); 
// IMPORTANTE: Cargamos los datos desde el archivo externo
const testData = require('../data/userData.json'); 

async function executeTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    const home = new HomePage(driver);
    const cart = new CartPage(driver);

    try {
        await home.load();
        console.log("Navegador iniciado y página cargada");

        // 1. Agregar productos
        await home.selectProduct('Samsung galaxy s6');
        await home.addProductToCart();
        console.log("Producto 1 agregado al carrito");
        await home.driver.get('https://www.demoblaze.com/'); 

        await home.selectProduct('Nokia lumia 1520');
        await home.addProductToCart();
        console.log("Producto 2 agregado al carrito");

        // 2. Ir al carrito
        await home.goToCart();
        await cart.clickPlaceOrder();
        console.log("Ir al carrito y abrir formulario de compra");
        
        // USAMOS LOS DATOS DEL JSON: testData.customer
        console.log(`Llenando formulario para: ${testData.customer.name}`);
        await cart.fillForm(testData.customer);

        await cart.completePurchase();

        // 3. Validar éxito
        const success = await cart.getConfirmationMessage();
        console.log(success.includes('Thank you') ? "COMPRA EXITOSA" : "FALLÓ");

    } catch (error) {
        console.error("Error durante el test:", error);
    } finally {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await driver.quit(); 
    }
}

executeTest();
INSTRUCCIONES DE EJECUCIÓN - PRUEBA E2E (DEMOBLAZE)

Este proyecto utiliza Selenium WebDriver con JavaScript, siguiendo el patrón de diseño Page Object Model (POM) y Data-Driven Testing.

INSTRUCCIONES DE EJECUCIÓN - PRUEBA E2E (DEMOBLAZE)

1. REQUISITOS PREVIOS:
   - Tener Node.js instalado (v18 o superior).
   - Tener Google Chrome instalado.

2. INSTALACIÓN:
   Abrir una terminal en la carpeta 'E2E' y ejecutar:
   npm install

   (Nota: Esto instalará selenium-webdriver y chromedriver automáticamente 
   según el archivo package.json).

3. EJECUCIÓN:
   Para correr la prueba automatizada, ejecutar:
   node test/demoblaze.test.js

4. NOTAS TÉCNICAS:
   - El proyecto utiliza el patrón Page Object Model (POM).
   - Los datos de prueba se gestionan de forma externa en /data/userData.json.

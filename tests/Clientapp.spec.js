const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');

test('Login Page', async ({ page }) => {
    const email = 'raniraja@gmail.com';
    const password = 'raniraja@123';
    const productName = 'ZARA COAT 3';

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goTo();
    await loginPage.login(email, password);

    await dashboardPage.waitForProducts();

    const titles = await dashboardPage.getProductTitles();
    console.log(titles);

    const count = await dashboardPage.getProductCount();

    expect(titles).toContain(productName);
    expect(count).toBeGreaterThan(0);
});

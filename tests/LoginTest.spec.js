const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Login Test using Page Object Model', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goTo();
    await loginPage.login('raniraja@gmail.com', 'raniraja@123');

    // Add assertions or further steps as needed
    await expect(page.locator('.card-body b').first()).toBeVisible();
});
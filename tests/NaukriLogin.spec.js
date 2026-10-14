const { test, expect } = require('@playwright/test');
const { NaukriLoginPage } = require('../pages/NaukriLoginPage');

test('Naukri Login', async ({ page }) => {
    // Credentials are read from environment variables so they are never hard-coded.
    // Set them before running, e.g. (PowerShell):
    //   $env:NAUKRI_EMAIL="you@example.com"; $env:NAUKRI_PASSWORD="yourPassword"
    const email = process.env.NAUKRI_EMAIL;
    const password = process.env.NAUKRI_PASSWORD;

    test.skip(!email || !password, 'Set NAUKRI_EMAIL and NAUKRI_PASSWORD env vars to run this test.');

    const naukriLogin = new NaukriLoginPage(page);

    await naukriLogin.goTo();
    await naukriLogin.login(email, password);

    // Verify we reached the logged-in home page.
    await expect(async () => {
        expect(await naukriLogin.isLoggedIn()).toBeTruthy();
    }).toPass({ timeout: 30000 });
});

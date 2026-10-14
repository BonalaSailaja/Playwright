const {test, expect} = require("@playwright/test");

test ('Security testing', async({page})=> {
   
    //page.route('**/*.{jpg,png,jpeg}', route => route.abort());

    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body");

    const email = 'raniraja@gmail.com';
    const password = 'raniraja@123';
    await page.goto ("https://rahulshettyacademy.com/client");
    await page.locator('#userEmail').fill(email);
    await page.locator('#userPassword').fill(password);
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').first().waitFor();

    await page.locator("button[routerlink*='myorders']").click();

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6a2faa2817ee3e78badf176r"})
    );
    await page.locator("button:has-text('View')").first().click();
    //await page.pause();
    expect(page.locator(".blink_me")).toHaveText("You are not authorize to view this order");

});
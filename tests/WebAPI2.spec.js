const {test, expect} = require('@playwright/test');
let webContext;

test.beforeAll( async({browser})=> 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const email = 'raniraja@gmail.com';
    const password = 'raniraja@123';
    await page.goto ("https://rahulshettyacademy.com/client");
    await page.locator('#userEmail').fill(email);
    await page.locator('#userPassword').fill(password);
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path : 'state.json'});
    webContext = await browser.newContext({storageState : 'state.json'});
    


});

test('Login Page', async({})=>
{
 

    const productName = 'ZARA COAT 3';
    const page = await webContext.newPage();
    await page.goto ("https://rahulshettyacademy.com/client");
    const products = page.locator(".card-body");

    //await page.locator('.card-body b').first().waitFor();
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
    const count = await products.count();



 

}
)


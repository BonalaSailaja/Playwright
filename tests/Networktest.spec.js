const {test, expect,request} = require('@playwright/test');
const APIUtils = require('./utils/APIUtils');

const loginPayLoad = {userEmail:"raniraja@gmail.com",userPassword:"raniraja@123"}
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"6960eae1c941646b7a8b3ed3"}]}
const fakePayLoad = {data:[],message:"No Orders"}
let response;


test.beforeAll( async()=> {

    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext,loginPayLoad);
    response = await apiUtils.createOrder(orderPayLoad);

    

});

test('Place Order', async({browser})=>
{
    const context  = await browser.newContext();
    const page = await context.newPage();

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);
    await page.goto("https://rahulshettyacademy.com/client");

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*" ,
    async route =>
    {
        const response = await page.request.fetch(route.request());
        let body = JSON.stringify(fakePayLoad);
        route.fulfill(
        {
            response,
            body,
        });
    });

    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");

    console.log(await page.locator(".mt-4").textContent());


 
 
    

   

    /*const email = 'raniraja@gmail.com';
    const password = 'raniraja@123';
    await page.goto ("https://rahulshettyacademy.com/client");
    await page.locator('#userEmail').fill(email);
    await page.locator('#userPassword').fill(password);
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').first().waitFor();
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
    const count = await products.count();*/



 

}
)


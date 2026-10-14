const {test} = require('@playwright/test');
const { only } = require('node:test');

test ('Browsers' , async({browser})=> 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com");

}
)

test ('Browser' , async({page})=> 
{
    await page.goto("https://www.amazon.in");

}
)   
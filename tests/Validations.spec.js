const {test,expect} = require('@playwright/test');

test('Validations' , async({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    //await page.goto('https://www.myntra.com');
    //await page.goBack();
    //await page.goForward();*/
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('input[value="Hide"]').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    //await page.pause();
    await page.locator('#confirmbtn').click();
    await page.on('dialog', dialog => dialog.accept());
    await page.locator('#mousehover').hover();

    const framesPage = page.frameLocator('#courses-iframe');
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();
    const textContent = await framesPage.locator('.text h2').textContent();
    console.log(textContent.split(" ")[1]);

});

test('Screenshot',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#displayed-text').screenshot({path:'element.png'})
    await page.locator('input[value="Hide"]').click();
    await page.screenshot({path:'screenshot.png'});
    await expect(page.locator('#displayed-text')).toBeHidden();


});

test('Visual',async({page})=>{

    await page.goto('https://www.google.com');
    await expect(page.screenshot()).toMatchSnapshot('google.png');

});
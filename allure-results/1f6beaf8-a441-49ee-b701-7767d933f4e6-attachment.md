# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Validations.spec.js >> Visual
- Location: tests\Validations.spec.js:36:1

# Error details

```
Error: An unresolved Promise was passed to toMatchSnapshot(), make sure to resolve it by adding await to it.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]:
        - img [ref=e16]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - generic [ref=e22]:
    - 'link "World Cup 2026: The art of the curler" [ref=e23] [cursor=pointer]':
      - /url: /search?sca_esv=e43a3ddc6f999d2a&q=FIFA+World+Cup+2026&oi=ddle&noiga=1&ct=460195269&hl=en-GB&stick=H4sIAAAAAAAC_-NgVuLQz9U3MDYoNJ_AwriIVdjN081RITy_KCdFwbm0QMHIwMgMAKor_7IlAAAA&sa=X&ved=0ahUKEwi-kcPBjJ-VAxVGSmwGHY9OO4YQPQgG
      - 'img "World Cup 2026: The art of the curler" [ref=e25]'
    - button "Share" [ref=e27]:
      - generic "Share" [ref=e28] [cursor=pointer]:
        - img [ref=e32]
  - search [ref=e35]:
    - generic [ref=e37]:
      - generic [ref=e39]:
        - button "Add files and tools" [ref=e42] [cursor=pointer]:
          - img [ref=e44]
        - combobox "Search" [active] [ref=e47]
        - generic [ref=e48]:
          - generic [ref=e49]:
            - button "Search by voice" [ref=e50] [cursor=pointer]:
              - img [ref=e51]
            - button "Search by image" [ref=e53] [cursor=pointer]:
              - img [ref=e54]
          - link "AI Mode" [ref=e56] [cursor=pointer]:
            - generic [ref=e58]:
              - img [ref=e60]
              - generic [ref=e67]: AI Mode
      - generic [ref=e69]:
        - button "Google Search" [ref=e70] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e71] [cursor=pointer]
  - generic [ref=e74]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=e75] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_YA2C8wn8yKk4TKn-sPvqnyvjO9U%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwi-kcPBjJ-VAxVGSmwGHY9OO4YQ2ZgBCDk
    - link "বাংলা" [ref=e76] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_YA2C8wn8yKk4TKn-sPvqnyvjO9U%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwi-kcPBjJ-VAxVGSmwGHY9OO4YQ2ZgBCDo
    - link "తెలుగు" [ref=e77] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_YA2C8wn8yKk4TKn-sPvqnyvjO9U%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwi-kcPBjJ-VAxVGSmwGHY9OO4YQ2ZgBCDs
    - link "मराठी" [ref=e78] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_YA2C8wn8yKk4TKn-sPvqnyvjO9U%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwi-kcPBjJ-VAxVGSmwGHY9OO4YQ2ZgBCDw
    - link "தமிழ்" [ref=e79] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_YA2C8wn8yKk4TKn-sPvqnyvjO9U%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwi-kcPBjJ-VAxVGSmwGHY9OO4YQ2ZgBCD0
    - link "ગુજરાતી" [ref=e80] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_YA2C8wn8yKk4TKn-sPvqnyvjO9U%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwi-kcPBjJ-VAxVGSmwGHY9OO4YQ2ZgBCD4
    - link "ಕನ್ನಡ" [ref=e81] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_YA2C8wn8yKk4TKn-sPvqnyvjO9U%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwi-kcPBjJ-VAxVGSmwGHY9OO4YQ2ZgBCD8
    - link "മലയാളം" [ref=e82] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_YA2C8wn8yKk4TKn-sPvqnyvjO9U%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwi-kcPBjJ-VAxVGSmwGHY9OO4YQ2ZgBCEA
    - link "ਪੰਜਾਬੀ" [ref=e83] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_YA2C8wn8yKk4TKn-sPvqnyvjO9U%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwi-kcPBjJ-VAxVGSmwGHY9OO4YQ2ZgBCEE
  - contentinfo [ref=e85]:
    - generic [ref=e86]: India
    - generic [ref=e87]:
      - generic [ref=e88]:
        - link "Advertising" [ref=e89] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e90] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e91] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e92]:
        - link "Privacy" [ref=e93] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e94] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e98] [cursor=pointer]:
          - generic [ref=e99]: Settings
```

# Test source

```ts
  1  | const {test,expect} = require('@playwright/test');
  2  | 
  3  | test('Validations' , async({page})=>{
  4  | 
  5  |     await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  6  |     //await page.goto('https://www.myntra.com');
  7  |     //await page.goBack();
  8  |     //await page.goForward();*/
  9  |     await expect(page.locator('#displayed-text')).toBeVisible();
  10 |     await page.locator('input[value="Hide"]').click();
  11 |     await expect(page.locator('#displayed-text')).toBeHidden();
  12 |     //await page.pause();
  13 |     await page.locator('#confirmbtn').click();
  14 |     await page.on('dialog', dialog => dialog.accept());
  15 |     await page.locator('#mousehover').hover();
  16 | 
  17 |     const framesPage = page.frameLocator('#courses-iframe');
  18 |     await framesPage.locator("li a[href*='lifetime-access']:visible").click();
  19 |     const textContent = await framesPage.locator('.text h2').textContent();
  20 |     console.log(textContent.split(" ")[1]);
  21 | 
  22 | });
  23 | 
  24 | test('Screenshot',async({page})=>{
  25 | 
  26 |     await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  27 |     await expect(page.locator('#displayed-text')).toBeVisible();
  28 |     await page.locator('#displayed-text').screenshot({path:'element.png'})
  29 |     await page.locator('input[value="Hide"]').click();
  30 |     await page.screenshot({path:'screenshot.png'});
  31 |     await expect(page.locator('#displayed-text')).toBeHidden();
  32 | 
  33 | 
  34 | });
  35 | 
  36 | test('Visual',async({page})=>{
  37 | 
  38 |     await page.goto('https://www.google.com');
> 39 |     await expect(page.screenshot()).toMatchSnapshot('google.png');
     |                                     ^ Error: An unresolved Promise was passed to toMatchSnapshot(), make sure to resolve it by adding await to it.
  40 | 
  41 | });
```
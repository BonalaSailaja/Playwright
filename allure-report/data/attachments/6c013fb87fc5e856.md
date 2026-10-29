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
      - button "Google apps" [ref=e15] [cursor=pointer]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - img "Google" [ref=e23]
  - search [ref=e31]:
    - generic [ref=e33]:
      - generic [ref=e35]:
        - button "Add files and tools" [ref=e40] [cursor=pointer]
        - combobox "Search" [ref=e45]
        - generic [ref=e46]:
          - generic [ref=e47]:
            - button "Search by voice" [ref=e50] [cursor=pointer]
            - button "Search by image" [ref=e55] [cursor=pointer]
          - link "AI Mode" [ref=e58] [cursor=pointer]
      - generic [ref=e66]:
        - button "Google Search" [ref=e67] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e68] [cursor=pointer]
  - generic [ref=e69]:
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - dialog "Choose Chrome, the browser built by Google":
                      - generic [ref=e79]:
                        - generic [ref=e80]:
                          - heading "Choose Chrome, the browser built by Google" [level=2] [ref=e81]
                          - generic [ref=e82]: Try a fast, secure browser with automatic updates
                          - generic [ref=e83]:
                            - generic [ref=e84]:
                              - text: By downloading Chrome, you agree to the
                              - link "Google Terms of Service" [ref=e85] [cursor=pointer]:
                                - /url: https://policies.google.com/terms
                              - text: and
                              - link "Chrome and ChromeOS Additional Terms of Service" [ref=e86] [cursor=pointer]:
                                - /url: https://www.google.com/chrome/terms/
                              - text: .
                            - generic [ref=e88]:
                              - checkbox "Help make Google Chrome better by automatically sending usage statistics and crash reports to Google. Learn more about automatic reports." [checked] [ref=e89]
                              - generic [ref=e90]:
                                - text: Help make Google Chrome better by automatically sending usage statistics and crash reports to Google.
                                - link "Learn more about automatic reports" [ref=e91] [cursor=pointer]:
                                  - /url: https://support.google.com/chrome/answer/96817
                                - text: .
                        - generic [ref=e92]:
                          - button "Do not use Chrome" [ref=e93] [cursor=pointer]
                          - button "Download Chrome" [ref=e96] [cursor=pointer]
    - generic [ref=e100]:
      - text: "Google offered in:"
      - link "हिन्दी" [ref=e101] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_PBcrVeRzl8gA4PDA_ZmI_wrJ3uQ%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwjerKTowtyXAxUBj-EIHZUaHlkQ2ZgBCCs
      - link "বাংলা" [ref=e102] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_PBcrVeRzl8gA4PDA_ZmI_wrJ3uQ%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwjerKTowtyXAxUBj-EIHZUaHlkQ2ZgBCCw
      - link "తెలుగు" [ref=e103] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_PBcrVeRzl8gA4PDA_ZmI_wrJ3uQ%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwjerKTowtyXAxUBj-EIHZUaHlkQ2ZgBCC0
      - link "मराठी" [ref=e104] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_PBcrVeRzl8gA4PDA_ZmI_wrJ3uQ%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwjerKTowtyXAxUBj-EIHZUaHlkQ2ZgBCC4
      - link "தமிழ்" [ref=e105] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_PBcrVeRzl8gA4PDA_ZmI_wrJ3uQ%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwjerKTowtyXAxUBj-EIHZUaHlkQ2ZgBCC8
      - link "ગુજરાતી" [ref=e106] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_PBcrVeRzl8gA4PDA_ZmI_wrJ3uQ%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwjerKTowtyXAxUBj-EIHZUaHlkQ2ZgBCDA
      - link "ಕನ್ನಡ" [ref=e107] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_PBcrVeRzl8gA4PDA_ZmI_wrJ3uQ%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwjerKTowtyXAxUBj-EIHZUaHlkQ2ZgBCDE
      - link "മലയാളം" [ref=e108] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_PBcrVeRzl8gA4PDA_ZmI_wrJ3uQ%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwjerKTowtyXAxUBj-EIHZUaHlkQ2ZgBCDI
      - link "ਪੰਜਾਬੀ" [ref=e109] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_PBcrVeRzl8gA4PDA_ZmI_wrJ3uQ%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwjerKTowtyXAxUBj-EIHZUaHlkQ2ZgBCDM
  - contentinfo [ref=e111]:
    - generic [ref=e112]: India
    - generic [ref=e113]:
      - generic [ref=e114]:
        - link "Advertising" [ref=e115] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e116] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e117] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e118]:
        - link "Privacy" [ref=e119] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e120] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e124] [cursor=pointer]
```

# Test source

```ts
  1  | const {test,expect} = require('@playwright/test');
  2  | 
  3  | test('Validations' , async({page})=>{
  4  | 
  5  |     await page.goto('https://rahulshettyacademy.com/AutomationPractice/', { waitUntil: 'domcontentloaded' });
  6  |     //await page.goto('https://www.myntra.com');
  7  |     //await page.goBack();
  8  |     //await page.goForward();*/
  9  |     await expect(page.locator('#displayed-text')).toBeVisible();
  10 |     await page.locator('input[value="Hide"]').click();
  11 |     await expect(page.locator('#displayed-text')).toBeHidden();
  12 |     //await page.pause();
  13 |     page.on('dialog', dialog => dialog.accept());
  14 |     await page.locator('#confirmbtn').click();
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

const puppeteer = require('puppeteer');
const screenshot = 'twitter.png';

(async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })

    const navigationPromise = page.waitForNavigation()

    await page.goto('https://www.makemytrip.com/flights/')
    console.log('Done')
    // await page.waitForSelector('page-section .makeFlex .userSection .lhUser .userNameIcon')
    // await page.type('.StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .LoginForm-username > .text-input', 'tim_nolet')

    // await page.type('.StaticLoggedOutHomePage-cell > .StaticLoggedOutHomePage-login > .LoginForm > .LoginForm-password > .text-input', 'spWF9G5%')
    console.log('aaa')
    await page.click('.page-section  .landingContainer .userSection .lhUser')
    await page.type('input[id="username"]', 'ram.gokul2@gmail.com')
    await page.waitForSelector('input[type="password"]')
    await page.click('input[id="password"]')
    await page.type('input[id="password"]', 'Raam@123')
    await page.click('.btnContainer .capText')
    await navigationPromise

    // await page.waitForSelector('#timeline')
    // await page.screenshot({ path: screenshot })
    // await browser.close()
})()
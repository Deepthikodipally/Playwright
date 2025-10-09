import test from "playwright/test";

// test.

test("Handling Waits & Timing in Playwright", async ({ page }) => {

    await page.goto("https://68e23f2b2f488a00082834a4--testingpg.netlify.app/")

    let email = page.getByTestId('login-email')
    let password = page.getByTestId('login-password')

    // await email.waitFor({timeout:5000})
    // await email.waitFor({state:"attached"})// check if element is present in dom
    // await email.waitFor({state:"detached"}) // check if element is not present in dom
    // await email.waitFor({state:"visible"}) // check if element is visible
    // await password.waitFor({state:"hidden"}) // check if element is not visible

    await page.waitForTimeout(4000)
    // await (await page.waitForSelector('[data-testid="login-password"]')).fill("test1234")

    await page.waitForLoadState("networkidle")// wait for network to be idle
    await page.waitForLoadState("load")// wait for page to load
    await page.waitForLoadState("domcontentloaded")// wait for dom to be loaded

     // mouse keybords 

     

})
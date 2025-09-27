import { test, expect } from '@playwright/test';


test.describe("orangehrm login", async () => {


    // test.beforeEach(async ({ page }) => {
    //     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: 'load' });
    //     await page.waitForLoadState("load")
    // })

    test.afterEach(async ({ page }) => {
        await page.goto("https://www.google.com/");
    })



    test("valid credentials", async ({ page }) => {


        // await page.pause()
        // test.step("fill the username", async ({ }) => {
        await page.locator('[name="username"]').type("Admin");
        // })


    })


    test("launching google", async ({ page }) => {

      await  test.step("open orangehrm app", async () => {
            await page.goto("https://www.google.com/");
        })

    })



    test.skip("launching youtube", async ({ page }) => {

        // // test.step("open  app", async () => {
        //     await page.goto("https://www.youtube.com/");
        // // })

    })








})


// locators 
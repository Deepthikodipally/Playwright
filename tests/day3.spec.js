
import { test, expect } from '@playwright/test';

// test.describe("demoqa login", async () => {

   

    test("valid login", async ({ page }) => {

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: 'load' });

        // [name='username']
        // [name='password']
        //[type="submit"]

        let username=page.locator("[name='username']");
        let password=page.locator("[name='password']");
        let loginButton=page.locator("[type='submit']");


        await username.type("Admin");
        await password.type("admin123");
        await loginButton.click();
        

        // await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    });

    

// })

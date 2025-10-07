import { test, expect } from '@playwright/test';

// click 
//  Day 4: Interactions with Elements- Click, Fill, Type, Check/Uncheck- Keyboard & mouse actions- Dropdowns, radio buttons, checkboxes- Exercise: Automate a login form


test.describe("demoqa login", async () => {

    test("valid login", async ({ page }) => {

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: 'load' });
        // let username = page.getByPlaceholder("Username")
        // let password = page.getByPlaceholder("Password")
        // let loginButton = page.getByRole("button", { name: "Login" })

        // await username.fill("Admin");
        // await password.fill("admin123");
        // await loginButton.click();

        // await page.getByRole("link", { name: "Admin" }).click();


        // // await page.fill("#userName", "testuser");
        // // await page.fill("#password", "testpassword");
        // // await page.click("#login");
        // // await expect(page.locator("#welcome")).toHaveText("Welcome testuser");

        // let checkboxes = page.locator('[class="oxd-table-card-cell-checkbox"]')

        // await checkboxes.first().click()
        // await checkboxes.last().click()
        // // await checkboxes.nth(1).click()
        // // await checkboxes.nth(2).click()
        // // await checkboxes.nth(3).click()

        // // for (let i = 2; i < 15; i++) {
        // //     await checkboxes.nth(i).click()
        // // }

        // await page.getByText("Job").click()
        // await page.getByAltText("profile picture").click()
        // //  await page.
        // await page.getByRole("menuitem", { name: "Logout" }).click()

        // getByRole
        //await page.getByRole("link", { name: "Admin" }).click();

        let errorMessages = await page.locator(`//div[@class="orangehrm-login-error"]//p`).allTextContents();

        console.log(errorMessages);


    });

})
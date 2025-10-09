import { test, expect } from '@playwright/test';


test("login page", async ({ page }) => {
 //await page.goto('https://www.microsoft.com/edge');
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: 'load' });
 //await page.waitForLoadState("load")
  let username=page.locator("[name='username']");
  let password=page.locator("[name='password']");
  let login=page.locator("[type='submit']");

  await username.fill("Admin");
  await password.fill("admin123");
  await login.click();

  //await expect(page.locator('[class="oxd-main-menu-item active"]'));
  await expect(page.locator('[class="oxd-topbar-header-breadcrumb"]')).toHaveText("Dashboard");

})

//Sceanrio 2

test("valid login", async ({ page }) => {
 await page.goto('https://www.microsoft.com/edge');
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: 'load' });
 await page.waitForLoadState("load")
  let username=page.locator("[name='username']");
  let password=page.locator("[name='password']");
  let login=page.locator("[type='submit']");

  await username.fill("Wronguser");
  await password.fill("admin123");
  await login.click();

  //await expect(page.locator('[class="oxd-main-menu-item active"]'));
  await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText("Invalid credentials");

   let errorMessages = await page.locator(`//div[@class="orangehrm-login-error"]//p`).allTextContents();

        console.log(errorMessages);
})

//scenario 3- Invalid password

test("Invalid login", async ({ page }) => {
 await page.goto('https://www.microsoft.com/edge');
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: 'load' });
 await page.waitForLoadState("load")
  let username=page.locator("[name='username']");
  let password=page.locator("[name='password']");
  let login=page.locator("[type='submit']");

  await username.fill("Admin");
  await password.fill("wrongpassword");
  await login.click();

  //await expect(page.locator('[class="oxd-main-menu-item active"]'));
  await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText("Invalid credentials");

   let errorMessages = await page.locator(`//div[@class="orangehrm-login-error"]//p`).allTextContents();

        console.log(errorMessages);
})

//login with empty creds

test.only("empty login", async ({ page }) => {
 //await page.goto('https://www.microsoft.com/edge');
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: 'load' });
 await page.waitForLoadState("load")
  let username=page.locator("[name='username']");
  let password=page.locator("[name='password']");
  let login=page.locator("[type='submit']");

  await username.fill(" ");
  await password.fill(" ");
  await login.click();

  //await expect(page.locator('[class="oxd-main-menu-item active"]'));
  await expect(page.locator('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').first()).toHaveText("Required");

   let errorMessages = await page.locator(`//div[@class="orangehrm-login-error"]//p`).allTextContents();

        console.log(errorMessages);
})



    




   
    











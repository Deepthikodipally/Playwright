import { test, expect } from '@playwright/test';


test("valid login", async ({ page }) => {
 await page.goto('https://www.microsoft.com/edge');
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: 'load' });
 await page.waitForLoadState("load")
  let username=page.locator("[name='username']");
  let password=page.locator("[name='password']");
  let login=page.locator("[type='submit']");

  await username.fill("Admin");
  await password.fill("admin123");
  await login.click();

  //await expect(page.locator('[class="oxd-main-menu-item active"]'));
  await expect(page.locator('[class="oxd-topbar-header-breadcrumb"]')).toHaveText("Dashboard");

})

    




   
    











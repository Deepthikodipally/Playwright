
import test from "@playwright/test";
test('authentcation catch the storage state  using local storage', async ({ page }) => {

   await page.goto('https://testingpg.netlify.app/')
     await page.locator(`//button[text()='Login']`).click()
     await page.getByTestId('login-email').click();
     await page.getByTestId('login-email').fill(`testuseraidriven8857@gmail.com`)
     await page.getByTestId('login-password').click();
     await page.getByTestId('login-password').fill('testuseraidriven8857@gmail.com');
     await page.getByTestId('login-submit').click();
})
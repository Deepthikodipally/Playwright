import { test, expect } from '@playwright/test';
test('1. Visibility Checks', async ({ page }) => {

    await page.goto("http://127.0.0.1:5500/testpages/login.html");
    await page.waitForLoadState('networkidle');
    let loginTitle = page.getByText("Login", { exact: true }).first();

    // console.log("is login title visible " + await loginTitle.isVisible());
    // await expect(loginTitle).toBeVisible();
    // await expect(loginTitle).toBeHidden();

    let username = page.locator('[placeholder="Enter username"]')
    await expect(username).toBeVisible();

    let username1 = page.getByPlaceholder('Enter username')
    // await page.




})

//2. URL Assertions
test('2. URL Assertions', async ({ page }) => {

    await page.goto("http://127.0.0.1:5500/testpages/login.html")

    // await expect(page).toHaveURL('login')
    let url = page.url();
    console.log(url);
    await expect(url).toContain('test');
    // to Equal 
    await expect(url).toEqual('http://127.0.0.1:5500/testpages/login.htmlr')

});


//3. Title Assertions
test('3. Title Assertions', async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/testpages/login.html")
    let title = await page.title();
    console.log(title);
    // await expect(title).toBe('Day 4 — Login')
    await expect(title).toContain('Login')
    // it check partial text

})

test('4. Text Assertions', async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/testpages/login.html")


    let text = page.locator('h2').last();

    let t = await text.textContent();
    console.log(t,"*****************************");

    // await expect(t).toBe('Login')
    await expect(t).toContain('Login')


    // await expect(text).toHaveText('Login')

    


})
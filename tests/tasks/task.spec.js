import { test, expect } from '@playwright/test';
//check this psge elements and test, url: https://68e23f2b2f488a00082834a4--testingpg.netlify.app/t

test("Welcome back", async ({ page }) => { 
await page.goto("https://68e23f2b2f488a00082834a4--testingpg.netlify.app/");
//await page.tohavetext('Welcome Back');
let title = page.getByText("Welcome Back", {exact: true });
await expect(title).toBeVisible();
})


test("Title assertion", async({ page }) => {
    await page.goto("https://68e23f2b2f488a00082834a4--testingpg.netlify.app/");
    let title =await page.title();
    console.log(title);
    await expect (title).toContain ('Ai Driven Testing - Automation Testing Playground');
})

//class="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
test ("AItestinghub" , async({ page }) =>{

await page.goto("https://68e23f2b2f488a00082834a4--testingpg.netlify.app/");
    //let text = page.locator('class="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"');
   let text = page.locator ('h1').first();
   let t = await text.textContent();
    await expect(t).toContain('AI Testing Hub')


})

test.only("urlAssertions" , async( { page }) =>{
   await page.goto("https://68e23f2b2f488a00082834a4--testingpg.netlify.app/");
   await page.waitForTimeout(2000);
    let url = await page.url();
    console.log(url);
   // await page.waitForTimeout(2000);
    await expect(url).toContain('login');
})
import { test, expect } from '@playwright/test';
//check this psge elements and test, url: https://68e23f2b2f488a00082834a4--testingpg.netlify.app/t

test("login", async ({ page }) => { 
await page.goto("https://68e23f2b2f488a00082834a4--testingpg.netlify.app/");
await page.tohavetext('Welcome Back');



})


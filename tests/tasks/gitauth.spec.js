import test from "@playwright/test";

test ('authentication from github', async({ page}) => {
    await page.goto ('https://github.com/login');
    //await page.locator(`//button[text()=  Username or email address']`);
    await page.getByLabel('Username or email address').click()
    await page.getByLabel('Username or email address').fill('deepthikodipally@gmail.com')
    await page.getByLabel('password').click()
    await page.getByLabel('password').fill('deepthikodipally@gmail.com')
    //await page.locator("//button[@value='Sign in']").click()
    // await page.getByText('Sign in').click()
   // let Signin=page.locator("[type='submit']");

   // await Signin.click()
   await page.click('input[name="commit"]');


    
 await page.waitForTimeout(5000)
 await page.context().storageState({path:"auth/gitauth.json"})

 // repository text is visible
  const repo = page.locator('text=Deepthikodipally/Playwright');
  //await expect(repo).toBeVisible();

  // verifying the text content
  //await expect(repo).toHaveText(/Deepthikodipally\/Playwright/i);

  //console.log(" Repository 'Deepthikodipally/Playwright' is visible on the dashboard.");

})
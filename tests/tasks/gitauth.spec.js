import test from "@playwright/test";

//test ('authentication from github', async({ page}) => {
   // await page.goto ('https://github.com/login');
    
    //await page.getByLabel('Username or email address').click()
    //await page.getByLabel('Username or email address').fill('deepthikodipally@gmail.com')
    //await page.getByLabel('password').click()
    //await page.getByLabel('password').fill('deepthikodipally@gmail.com')
    //await page.locator('[value="Sign in"]').click()
    //await page.getByText('Sign in',{exact:true}).click()
   // let Signin=page.locator("[type='submit']");

   // await Signin.click()
  // await page.click('input[name="commit"]');


    
 //await page.waitForTimeout(5000)
 //await page.context().storageState({path:"auth/gitauth.json"})

 // repository text is visible
 // const repo = page.locator('text=Deepthikodipally/Playwright');
  //await expect(repo).toBeVisible();

  // verifying the text content
  //await expect(repo).toHaveText(/Deepthikodipally\/Playwright/i);

  //console.log(" Repository 'Deepthikodipally/Playwright' is visible on the dashboard.");

//})


test.use({ storageState: 'auth/gitauth.json' });
test('authentcation catch the storage state mocking', async ({ page }) => {
    await page.goto('https://github.com/login')
    //let test = await page.locator('Deepthikodipally/Playwright').textContent()
    let test = await page.locator('text=Deepthikodipally/Playwright')
    //await expect(test).toBeVisible();
    console.log(test);
    await page.waitForTimeout(10000)

    //await page.locator('[class="Button-label"]').click()
    //await page.getByText('New',{exact:true}).click()
    //class="Button-label">New</span> aka getByRole('link', { name: 'New' })
    //await page.locator('[class="Button-label">New</span> aka getByRole("link", { name: "New" })]').click()
    await page.click('button:has-text("New"), a:has-text("New")');
    await page.getByText('Repository name', { exact: true }).click()
    await page.waitForTimeout(5000)
    await page.getByText('Repository name', { exact: true }).fill ('new1')
    
    //await page.scrollTo('button:has-text("Create repository"), a:has-text("Create repository)');
    //await page.click('button:has-text("Create repository"), a:has-text("Create repository)');
    // let sectionTitle = page.getByText('Create repository')
    // await sectionTitle.scrollIntoViewIfNeeded()

     
    //  const [newpage]=await Promise.all([
    //     page.context().waitForEvent('page'),
    //     sectionTitle.click()
     //])

     await page.click('button[type="submit"]:has-text("Create repository")');

  

  // Verify repository was created successfully
  await expect(page).toHaveURL( "https://github.com/Deepthikodipally/new1");
  //await expect(url).toContain('new1');
  //console.log("Repository created successfully!");

   //await expect(url).toEqual('https://github.com/Deepthikodipally/new1')

})
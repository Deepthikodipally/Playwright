import test, { expect } from "@playwright/test";

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
    //await page.waitForTimeout(10000)

    //await page.locator('[class="Button-label"]').click()
    //await page.getByText('New',{exact:true}).click()
    //class="Button-label">New</span> aka getByRole('link', { name: 'New' })
    //await page.locator('[class="Button-label">New</span> aka getByRole("link", { name: "New" })]').click()
    await page.click('button:has-text("New"), a:has-text("New")');
    await page.getByText('Repository name', { exact: true }).click()
    await page.waitForTimeout(5000)
    await page.getByText('Repository name', { exact: true }).fill ('Deeprepo')
    
    //await page.scrollTo('button:has-text("Create repository"), a:has-text("Create repository)');
    //await page.click('button:has-text("Create repository"), a:has-text("Create repository)');
    //let sectionTitle = page.getByText('Create repository', {exact: true})
    //await sectionTitle.click()
    

     
   
 

     await page.click('button[type="submit"]:has-text("Create repository")');
     await page.waitForLoadState("domcontentloaded")
     await page.waitForTimeout(10000)

  

  // Verify repository was created successfully
  //await expect(page).toHaveURL( "https://github.com/Deepthikodipally/new3");
  let url = await page.url()
  console.log(url)
  //await expect(url).toContain('Deeprepo');
  //console.log("Repository created successfully!");

   //await expect(url).toEqual('https://github.com/Deepthikodipally/new1')

})
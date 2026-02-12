
// import test from "@playwright/test";
// test('authentcation catch the storage state  using local storage', async ({ page }) => {

//    await page.goto('https://testingpg.netlify.app/')
//      await page.locator(`//button[text()='Login']`).click()
//      await page.getByTestId('login-email').click();
//      await page.getByTestId('login-email').fill(`testuseraidriven8857@gmail.com`)
//      await page.getByTestId('login-password').click();
//      await page.getByTestId('login-password').fill('testuseraidriven8857@gmail.com');
//      await page.getByTestId('login-submit').click();
// })

import test, { expect } from "playwright/test";

test.use({ storageState: 'auth/auth.json' });
test('authentcation catch the storage state mocking', async ({ page }) => {
    await page.goto('https://testingpg.netlify.app/showcase/tables')
    // let test = await page.locator('//h2').textContent()
    // console.log(test);
    // await page.waitForTimeout(10000)
    let headersElement = (await page.locator('//th').all()).filter((Value, index) => {
        return index > 1
    })

    //test data 
    let expectedHeades = ["Name", "Email", "Department", "Position", "Salary", "Hire Date", "Status", "Performance", "Actions"]

    let headerTexts = headersElement.map(async (element, index) => {
        // console.log();
        let header = await element.textContent()
        console.log(header);
        expect(header).toEqual(expectedHeades[index])
        // return header

  })

     //await page.click('button:has-text("Product Inventory"), a:has-text("Product Inventory)');
await page.getByRole('tab', {name: "Product Inventory"}).click()
     let headersElement1 = (await page.locator('//th').all()).filter((Value, index) => {
       return index > 1
     })

    //test data 
    let expectedHeaders = ["Product Name", "Category", "Price", "Stock", "Rating",  "Status", "Last Updated", "Supplier", "Actions"]

    let headerTexts1 = headersElement1.map(async (element, index) => {
    //     // console.log();
       let header1 = await element.textContent()
      console.log(header1);
      expect(header1).toEqual(expectedHeaders[index])
    })

   
    //Order Processing
await page.getByRole('tab', {name: "Order Processing"}).click()
     let headersElement2 = (await page.locator('//th').all()).filter((Value, index) => {
       return index > 0
     })

    //test data 
    let expectedHeaders1 = ["Order ID", "Customer", "Email", "Amount", "Status", "Order Date", "Items", "Priority", "Actions"]

    let headerTexts2 = headersElement2.map(async (element, index) => {
    //     // console.log();
       let header2 = await element.textContent()
      console.log(header2);
      expect(header2).toEqual(expectedHeaders1[index])
    })

    })
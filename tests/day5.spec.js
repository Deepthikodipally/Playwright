import { test, expect } from '@playwright/test';

test('login form test', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/testpages/login.html');


    await page.getByPlaceholder('Enter username').type('adminoo')

    await page.getByPlaceholder('Enter password').type('Admin@123');

    let checkbox = page.locator('#remember');
    await checkbox.check();
    await page.waitForTimeout(6000);
    await checkbox.uncheck();

    let radio = page.getByText('Admin').first()
    await radio.check();


    let dropdown = page.locator('#lang');
// standard way for select tag
    await dropdown.click()
    await dropdown.selectOption('Hindi')


// alternative way in other tags like div , span etc
    // let option = page.getByText('german');
    // await option.scrollIntoViewIfNeeded();
    // await option.click({force:true})

    await page.getByRole('button', { name: 'Login' }).click();

    let statusmessage= page.locator('#success');


    let errormessage=await statusmessage.textContent();
    console.log(errormessage);
    let errormessages=await page.locator('#error').textContent();

    if (errormessage=="Logged in successfully!") {
         console.log("test passed");
         console.log(errormessages);
         
    }else{
         console.log(errormessage);
        console.log("test failed");
    }








});

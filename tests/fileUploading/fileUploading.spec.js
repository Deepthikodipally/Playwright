// Day 9: File Uploads & Downloads- setInputFiles for uploads- Handling file downloads- Exercise: Upload profile picture
//  Day 10: Alerts, Popups, Dialogs- Handling JavaScript alerts & confirms- Handling native dia

import test, { expect } from "playwright/test";



test("file download", async ({ page }) => {
    await page.goto("https://68e23f2b2f488a00082834a4--testingpg.netlify.app/")

    await page.getByTestId('login-email').click();
    await page.getByTestId('login-email').fill(`vignesh6381@gmail.com`)

    await page.getByTestId('login-password').click();
    await page.getByTestId('login-password').fill('Vignesh1234');

    await page.getByTestId('login-submit').click();


    await page.locator('[href="/playground/filemanager"]>button').click();


    const [download] = await Promise.all([
        page.waitForEvent('download'), // wait for download to start
        page.locator('[data-testid="download-5"]').click(), // perform action that initiates download
    ]);
        //  step 1 click the download link or button
        //  step 2 wait for the download to start
        //  step 3 save the file to the disk
        let suggestedFileName =await download.suggestedFilename()
        console.log(suggestedFileName);
        
        await download.saveAs('./downloads/'+suggestedFileName)

        // task 1 
        // get the download data => actual data
        // get testData file => expectted data
        // compare both the data

})


test("file upload", async ({ page }) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/?utm_source=chatgpt.com')
    let o="image_0901.jpg"
    await page.setInputFiles('[type="file"]','tests/testData/'+o)
    let errormessage=await page.locator('[class="error text-danger"]').textContent()
    console.log(errormessage);
    await expect(errormessage).toBe('File type not allowed');
    
})
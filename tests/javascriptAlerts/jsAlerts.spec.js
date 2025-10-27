import test, { expect } from "playwright/test";




test('js alerts', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts', { waitUntil: 'load' });
    //  await page.waitForLoadState('load')

    //   page.once('dialog', async dialog => {
    //     console.log('Dialog message:', dialog.message());
    //     await dialog.accept();
    //   });
    //   const showAlertButton = page.getByText('Click for JS Alert');
    //   await showAlertButton.click(); 
    //   await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

    page.once("dialog", async alert => {
        console.log(alert.message());
        // await alert.dismiss()
        // await alert.type('test123')

        await alert.accept('js alerts https://the-internet.herokuapp.com/javascript_alerts')
    })


    const showAlertButton = page.getByText('Click for JS Prompt');
    await showAlertButton.click();

    let text = await page.locator('[id="result"]').textContent()
    console.log(text);

   
    // await expect(text).toEqual("test")
     
    // await page.screenshot({path:"image/alerts/yy.png",fullPage:true})


});




import test, { expect } from "playwright/test";

test.use({ storageState: 'auth/auth.json' });
test('authentcation catch the storage state mocking', async ({ page }) => {
    await page.goto('https://testingpg.netlify.app/playground-modules/scenarios')
    // let test = await page.locator('//h2').textContent()
    // console.log(test);
    // await page.waitForTimeout(10000)
    let headersElement = (await page.locator('//th').all()).filter((Value, index) => {
        return index > 0
    })

    //test data 
    let expectedHeades = ["Name", "Email", "Role", "Status", "Last Login", "Actions"]

    let headerTexts = headersElement.map(async (element, index) => {
        // console.log();
        let header = await element.textContent()
        console.log(header);
        expect(header).toEqual(expectedHeades[index])
        // return header

    })

})
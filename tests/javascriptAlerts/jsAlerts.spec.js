import test from "playwright/test";

test("js alerts", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    // let email = page.getByTestId('login-email')
    // let password = page.getByTestId('login-password')
    // await email.fill("vignesh6381@gmail.com")
    // await password.fill('Vignesh1234')
    // await page.getByText('Sign In').click()
    // await page.locator('[href="/playground/fundamentals"]').click()


    // let sectionTitele = page.getByText('JavaScript Alerts')
    // await sectionTitele.scrollIntoViewIfNeeded()

    let showAlertButton = page.getByText('Click for JS Alert')
    // await showAlertButton.click()


    // await page.on("dialog",async dialog=>{

    //     console.log(dialog.message());
    //     await dialog.accept()
    //     // await dialog.dismiss
    // })

await showAlertButton.click()
    const [dialog] = await Promise.all([
        page.waitForEvent('dialog'),
        showAlertButton.click(),
        ])

         console.log(dialog.message());
         
         await dialog.accept() // ok 






})
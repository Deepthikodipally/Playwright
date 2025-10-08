import test from "playwright/test";

// test("frame Handling in Playwright", async ({ page }) => {
//     await page.goto("https://68e23f2b2f488a00082834a4--testingpg.netlify.app/")

//     await page.getByTestId('login-email').click();
//     await page.getByTestId('login-email').fill('vignesh6381@gmail.com');
//     await page.getByTestId('login-password').click();
//     await page.getByTestId('login-password').fill('Vignesh1234');
//     await page.getByTestId('login-password').click();
//     await page.getByTestId('login-submit').click();

//     let button = page.locator('[href="/playground/fundamentals"]>button')
//     await button.scrollIntoViewIfNeeded()
//     await page.mouse.wheel(0, 1900)
//     await button.hover()
//     await button.click();
//     await page.mouse.move(700, 700)
//     await page.mouse.wheel(0, 3900)

//     let framePage = page.frameLocator('[data-testid="test-iframe"]')
//     let r = await framePage.locator('h3').textContent()
//     console.log(r);


// })



test("frame Handling in Playwright", async ({ page }) => {
    await page.goto("https://68e23f2b2f488a00082834a4--testingpg.netlify.app/")

    await page.getByTestId('login-email').click();
    await page.getByTestId('login-email').fill(`vignesh6381@gmail.com`)

    await page.getByTestId('login-password').click();
    await page.getByTestId('login-password').fill('Vignesh1234');

    await page.getByTestId('login-submit').click();


    let pageButton = page.locator('[href="/playground/fundamentals"]>button')

    // await pageButton.scrollIntoViewIfNeeded()
    await pageButton.hover()
    await pageButton.click();


    // await page.mouse.wheel(0,2200)
    // await page.mouse.wheel(0,1200)

    // await page.mouse.move(700,700)
    // await page.mouse.click(700,700)

    // await page.keyboard.press("Tab")
    //  await page.keyboard.press("Tab")
    //   await page.keyboard.press("Tab")
    // await page.keyboard.press("space")

    // for (let i=0;i<17;i++){
    //     await page.keyboard.press("Tab")
    //     if (i==3) {
    //         await page.keyboard.press("Enter")
    //     }
    // }

    // frame handling
    let framePage=page.frameLocator('[title="Test Frame"]')
    
    let textContent=await framePage.locator('p').textContent()
    console.log(textContent);
    let buttonText=await framePage.locator('button').textContent()
    console.log(buttonText);
    







})




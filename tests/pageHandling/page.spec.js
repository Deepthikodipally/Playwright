import test from "playwright/test"

test("page handling", async ({ page }) => {

    await page.goto("https://68e23f2b2f488a00082834a4--testingpg.netlify.app/")

    let email = page.getByTestId('login-email')
    let password = page.getByTestId('login-password')
    await email.fill("vignesh6381@gmail.com")
    await password.fill('Vignesh1234')
    await page.getByText('Sign In').click()
    await page.locator('[href="/playground/fundamentals"]').click()


    let sectionTitele = page.getByText('Open New Window')
    await sectionTitele.scrollIntoViewIfNeeded()

     
     const [newpage]=await Promise.all([
        page.context().waitForEvent('page'),
        sectionTitele.click()
     ])

     

    let t= await newpage.locator('[class="card"]>p').first().textContent()
    console.log(t);

    await  sectionTitele.click()
    await  page.locator('[data-testid="back-button"]').click()
    

    //  await newpage.locator('[class="card"]>h1')







})
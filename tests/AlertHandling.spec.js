import{test} from '@playwright/test'
test('windowHandling',async({context})=>{

    const page = await context.newPage()
    await page.goto("https://demo.automationtesting.in/Windows.html");
    const [newPage] = await Promise.all([page.waitForEvent('popup'),page.locator('//button[@class="btn btn-info"]').first().click()])
    await newPage.locator("//span[text()='Projects']").click();
    await newPage.bringToFront();
    const text = await page.locator("//h1[text()='Automation Demo Site ']").allTextContents();
    console.log(text);
});
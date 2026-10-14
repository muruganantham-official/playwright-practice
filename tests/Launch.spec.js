import { test, expect, chromium } from '@playwright/test'
test('Launch', async () => {
   const browser = await chromium.launch();
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://www.instagram.com/");
   let title = await page.title();
   console.log("available tile is ", title);
   await expect(page).toHaveTitle("Instagram");
   if (title === "Instagram") {
      console.log("Title is matching");
   } else {
      console.log("Tile is not matching");
   }
   let url = page.url();
   console.log("given link is" + " " + url);
   await expect(page).toHaveURL("https://www.instagram.com/");
   if (url === "https://www.instagram.com") {
      console.log("url is matcing");
   } else {
      console.log("url is not matching");
   }

   //Today class
   let username = page.locator("//input[@autocomplete='username webauthn']");
   await username.fill("muruga.j30@gmail.com");
   let password = page.locator("//input[@type='password']");
   await password.fill("Open@123");
   await page.locator("//div[@aria-label='Log In']").click();
await page.locator("//div[normalize-space()='Not now']").click();
});

import{test} from '@playwright/test'
test('dropdown',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdown = page.locator('//select[@id="country"]');
    const dd3 = await dropdown.selectOption({index : 0});
    const values = await dropdown.inputValue();
    await dropdown.selectOption({label : 'Canada'});
    await dropdown.selectOption({value : 'france'})
    const value = await dropdown.inputValue();
    
    console.log(value);
    console.log(values);
    

})






// test.only('DropDown', async ({ page }) => {

//     await page.goto("https://testautomationpractice.blogspot.com/");

//     const dropdown = page.locator('//select[@id="country"]');

//     await dropdown.selectOption({ value: 'canada' });

//     await dropdown.selectOption({ label: 'Australia' });

//     await dropdown.selectOption({ index: 5 });

    // Multi Dropdown
    // await dropdown.selectOption([
    //     { label: 'India' },
    //     { value: 'canada' }
    // ]);

// });
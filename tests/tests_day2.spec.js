import{test,expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");  // NO NEED TO WRITE GOTO IN EACH TEST
});
test("first test ", async({page})=>{
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByText("Login").click();
    await page.locator("[data-test=add-to-cart-sauce-labs-bike-light]").click();
    //await page.locator("#add-to-cart-sauce-labs-bike-light").click(); //Alternate locator
    await expect(page.locator("[data-test='shopping-cart-badge']")).toHaveText("1");
    const product = page.locator(".inventory_item").filter({ hasText: "Sauce Labs Backpack" });
    await product.getByRole("button", { name: "Add to cart" }).click(); 
    //await page.pause();
});
test("invalid test check" , async({page})=>{
    await page.locator("#login-button").click();
    await expect(page.locator('[data-test="error"]')).toContainText("Username is required");
    //zawait page.pause();

});
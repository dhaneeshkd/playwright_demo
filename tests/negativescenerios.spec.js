import {test , expect} from "@Playwright/test";
import { loginpage } from "../pages/Login_page";
import { inventory } from "../pages/inventory_page";
import { cartPage } from "../pages/cart_page";
import { checkoutPage } from "../pages/Checkout_page";
test ("Negatives", async({page})=>{
    const loginPage = new loginpage(page);
    const CartPage = new cartPage(page);
    const Inventory = new inventory(page);
    const CheckoutPage = new checkoutPage(page);
    await loginPage.open();
    await loginPage.login("", "secret_sauce");
    await expect(
        page.locator('[data-test="error"]')
    ).toHaveText("Epic sadface: Username is required");
    await loginPage.login("standard_user", "secret_sauce");
    await Inventory.addToCart("Sauce Labs Bike Light");
    await Inventory.addToCart("Sauce Labs Bolt T-Shirt");
    await CartPage.openCart();
    await expect(CartPage.checkQuantity("Sauce Labs Bike Light")).toHaveText("1");
    await CheckoutPage.goToCheckout();
    await CheckoutPage.fillCheckout("","KD","12345");
    await CheckoutPage.continuee();
    await expect(page.locator('[data-test="error"]')).toHaveText("Error: First Name is required");
}
)

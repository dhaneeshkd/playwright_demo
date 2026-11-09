import {test , expect} from "@Playwright/test";
import {loginpage} from "../pages/Login_page.js";
import { inventory } from "../pages/inventory_page.js";
import { cartPage } from "../pages/cart_page.js";
import { checkoutPage } from "../pages/Checkout_page.js";
import { orderPage } from "../pages/OrderPage.js";

test("TestFromDOM" , async ({page}) => {
    const Loginpage = new loginpage(page);
    const Inventory = new inventory(page);
    const CartPage = new cartPage(page);
    const CheckoutPage = new checkoutPage(page);
    const OrderPage = new orderPage(page);
    await Loginpage.open();
    await Loginpage.login("standard_user", "secret_sauce");
    await expect(page).toHaveURL(/inventory.html/);
    await Inventory.addToCart("Sauce Labs Onesie");
    await Inventory.addToCart("Sauce Labs Backpack");
    await expect(page.locator("[data-test='shopping-cart-badge']")).toHaveText("2");
    await CartPage.openCart();
    await CartPage.removeProduct("Sauce Labs Onesie");
    await expect(page.locator(".shopping_cart_badge")).toHaveText("1");
    await CheckoutPage.goToCheckout();
    await CheckoutPage.fillCheckout("Dhaneesh" , "KD" , "12345");
    await CheckoutPage.continuee();
    await OrderPage.finishOrder();
    await expect(
        OrderPage.getconfirmationmessage()).toHaveText("Thank you for your order!");
});
/*test("AddProdctsToCart" , async({page}) =>{
    const Inventory = new inventory(page);
    await Inventory.AddToCart("Sauce Labs Onesie");
    await expect(page.locator("[data-test='shopping-cart-badge']")).toHaveText("1");

});
*/
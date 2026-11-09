import {test , expect} from "@Playwright/test";
import {loginpage} from "../pages/Login_page.js";
import { inventory } from "../pages/inventory_page.js";
import { cartPage } from "../pages/cart_page.js";
import { checkoutPage } from "../pages/Checkout_page.js";
//import { orderPage } from "../pages/OrderPage.js";

const testData = [
    {
        testName: "First Name missing",
        firstname: "",
        lastname: "KD",
        zipcode: "12345",
        expectedError: "Error: First Name is required"
    },
    {
        testName: "Last Name missing",
        firstname: "John",
        lastname: "",
        zipcode: "12345",
        expectedError: "Error: Last Name is required"
    },
    {
        testName: "Postal Code missing",
        firstname: "John",
        lastname: "Smith",
        zipcode: "",
        expectedError: "Error: Postal Code is required"
    }
];
test.beforeEach(async({page})=>{
        const Loginpage = new loginpage(page);
        const Inventory = new inventory(page);
        const CartPage = new cartPage(page);
        //const OrderPage = new orderPage(page);
        await Loginpage.open();
        await Loginpage.login("standard_user", "secret_sauce");
        //await expect(page).toHaveURL(/inventory.html/);
        await Inventory.addToCart("Sauce Labs Onesie");
        await Inventory.addToCart("Sauce Labs Backpack");
        await expect(page.locator("[data-test='shopping-cart-badge']")).toHaveText("2");
        await CartPage.openCart();
        //await CartPage.removeProduct("Sauce Labs Onesie");
        //await expect(page.locator(".shopping_cart_badge")).toHaveText("1");
        

});
for (const data of testData){
    test(data.testName , async({page}) =>{
        const CheckoutPage = new checkoutPage(page);
        await CheckoutPage.goToCheckout();
        await CheckoutPage.fillCheckout(data.firstname ,data.lastname , data.zipcode);
        await CheckoutPage.continuee();
        await expect(page.locator("[data-test='error']")).toHaveText(data.expectedError);

    }
)
}

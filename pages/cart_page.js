export class cartPage{
    constructor(page){
        this.page =page;
        this.cartLink = page.locator(".shopping_cart_link");
        this.cartItems = page.locator(".cart_item")
    }
    async openCart(){
        await this.cartLink.click();
    }
    getProduct(productName){
        return this.cartItems.filter({
            hasText :productName
        });
    }
    async removeProduct(productName){
     const product = this.getProduct(productName);
     await product.getByRole("button" , {name: "Remove"}).click();
    }
    async clickcheckout()
    {
        await this.page.getByRole('button', { name: 'Checkout' }).click();
    }
    checkQuantity(productName){
        return this.getProduct(productName).locator('[data-test="item-quantity"]');
    }
}


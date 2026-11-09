export class inventory{
    constructor(page){
        this.page = page;
        this.products = page.locator(".inventory_item");
    }
    async addToCart(productName){
        const product = this.products.filter({hasText : productName});
        await product.getByRole("button" , {
            name: "Add to cart"
        }).click();
    }
}
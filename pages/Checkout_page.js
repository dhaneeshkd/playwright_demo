export class checkoutPage{
    constructor(page){
        this.page = page;
        this.checkout = page.getByRole("button" , {
            name:"Checkout"
        });
        this.firstname = page.locator("#first-name");
        this.lastname = page.locator("#last-name");
        this.zipcode = page.locator("#postal-code");
        this.continues = page.getByRole("button",{name : "continue"});
    }
    async goToCheckout(){
        await this.checkout.click();
    }
    async fillCheckout(firstname , lastname , zipcode){
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.zipcode.fill(zipcode);
    }
    async continuee() {
        await this.continues.click();
    }
    
}
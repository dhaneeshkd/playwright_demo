export class orderPage{
    constructor(page){
        this.page= page;
        this.finish =page.locator("[data-test='finish']");
        this.headermsg = page.locator("[data-test='complete-header']");
    }
    async finishOrder(){
        await this.finish.click();
    }
    getconfirmationmessage(){
        return this.headermsg;    }
     
}
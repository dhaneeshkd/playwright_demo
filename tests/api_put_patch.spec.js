/*import { test, expect } from "@playwright/test";

test("Update product using PUT", async ({ request }) => {

    const productData = {
        title: "Automation Testing Product",
        price: 250,
        stock: 50
    };

    // Send PUT request
    const response = await request.put(
        "https://dummyjson.com/products/1",
        {
            data: productData
        }
    );

    // Verify HTTP status
    expect(response.status()).toBe(200);

    // Parse response
    const body = await response.json();

    // Verify updated data
    expect(body.id).toBe(1);
    expect(body.title).toBe(productData.title);
    expect(body.price).toBe(productData.price);
    expect(body.stock).toBe(productData.stock);
});
*/

//PATCH REQUEST
/*
import { test, expect } from "@playwright/test";

test("Update product price using PATCH", async ({ request }) => {

    const updateData = {
        price: 120
    };

    const response = await request.patch(
        "https://dummyjson.com/products/1",
        {
            data: updateData
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log("Updated price:", body.price);

    expect(body.id).toBe(1);
    expect(body.price).toBe(updateData.price);

});
*/

// DELETE
import { test , expect} from "@playwright/test";
test ("DELETE Request "  , async({request})=>{
    const dele = await request.delete("https://dummyjson.com/products/1");
    expect(dele.status()).toBe(200);
    const delebody = await dele.json();
    console.log(delebody);
    expect(delebody.isDeleted).toBe(true);
    console.log(delebody);

});
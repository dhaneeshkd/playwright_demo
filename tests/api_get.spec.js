/*import {test , expect} from "@playwright/test";
test("First Api Test" , async({request})=>{
    const respnse = await request.get("https://jsonplaceholder.typicode.com/posts/1"
    );
    await expect(respnse.status()).toBe(200);
    const responseBody = await respnse.json();
    console.log(responseBody);
    await expect(responseBody.id).toBe(1);
}
)
*/
/*import{test , expect} from "@playwright/test";
test("Api_test" , async({request})=>{
    const response = await request.get("https://jsonplaceholder.typicode.com/posts/5");
    await expect(response.status()).toBe(200);
    const responseBody = await response.json();
    await expect(responseBody.id).toBe(5);


})
*/

import{test , expect} from "@playwright/test";
test ("API POST" , async ({request})=>{
    const postdata ={
        name : "Dhaneesh",
        classname : "12B",
        rollnumber : 6
    };
    const postt = await request.post("https://jsonplaceholder.typicode.com/posts",{
        data: postdata
    });

    expect(postt.status()).toBe(201);
    const postbody = await postt.json();
    console.log(postbody);
    expect(postbody.name).toBe("Dhaneesh");
    expect(postbody.classname).toBe("12B");
    expect(postbody.rollnumber).toBe(6);
})
import {test , expect} from "@playwright/test";
const testdata = {
        username : "emilys",
        password : "emilyspass"
    }
test ("Api Login " , async({request})=>{

    const validcred = await request.post("https://dummyjson.com/auth/login" , {
        data : testdata
    });
    await expect(validcred.status()).toBe(200);
    const body = await validcred.json();
    console.log(body);
    expect(body.username).toBe(testdata.username);
    expect(body.accessToken).toEqual(expect.any(String));
    expect(body.accessToken.length).toBeGreaterThan(0);
    
})
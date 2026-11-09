import{test , expect} from "@playwright/test";
test("Api_Login_Authorisation" , async({request})=>{
    const userlogin = await request.post("https://dummyjson.com/auth/login" , 
        {
            data:{
                username: "emilys",
                password: "emilyspass"
            }
        }
    );
    expect(userlogin.status()).toBe(200);
    const login_response = await userlogin.json();
    console.log(login_response);
    const token = login_response.accessToken;
    expect(token).toEqual(expect.any(String));
    expect(token.length).toBeGreaterThan(0);
    const user_response = await request.get("https://dummyjson.com/auth/me",
        {
            headers :{
                Authorization: `Bearer ${token}`
            }
        }
    );
    const userr = await user_response.json();
    console.log(userr);
    expect (user_response.status()).toBe(200);
    expect(userr.username).toBe(login_response.username);
    expect(userr.id).toBe(login_response.id);
    console.log(userr.username);
})
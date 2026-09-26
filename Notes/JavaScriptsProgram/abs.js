class loginoperation
{
    login(un,ps)
    {
        this.validatepage(un,ps)


    }
    validatepage(un,ps)
    {
        if(un=="admin" && ps==123)
        {
            console.log("login success")

        }
        else
        {
            console.log("fail")

        }
    }

}
let l =new loginoperation()
l.login("admin",23)

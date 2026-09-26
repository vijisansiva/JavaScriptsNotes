class addition
{
     add()
    {
        console.log("Addition")

    }
}
class subtraction extends addition
{
    sub()
    {
        console.log("Subtraction")
    }
}

const s =new subtraction()
s.add()
s.sub()




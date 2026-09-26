class addition{
add()
{
let a=89
let b=90
let c=a+b
console.log("addition")

}
}
class subtraction extends addition
{
    sub(a,b)
    {
        let c=a-b
        console.log("c=",c)

    }

}
class multiplication extends addition
{
    mul(a,b)
    {
        let c=a*b
        console.log("c=",c)

    }

}
let m=new multiplication()
let s =new subtraction()

m.add()
m.mul(2,3)

s.sub(2,3)
s.add()


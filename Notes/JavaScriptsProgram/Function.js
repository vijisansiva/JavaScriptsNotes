/*Function=> set of instruction or block it doing specify task
Function name()
{
lock of instruction
}

function add()//function declare/defi
{
    let a=23,b=78;
    c=a+b;

    console.log("Addition =",c)
}


add()//function call



//function with argument

function ope(a,b)
{
    let c;
    c=a+b
    return c
}
console.log(ope(2,3))
// let d=ope()
// console.log("operation=",d)
//function expression
let dis=function()
{
    console.log("hello ")
};
dis();
//arrow function=> shorter way to create the function
let  show=(ename)=>{
    console.log("welcome",ename);
};
show("viji")
*/
function login(username, password) {
    if(username==="admin" && password=="12345")
    {
        console.log("login sucess")
    }
    else
    {
        console.log("fail")
    }
    
}

login("admin", 12345);

/*
switch case
=> option based 
switch(choice)
{
case val:
stat;
break;
case 2:
    stat;
    break;
    case 3:
        stat;
        break;
        default:
            false stat;

}
            */


let ch="-"
let a=90,b=8,c

switch(ch)
{
    case "+":
        c=a+b
        console.log("Addition=",c)
        break;
        case "-":
            c=a-b
            console.log("Subtraction ",c)
                break;
                
            default:
                console.log("press 1,2,3")
}



/*let student={
    Name:"viji",
    no:1234

}
console.log(student)
console.log(student.Name)


let login={
    u1:"admin",
    p1:"123"
}
let un="admin"
if(login.u1==un)
{
    console.log("WElcome to admin")
}
*/

/*object => collection of value with the keys

let student={
Sname:"Haji",
Sno:234
};
//console.log(student)
//console.log(Object.keys(student))
//console.log(Object.values(student))
console.log(Object.entries(student))

let emp=new Object()
emp.ename="jeni"
emp.esal=890000

console.log(emp)
//add
emp.eno=678
console.log(emp)
emp.esal=1500000

for (let k in emp)

    {
        console.log(k,emp[k])
    }




let validation={

    login:function()
    {
        console.log("login operation")
    }
};
//let v=new validation()
validation.login()
*/

let validation={

    login()
    {
        console.log("login operation")
    }
};
//let v=new validation()
validation.login()
/*. Object.freeze()

Object.freeze(student);
Cannot add, update, or delete properties.

 
Object.freeze(validation)
validation.mark=908
console.log(validation)
*/

/*Nested Objects*/

let student = {
  name: "Moni",
  address: {
    city: "Chennai",
    pincode: 600001
  }
};
console.log(student.address.city)
console

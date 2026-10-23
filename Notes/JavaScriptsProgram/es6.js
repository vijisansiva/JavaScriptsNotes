// const display=(sname)=> "welcome  "+sname;
// console.log(display("Vishnu"))


//template literals
// let sname="TechNg"
// console.log(`Welcome to ${sname}`)
//default parameter
// function display(sname="Haji")
// {
//     console.log(sname)

// }

// display("Viji");


//array destructing
//	Destructuring extracts array elements into variables
// let color=["Red","Blue"];
// let [a,b]=color;

// console.log(b)

//object destructing
// 

//spread operator
// let a=[1,2,3];
// let b=[...a,4]
// console.log(b)

//rest parameters
//•	...n collects all passed arguments into an array.
// function total(...n)
// {
//     console.log(n)
// }


// total("tv","fridge","wm","ac")

//class
// class student
// {
//     display()
//     {
//         console.log("Hello Student")
//     }
// }

// new student().display();



//inheritance

// class  login
// {
//     validate()
//     {
//         console.log("login sucess")
//     }
// }


// class openpage extends login
// {

// }

// new openpage().validate();



// for  of loop

// for (let x of [10,20,30])
// {
//     console.log(x)
// }
// for (let user of ["admin","user"])
// {
// if(user==="admin")
// {
//     console.log("welcome",user)

// }
// }


//map

// let m =new Map()
// m.set("Company_Name","TechNg")
// m.set("sname","jeni")


// console.log(m.get("Company_Name"))
// console.log(m.get("sname"))


//set  •	Set stores unique values.


// •	Set stores unique values.
// •	The duplicate value 1 is stored only once.
// •	.size returns the number of unique values.

//  let s=new Set(["admin","admin","user"])

//  console.log(s.size)


// //modules

// Explanation:
// •	export makes the function available to other modules.
// •	import brings the function into another file.
// •	add(2, 3) returns 5.

// Math.js

// export const  add=(a,b)=>a+b;


// //main.js

// import {add} from "./math.js"
// console.log(add(2,3))



//object assign()
// let a = { name: "Jeni" ,
//     no:23345
// };

// let b = Object.assign({}, a);

// console.log(b.name);
// console.log(b.no);

//string

//console.log("java is a pure object oriented language".includes("javas"))


//array find()

// let n=[10,20,30]
// console.log(n.find(x=>x>15))

// let n = [10, 50, 20];

// console.log(n.findIndex(x => x === 20));

//array from

console.log(Array.from("TechNg "));

console.log(2**3)
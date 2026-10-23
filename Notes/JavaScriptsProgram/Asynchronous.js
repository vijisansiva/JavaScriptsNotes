// //Synchronous
// console.log("start")
// console.log("Processing")
// console.log("validate")
// console.log("stop")

//JavaScript does NOT wait for one task to finish before starting the next task.
//synchronous
// console.log("start")
// for (let i=0;i<=10;i++)
// {
//     console.log(i)

// }
// console.log("stop")



// console.log("start")

// setTimeout(()=>{
//     console.log("Inside Timeout")
// for (let i=0;i<=10;i++)
// {
//     console.log(i)

// }

// },1000);
// console.log("Processing")

// setTimeout(()=>{
//     console.log("Page load")
// for (let i=0;i<=5;i++)
// {
//     console.log("Login page")

// }


// },2000);


// function heavyTask() {
//     let start = Date.now();
//     //console.log(Date.now())

//     while (Date.now() - start < 5000) {
//         console.log("welcome to all")
//     }
// }

// console.log("Start");
// heavyTask();
// console.log("End");

/* 1.Api call(server communication)
await fetch("/login");
Server may take:
•	1 sec
•	3 sec
•	10 sec
If synchronous → whole page freezes.
Async → page continues working.
2.data Queries(Backend -nodejs)

const user = await db.findUser(id);

Database takes time to respond.
Async allows server to handle other users meanwhile.

3.file upload/download
uploading large file:
*100mb file
*1 gb file

Without async → UI stuck
With async → progress bar shown + user can interact
4. payment Gateway
•	Request sent to bank
•	Bank verifies
•	Returns status
During this time, application should not freeze.
5. Chat Applications
Like WhatsApp:
•	Message sent
•	Server processes
•	Delivery status updated
User can still type next message.


Automation Testing (playwright/selinium)
in automation:

await page.click("#login")

why await?
 page loading takes time
 element rendering takes time
 network delay happen

 async prevent this

 ***************
 1.callbacks
 2.promises
 3.asyn/await
 call back
 **********
 A function that is passed as an argument to another function and
is executed later (after some operation is completed).

function cooking(callback)

Callbacks are mainly used for:
1.	Asynchronous operations
2.	Code reusability
3.	Event handling
4.	Controlling execution order
Especially in JavaScript (browser & Node.js), many operations are asynchronous.
Real Scenario: 👉 "After you finish cooking, call me."


*/
//cooking=main  ffunction
//calling you =callback

// function cooking(callback)
// {
//     console.log("cooking started")
//     setTimeout(function()
// {
//     console.log("Cooking Finished")
//     callback();

// },3000)
// }
// function callyou()
// {
//     console.log("Calling you....Food is ready")
// }


// cooking(callyou)




// function  show(name,callback)
// {
//     console.log("Hi",name)
//     callback();
// }
// function welcome()
// {
//     console.log("Bye")

// }

// show("Deepa",welcome);


// function add(a,b,callback)
// {
//     console.log(a+b);
//     callback();

// }
// function sub()
// {
//     console.log("subtraction");

// }

// add(2,3,sub)


// Why Do We Need Callback?
// Sometimes some work takes time.
// Example:
// •	Downloading data
// •	Reading file
// •	Calling API
// •	Waiting 2 seconds
// So we say:
// 👉 "After work is finished, do this."
// That "do this" part is callback.



/*

Promise
  a promise ia an object that represents a value that will be available in the future 
  promise= a gurantee that some thing will complete later (success or failure)


  You order pizza 🍕.
•	You place order → (Promise created)
•	After 30 minutes:
o	Pizza delivered ✅ (Resolved)
o	Or shop closed ❌ (Rejected)

*/

// let Pro=new Promise(function(resolve,reject)//resolve=> success,reject=> fail
// {
//     let res=true;

//     if(res)
//     {
//         resolve("Task Completed Successfully")
//     }
//     else{
//         reject("Task Failed")

//     }
// });


// Pro
// .then(function(res)//suceess
// {
//     console.log(res);
// })
// .catch(function(error){//run time error
//     console.log(error)

// });

/*
promise states

1.pending-initial state(waiting)
2.fulfilled(resolved)
3.Rejected-operation failed


let promise = new Promise(function(resolve, reject) {

    let success = true;

    if(success) {
        resolve("Operation Successful");
    } else {
        reject("Operation Failed");
    }

});



Handling Promise – then() & catch()
promise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });
•	.then() → success
•	.catch() → failure

*/
//promise with arrow function
// let pro=new Promise((resolve,reject)=>{
//     let res=true
//     if(res)
//     {
//         resolve("Task completed")
//     }
//     else{
//         reject("Task Fail")
//     }

// });

// pro
// .then((res)=>{
//     console.log(res)

// })
// .catch((error)=>{
//     console.log(error);
// });


// //Promise with delay


// let pro =new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("Hello,Students!")
//     },2000)
// });


// pro
// .then((me)=>{
//     console.log(me);

// });


//async.await(promise)

// function checkloan(cs)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(cs>700)
//             {
//                 resolve("Loan approved")

//             }
//             else
//             {
//                 reject("loan Rejected")

//             }
//         } ,2000);
//     });
// }

// checkloan(450)
// .then(re=>console.log(re))
// .catch(error=>console.log(error))



/*async
**********
asyn keyword is used to before a function

asyn function example()
{
return ("welcome");
}

function example()
{
return Promise.resolve("welcome")
}
*/

function checkloan(cs)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(cs>700)
                {
                    resolve("loan approved")

                }
                else
                {
                    reject("Loan rejected")
                }
        },1000);
    });
}

async function loanstatus()
{

    try{
        //let re=await checkloan(100);
        checkloan(100)
        
        console.log(re);
    }
    catch(error)
    {
        console.log(error);

    }
}

loanstatus()

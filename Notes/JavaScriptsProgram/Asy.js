// console.log("start")
// setTimeout(()=>{
//     console.log("Processing")
//     for (i=0;i<=10;i++)
//     {
//         console.log(i)
//     }
// },1000)
// console.log("last")

function heavyTask() {
    let start = Date.now();

    while (Date.now() - start < 5000) {
        //console.log("welcome")
        // blocking code
    }
}

console.log("Start");
console.log(Date.now() - start )

heavyTask();
console.log("End");


/*const city=["Chennai","Madurai","Theni",34,56]
//length
console.log(city.length)
//push()
city.push("Thanjavur")
console.log(city)
//pop
city.pop()
console.log(city)
//unshift()
city.unshift("Haji")
console.log(city)
//shift()
city.shift()
console.log(city)
//index of
console.log(city.indexOf("Theni"))
//includes
console.log(city.includes("Chenai"))
let res=city.slice(1,3)
console.log(res)
//spice
city.splice(1,2)
console.log(city)
//array iteration
city.forEach(function(name){
console.log(name)
});

*/
//map=> create the new array
let num=[10,20,30];
let res=num.map(function(num){
    return num+2000
})

console.log(res)
let res1=num.find(function(num){
    return num>15;
});
console.log(res1)
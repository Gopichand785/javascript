//concat of two arrays
/*let a=['pro','stack']
let b=['academy']
let c=[...a,...b]
console.log(c)*/

let a=['pro','stack']
let b=['academy']
console.log(...a,...b)

//3//highest and longest number in array

let x=[0,20,10,40,602,33,80,326]
x.sort((x,y)=>y-x)
console.log(x)


let d=[9,5,7,3,1,9,6,3,6,5];
console.log(d.indexOf(6))
// let num=[... new set(d)];
// console.log(num);
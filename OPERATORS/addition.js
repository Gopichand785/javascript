let a= 10
let b= 20
let c= "30"
let d= "thirty"
let e= null
let g= false

let f;

console.log(a+b) //30
console.log(a+c)//"1030"
console.log(a+b)//30
console.log(a+e)//10
console.log(a+d)//10thirty
console.log(a+g)//10
console.log(a+f)//nan

console.log(typeof a)//number
console.log(typeof b)//number
console.log(typeof c)//strimg
console.log(typeof d)//string
console.log(typeof e)//object
console.log(typeof g)//boolean
console.log(typeof f)//undefined
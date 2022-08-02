/* let marks=[35,40,25,26,14,58]
let avg=[...marks]
console.log(avg) */

/* let a=[10,20,30,40]
let b=[50,60,70,80,60,58,38]
let c=[...a,45,...b]
console.log (c)*/

let emp={
    name:"rahul",
    id:101,
    email:"rahul@gmail.com"
}
let raj={
    salary:52200,
    email:"rahul@ibm.com"
}

let c={...emp,...raj}
console.log(c)
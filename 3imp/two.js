/*let emp = {}
let product = { id: 'p101', name: "Iphone 5s", price: 'Free' }

let k = Object.keys(product)

console.log(k)
console.log(k.length)*/



let emp = {}
let product = { id: 'p101', name: "Iphone 5s", price: 'Free' }

if (Object.keys(product).length > 0) {
    console.log("No, not Emtpy Object")
}
else {
    console.log("Empty Object")
}

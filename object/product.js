let product={
    p_id:222,
    p_name:'gopichand',
    price:50000,
    discount:true,
    stock:'Avilable',
    loc:['bng','hooskotee','marathali']
}
console.log(product)

for(prop in product){
    console.log(product[prop])
}

console.log(product.price)
console.log(product.p_name)
console.log(product.stock)
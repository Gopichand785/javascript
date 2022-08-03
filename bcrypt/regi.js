let user = { name: "kranthi", password: 'FirstJobNextMarriage', cc:'1234582864862156' }
//convert user data to hashed/crypted format
const bcrypt=require('bcryptjs')
let salt=bcrypt.genSaltSync(5);

let new_password=bcrypt.hashSync(user.password,salt)
let new_cc= bcrypt.hashSync(user.cc, salt)
let new_name=bcrypt.hashSync(user.name,salt)
/* console.log(user.password)
console.log(new_password)
console.log(user.cc)
console.log(new_cc) */

console.log(user)
user={...user, name:new_name,password:new_password,cc:new_cc}
console.log(user)


let flag=bcrypt.compareSync('FirstJobNextMarriage',user.password)
flag?console.log("login success"):console.log("logn failure")
console.log(flag)
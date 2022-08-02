let min_Bal=500
let get_detailes=()=>{
    console.log('gm')
}
class Account{
    constructor(){
        console.log("constructor-excutes automatically")
    }
}
//export {min_Bal,get_detailes,Account}    //es6
module.exports = {min_Bal,get_detailes,Account}
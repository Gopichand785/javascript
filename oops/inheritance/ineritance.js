class Account{
    constructor(id,name,email){
        this.acc_id=id
        this.acc_name=name
        this.acc_email=email
    }
    get_Account_detailes(){
        return this.acc_id+":"+this.acc_name
    }
    get_Address(){
        return "dummy address"
    }
    
}
class Savingaccount extends Account{
    constructor(id,name,email,amount){
        super(id,name,email)
        this.acc_amount=amount

    }
    get_balance(){
        return this.acc_amount
    }
}
let SA=new Savingaccount(102,'rahul',"rahul@gmail.com",50000)

console.log(SA.get_Account_detailes())
console.log(SA.get_Address())
console.log(SA.get_balance())
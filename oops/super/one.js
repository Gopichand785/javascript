class Account{
    constructor(name,email,address){
        this.account_Name=name;
        this.account_Email=email;
        this.account_address=address;
    }
}
class SA extends Account{
    constructor(id,name,email,amount,address){
        super(name,email,address);
        this.account_Id=id
        this.account_amount=amount
    }
}
let c1= new SA(101,"rahul","rahul@gmail.com",50000,"new delhi")
console.log(c1)
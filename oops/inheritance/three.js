class Account{
    constructor(){
        console.log("constructor method - will excutes")
    }
}
class SA extends Account{
    constructor (){
        super()
        console.log("SA-constructer method")
    }
}
new SA()

// to invoke parent class to child class      "Super()" is mandatary
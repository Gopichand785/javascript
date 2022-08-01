class Employee{
    first_name;
  set_Name(){
    this.first_name="Rahul Gandhi"
  }
  get_Name(){
    return this.first_name
  }
}
let e1=new Employee()
console.log(e1)
e1.set_Name()


let name=e1.get_Name()
console.log(name)
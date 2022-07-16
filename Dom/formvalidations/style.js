function validate(){
let u=document.getElementById("name").value
let e=document.getElementById("email").value
let p=document.getElementById("password").value
let cp=document.getElementById("cpassword").value

if(u ==" " || u.length <5){
document.getElementById("user").innerHTML="please enter your name"
}
if (e ==""){
    document.getElementById("mmm").innerHTML="please enter your email"
}
if(p != cp){
document.getElementById("ppp").innerHTML="please enter your password same"
}
return false

}
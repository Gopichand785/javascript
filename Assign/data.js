let sum=()=>{
    let tag_Ref=document.getElementById("abc")
        tag_Ref.style.backgroundColor='blue'
}
let add=()=>{
    let radha_ref=document.getElementById('radha')
    radha_ref.style.backgroundColor="green"
}
let wish=()=>{
    let santh_ref=document.getElementById("ram")
    santh_ref.style.backgroundColor="blue"
}
let chill=()=>{
    let chill_ref=document.getElementById("chi")
        chill_ref.style.backgroundColor="black"
}
let sad=()=>{
     sad_ref=document.getElementById("glr")
        sad_ref.style.backgroundColor="orange"
}
function change_Case() {
    let data = document.getElementById('abc').value
    document.getElementById('abc').value = data.toUpperCase()
}

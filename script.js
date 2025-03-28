//selecting h1
var input=document.getElementById("input")
var ul=document.getElementById("items")

function add(){
    var listcont=document.createElement("li")
   listcont.style.color="white"
listcont.innerHTML=input.value+"<button onclick='del(event)'>DELETE</button>"
ul.append(listcont)
}
function del(event){
    event.target.parentElement.remove()
}
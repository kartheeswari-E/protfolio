var  click=document.getElementsByClassName("t1")
var  click1=document.getElementsByClassName("text")
function opentab(clickname){
    for(c of click){
        c.classList.remove("actives");
    }
    for(c1 of click1){
        c1.classList.remove("active");
    }
    event.currentTarget.classList.add("actives")
    document.getElementById(clickname).classList.add("active")
    
}
var sidemenu=document.getElementById('sidemenu');
function openmenu(){
sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
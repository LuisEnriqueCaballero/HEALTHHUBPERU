const navegaciontoggle=document.querySelector(".navegacion-toggle");
const naveMenu=document.querySelector(".navegacion01");

navegaciontoggle.addEventListener("click",()=>{
    naveMenu.classList.toggle("navegacion-visible")
})
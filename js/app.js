var elBtn = document.querySelector(".header__button");
var elBody = document.querySelector("body");

elBtn.addEventListener("click" , function(){
    elBody.classList.toggle("dark")
})
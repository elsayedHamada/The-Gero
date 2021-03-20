const getElment = function(elment){
    return document.querySelector(elment);
};

const humbergarMenu = getElment(".humbergar-menu");
const body = getElment("body");

humbergarMenu.addEventListener("click" , function(){
    body.classList.toggle("open");
})
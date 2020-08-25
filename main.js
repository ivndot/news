/*
    SCROLL REVEAL
*/
ScrollReveal().reveal('.news');
ScrollReveal().reveal('.widget');

/* 
    AÑADIMOS UN LISTENER AL BOTON BTN MENU
*/

var state=false;

document.querySelector(".btn-menu").addEventListener("click", () => {

    if(state){
        state=false;
        closeNav();
    }else{
        state=true;
        openNav();
    }
});



function openNav() {
    document.getElementById("side-nav").style.width = "250px";
}

function closeNav() {
    document.getElementById("side-nav").style.width = "0px";
}

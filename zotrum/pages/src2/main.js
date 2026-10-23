const menuH = document.querySelector(".menu-hamburguer");
const navM = document.querySelector(".navMenu");

menuH.addEventListener("click", function () {
    navM.classList.toggle('ativo');

    if(navM.classList.contains('ativo')){
        menuH.innerHTML = 'X';
    } else {
        menuH.innerHTML = '☰'
    }
})
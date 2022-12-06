// variables para menu de email en navbar
let navEmailLink = document.querySelector("#emailLink")
let navEmailMenu = document.querySelector(".desktop-menu")

navEmailLink.addEventListener('click',toggleNavbarEmailMenu)

function toggleNavbarEmailMenu(){
    navEmailMenu.classList.toggle('active')
}
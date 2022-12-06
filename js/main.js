// variables para menu de email en navbar
let navEmailLink = document.querySelector("#emailLink")
let navEmailMenu = document.querySelector(".desktop-menu")

let navMobileToggle = document.querySelector(".menu-mobile-img")
let navMobileMenu = document.querySelector(".mobile-menu")

navEmailLink.addEventListener('click',toggleNavbarEmailMenu)
navMobileToggle.addEventListener('click',toggleNavMobileMenu)

function toggleNavbarEmailMenu(){
    navEmailMenu.classList.toggle('active')
}
function toggleNavMobileMenu(){
    navMobileMenu.classList.toggle('active')
    
}
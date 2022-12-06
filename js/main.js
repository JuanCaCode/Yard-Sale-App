//________________________________________________________________
// variables para menu de email en navbar
let navEmailLink = document.querySelector("#emailLink")
let navEmailMenu = document.querySelector(".desktop-menu")

// variables para menu mobile de navbar
let navMobileToggle = document.querySelector(".menu-mobile-img")
let navMobileMenu = document.querySelector(".mobile-menu")

// variables de aside de shopping cart de navbar
let navShoppingCartToggle = document.querySelector(".navbar-icon-cart")
let navShoppingCartContainer = document.querySelector(".cart-container")

// Variables de productos
const productList=[];

//________________________________________________________________

// Invocación de eventos
navEmailLink.addEventListener('click',toggleNavbarEmailMenu)
navMobileToggle.addEventListener('click',toggleNavMobileMenu)
navShoppingCartToggle.addEventListener('click',toggleShoppingCart)

function toggleNavbarEmailMenu(){
    navEmailMenu.classList.toggle('active')
}
function toggleNavMobileMenu(){
    navMobileMenu.classList.toggle('active')
    // si shopping cart block, mantenerlo en block
    if(navShoppingCartContainer.classList.contains('active')){
        navShoppingCartContainer.classList.add('active')
    }
}
function toggleShoppingCart(){
    navShoppingCartContainer.classList.toggle('active')
    // si mobile menu block, ocultar mobile menu block y mantener shoppingcar visible
    if(navMobileMenu.classList.contains('active')){
        navMobileMenu.classList.remove('active')
        navShoppingCartContainer.classList.add('active')
    }
}

// ARRAY DE LISTA DE PRODUCTOS 
productList = [
    {name:'Headphones Bluetooth',
    descripcion:"En la calle, en el colectivo o en la oficina, ten siempre a mano tus audífonos Genius y ¡escápate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras.",
    price:10,image:"https://i.imgur.com/uYKmdB1.png"},
    {name:'Laptop Intel Core i7',
    descripcion:'Laptop HP 240 G7 gris 14", Intel Celeron N4020 8GB de RAM 1TB HDD, Intel UHD Graphics 600 1366x768px Windows 10 Home',
    price:550,image:"https://i.imgur.com/iJvn7UU.jpg"},
    {name:'Green Day Original CD',
    descripcion:"American Idiot is the seventh studio album by American rock band Green Day, released on September 21, 2004, by Reprise Records.",
    price:220,image:"https://i.imgur.com/qVAK5Xk.jpg"},
    {name:'Paramore six greatest albums',
    descripcion:'The best album credited to Paramore is After Laughter which is ranked number 1,976 in the overall greatest album chart with a total rank score of 841',
    price:220,image:"https://i.imgur.com/fWjHNGP.jpg"},
    {name:'Weid Plantpot',
    descripcion:"Raised Garden Bed - Vertical Garden - Garden Planter - Herb Garden - Strawberry Planter - Planters",
    price:220,image:"https://i.imgur.com/y3uLpnY.jpg"},
    {name:'Dead Flies Jar',
    descripcion:"Raised Garden Bed - Vertical Garden - Garden Planter - Herb Garden - Strawberry Planter - Planters",
    price:220,image:"https://i.imgur.com/8ECpeHr.jpg"},
    {name:'Weid Plantpot',
    descripcion:"Raised Garden Bed - Vertical Garden - Garden Planter - Herb Garden - Strawberry Planter - Planters",
    price:220,image:"https://i.imgur.com/y3uLpnY.jpg"},
    {name:'Metallica Album CD',
    descripcion:"Raised Garden Bed - Vertical Garden - Garden Planter - Herb Garden - Strawberry Planter - Planters",
    price:220,image:"https://i.imgur.com/WLzahaL.jpg"},
    {name:'Blue Thermo',
    descripcion:"Raised Garden Bed - Vertical Garden - Garden Planter - Herb Garden - Strawberry Planter - Planters",
    price:220,image:"https://i.imgur.com/vLbc7S6.jpg"},
    {name:'Deer head decoration',
    descripcion:"Raised Garden Bed - Vertical Garden - Garden Planter - Herb Garden - Strawberry Planter - Planters",
    price:220,image:"https://i.imgur.com/HtdMOhl.jpg"},
    {name:'AC/DC 3 greatest albums',
    descripcion:"Raised Garden Bed - Vertical Garden - Garden Planter - Herb Garden - Strawberry Planter - Planters",
    price:220,image:"https://i.imgur.com/Ik7VU1t.jpg"},
]
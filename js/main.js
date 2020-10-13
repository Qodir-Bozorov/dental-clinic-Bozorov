const hamburger = document.querySelector(".navlist__toggler");
const navmenu = document.querySelector(".nav-list");
// const body = document.querySelector(".site-main");

navmenu.classList.remove("nojs");

hamburger.addEventListener("click", () => {
 // navmenu.classList.toggle("open");
 navmenu.classList.toggle("nav-list");
 navmenu.classList.toggle("nav-list--open");
 hamburger.classList.toggle("navlist__toggler--open");
})


// body.addEventListener("click", () => {
//  navmenu.classList.remove("nav-list--open");
// })
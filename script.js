const hamburgerMenu = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("close-menu");
const navMenu = document.getElementById("nav-menu");
hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.add("is-open");
  navMenu.classList.add("nav-dark");
});
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("is-open");
  navMenu.classList.remove("nav-dark");
});

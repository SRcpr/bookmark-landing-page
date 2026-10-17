const hamburgerMenu = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("close-menu");
const navMenu = document.getElementById("nav-menu");
// menu show hide
hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.add("is-open");
  navMenu.classList.add("nav-dark");
});
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("is-open");
  navMenu.classList.remove("nav-dark");
});

// show tab using href
const links = document.querySelectorAll(".tab-link");
const linkContents = document.querySelectorAll(".go-to-page");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    linkContents.forEach((content) => {
      content.classList.add("hidden");
      content.classList.remove("flex");
    });
    if (targetSection) {
      console.log(targetSection.classList);
      targetSection.classList.remove("hidden");
      targetSection.classList.add("flex");
    }
  });
});

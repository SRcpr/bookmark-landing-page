const hamburgerMenu = document.getElementById("hamburger-menu");
const overlayMenu = document.getElementById("menu-wrapper");
const closeMenu = document.getElementById("close-menu");
const navMenu = document.getElementById("nav-menu");
// menu show hide
hamburgerMenu.addEventListener("click", () => {
  overlayMenu.classList.remove("hidden");
  overlayMenu.classList.add("drawer");
});
closeMenu.addEventListener("click", () => {
  overlayMenu.classList.add("hidden");
  overlayMenu.classList.remove("drawer");
});

// show tab using href
const links = document.querySelectorAll(".tab-link");
const linkContents = document.querySelectorAll(".go-to-page");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    console.log(link.getAttribute("href"));
    console.log(targetId);
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
// FAQ section

const faqQuestions = document.querySelectorAll(".collapsed");
faqQuestions.forEach((faqQuestion) => {
  faqQuestion.addEventListener("click", () => {
    const targetId = faqQuestion.getAttribute("aria-controls");
    const targetSection = document.getElementById(targetId);
    hideAlldd();
    const isHidden = targetSection.classList.toggle("hidden");
    faqQuestion.setAttribute("aria-expanded", !isHidden);
  });
});
const dataDefinations = document.querySelectorAll("dd");
const hideAlldd = () => {
  dataDefinations.forEach((dd) => {
    dd.classList.add("hidden");
  });
};

// validate email
const email = document.getElementById("email");
const errorMsg = document.getElementById("errorMsg");
const errorMark = document.getElementById("errorMark");
const inputSetError = document.getElementById("inputSetError");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
email.addEventListener("blur", () => {
  const inputValue = email.value.trim();
  const isValid = emailRegex.test(inputValue);
  errorMsg.classList.toggle("hidden", isValid);
  errorMark.classList.toggle("invisible", isValid);
  inputSetError.classList.toggle("p-[2px]", !isValid);
});

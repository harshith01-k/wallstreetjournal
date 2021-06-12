var nav = document.querySelector(".links");
var burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

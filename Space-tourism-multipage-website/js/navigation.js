// Javascript

let navToggle = document.querySelector(".mobile-nav-toggle");
let nav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");

  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});

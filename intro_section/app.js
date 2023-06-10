const item = document.querySelectorAll(".mobile-nav-menu .dropdown");
const chevIcon = document.querySelectorAll(".dropdown .nav-link span");
const sideMenu = document.querySelector(".mobile-navigation");

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", () => {
    item[i].classList.toggle("open");
    chevIcon[i].classList.toggle("rotate");
  });
  item[i].classList.remove("open");
}

const hamburger = document.querySelector(".hamburger");
const closeNav = document.querySelector(".close-nav");
const canvas = document.querySelector(".offcanvas-bg");

hamburger.addEventListener("click", () => {
  sideMenu.style.width = "250px";
  canvas.style.width = "100vw";
});

closeNav.addEventListener("click", () => {
  sideMenu.style.width = "0px";
  canvas.style.width = "0px";
});

canvas.addEventListener('click', () => {
  sideMenu.style.width = "0px";
  canvas.style.width = "0px";
})

const toggleBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".primary-navigation");
const body = document.querySelector("body");

toggleBtn.addEventListener("click", () => {
  const visible = menu.getAttribute("data-visible");

  if (visible === "false") {
    menu.setAttribute("data-visible", true);
    toggleBtn.setAttribute("aria-expanded", true);
    body.style.overflowY = "hidden";
  } else {
    menu.setAttribute("data-visible", false);
    toggleBtn.setAttribute("aria-expanded", false);
    body.style.overflowY = "auto";
  }
});

// Scroll Reveal Animations

let slideLeft = {
  distance: "100%",
  origin: "left",
  delay: 200,
  mobile:false,
  duration: 1000,
};

let slideRight = {
  distance: "100%",
  origin: "right",
  delay: 200,
  mobile:false,
  duration: 1000,
};

let slideDown = {
  distance: "50%",
  origin: "top",
  delay: 300,
  duration: 1000,
};
  
ScrollReveal().reveal(".slide-down", slideDown);
ScrollReveal().reveal(".slide-left", slideLeft);
ScrollReveal().reveal(".slide-right", slideRight);

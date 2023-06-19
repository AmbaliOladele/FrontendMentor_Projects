// Scroll Reveal Animations

let slideUp = {
  distance: "100%",
  origin: "bottom",
  delay: 200,
  duration: 800,
};

let slideDown = {
  distance: "140%",
  origin: "top",
  delay: 200,
  duration: 800,
};

ScrollReveal().reveal(".slide-up", slideUp);
ScrollReveal().reveal(".slide-down", slideDown);

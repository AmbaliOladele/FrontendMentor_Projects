const toggleBtn = document.querySelector(".hamburger");
const navigation = document.querySelector(".header-navigation");
const lightBgContainer = document.querySelector(".toggle-container");

toggleBtn.addEventListener("click", () => {
  const visible = navigation.getAttribute("data-visible");

  if (visible === "false") {
    navigation.setAttribute("data-visible", true);
    lightBgContainer.setAttribute("data-visible", true);
    toggleBtn.setAttribute("aria-expanded", true);
  } else {
    navigation.setAttribute("data-visible", false);
    lightBgContainer.setAttribute("data-visible", false);
    toggleBtn.setAttribute("aria-expanded", false);
  }
});

lightBgContainer.addEventListener("click", () => {
  navigation.setAttribute("data-visible", false);
  lightBgContainer.setAttribute("data-visible", false);
  toggleBtn.setAttribute("aria-expanded", false);
});

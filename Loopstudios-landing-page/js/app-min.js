const toggleBtn=document.querySelector(".hamburger");const menu=document.querySelector(".primary-navigation");const body=document.querySelector("body");toggleBtn.addEventListener("click",()=>{const visible=menu.getAttribute("data-visible");if(visible==="false"){menu.setAttribute("data-visible",!0);toggleBtn.setAttribute("aria-expanded",!0);body.style.overflowY="hidden"}else{menu.setAttribute("data-visible",!1);toggleBtn.setAttribute("aria-expanded",!1);body.style.overflowY="auto"}});let slideLeft={distance:"100%",origin:"left",delay:200,mobile:!1,duration:1000,};let slideRight={distance:"100%",origin:"right",delay:200,mobile:!1,duration:1000,};let slideDown={distance:"50%",origin:"top",delay:300,duration:1000,};ScrollReveal().reveal(".slide-down",slideDown);ScrollReveal().reveal(".slide-left",slideLeft);ScrollReveal().reveal(".slide-right",slideRight)
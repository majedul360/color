const nav = document.querySelector("nav");

document.querySelector(".menu-bar").addEventListener("click", () => {
  document
    .querySelector(".menu-bar span:nth-child(2)")
    .classList.toggle("active");
  document
    .querySelector(".menu-bar span:nth-child(1)")
    .classList.toggle("active");
  document
    .querySelector(".menu-bar span:nth-child(3)")
    .classList.toggle("active");

  document.querySelector("nav").classList.toggle("active");
});

// scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  document
    .querySelector(".menu-bar span:nth-child(2)")
    .classList.remove("active");
  document
    .querySelector(".menu-bar span:nth-child(1)")
    .classList.remove("active");
  document
    .querySelector(".menu-bar span:nth-child(3)")
    .classList.remove("active");
  nav.classList.remove("active");

  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 4) {
      currentSection = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(currentSection)) {
      link.classList.add("active");
    }
  });
});

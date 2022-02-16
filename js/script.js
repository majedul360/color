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

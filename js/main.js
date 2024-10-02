document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile_menu");
  const navMenu = document.querySelector(".nav_wrapper");
  const body = document.querySelector("body");
  mobileMenu.addEventListener("click", function () {
    const spans = mobileMenu.querySelectorAll("span");
    spans.forEach(function (span) {
      span.classList.toggle("active");
    });
    navMenu.classList.toggle("active");
    body.classList.toggle("overlay");
  });
});

AOS.init({ duration: 800, offset: 100 });
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav-links");
toggle.addEventListener("click", () => nav.classList.toggle("active"));
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => document.body.classList.toggle("light-mode"));
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
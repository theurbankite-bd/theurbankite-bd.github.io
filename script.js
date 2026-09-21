const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});

document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

menu?.addEventListener("click", () => {
  const open = nav.style.display === "flex";

  nav.style.display = open ? "none" : "flex";

  if (!open) {
    nav.style.position = "absolute";
    nav.style.top = "68px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "20px 6vw";
    nav.style.background = "#090909";
    nav.style.flexDirection = "column";
    nav.style.alignItems = "flex-start";
  }
});

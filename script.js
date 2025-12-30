const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
  navMenu.classList.add("active");
  overlay.classList.add("active");
}

function closeMenu() {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
}

hamburger.addEventListener("click", () => {
  navMenu.classList.contains("active") ? closeMenu() : openMenu();
});

/* cerrar al tocar overlay */
overlay.addEventListener("click", closeMenu);

/* cerrar al tocar un link */
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

// Footer dynamic year and last modified
const yearSpan = document.getElementById("year");
const modifiedSpan = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

// Hamburger menu toggle
const menuButton = document.getElementById("menu");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
});

const menuToggle = document.getElementById("menuToggle");
const navContent = document.getElementById("navContent");

menuToggle.addEventListener("click", () => {
    navContent.classList.toggle("active");
});
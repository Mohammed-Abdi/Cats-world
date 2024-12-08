const hamburger = document.getElementById("hamburger");
const rightMenu = document.querySelector(".right-menu");

hamburger.addEventListener("click", function() {
    rightMenu.classList.toggle("active");
});

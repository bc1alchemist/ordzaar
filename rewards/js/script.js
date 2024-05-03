window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  // Check if user has scrolled past a certain point (for example, 100 pixels from top)
  if (scrollPosition > 100) {
    document.querySelector(".header").classList.add("effect");
  } else {
    document.querySelector(".header").classList.remove("effect");
  }
});

const btnMenu = document.querySelector(".hamburger-menu");
const ul = document.querySelector(".navbar");

btnMenu.addEventListener("click", () => {
  ul.classList.toggle("active");

  isActive();
});

function isActive() {
  if (ul.classList.contains("active")) {
    document.querySelector(".header").style.backgroundColor = "#0F0229";
    document.body.style.overflow = "hidden";
  } else {
    document.querySelector(".header").style.backgroundColor = "";
    document.body.style.overflow = "visible";
  }
}

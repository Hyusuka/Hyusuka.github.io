document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".text", {
    strings: ["Gamers!", "Editor!", "Beginer Web Developer!"],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay: 1000,
    loop: true,
  });
});

const topButton = document.querySelector(".top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

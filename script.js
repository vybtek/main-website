function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.onscroll = function () {
  const scrollButton = document.getElementById("scrollUpBtn");
  if (!scrollButton) return; // Exit early if the button isn't found

  if (document.documentElement.scrollTop > 100) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

const navLinks = document.querySelectorAll(".navlink");

navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    navLinks.classList.add("active");
  });
});

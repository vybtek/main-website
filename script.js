function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show/hide button based on scroll position
window.onscroll = function () {
    let scrollButton = document.getElementById("scrollUpBtn");
    if (document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};


const navLinks = document.querySelectorAll('.navlink');

navLinks.forEach(navLinks => {
    navLinks.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active')
        navLinks.classList.add('active')
    })
})




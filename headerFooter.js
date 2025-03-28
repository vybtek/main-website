class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="bg-white shadow-md">
          <div class="container mx-auto flex items-center justify-between py-3 px-6">
            <!-- Logo -->
            <a href="/" class="flex items-center ">
              <img src="./images/logo.png" alt="Logo" class="w-14 h-14" />
              <span class="text-xl font-bold">VybTek</span>
            </a>

            <!-- Mobile Menu Button -->
            <button id="menu-toggle" class="md:hidden text-blue-600 text-xl">
              <i class="fas fa-bars"></i>
            </button>

            <!-- Contact Info -->
            <div class="hidden md:flex items-center space-x-8">
    <!-- Address -->
    <div class="flex items-center space-x-2">
        <i class="fa-solid fa-location-dot text-blue-600 w-5 h-5"></i>
          <a href="https://www.google.com/maps/search/Amrit+shree,+502,+Ashok+Nagar,+Udaipur,+Rajasthan+313001" target="_blank" class="flex flex-col">
            <p class="text-sm font-semibold">Address</p>
            <p class="text-xs text-gray-500">Amrit shree, 319, Ashok Nagar, Udaipur, Rajasthan 313001</p>
        </a>
    </div>

    <!-- E-mail -->
    <div class="flex items-center space-x-2">
        <i class="fa-solid fa-envelope text-blue-600 w-5 h-5"></i>
        <a href="mailto:info@vybtek.com" target="_blank" class="flex flex-col">
            <p class="text-sm font-semibold">E-mail</p>
            <p class="text-xs text-gray-500">info@vybtek.com</p>
        </a>
    </div>
</div>

          </div>
        </div>

        <!-- Navigation Bar -->
        <nav class="bg-gradient-to-r from-blue-900 to-blue-600 text-white">
          <div class="container mx-auto flex justify-between items-center py-4 px-6">
            <!-- Menu -->
            <ul id="nav-menu" class="hidden md:flex space-x-8">
              <!--<li><a href="index.html" class="nav-link hover:opacity-80">Home</a></li> -->
              <li><a href="about" class="nav-link hover:opacity-80">About</a></li>
             
              <!-- Services Dropdown -->
              <li class="nav-link relative group">
                <button class="nav-link hover:opacity-80">Services ▾</button>
                <div class="absolute left-0 p-1 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block z-50">
                  <a href="software" class="nav-link dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-200">Software Development</a>
                  <a href="design" class="nav-link dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-200">Web Design</a>
                  <a href="marketing" class="nav-link dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-200">Digital Marketing</a>
                  <a href="techsupport" class="nav-link dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-200">IT Tech Support</a>
                  <a href="outsourcing" class="nav-link dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-200">Tech Outsourcing</a>
                  <a href="consultation" class="nav-link dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-200">Tech Consultation</a>
                </div>
              </li>

              <li><a href="projects" class="nav-link hover:opacity-80">Projects</a></li>
              <li><a href="contact" class="nav-link hover:opacity-80">Contact</a></li>
              <!-- Pages Dropdown -->
              <li class="nav-link relative group">
                <button class="nav-link hover:opacity-80">More ▾</button>
                <div class="absolute left-0 p-1 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block z-50">
                 <!--  <a href="ourteam" class="nav-link dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-200">Our Team</a> -->
                  <a href="faq" class="nav-link dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-200">FAQs</a>
                  <a href="careers" class="nav-link dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-200">Careers</a>
                </div>
              </li>
             
            </ul>

            <!-- Social Icons -->
            <div class="hidden md:flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61572940687826" target="_blank" rel="noopener noreferrer" class="hover:text-gray-300">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/vybtekIT" target="_blank" rel="noopener noreferrer" class="hover:text-gray-300">
               <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/vybtek/" target="_blank" rel="noopener noreferrer" class="hover:text-gray-300">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/vybtek_it/" target="_blank" rel="noopener noreferrer" class="hover:text-gray-300">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div id="mobile-menu" class="hidden md:hidden flex-col bg-white shadow-lg p-4 space-y-3">
           <!--<a href="index" class="nav-link block hover:bg-gray-200 text-black py-2">Home</a> -->
  
  <a href="about" class="nav-link block hover:bg-gray-200 text-black py-2">About</a>

  <div class="relative group">
    <button class="w-full hover:bg-gray-200 text-left flex justify-between items-center text-black py-2">
      Services <i class="fas fa-chevron-down"></i>
    </button>
    <div class="hidden group-hover:block bg-gray-100 p-2 space-y-2">
      <a href="software" class="nav-link block hover:bg-gray-200 text-black">Software Development</a>
      <a href="design" class="nav-link block hover:bg-gray-200 text-black">Web Design</a>
      <a href="marketing" class="nav-link block hover:bg-gray-200 text-black">Digital Marketing</a>
      <a href="techsupport" class="nav-link block hover:bg-gray-200 text-black">IT Tech Support</a>
      <a href="outsourcing" class="nav-link block hover:bg-gray-200 text-black">Tech Outsourcing</a>
      <a href="consultation" class="nav-link block hover:bg-gray-200 text-black">Tech Consultation</a>
    </div>
  </div>

  
  <a href="projects" class="nav-link block hover:bg-gray-200 text-black py-2">Projects</a>
  <a href="contact" class="nav-link block hover:bg-gray-200 text-black py-2">Contact</a>
  <div class="relative group">
    <button class="w-full hover:bg-gray-200 text-left flex justify-between items-center text-black py-2">
      More <i class="fas fa-chevron-down"></i>
    </button>
    <div class="hidden group-hover:block bg-gray-100 p-2 space-y-2">
     <!-- <a href="ourteam" class="nav-link block hover:bg-gray-200 text-black">Our Team</a> -->    
      <a href="faq" class="nav-link block hover:bg-gray-200 text-black">FAQs</a>
      <a href="careers" class="nav-link block hover:bg-gray-200 text-black">Careers</a>
    </div>
  </div>
</div>
 
        </nav>
      </header>`;

    this.activateCurrentNavLink();
    this.setupMobileMenu();
  }

  activateCurrentNavLink() {
    const navLinks = document.querySelectorAll(
      "#mobile-menu .nav-link, .nav-link"
    );
    const currentPath =
      window.location.pathname.split("/").pop() || "index.html"; // Default to index.html if empty

    navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href")
        ? link.getAttribute("href").split("/").pop()
        : null;

      if (linkPath === currentPath) {
        link.classList.add("active-link");
        link.classList.remove("inactive-link");

        // If the link is inside a dropdown, mark its parent button as active
        const parentDiv = link.closest(".group");
        if (parentDiv) {
          parentDiv.querySelector("button").classList.add("active-link");
        }
      } else {
        link.classList.add("inactive-link");
        link.classList.remove("active-link");
      }
    });
  }

  setupMobileMenu() {
    this.querySelector("#menu-toggle")?.addEventListener("click", () => {
      this.querySelector("#mobile-menu").classList.toggle("hidden");
    });
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
      <footer class="bg-gradient-to-b from-blue-100 to-white py-10 px-6 md:px-16">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Branding Section -->
          <div>
            <h2 class="text-xl font-bold flex items-center gap-2">
              <img src="./images/logo.png" alt="vybtek Logo" class="w-12 h-12" /> 
              VybTek
            </h2>
            <p class="text-gray-600 mt-2">
              From Software Design to Digital Branding – Your Trusted Tech Partner.
            </p>
            <div class="flex space-x-3 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61572940687826" target="_blank" class="p-2 bg-white rounded-full shadow-md hover:text-gray-400"><i class="fab fa-facebook-f"></i></a>
              <a href="https://x.com/vybtekIT" target="_blank" class="p-2 bg-white rounded-full shadow-md hover:text-gray-400"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.linkedin.com/company/vybtek/" target="_blank" class="p-2 bg-white rounded-full shadow-md hover:text-gray-400"><i class="fab fa-linkedin"></i></a>
              <a href="https://www.instagram.com/vybtek_it/" target="_blank" class="p-2 bg-white rounded-full shadow-md hover:text-gray-400"><i class="fab fa-instagram"></i></a>
            </div>
          </div>

          <!-- IT Services Section -->
          <div>
            <h3 class="text-lg font-semibold">IT Services</h3>
            <ul class="mt-2 space-y-2 text-gray-600">
              <li><a href="software" class="footer-link">Software Development</a></li>
              <li><a href="design" class="footer-link">Web Design</a></li>
              <li><a href="marketing" class="footer-link">Digital Marketing</a></li>
              <li><a href="techsupport" class="footer-link">IT Tech Support</a></li>
              <li><a href="outsourcing" class="footer-link">Tech Outsourcing</a></li>
              <li><a href="consultation" class="footer-link">Tech Consultation</a></li>
            </ul>
          </div>

          <!-- Contact Info Section -->
          <div>
    <h3 class="text-lg font-semibold">Contact Info</h3>
    <ul class="mt-2 space-y-2 text-gray-600">
        <li>
            <a href="https://maps.app.goo.gl/bhadKHqrtPvyghnb7" target="_blank" class="flex items-center space-x-2">
                <i class="fas fa-map-marker-alt text-blue-500"></i>
                <span>Amrit shree, 319, Ashok Nagar, Udaipur, Rajasthan 313001</span>
            </a>
        </li>
        <li>
            <a href="mailto:info@vybtek.com" class="flex items-center space-x-2">
                <i class="fas fa-envelope text-blue-500"></i>
                <span>info@vybtek.com</span>
            </a>
        </li>
         <li><i class="fas fa-clock text-blue-500"></i> Opening Hours: 10:00 - 18:00</li>
    </ul>
 </div>

        </div>

        <!-- Footer Bottom -->
        <div class="mt-10 text-center text-gray-600 border-t pt-4">
          <p>&copy; 2025 All Rights Reserved.</p>
          <div class="mt-2 space-x-4">
            <a href="index" class="footer-link">Home</a>
            <a href="about" class="footer-link">About</a>
            <a href="services" class="footer-link">Services</a>
            <a href="projects" class="footer-link">Projects</a>
            <a href="careers" class="footer-link">Career</a>
            <a href="faq" class="footer-link">FAQs</a>
            <a href="contact" class="footer-link">Contact Us</a>
            <a href="sitemap" class="footer-link">Sitemap</a>
             <!--  <a href="ourteam" class="footer-link">Our Team</a> -->         
          </div>
        </div>
      </footer>`;

    this.activateCurrentFooterLink();
  }

  activateCurrentFooterLink() {
    const footerLinks = this.querySelectorAll(".footer-link");
    const currentPath =
      window.location.pathname.split("/").pop() || "index.html"; // Default to index.html if empty

    footerLinks.forEach((link) => {
      const linkPath = link.getAttribute("href")
        ? link.getAttribute("href").split("/").pop()
        : null;

      if (linkPath === currentPath) {
        link.classList.add("active-footer-link");
        link.classList.remove("inactive-footer-link");
      } else {
        link.classList.add("inactive-footer-link");
        link.classList.remove("active-footer-link");
      }
    });
  }
}

customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);

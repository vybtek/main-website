class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <header>
        <div class="bg-gray- shadow-md">
          <div
            class="container mx-auto flex items-center justify-between py-3 px-6"
          >
            <!-- Logo -->
            <div class="flex items-center space-x-2">
              <img src="./images/logo.png" alt="Logo" class="w-10 h-10" />
              <span class="text-xl font-bold">VybTek</span>
            </div>

            <!-- Mobile Menu Button -->
            <button id="menu-toggle" class="md:hidden text-blue-600 text-xl">
              <i class="fas fa-bars"></i>
            </button>

            <!-- Contact Info -->
            <div class="hidden md:flex items-center space-x-8">
              <div class="flex items-center space-x-2">
                <i class="fa-solid fa-location-dot text-blue-600 w-5 h-5"></i>
                <div>
                  <p class="text-sm font-semibold">Address</p>
                  <p class="text-xs text-gray-500">Udaipur</p>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fa-solid fa-envelope text-blue-600 w-5 h-5"></i>
                <div>
                  <p class="text-sm font-semibold">E-mail</p>
                  <p class="text-xs text-gray-500">info@gmail.com</p>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fa-solid fa-phone text-blue-600 w-5 h-5"></i>
                <div>
                  <p class="text-sm font-semibold">Phone</p>
                  <p class="text-xs text-gray-500">+6367885453</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Bar -->
        <nav class=" bg-gradient-to-r from-blue-900 to-blue-600 text-white">
          <div
            class="container mx-auto flex justify-between items-center py-4 px-6"
          >
            <!-- Menu -->
            <ul id="nav-menu" class="hidden md:flex space-x-8">
              <li>
                <a href="index.html" class="nav-link hover:opacity-80">Home </a>
              </li>

              <li>
                <a href="about.html" class="nav-link hover:opacity-80">About</a>
              </li>
              <!-- Services Dropdown -->
              <li class="relative group">
                <button class="nav-link hover:opacity-80">Services ▾</button>

                <!-- Dropdown Menu -->
                <div
                  class="absolute left-0 p-1 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block z-50"
                >
                  <a
                    href="service1.html"
                    class="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:bg-gray-200"
                    >Software Development</a
                  >
                  <a
                    href="service2.html"
                    class="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:bg-gray-200"
                    >Web Design</a
                  >
                  <a
                    href="service3.html"
                    class="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:bg-gray-200"
                    >Digital Marketing</a
                  >
                  <a
                    href="service4.html"
                    class="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:bg-gray-200"
                    >IT Tech Support</a
                  >
                  <a
                    href="service5.html"
                    class="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:bg-gray-200"
                    >Tech Outsourcing</a
                  >
                  <a
                    href="service6.html"
                    class="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:bg-gray-200"
                    >Tech Consultation</a
                  >
                </div>
              </li>
              <!-- Pages Dropdown -->
              <li class="relative group">
                <button class="nav-link hover:opacity-80">Pages ▾</button>

                <!-- Dropdown Menu -->
                <div
                  class="absolute left-0 p-1 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block z-50"
                >
                  <a
                    href="faq.html"
                    class="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:bg-gray-200"
                    >FAQs</a
                  >
                  <a
                    href="careers.html"
                    class="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:bg-gray-200"
                    >Careers</a
                  >
                </div>
              </li>

              <li>
                <a href="blog.html" class="nav-link hover:opacity-80">Blog</a>
              </li>
              <li>
                <a href="contact.html" class="nav-link hover:opacity-80"
                  >Contact</a
                >
              </li>
            </ul>

            <!-- Social Icons -->
            <div class="hidden md:flex space-x-4">
              <!-- <a href="#" class="hover:text-gray-300"
                ><i class="fas fa-search"></i
              ></a> -->
              <a href="#" class="hover:text-gray-300"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a href="#" class="hover:text-gray-300"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#" class="hover:text-gray-300"
                ><i class="fab fa-pinterest"></i
              ></a>
              <a href="#" class="hover:text-gray-300"
                ><i class="fab fa-instagram"></i
              ></a>
            </div>
          </div>
          <!-- Mobile Dropdown Menu -->
          <div
            id="mobile-menu"
            class="hidden md:hidden flex-col bg-white shadow-lg p-4 space-y-3"
          >
            <a href="index.html" class="block hover:bg-gray-200 text-black py-2"
              >Home</a
            >
            <a href="about.html" class="block hover:bg-gray-200 text-black py-2"
              >About</a
            >

            <div class="relative group">
              <button
                class="w-full hover:bg-gray-200 text-left flex justify-between items-center text-black py-2"
              >
                Services <i class="fas fa-chevron-down"></i>
              </button>
              <div class="hidden group-hover:block bg-gray-100 p-2 space-y-2">
                <a href="service1.html" class="block hover:bg-gray-200 text-black"
                  >Software Development</a
                >
                <a href="service2.html" class="block hover:bg-gray-200 text-black"
                  >Web Design</a
                >
                <a href="service3.html" class="block hover:bg-gray-200 text-black"
                  >Digital Marketing</a
                >
                <a href="service4.html" class="block hover:bg-gray-200 text-black"
                  >IT Tech Support</a
                >
                <a href="service5.html" class="block hover:bg-gray-200 text-black"
                  >Tech Outsourcing</a
                >
                <a href="service6.html" class="block hover:bg-gray-200 text-black"
                  >Tech Consultation</a
                >
              </div>
            </div>

            <div class="relative group">
              <button
                class="w-full hover:bg-gray-200 text-left flex justify-between items-center text-black py-2"
              >
               Pages <i class="fas fa-chevron-down"></i>
              </button>
              <div class="hidden group-hover:block bg-gray-100 p-2 space-y-2">
                <a href="faq.html" class="block hover:bg-gray-200 text-black"
                  >FAQs</a
                >
                <a href="careers.html" class="block hover:bg-gray-200 text-black"
                  >Careers</a
                >
              </div>
            </div>
            <a href="blog.html" class="block hover:bg-gray-200 text-black py-2">Blog</a>
            <a href="contact.html" class="block hover:bg-gray-200 text-black py-2"
              >Contact</a
            >
          </div>
        </nav>
      </header>`;

    this.activateCurrentNavLink();
  }

  activateCurrentNavLink() {
    const navLinks = this.querySelectorAll(".nav-link, .mobile-nav-link");
    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("font-bold", "text-yellow-400");
      } else {
        link.classList.remove("font-bold", "text-yellow-400");
      }
    });
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <footer
        class="bg-gradient-to-b from-blue-100 to-white py-10 px-6 md:px-16"
      >
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Branding Section -->
          <div>
            <h2 class="text-xl font-bold flex items-center gap-2">
               <img src="./images/logo.png" alt="vybtek Logo" class="w-8 h-8" /> 
              VybTek
            </h2>
            <p class="text-gray-600 mt-2">
              Sedut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dolore.
            </p>
            <div class="flex space-x-3 mt-4">
              <a href="#" class="p-2 bg-white rounded-full shadow-md"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a href="#" class="p-2 bg-white rounded-full shadow-md"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#" class="p-2 bg-white rounded-full shadow-md"
                ><i class="fab fa-pinterest"></i
              ></a>
              <a href="#" class="p-2 bg-white rounded-full shadow-md"
                ><i class="fab fa-instagram"></i
              ></a>
            </div>
          </div>

          <!-- IT Services Section -->
          <div>
            <h3 class="text-lg font-semibold">IT Services</h3>
            <ul class="mt-2 space-y-2 text-gray-600">
              <li>
                <a href="service1.html" class="hover:text-blue-500">Software Development</a>
              </li>
              <li>
                <a href="service2.html" class="hover:text-blue-500">Web Design</a>
              </li>
              <li>
                <a href="service3.html" class="hover:text-blue-500">Digital Marketing</a>
              </li>
              <li>
                <a href="service4.html" class="hover:text-blue-500">IT Tech Support</a>
              </li>
              <li>
                <a href="service5.html" class="hover:text-blue-500">Tech Outsourcing</a>
              </li>
              <li>
                <a href="service6.html" class="hover:text-blue-500">Tech Consultation</a>
              </li>
            </ul>
          </div>

          <!-- Contact Info Section -->
          <div>
            <h3 class="text-lg font-semibold">Contact Info</h3>
            <ul class="mt-2 space-y-2 text-gray-600">
              <li>
                <i class="fas fa-map-marker-alt text-blue-500"></i> Udaipur
              </li>
              <li><i class="fas fa-phone text-blue-500"></i> 91+ 6367885453</li>
              <li>
                <i class="fas fa-envelope text-blue-500"></i> info@yourmail.com
              </li>
              <li>
                <i class="fas fa-clock text-blue-500"></i> Opening Hours: 10:00
                - 18:00
              </li>
            </ul>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="mt-10 text-center text-gray-600 border-t pt-4">
          <p>&copy; 2025 All Rights Reserved.</p>
          <div class="mt-2 space-x-4">
            <a href="index.html" class="hover:text-blue-500">Home</a>
            <a href="about.html" class="hover:text-blue-500">About</a>
            <a href="services.html" class="hover:text-blue-500">Services</a>
            <a href="blog.html" class="hover:text-blue-500">Blog</a>
            <a href="careers.html" class="hover:text-blue-500">Career</a>
            <a href="faq.html" class="hover:text-blue-500">FAQs</a>
            <a href="contact.html" class="hover:text-blue-500">Contact Us</a>
            <a href="sidemap.html" class="hover:text-blue-500">Sidemap</a>
          </div>
        </div>
      </footer>`;
  }
}

customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);

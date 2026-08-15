// ============================================
// PORTFOLIO — MAIN JAVASCRIPT
// ============================================


// ============================================
// 1. ELEMENTS
// ============================================

const menuButton = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const year = document.getElementById("year");


// ============================================
// 2. AUTOMATIC FOOTER YEAR
// ============================================

if (year) {
  year.textContent = new Date().getFullYear();
}


// ============================================
// 3. MOBILE NAVIGATION
// ============================================

if (menuButton && navLinks) {

  menuButton.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  // Close mobile menu after clicking a navigation link

  document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


  // Close mobile menu when clicking outside it

  document.addEventListener("click", (event) => {

    const clickedInsideMenu =
      navLinks.contains(event.target);

    const clickedMenuButton =
      menuButton.contains(event.target);

    if (
      navLinks.classList.contains("active") &&
      !clickedInsideMenu &&
      !clickedMenuButton
    ) {

      navLinks.classList.remove("active");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });


  // Close mobile menu with Escape key

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      navLinks.classList.remove("active");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });

}


// ============================================
// 4. SCROLL REVEAL ANIMATIONS
// ============================================

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(

      (entries, observerInstance) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "is-visible"
            );

            // Animate only once

            observerInstance.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: 0.14,

        rootMargin:
          "0px 0px -40px 0px"
      }

    );


  revealElements.forEach((element) => {

    observer.observe(element);

  });

}


// ============================================
// 5. FALLBACK FOR OLDER BROWSERS
// ============================================

else {

  revealElements.forEach((element) => {

    element.classList.add(
      "is-visible"
    );

  });

}
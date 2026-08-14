// ============================================
// PORTFOLIO — MAIN JAVASCRIPT
// ============================================


// ============================================
// 1. ELEMENTS
// ============================================

const menuButton = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const year = document.getElementById("year");
const progressBar = document.getElementById("scroll-progress-bar");


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


  // Close mobile menu after clicking a link

  document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


// ============================================
// 4. SCROLL PROGRESS BAR
// ============================================

function updateScrollProgress() {

  if (!progressBar) return;

  const scrollTop = window.scrollY;

  const documentHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    documentHeight > 0
      ? (scrollTop / documentHeight) * 100
      : 0;

  progressBar.style.width = `${progress}%`;
}


window.addEventListener(
  "scroll",
  updateScrollProgress,
  { passive: true }
);


// Set correct progress on initial page load

updateScrollProgress();


// ============================================
// 5. SCROLL REVEAL ANIMATIONS
// ============================================

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(

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

      // Trigger slightly before the element
      // fully enters the viewport
      rootMargin: "0px 0px -40px 0px"
    }

  );


  revealElements.forEach((element) => {

    observer.observe(element);

  });

}


// ============================================
// 6. FALLBACK FOR OLDER BROWSERS
// ============================================

else {

  revealElements.forEach((element) => {

    element.classList.add(
      "is-visible"
    );

  });

}
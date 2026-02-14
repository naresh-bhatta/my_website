/* =====================================
   SMOOTH SCROLL OFFSET FOR FIXED HEADER
===================================== */

const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    const headerHeight = header.offsetHeight;
    const sectionPosition = targetSection.offsetTop - headerHeight;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth"
    });
  });
});

/* =====================================
   ACTIVE NAV LINK ON SCROLL
===================================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - header.offsetHeight - 50;
    const sectionHeight = section.offsetHeight;

    if (
      pageYOffset >= sectionTop &&
      pageYOffset < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* =====================================
   HEADER SHADOW ON SCROLL
===================================== */

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 6px 25px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
  }
});

/* =====================================
   SIMPLE SCROLL REVEAL ANIMATION
===================================== */

const revealElements = document.querySelectorAll(
  ".section, .project-card, .skill-card, .timeline-item"
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =====================================
   CONTACT FORM (BASIC UX ONLY)
===================================== */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    alert(
      "Thank you for your message! This form is currently for demo purposes."
    );

    contactForm.reset();
  });
}

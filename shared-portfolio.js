const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navPanel = document.getElementById("navPanel");

if (navbar) {
    const setNavState = () => {
        navbar.classList.toggle("scrolled", window.scrollY > 14);
    };

    setNavState();
    window.addEventListener("scroll", setNavState, { passive: true });
}

if (menuToggle && navPanel) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navPanel.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
            navPanel.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.14,
    rootMargin: "0px 0px -40px 0px"
});

document.querySelectorAll(".fade-up").forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 40, 220)}ms`;
    observer.observe(element);
});

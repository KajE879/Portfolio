const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li a");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${entry.target.id}`
                    );
                });
            }
        });
    },
    { threshold: 0.5 }
);

sections.forEach(section => observer.observe(section));

document.getElementById("year").textContent = new Date().getFullYear();
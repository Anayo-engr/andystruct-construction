/* =========================================================
   ANDYSTRUCT CONSTRUCTION COMPANY
   JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       MOBILE NAVIGATION
    =============================== */

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", () => {

            navigation.classList.toggle("active");

            if (navigation.classList.contains("active")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }

        });


        /* Close menu after clicking a link */

        const navigationLinks =
            navigation.querySelectorAll("a");

        navigationLinks.forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("active");
                menuToggle.innerHTML = "☰";

            });

        });

    }


    /* ===============================
       CURRENT YEAR
    =============================== */

    const yearElement =
        document.getElementById("year");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }


    /* ===============================
       QUOTE FORM
    =============================== */

    const quoteForm =
        document.getElementById("quoteForm");

    const formMessage =
        document.getElementById("formMessage");

    if (quoteForm) {

        quoteForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (formMessage) {

                formMessage.textContent =
                    "Thank you. Your project enquiry has been received.";

                formMessage.style.color =
                    "#b77d00";

            }

            quoteForm.reset();

        });

    }


    /* ===============================
       SCROLL REVEAL
    =============================== */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .project-card, .team-card, .contact-card, .why-grid > div"
        );


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform =
            "translateY(25px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        revealObserver.observe(element);

    });


    /* ===============================
       ACTIVE NAVIGATION
    =============================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(
            ".navigation a"
        );


    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    });


    /* ===============================
       HEADER SCROLL EFFECT
    =============================== */

    const header =
        document.querySelector(".header");


    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.style.background =
                "rgba(10, 10, 10, 0.99)";

        } else {

            header.style.background =
                "rgba(17, 17, 17, 0.97)";

        }

    });


    /* ===============================
       PROJECT PROGRESS ANIMATION
    =============================== */

    const progressFill =
        document.querySelector(".progress-fill");


    if (progressFill) {

        const targetWidth =
            progressFill.style.width;

        progressFill.style.width = "0%";


        const progressObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            setTimeout(() => {

                                progressFill.style.transition =
                                    "width 1.5s ease";

                                progressFill.style.width =
                                    targetWidth;

                            }, 200);

                            progressObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.4
                }
            );


        progressObserver.observe(progressFill);

    }

});

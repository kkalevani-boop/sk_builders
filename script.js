/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) {
        return;
    }

    const statsSection = document.querySelector(".stats");

    const sectionPosition =
        statsSection.getBoundingClientRect().top;

    const screenPosition =
        window.innerHeight;

    if (sectionPosition < screenPosition) {

        counterStarted = true;

        counters.forEach(function (counter) {

            const target =
                Number(counter.getAttribute("data-target"));

            let current = 0;

            const increment =
                Math.ceil(target / 50);

            const timer = setInterval(function () {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent = current + "+";

            }, 30);

        });

    }

}

window.addEventListener("scroll", startCounters);


/* =========================
   PROJECT FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        projectCards.forEach(function (card) {

            const category =
                card.getAttribute("data-category");

            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================
   SCROLL ANIMATION
========================= */

const animatedElements =
    document.querySelectorAll(
        ".info-card, .service-card, .project-card, .job-card, .testimonial-card"
    );


function revealElements() {

    animatedElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 80) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();


/* =========================
   PROJECT REQUEST FORM
========================= */

const projectForm =
    document.getElementById("projectForm");

projectForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("projectName").value;

    alert(
        "Thank you, " +
        name +
        "! Your project request has been submitted successfully. Our team will contact you soon."
    );

    projectForm.reset();

});


/* =========================
   JOB APPLICATION FORM
========================= */

const jobForm =
    document.getElementById("jobForm");

jobForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert(
        "Thank you! Your job application has been submitted successfully. Our team will review your application."
    );

    jobForm.reset();

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert(
        "Thank you! Your message has been sent successfully. We will contact you soon."
    );

    contactForm.reset();

});


/* =========================
   CURRENT YEAR
========================= */

console.log(
    "SK BUILDERS website loaded successfully."
);
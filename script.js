// Fade Up START
const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

fadeElements.forEach((element) => {
    fadeObserver.observe(element);
});
// Fade Up END


// Responsive Navbar
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Statistics START
const statsSection = document.querySelector(".statistics");
const counters = document.querySelectorAll(".stat-number");

let started = false;

const startCounter = () => {
    if (started) return;

    started = true;

    counters.forEach(counter => {
        const target = +counter.dataset.target;
        const duration = 2000;
        const increment = target / (duration / 16);

        let current = 0;

        const updateCounter = () => {
            current += increment;

            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + "+";
            }
        };

        updateCounter();
    });
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter();
        }
    });
}, {
    threshold: 0.4
});

observer.observe(statsSection);
// Statistics END


// Results START
const resultCards = document.querySelectorAll(".result-card");

const resultObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

resultCards.forEach(card => {
    resultObserver.observe(card);
});
// Results END


// Duration START
const durationCards = document.querySelectorAll(".duration-card");

const durationObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

durationCards.forEach(card => {
    durationObserver.observe(card);
});
// Duration END


// Testimonials START
const testimonialCards = document.querySelectorAll(".testimonial-card");

const testimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

testimonialCards.forEach((card) => {
    testimonialObserver.observe(card);
});
// Testimonials END


// Garant START
const guaranteeElements = document.querySelectorAll(".fade-left, .fade-right");

const guaranteeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

guaranteeElements.forEach((element) => {
    guaranteeObserver.observe(element);
});
// Garant END


// Contact START
const phoneInput = document.getElementById("phoneInput");

phoneInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 9) {
        value = value.slice(0, 9);
    }

    let formatted = "";

    if (value.length > 0) {
        formatted += "(" + value.substring(0, 2);
    }

    if (value.length >= 2) {
        formatted += ")";
    }

    if (value.length > 2) {
        formatted += " " + value.substring(2, 5);
    }

    if (value.length > 5) {
        formatted += "-" + value.substring(5, 7);
    }

    if (value.length > 7) {
        formatted += "-" + value.substring(7, 9);
    }

    e.target.value = formatted;
});

const customSelect = document.getElementById("courseSelect");
const selectedOption = customSelect.querySelector(".selected-option");
const hiddenInput = document.getElementById("selectedCourse");

customSelect.querySelector(".select-trigger").addEventListener("click", () => {
    customSelect.classList.toggle("active");
});

customSelect.querySelectorAll(".select-option").forEach(option => {
    option.addEventListener("click", () => {
        selectedOption.textContent = option.textContent;
        hiddenInput.value = option.textContent;
        customSelect.classList.remove("active");
    });
});

document.addEventListener("click", (e) => {
    if (!customSelect.contains(e.target)) {
        customSelect.classList.remove("active");
    }
});

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("fullName");
    const phone = document.getElementById("phoneInput");
    const course = document.getElementById("selectedCourse");

    let valid = true;

    document.querySelectorAll(".error-message").forEach(error => {
        error.textContent = "";
    });

    if (name.value.trim() === "") {
        name.parentElement.querySelector(".error-message").textContent = "Ismingizni kiriting";
        valid = false;
    }

    if (phone.value.length < 14) {
        phone.closest(".form-group").querySelector(".error-message").textContent = "Telefon raqamni to'liq kiriting";
        valid = false;
    }

    if (course.value.trim() === "") {
        course.parentElement.querySelector(".error-message").textContent = "Kursni tanlang";
        valid = false;
    }

    if (valid) {
        alert("Ma'lumot yuborildi!");
        form.reset();
        selectedOption.textContent = "Kursni tanlang";
    }
});
// Contact END


// FAQ START
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqItems.forEach((faq) => {
            if (faq !== item) {
                faq.classList.remove("active");
                faq.querySelector(".faq-icon").textContent = "+";
            }
        });

        item.classList.toggle("active");

        const icon = item.querySelector(".faq-icon");

        if (item.classList.contains("active")) {
            icon.textContent = "×";
        } else {
            icon.textContent = "+";
        }
    });
});

const faqFadeElements = document.querySelectorAll(".fade-up");

const faqObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

faqFadeElements.forEach((element) => {
    faqObserver.observe(element);
});
// FAQ END
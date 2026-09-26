document.addEventListener('DOMContentLoaded', () => {

    // 1. Dark / Light Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
    } else {
        if (themeToggleBtn) themeToggleBtn.textContent = '🌙';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            let theme = 'light';
            if (body.classList.contains('dark-theme')) {
                theme = 'dark';
                themeToggleBtn.textContent = '☀️';
            } else {
                themeToggleBtn.textContent = '🌙';
            }
            localStorage.setItem('theme', theme);
        });
    }

    // 2. Mobile Navigation Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 3. FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                item.classList.toggle('active');
            });
        }
    });

    // 4. Modal Popup Logic (Get Started / Start Free Trial buttons)
    const modal = document.getElementById('getStartedModal');
    const closeBtn = document.querySelector('.close-btn');
    const getStartedBtns = document.querySelectorAll('.btn-primary'); // All main buttons

    getStartedBtns.forEach(btn => {
        // Exclude submit button inside modal if it has .btn-primary
        if(btn.type !== 'submit') {
            btn.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default link jump '#'
                if (modal) {
                    modal.style.display = 'flex';
                }
            });
        }
    });

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside of the modal box
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 5. Form Validation & Submission
    const modalForm = document.getElementById('modalForm');
    const userEmail = document.getElementById('userEmail');

    if (modalForm) {
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (userEmail && userEmail.value.trim() !== '') {
                alert(`Thank you! Verification link sent to ${userEmail.value}`);
                modal.style.display = 'none';
                modalForm.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

});
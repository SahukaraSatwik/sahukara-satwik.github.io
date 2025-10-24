// Wait for DOM to be fully loaded
window.addEventListener('DOMContentLoaded', function() {
    // Hide loader after page load
    setTimeout(function() {
        document.getElementById('loader').classList.add('hidden');
    }, 500);

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ 
            duration: 800, 
            offset: 100,
            once: true 
        });
    }

    // Mobile Menu Toggle
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    toggle.addEventListener("click", function() {
        const isExpanded = navLinks.classList.contains('active');
        navLinks.classList.toggle("active");
        toggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        
        // Save theme preference
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });

    // Back to Top Button
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Optional: Google Analytics (replace with your tracking ID)
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_MEASUREMENT_ID', { 'anonymize_ip': true });

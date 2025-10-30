// Main JavaScript for Camellia Innovations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Initialize scientific background
    initScientificBackground();
    
    // Add any other global functionality here
});

function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

function initSmoothScrolling() {
    // Smooth scrolling for anchor links (fallback for non-SPA behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
}

function initScientificBackground() {
    // This will be initialized by the animations.js
    // We just make sure the canvas element exists
    const canvas = document.getElementById('scientificCanvas');
    if (canvas) {
        // Canvas is ready for animations
        console.log('Scientific background canvas initialized');
    }
}

// Utility function for handling form submissions
function handleFormSubmission(formId, successMessage) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert(successMessage);
            form.reset();
        });
    }
}

// Export functions for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initMobileNav,
        initSmoothScrolling,
        initScientificBackground,
        handleFormSubmission
    };
}
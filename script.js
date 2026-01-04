// Load gallery items from data.js
function loadHomeGallery() {
    const galleryGrid = document.getElementById('home-gallery');
    if (!galleryGrid || typeof homeGalleryItems === 'undefined') return;
    
    galleryGrid.innerHTML = homeGalleryItems.map((item, index) => `
        <a href="${item.link}" class="gallery-item-link">
            <div class="gallery-item scroll-scale-in scroll-delay-${index + 1}">
                <img src="${item.image}" alt="${item.alt}">
                <div class="gallery-overlay">
                    <p>${item.title}</p>
                </div>
            </div>
        </a>
    `).join('');
}

// Mobile navbar hide/show on scroll
let lastScrollTop = 0;
let scrollTimeout;
let isScrolling = false;

function handleNavbarScroll() {
    // Only apply on mobile view and home page (not collection pages)
    if (window.innerWidth > 768 || document.body.classList.contains('collection-page')) {
        return;
    }

    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    const navContainer = document.querySelector('.navbar .container');
    if (!navMenu || !navbar || !navContainer) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add a small threshold to prevent jitter
    if (Math.abs(lastScrollTop - scrollTop) < 5) {
        return;
    }

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down - hide menu and make navbar compact
        navMenu.classList.add('nav-hidden');
        navbar.classList.add('navbar-compact');
        navContainer.classList.add('nav-container-compact');
    } else {
        // Scrolling up - show menu and restore navbar
        navMenu.classList.remove('nav-hidden');
        navbar.classList.remove('navbar-compact');
        navContainer.classList.remove('nav-container-compact');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

// Throttled scroll handler
window.addEventListener('scroll', function() {
    if (!isScrolling) {
        window.requestAnimationFrame(function() {
            handleNavbarScroll();
            isScrolling = false;
        });
        isScrolling = true;
    }
}, { passive: true });

// Smooth Scroll Animation using Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    // Load home gallery if on home page
    loadHomeGallery();
    
    // Initialize navbar state on mobile
    if (window.innerWidth <= 768 && !document.body.classList.contains('collection-page')) {
        const navMenu = document.querySelector('.nav-menu');
        const navbar = document.querySelector('.navbar');
        const navContainer = document.querySelector('.navbar .container');
        if (navMenu) {
            navMenu.classList.remove('nav-hidden');
        }
        if (navbar) {
            navbar.classList.remove('navbar-compact');
        }
        if (navContainer) {
            navContainer.classList.remove('nav-container-compact');
        }
    }
    // Select all elements with scroll animation classes
    const animatedElements = document.querySelectorAll('.scroll-fade-in, .scroll-fade-in-left, .scroll-fade-in-right, .scroll-scale-in');
    
    // Create Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Unobserve after animation to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});


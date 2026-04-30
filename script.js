// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuLinks = document.querySelectorAll('.menu-link');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close menu when clicking on a link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Smooth scroll with offset for sticky header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections
const animateElements = document.querySelectorAll('.service-card, .special-card, .pricing-card, .contact-card, .schedule-card, .map-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 16px rgba(0, 102, 204, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 102, 204, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// Prevent scroll when mobile menu is open
const body = document.body;
const checkMenuState = () => {
    if (mobileMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
};

menuToggle.addEventListener('click', checkMenuState);
menuLinks.forEach(link => {
    link.addEventListener('click', checkMenuState);
});

// Add touch feedback for mobile buttons
const buttons = document.querySelectorAll('.btn, .contact-card, .service-card');
buttons.forEach(button => {
    button.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.98)';
    });
    
    button.addEventListener('touchend', function() {
        this.style.transform = '';
    });
});

// WhatsApp floating button pulse effect on scroll
const whatsappFloat = document.querySelector('.whatsapp-float');
let pulseTimeout;

window.addEventListener('scroll', () => {
    clearTimeout(pulseTimeout);
    whatsappFloat.style.animation = 'none';
    
    pulseTimeout = setTimeout(() => {
        whatsappFloat.style.animation = 'pulse 2s ease-in-out 3';
    }, 1000);
});

// Lazy load Google Maps iframe
const mapContainer = document.querySelector('.map-container iframe');
if (mapContainer) {
    const mapObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                if (iframe.dataset.src) {
                    iframe.src = iframe.dataset.src;
                    mapObserver.unobserve(iframe);
                }
            }
        });
    });
    
    mapObserver.observe(mapContainer);
}

console.log('🫧 Lavandería Ricaurte - Website loaded successfully!');

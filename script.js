/* ============================================ */
/* Kartik Villa - JavaScript Functionality */
/* ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functions
    initNavigation();
    initHeroSlider();
    initGalleryLightbox();
    initSmoothScrolling();
    initBackToTop();
    initContactButtons();
    initPropertyStats();
    initReviewsCarousel();
    
});

/* ============================================ */
/* Navigation */
/* ============================================ */

function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        }
    });
}

/* ============================================ */
/* Hero Slider */
/* ============================================ */

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    if (slides.length <= 1) return; // Don't run slider if only one image
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
}

/* ============================================ */
/* Gallery Lightbox */
/* ============================================ */

function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    
    let currentImageIndex = 0;
    const images = Array.from(galleryItems).map(item => ({
        src: item.querySelector('img').src,
        alt: item.querySelector('img').alt
    }));
    
    // Open lightbox
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentImageIndex = index;
            showLightboxImage(currentImageIndex);
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    // Previous image
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showLightboxImage(currentImageIndex);
        });
    }
    
    // Next image
    if (lightboxNext) {
        lightboxNext.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showLightboxImage(currentImageIndex);
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'ArrowLeft') {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showLightboxImage(currentImageIndex);
        } else if (e.key === 'ArrowRight') {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showLightboxImage(currentImageIndex);
        }
    });
    
    // Show image in lightbox
    function showLightboxImage(index) {
        lightboxImg.src = images[index].src;
        lightboxCaption.textContent = images[index].alt;
    }
}

/* ============================================ */
/* Smooth Scrolling */
/* ============================================ */

function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just '#'
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================ */
/* Back to Top Button */
/* ============================================ */

function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (!backToTopBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ============================================ */
/* Contact Buttons (WhatsApp & Email) */
/* ============================================ */

function initContactButtons() {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const emailBtn = document.getElementById('email-btn');
    const airbnbBtn = document.getElementById('airbnb-btn');
    
    // Get configuration from global PROPERTY_CONFIG
    if (typeof PROPERTY_CONFIG !== 'undefined') {
        
        // WhatsApp button
        if (whatsappBtn && PROPERTY_CONFIG.whatsapp) {
            const message = encodeURIComponent(
                `Hello! I'm interested in booking ${PROPERTY_CONFIG.name}.\n\n` +
                `Check-in: [Your check-in date]\n` +
                `Check-out: [Your check-out date]\n` +
                `Number of guests: [Number of guests]\n\n` +
                `Please let me know about availability and pricing. Thank you!`
            );
            whatsappBtn.href = `https://wa.me/${PROPERTY_CONFIG.whatsapp}?text=${message}`;
        }
        
        // Email button
        if (emailBtn && PROPERTY_CONFIG.email) {
            const subject = encodeURIComponent(`Booking Inquiry for ${PROPERTY_CONFIG.name}`);
            const body = encodeURIComponent(
                `Hello,\n\n` +
                `I'm interested in booking ${PROPERTY_CONFIG.name}.\n\n` +
                `Check-in date: [Your check-in date]\n` +
                `Check-out date: [Your check-out date]\n` +
                `Number of guests: [Number of guests]\n\n` +
                `Please provide information about availability and pricing.\n\n` +
                `Thank you!`
            );
            emailBtn.href = `mailto:${PROPERTY_CONFIG.email}?subject=${subject}&body=${body}`;
        }
        
        // Airbnb button
        if (airbnbBtn && PROPERTY_CONFIG.airbnbLink) {
            airbnbBtn.href = PROPERTY_CONFIG.airbnbLink;
        }
    }
}

/* ============================================ */
/* Property Stats - Dynamic from Config */
/* ============================================ */

function initPropertyStats() {
    if (typeof PROPERTY_CONFIG !== 'undefined') {
        // Update stat numbers
        const bedroomsStat = document.getElementById('stat-bedrooms');
        const bathroomsStat = document.getElementById('stat-bathrooms');
        const guestsStat = document.getElementById('stat-guests');
        
        if (bedroomsStat) bedroomsStat.textContent = PROPERTY_CONFIG.bedrooms;
        if (bathroomsStat) bathroomsStat.textContent = PROPERTY_CONFIG.bathrooms;
        if (guestsStat) guestsStat.textContent = PROPERTY_CONFIG.maxGuests;
        
        // Update footer location and contact
        const footerLocation = document.getElementById('footer-location');
        const footerEmail = document.getElementById('footer-email');
        const footerPhone = document.getElementById('footer-phone');
        
        if (footerLocation && PROPERTY_CONFIG.location) {
            footerLocation.textContent = `📍 ${PROPERTY_CONFIG.location}`;
        }
        if (footerEmail && PROPERTY_CONFIG.email) {
            footerEmail.textContent = `✉️ ${PROPERTY_CONFIG.email}`;
        }
        if (footerPhone && PROPERTY_CONFIG.whatsapp) {
            // Format phone number nicely (assuming it starts with country code)
            const formatted = PROPERTY_CONFIG.whatsapp.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3');
            footerPhone.textContent = `📱 ${formatted}`;
        }
    }
}

/* ============================================ */
/* Lazy Loading Images (Optional Enhancement) */
/* ============================================ */

// If browser doesn't support native lazy loading, implement fallback
if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading is supported
    console.log('Native lazy loading is supported');
} else {
    // Fallback for older browsers
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/* ============================================ */
/* Animation on Scroll (Optional Enhancement) */
/* ============================================ */

function initScrollAnimations() {
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
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.amenity-item, .stat-item, .gallery-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations
initScrollAnimations();

/* ============================================ */
/* Reviews Carousel */
/* ============================================ */

function initReviewsCarousel() {
    const reviewCards = document.querySelectorAll('.review-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (reviewCards.length === 0) return;
    
    let currentReview = 0;
    
    function showReview(index) {
        // Hide all reviews
        reviewCards.forEach(card => {
            card.classList.remove('active');
        });
        
        // Remove active from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current review
        reviewCards[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    function nextReview() {
        currentReview = (currentReview + 1) % reviewCards.length;
        showReview(currentReview);
    }
    
    function prevReview() {
        currentReview = (currentReview - 1 + reviewCards.length) % reviewCards.length;
        showReview(currentReview);
    }
    
    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', nextReview);
    }
    
    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', prevReview);
    }
    
    // Dots navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentReview = index;
            showReview(currentReview);
        });
    });
    
    // Auto-advance every 7 seconds
    setInterval(nextReview, 7000);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevReview();
        } else if (e.key === 'ArrowRight') {
            nextReview();
        }
    });
}

/* ============================================ */
/* Console Message */
/* ============================================ */

console.log('%c✨ Kartik Villa Website ✨', 'font-size: 20px; font-weight: bold; color: #c9a961;');
console.log('%cWebsite loaded successfully!', 'color: #666; font-size: 12px;');
console.log('%cTo customize this website, edit the PROPERTY_CONFIG section in index.html', 'color: #999; font-size: 11px;');

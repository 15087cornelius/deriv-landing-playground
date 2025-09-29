// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background opacity on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
    
    // Add fade-in animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .platform-card, .section-title');
    animateElements.forEach(el => observer.observe(el));
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('btn-outline')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Placeholder functionality for signup/login buttons
    // You can replace these with your actual signup/login URLs
    const signupButtons = document.querySelectorAll('#signup-btn, #hero-signup, #cta-signup');
    const loginButtons = document.querySelectorAll('#login-btn, #cta-login');
    
    signupButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace this with your actual signup URL
            console.log('Signup button clicked - redirect to signup page');
            // window.location.href = 'https://your-signup-url.com';
            showMessage('Signup functionality - Insert your signup URL here');
        });
    });
    
    loginButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace this with your actual login URL
            console.log('Login button clicked - redirect to login page');
            // window.location.href = 'https://your-login-url.com';
            showMessage('Login functionality - Insert your login URL here');
        });
    });
    
    // Simple message function (you can replace this with a proper modal or notification system)
    function showMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: #FF444F;
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            font-weight: 500;
            max-width: 300px;
            text-align: center;
        `;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }
    
    // Lazy loading for images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // This triggers the loading
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Add loading state to buttons
    function addLoadingState(button) {
        const originalText = button.textContent;
        button.textContent = 'Loading...';
        button.style.opacity = '0.7';
        button.style.pointerEvents = 'none';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.opacity = '1';
            button.style.pointerEvents = 'auto';
        }, 2000);
    }
    
    // Add click analytics (you can integrate with Google Analytics or other services)
    document.addEventListener('click', function(event) {
        const target = event.target;
        
        // Track button clicks
        if (target.classList.contains('btn')) {
            console.log('Button clicked:', target.textContent.trim());
            // You can send this data to your analytics service
        }
        
        // Track navigation clicks
        if (target.classList.contains('nav-link')) {
            console.log('Navigation clicked:', target.textContent.trim());
        }
    });
    
    // Performance optimization: Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(function() {
            // Any expensive scroll operations can go here
        }, 10);
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(event) {
        // ESC key closes mobile menu
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Add touch gestures for mobile
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', function(event) {
        touchStartY = event.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', function(event) {
        touchEndY = event.changedTouches[0].screenY;
        handleGesture();
    });
    
    function handleGesture() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up - could trigger some action
                console.log('Swipe up detected');
            } else {
                // Swipe down - could trigger some action
                console.log('Swipe down detected');
            }
        }
    }
    
    // Initialize everything
    console.log('Deriv landing page initialized successfully');
});
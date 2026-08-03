document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.pagination-dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            const isActive = i === index;
            slide.classList.toggle('active', isActive);
            const content = slide.querySelector('.slide-content');
            if (content) {
                if (isActive) {
                    content.style.opacity = '0';
                    content.style.transform = 'translateY(30px) scale(0.95)';
                    content.style.transition = 'none';
                    void(content.offsetWidth);
                    content.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 400ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 400ms';
                    content.style.opacity = '1';
                    content.style.transform = 'translateY(0) scale(1)';
                } else {
                    content.style.opacity = '0';
                    content.style.transform = 'translateY(30px) scale(0.95)';
                    content.style.transition = 'none';
                }
            }
        });
        if (dots.length > 0) {
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    if (slides.length > 0) {
        showSlide(0);
        startAutoSlide();
        let slideTimer;

        const stopOnHover = () => {
            stopAutoSlide();
            clearTimeout(slideTimer);
        };

        const resumeAfterHover = () => {
            clearTimeout(slideTimer);
            slideTimer = setTimeout(startAutoSlide, 1000);
        };

        slides.forEach(slide => {
            slide.addEventListener('mouseenter', stopOnHover);
            slide.addEventListener('mouseleave', resumeAfterHover);
        });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                stopAutoSlide();
                showSlide(i);
                startAutoSlide();
            });
        });
    }

    const amountButtons = document.querySelectorAll('.amount-btn');
    amountButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            amountButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const scrollElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    if (scrollElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        scrollElements.forEach(el => observer.observe(el));
    }

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Submitting...';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = 'Thank You!';
                btn.style.background = 'linear-gradient(135deg, #4caf50, #2e7d32)';

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                    this.reset();
                    if (this.querySelector('.amount-btn')) {
                        document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
                    }
                }, 3000);
            }, 1500);
        });
    });

    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in-up');
    }

    const testimonial = document.querySelector('.testimonial');
    if (testimonial) {
        testimonial.classList.add('fade-in-up');
    }
});

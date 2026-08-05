document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.pagination-dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        const allContents = document.querySelectorAll('.hero-content .slide-content');
        allContents.forEach((content, i) => {
            content.classList.toggle('active', i === index);
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



    const testimonial = document.querySelector('.testimonial');
    if (testimonial) {
        testimonial.classList.add('fade-in-up');
    }
});

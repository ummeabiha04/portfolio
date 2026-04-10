// ── Toggle Testimonial Read More / Read Less ──────────────────
window.toggleTestimonial = function (btn) {
    const card = btn.closest('.testimonial-card');
    if (!card) return;
    const shortText = card.querySelector('.short-text');
    const fullText = card.querySelector('.full-text');
    if (!shortText || !fullText) return;

    const isExpanded = fullText.style.display !== 'none';

    if (isExpanded) {
        fullText.style.display = 'none';
        shortText.style.display = '';
        btn.textContent = 'Read More';
    } else {
        fullText.style.display = '';
        shortText.style.display = 'none';
        btn.textContent = 'Read Less';
    }
};

// ── Helper: how many items visible based on screen width ──────
function getVisibleCount() {
    return window.innerWidth <= 768 ? 1 : 3;
}

window.initProjectHighlights = function () {
    let offset = 0;
    const total = 5;
    let autoPlayTimer = null;

    function reflow() {
        const visible = getVisibleCount();
        const maxOffset = total - visible;
        offset = Math.min(offset, Math.max(0, maxOffset));

        document.querySelectorAll('.ph-card').forEach(card => {
            const idx = parseInt(card.dataset.phIndex);
            card.style.display = (idx >= offset && idx < offset + visible) ? 'flex' : 'none';
        });

        const prev = document.getElementById('ph-prev');
        const next = document.getElementById('ph-next');
        if (prev) { prev.style.opacity = offset === 0 ? '0.4' : '1'; prev.disabled = offset === 0; }
        if (next) { next.style.opacity = offset === maxOffset ? '0.4' : '1'; next.disabled = offset === maxOffset; }

        document.querySelectorAll('.ph-dot').forEach((dot, i) => {
            dot.style.background = i === offset ? 'var(--color-accent)' : 'var(--color-border)';
        });
    }

    function stopAutoPlay() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
    }

    function startAutoPlay() {
        stopAutoPlay();
        if (window.innerWidth <= 768) {
            autoPlayTimer = setInterval(() => {
                const visible = getVisibleCount();
                const maxOffset = total - visible;
                offset = (offset >= maxOffset) ? 0 : offset + 1;
                reflow();
            }, 3500);
        }
    }

    window.shiftProjectHighlights = function (dir) {
        const visible = getVisibleCount();
        const maxOffset = total - visible;
        offset = Math.max(0, Math.min(maxOffset, offset + dir));
        reflow();
        if (window.innerWidth <= 768) startAutoPlay();
    };

    reflow();
    startAutoPlay();

    window.addEventListener('resize', () => {
        reflow();
        startAutoPlay();
    });
};

// ── News Carousel ──────────────────────────────────────────────
window.initNewsCarousel = function () {
    let offset = 0;
    const total = portfolioData.news.length;
    let autoPlayTimer = null;

    function reflow() {
        const visible = getVisibleCount();
        const maxOffset = Math.max(0, total - visible);
        offset = Math.min(offset, maxOffset);

        document.querySelectorAll('.news-card').forEach(card => {
            const idx = parseInt(card.dataset.newsIndex);
            const show = idx >= offset && idx < offset + visible;
            card.style.display = show ? 'flex' : 'none';
            card.style.opacity = '0';
            setTimeout(() => {
                if (card.style.display === 'flex') card.style.opacity = '1';
            }, 50);
        });

        const prev = document.getElementById('news-prev');
        const next = document.getElementById('news-next');
        if (prev) { prev.style.opacity = offset === 0 ? '0.2' : '1'; prev.disabled = offset === 0; }
        if (next) { next.style.opacity = offset === maxOffset ? '0.2' : '1'; next.disabled = offset === maxOffset; }

        document.querySelectorAll('.news-dot').forEach((dot, i) => {
            dot.style.background = i === offset ? 'var(--color-accent)' : 'var(--color-border)';
            dot.style.transform = i === offset ? 'scale(1.2)' : 'scale(1)';
        });
    }

    function stopAutoPlay() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
    }

    function startAutoPlay() {
        stopAutoPlay();
        // Auto-play only on mobile screens
        if (window.innerWidth <= 768) {
            autoPlayTimer = setInterval(() => {
                const visible = getVisibleCount();
                const maxOffset = Math.max(0, total - visible);
                // Loop back to start after reaching the last card
                offset = offset >= maxOffset ? 0 : offset + 1;
                reflow();
            }, 3500);
        }
    }

    window.shiftNews = function (dir) {
        const visible = getVisibleCount();
        const maxOffset = Math.max(0, total - visible);
        offset = Math.max(0, Math.min(maxOffset, offset + dir));
        reflow();
        // Reset auto-play timer after manual navigation on mobile
        if (window.innerWidth <= 768) startAutoPlay();
    };

    reflow();
    startAutoPlay();

    window.addEventListener('resize', () => {
        reflow();
        startAutoPlay(); // restart (or stop) based on new screen size
    });
};

// ── Testimonial Carousel (Mobile Only) ─────────────────────────
window.initTestimonialCarousel = function () {
    let offset = 0;
    const total = portfolioData.home.testimonials.length;

    window.shiftTestimonials = function (dir) {
        const isMobile = window.innerWidth <= 768;
        const visible = isMobile ? 2 : 3;
        const totalItems = portfolioData.home.testimonials.length;
        
        // Jump by 'visible' to swap the entire set
        offset = offset + (dir * visible);
        
        // Looping logic
        if (offset >= totalItems) offset = 0;
        if (offset < 0) {
            offset = Math.floor((totalItems - 1) / visible) * visible;
        }

        // Update Desktop Items if on desktop
        if (!isMobile) {
            const dItems = document.querySelectorAll('.testimonial-desktop-item');
            dItems.forEach(item => {
                const idx = parseInt(item.dataset.testimonialIndex);
                if (idx >= offset && idx < offset + visible) {
                    item.style.display = 'flex';
                    setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'translateY(0)'; }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(10px)';
                    item.style.display = 'none';
                }
            });
        }

        // Update Mobile Items if on mobile
        if (isMobile) {
            const mItems = document.querySelectorAll('.testimonial-mobile-item');
            mItems.forEach(item => {
                const idx = parseInt(item.dataset.testimonialIndex);
                if (idx >= offset && idx < offset + visible) {
                    item.style.display = 'flex';
                    setTimeout(() => item.style.opacity = '1', 10);
                } else {
                    item.style.opacity = '0';
                    item.style.display = 'none';
                }
            });
        }

        // Button Animation
        const btnId = isMobile ? 'testimonial-next' : 'testimonial-desktop-next';
        const nextBtn = document.getElementById(btnId);
        if (nextBtn) {
            const baseTransform = isMobile ? '' : 'translateY(-50%)';
            nextBtn.style.transform = `${baseTransform} scale(1.1)`;
            setTimeout(() => nextBtn.style.transform = `${baseTransform} scale(1)`, 200);
        }
    };
};


document.addEventListener('DOMContentLoaded', () => {

    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('#main-nav a');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');


    // Route Handler
    function handleRoute() {
        // Get hash or default to home
        let hash = window.location.hash.slice(1) || 'home';

        // Normalize hash (remove query params if any)
        hash = hash.split('?')[0];

        // Validate route exists
        const [baseView] = hash.split(':');
        if (!Views[baseView]) {
            hash = 'home';
        }

        // Update View
        renderView(hash);

        // Update Navigation State
        updateNavState(hash);
    }

    // Render View Function
    function renderView(viewName) {
        // Simple fade out/in effect
        mainContent.style.opacity = '0';

        setTimeout(() => {
            const [view, sectionId] = viewName.split(':');
            mainContent.innerHTML = Views[view]();

            if (sectionId) {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });

                    // Auto-expand all clusters if deep-linking to publications
                    if (sectionId === 'publications-section') {
                        document.querySelectorAll('.pub-cluster').forEach(cluster => {
                            cluster.open = true;
                        });
                    }

                    // Auto-play video if deep-linking to a project
                    if (view === 'projects') {
                        const video = section.querySelector('video');
                        if (video) {
                            // Professional Frictionless Unmute Strategy
                            // 1. Start muted to guarantee it starts immediately without splash
                            video.muted = true;
                            video.volume = 1.0;
                            video.play().then(() => {
                                console.log('Immediate muted playback started.');

                                // 2. Add an invisible, high-priority listener for ANY user activity
                                const unmuteOnActivity = () => {
                                    video.muted = false;
                                    console.log('Unmuted on user activity.');
                                    // Remove all listeners once unmuted
                                    activityEvents.forEach(event => {
                                        document.removeEventListener(event, unmuteOnActivity);
                                    });
                                };

                                const activityEvents = ['mousedown', 'scroll', 'keydown', 'touchstart', 'mousemove'];
                                activityEvents.forEach(event => {
                                    document.addEventListener(event, unmuteOnActivity, { once: true });
                                });
                            }).catch(err => {
                                console.warn('Playback blocked:', err);
                            });
                        }
                    }
                }
            } else {
                window.scrollTo(0, 0); // Reset scroll for other views
            }

            mainContent.style.opacity = '1';
            // Init any post-render interactivity
            if (typeof window.initProjectHighlights === 'function') {
                window.initProjectHighlights();
            }
            if (typeof window.initNewsCarousel === 'function') {
                window.initNewsCarousel();
            }
            if (typeof window.initTestimonialCarousel === 'function') {
                window.initTestimonialCarousel();
            }
        }, 200);
    }

    // Update Navigation UI
    function updateNavState(activeHash) {
        navLinks.forEach(link => {
            const page = link.getAttribute('data-page');
            const [baseHash] = activeHash.split(':');
            if (page === baseHash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Close mobile menu if open
        mainNav.classList.remove('open');
    }

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('open');
    });

    // Event Listeners
    window.addEventListener('hashchange', handleRoute);

    // Initial Load
    handleRoute();
});


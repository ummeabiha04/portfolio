window.initProjectHighlights = function () {
    let offset = 0;
    const total = 5;
    const visible = 3;
    const maxOffset = total - visible; // = 2

    window.shiftProjectHighlights = function (dir) {
        offset = Math.max(0, Math.min(maxOffset, offset + dir));

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
    };
};

// ── News Carousel ──────────────────────────────────────────────
window.initNewsCarousel = function () {
    let offset = 0;
    const items = portfolioData.news;
    const total = items.length;
    const visible = 3;
    const maxOffset = Math.max(0, total - visible);

    window.shiftNews = function (dir) {
        offset = Math.max(0, Math.min(maxOffset, offset + dir));

        document.querySelectorAll('.news-card').forEach(card => {
            const idx = parseInt(card.dataset.newsIndex);
            card.style.display = (idx >= offset && idx < offset + visible) ? 'flex' : 'none';
            // Simple fade effect
            card.style.opacity = '0';
            setTimeout(() => {
                if (card.style.display === 'flex') card.style.opacity = '1';
            }, 50);
        });

        // Update arrows
        const prev = document.getElementById('news-prev');
        const next = document.getElementById('news-next');
        if (prev) {
            prev.style.opacity = offset === 0 ? '0.2' : '1';
            prev.disabled = offset === 0;
        }
        if (next) {
            next.style.opacity = offset === maxOffset ? '0.2' : '1';
            next.disabled = offset === maxOffset;
        }

        // Update dots
        document.querySelectorAll('.news-dot').forEach((dot, i) => {
            const dotIdx = parseInt(dot.dataset.newsDot);
            dot.style.background = dotIdx === offset ? 'var(--color-accent)' : 'var(--color-border)';
            dot.style.transform = dotIdx === offset ? 'scale(1.2)' : 'scale(1)';
        });
    };

    // Initial state
    window.shiftNews(0);
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

// ── Testimonial Toggle ──────────────────────────────────────────
window.toggleTestimonial = function (btn) {
    const card = btn.closest('.testimonial-card');
    const p = card.querySelector('.testimonial-text');
    const short = p.querySelector('.short-text');
    const full = p.querySelector('.full-text');
    const isExpanded = full.style.display !== 'none';

    if (isExpanded) {
        full.style.display = 'none';
        short.style.display = 'inline';
        btn.innerText = 'Read More';
    } else {
        full.style.display = 'inline';
        short.style.display = 'none';
        btn.innerText = 'Read Less';
    }
};

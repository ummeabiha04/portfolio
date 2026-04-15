const Views = {
    home: () => `
        <section id="hero" class="container" style="min-height: calc(100vh - 80px); display: flex; flex-direction: column; justify-content: center; gap: 1rem; padding: 0.5rem 0;">
            <!-- Intro Section: Bio & Profile Pic -->
            <div class="hero-intro" style="display: flex; justify-content: center; align-items: center; gap: 3rem; flex: 1;">
                <div style="flex: 1; min-width: 0; display: flex; flex-direction: column;">
                    <h1 style="font-size: 4rem; margin-bottom: 0.5rem; color: var(--color-accent); line-height: 1.1;">Hello, I'm <br><span style="color: #000000;">${portfolioData.profile.name}.</span></h1>
                    <h2 style="font-size: 1.8rem; color: var(--color-text-muted); margin-bottom: 0.75rem; font-weight: 500;">${portfolioData.profile.title}</h2>
                    <p style="font-size: 1.22rem; margin-bottom: 1rem; color: var(--color-text-muted); line-height: 1.6; max-width: 600px; white-space: pre-line;">${portfolioData.profile.tagline}</p>
                    
                    <div style="font-size: 1rem; color: var(--color-text-muted); margin-bottom: 1.25rem; font-weight: 500; opacity: 0.9;">
                        IIT Jodhpur | AIIMS Jodhpur | Medical Technology
                    </div>

                    <div class="hero-btn-group" style="display: flex; gap: 1.25rem; align-items: center;">
                        <a href="#projects" class="btn-primary" style="padding: 0.75rem 1.5rem; font-size: 0.9rem;">View My Work</a>
                        <a href="#contact" class="btn-primary" style="padding: 0.75rem 1.5rem; font-size: 0.9rem; background: transparent; border: 1px solid var(--color-border); color: var(--color-text-main)!important;">Contact Me</a>
                    </div>
                </div>
                <div class="hero-image" style="flex: 0 0 400px; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; height: 420px;">
                    <img src="${portfolioData.about.profileImage}" alt="${portfolioData.profile.name}" 
                         style="width: 350px; height: 350px; object-fit: cover; border-radius: 50%; transform: scale(1.0); transform-origin: center center;
                                mask-image: radial-gradient(circle, black 70%, transparent 100%);
                                -webkit-mask-image: radial-gradient(circle, black 70%, transparent 100%);">
                    <a href="#philosophy" style="margin-top: 1.5rem; color: var(--color-accent); font-weight: 700; text-decoration: none; font-family: var(--font-serif); border-bottom: 2px solid var(--color-accent-glow); transition: all 0.3s ease; font-size: 1.2rem; letter-spacing: 0.5px;">"How I Think" &rarr;</a>
                </div>
            </div>
            
            <!-- Professional Impact Stats -->
            <div class="stats-strip" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem; padding: 1rem 0; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); margin-top: 2.5rem;">
                ${portfolioData.about.stats.map(stat => {
        const inner = `
                        <span style="font-size: 1.8rem; font-weight: 800; color: var(--color-accent);">${stat.value}</span>
                        <span style="font-size: 0.8rem; color: var(--color-accent); text-transform: uppercase; letter-spacing: 1px; line-height: 1.4; opacity: 0.9;">${stat.label}</span>
                    `;
        if (stat.link) {
            return `
                    <a href="${stat.link}" target="_blank" rel="noopener noreferrer"
                       style="display: flex; flex-direction: column; gap: 0.25rem; text-align: center; text-decoration: none; cursor: pointer; transition: opacity 0.2s ease;"
                       onmouseover="this.style.opacity='0.75'" onmouseout="this.style.opacity='1'">
                        ${inner}
                    </a>`;
        }
        return `
                    <div style="display: flex; flex-direction: column; gap: 0.25rem; text-align: center;">
                        ${inner}
                    </div>`;
    }).join('')}
            </div>
            
            <div style="text-align: center; border-bottom: 1px solid var(--color-border); padding: 1rem 0;">
                <h3 style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 1rem; font-weight: 400; text-transform: uppercase; letter-spacing: 2px;">
                    Supported by leading institutions in research and innovation
                </h3>
                <div class="logo-scroll-container" style="padding: 0;">
                    <div class="logo-scroll">
                        <div class="partner-item">
                            <img src="./assets/images/aiims_logo.png" alt="AIIMS Jodhpur" class="partner-logo">
                            <span class="partner-name">AIIMS Jodhpur</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/iit_logo.png" alt="IIT Jodhpur" class="partner-logo">
                            <span class="partner-name">IIT Jodhpur</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/tih_iitb_logo.png" alt="TIH Foundation IIT Bombay" class="partner-logo">
                            <span class="partner-name">TIH Foundation IIT Bombay</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/tisc_logo.png" alt="TISC IIT Jodhpur" class="partner-logo">
                            <span class="partner-name">TISC IIT Jodhpur</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/icmr_logo_v2.png" alt="ICMR" class="partner-logo icmr-logo">
                            <span class="partner-name">ICMR</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/iit_madras_gdc_logo.png" alt="IIT Madras GDC" class="partner-logo">
                            <span class="partner-name">IIT Madras GDC</span>
                        </div>
                        <!-- Duplicate for seamless loop -->
                        <div class="partner-item">
                            <img src="./assets/images/aiims_logo.png" alt="AIIMS Jodhpur" class="partner-logo">
                            <span class="partner-name">AIIMS Jodhpur</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/iit_logo.png" alt="IIT Jodhpur" class="partner-logo">
                            <span class="partner-name">IIT Jodhpur</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/tih_iitb_logo.png" alt="TIH Foundation IIT Bombay" class="partner-logo">
                            <span class="partner-name">TIH Foundation IIT Bombay</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/tisc_logo.png" alt="TISC IIT Jodhpur" class="partner-logo">
                            <span class="partner-name">TISC IIT Jodhpur</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/icmr_logo_v2.png" alt="ICMR" class="partner-logo icmr-logo">
                            <span class="partner-name">ICMR</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/iit_madras_gdc_logo.png" alt="IIT Madras GDC" class="partner-logo">
                            <span class="partner-name">IIT Madras GDC</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Product Operating Principles Section: Static Grid -->
            <div style="margin-top: 4rem; margin-bottom: 3rem; width: 100%;">
                <div style="margin-bottom: 3.5rem;">
                    <h3 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--color-text-main); margin-bottom: 0.5rem; font-weight: 700;">My Product Operating Principles</h3>
                    <div style="width: 50px; height: 4px; background: #170f5f; border-radius: 2px;"></div>
                </div>
                
                <div class="principles-grid">
                    ${portfolioData.operatingPrinciples.map(principle => `
                        <div class="operating-principle-card">
                            <span class="card-id">${principle.id}</span>
                            <p>${principle.text}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

            <!-- Project Highlights Section: Medtronic-inspired Interactive Grid -->
            <div id="project-highlights" style="margin-top: 4rem; width: 100%;">
                <h3 class="section-title">Project Highlights</h3>

                <!-- Desktop Carousel (Hidden on Mobile) -->
                <div class="desktop-only-carousel" style="position: relative; margin-top: 3rem;">
                    <!-- Navigation Arrows -->
                    <button id="ph-prev" onclick="shiftProjectHighlights(-1)" style="position: absolute; left: -3rem; top: 50%; transform: translateY(-50%); background: var(--color-bg-alt); border: 1px solid var(--color-border); border-radius: 50%; width: 2.5rem; height: 2.5rem; font-size: 1.1rem; cursor: pointer; color: var(--color-accent); transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; z-index: 2; opacity: 0.4;" disabled>&#8592;</button>
                    <button id="ph-next" onclick="shiftProjectHighlights(1)" style="position: absolute; right: -3rem; top: 50%; transform: translateY(-50%); background: var(--color-bg-alt); border: 1px solid var(--color-border); border-radius: 50%; width: 2.5rem; height: 2.5rem; font-size: 1.1rem; cursor: pointer; color: var(--color-accent); transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; z-index: 2;">&#8594;</button>

                    <div id="project-highlights-grid" class="product-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; overflow: hidden;">
                        ${portfolioData.projects.slice(0, 5).map((product, i) => `
                            <div class="product-card ph-card" data-ph-index="${i}" style="display: ${i < 3 ? 'flex' : 'none'}; flex-direction: column; cursor: pointer;" onclick="window.location.href='${product.link && product.link !== '#' ? product.link : '#projects'}'">
                                <div style="font-size: 0.75rem; font-weight: 800; color: var(--color-accent); letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 1.25rem;">
                                    ${product.category || 'INNOVATION'}
                                </div>
                                <div class="product-card-media" style="position: relative; aspect-ratio: 1/1; overflow: hidden; border-radius: 4px; margin-bottom: 1.5rem; background: var(--color-bg-alt);">
                                    ${product.video ? `
                                        <video muted loop playsinline autoplay poster="${product.heroImage}" style="width: 100%; height: 100%; object-fit: contain; background: #f5f5f5; border-radius: 2px; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);">
                                            <source src="${product.video}" type="video/mp4">
                                        </video>
                                    ` : `
                                        <img src="${product.heroImage}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);">
                                    `}
                                </div>
                                <h4 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-accent); line-height: 1.2; margin-bottom: 1.25rem; min-height: 3.8rem; letter-spacing: -0.2px;">
                                    ${product.title}
                                </h4>
                                <div style="margin-top: auto;">
                                    <a href="${product.link && product.link !== '#' ? product.link : '#projects'}" style="color: var(--color-secondary); font-weight: 700; font-size: 0.95rem; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s ease;">
                                        Exploring Project Details <span>&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Dot Indicators -->
                    <div style="display: flex; justify-content: center; gap: 0.5rem; margin-top: 2rem;">
                        <div class="ph-dot" id="ph-dot-0" style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-accent); transition: all 0.3s ease;"></div>
                        <div class="ph-dot" id="ph-dot-1" style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-border); transition: all 0.3s ease;"></div>
                        <div class="ph-dot" id="ph-dot-2" style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-border); transition: all 0.3s ease;"></div>
                    </div>
                </div>

                <!-- Mobile Static Stack (Hidden on Desktop) -->
                <div class="mobile-projects-static" style="display: none; flex-direction: column; gap: 2rem; margin-top: 2rem;">
                    ${portfolioData.projects.slice(0, 2).map((product) => `
                        <div class="product-card" style="display: flex; flex-direction: column; cursor: pointer;" onclick="window.location.href='${product.link && product.link !== '#' ? product.link : '#projects'}'">
                            <div style="font-size: 0.75rem; font-weight: 800; color: var(--color-accent); letter-spacing: 1.2px; text-transform: uppercase; margin-bottom: 1rem;">
                                ${product.category || 'INNOVATION'}
                            </div>
                            <div class="product-card-media" style="position: relative; aspect-ratio: 16/9; overflow: hidden; border-radius: 8px; margin-bottom: 1rem; background: var(--color-bg-alt);">
                                ${product.video ? `
                                    <video muted loop playsinline autoplay poster="${product.heroImage}" style="width: 100%; height: 100%; object-fit: contain; background: #f5f5f5;">
                                        <source src="${product.video}" type="video/mp4">
                                    </video>
                                ` : `
                                    <img src="${product.heroImage}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover;">
                                `}
                            </div>
                            <h4 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--color-accent); line-height: 1.3; margin-bottom: 1rem;">
                                ${product.title}
                            </h4>
                            <a href="${product.link && product.link !== '#' ? product.link : '#projects'}" style="color: var(--color-secondary); font-weight: 700; font-size: 0.9rem; text-decoration: none; display: flex; align-items: center; gap: 0.4rem;">
                                Exploring Project Details <span>&rarr;</span>
                            </a>
                        </div>
                    `).join('')}
                    
                    <!-- Navigation Arrow to Projects Page -->
                    <div style="text-align: center; margin-top: 1rem;">
                        <a href="#projects" style="display: inline-flex; align-items: center; justify-content: center; width: 3.5rem; height: 3.5rem; border-radius: 50%; background: var(--color-accent); color: white; text-decoration: none; font-size: 1.5rem; transition: transform 0.3s ease; box-shadow: 0 4px 15px rgba(23, 15, 95, 0.2);" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                            &rarr;
                        </a>
                        <p style="font-size: 0.8rem; font-weight: 700; color: var(--color-accent); margin-top: 0.75rem; text-transform: uppercase; letter-spacing: 1px;">View All Projects</p>
                    </div>
                </div>
            </div>




            <!-- Peer Reviewed Publications Section -->
            <div id="home-publications" style="margin-top: 4rem; width: 100%;">
                <h3 class="section-title">Peer Reviewed Publications</h3>
                <div class="home-pub-grid" style="margin-top: 3rem; display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
                    ${portfolioData.publications.slice(0, 2).map(pub => `
                        <div class="card" style="padding: 2.2rem; display: flex; flex-direction: column; gap: 1rem; position: relative; border-left: 4px solid var(--color-accent); background: var(--color-bg-alt); transition: all 0.3s ease;">
                            <div style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 600; letter-spacing: 0.5px;">
                                ${pub.year} | ${pub.journal}
                            </div>
                            <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: #000000; line-height: 1.4; margin: 0; font-weight: 700;">
                                ${pub.title}
                            </h4>
                            <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6; margin: 0; opacity: 0.85;">
                                ${pub.authors}
                            </p>
                            <div style="margin-top: auto; padding-top: 1.5rem;">
                                <a href="${pub.link}" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); text-decoration: none; font-weight: 700; font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem; transition: gap 0.2s ease;">
                                    Read Paper <span style="font-size: 1.1rem;">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div style="text-align: center; margin-top: 4.5rem;">
                    <a href="#recognition:publications-section" class="btn-primary" style="background: transparent; border: 1px solid #170f5f; color: #170f5f !important; padding: 0.8rem 2rem; font-size: 0.82rem; font-weight: 600; border-radius: 8px; transition: all 0.3s ease; box-shadow: none !important; text-transform: uppercase; letter-spacing: 1px;">Explore Full Research Repository</a>
                </div>
            </div>

            <!-- Impact Highlight Section -->
            <div class="hero-impact-section" style="margin-top: 5rem; display: flex; flex-direction: column; align-items: center;">
                <div style="max-width: 800px; width: 100%; display: flex; flex-direction: column; gap: 1.5rem; align-items: center;">
                    <img src="${portfolioData.home.impactHighlight.image}" alt="Impact Highlight" 
                        style="width: 100%; max-width: 420px; object-fit: contain; border-radius: 12px; box-shadow: 0 10px 30px -5px rgba(0,0,0,0.1);">
                    <p style="font-family: var(--font-serif); color: #000000; font-size: 1.25rem; line-height: 1.7; text-align: center; margin: 0; max-width: 700px;">
                        ${portfolioData.home.impactHighlight.text}
                    </p>
                </div>
            </div>

            <div id="testimonials" style="margin-top: 4rem; margin-bottom: 4rem; width: 100%;">
                <h3 class="section-title">Testimonials</h3>
                
                <!-- Desktop Testimonials (Carousel) -->
                <div class="testimonials-desktop-wrapper" style="position: relative; margin-top: 3rem;">
                    <!-- Desktop Navigation Arrows -->
                    <button id="testimonial-desktop-prev" onclick="shiftTestimonials(-1)" style="position: absolute; left: -4rem; top: 50%; transform: translateY(-50%); background: var(--color-bg-alt); border: 1px solid var(--color-border); border-radius: 50%; width: 3.5rem; height: 3.5rem; font-size: 1.2rem; cursor: pointer; color: var(--color-accent); transition: all 0.2s ease; display: none; align-items: center; justify-content: center; z-index: 2; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">&#8592;</button>
                    <button id="testimonial-desktop-next" onclick="shiftTestimonials(1)" style="position: absolute; right: -4rem; top: 50%; transform: translateY(-50%); background: var(--color-bg-alt); border: 1px solid var(--color-border); border-radius: 50%; width: 3.5rem; height: 3.5rem; font-size: 1.2rem; cursor: pointer; color: var(--color-accent); transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; z-index: 2; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">&#8594;</button>

                    <div class="testimonials-desktop" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; overflow: hidden;">
                        ${portfolioData.home.testimonials.map((testimonial, i) => {
        const isLong = testimonial.text.length > 300;
        const shortText = isLong ? testimonial.text.substring(0, 280) + '...' : testimonial.text;
        const fullText = testimonial.text;

        return `
                            <div class="card testimonial-card testimonial-desktop-item" data-testimonial-index="${i}" style="padding: 1.8rem; background: var(--color-bg-alt); border-radius: 12px; border: 1px solid var(--color-border); position: relative; display: ${i < 3 ? 'flex' : 'none'}; flex-direction: column; box-shadow: 0 2px 15px rgba(0,0,0,0.04); transition: all 0.4s ease; opacity: 1;">
                                <p class="testimonial-text" style="font-size: 1rem; color: #1a1a1a; line-height: 1.6; margin-bottom: 1.5rem; font-weight: 500; font-family: var(--font-serif); flex-grow: 1; white-space: pre-line;">
                                    <span class="short-text">${shortText}</span>
                                    ${isLong ? `<span class="full-text" style="display: none;">${fullText}</span>` : ''}
                                </p>
                                ${isLong ? `
                                    <button onclick="toggleTestimonial(this)" style="background: none; border: none; color: var(--color-accent); font-size: 0.85rem; font-weight: 700; cursor: pointer; padding: 0; margin-bottom: 1.5rem; text-align: left; width: fit-content; text-decoration: underline;">Read More</button>
                                ` : ''}
                                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.8rem;">
                                    ${testimonial.tags.map(tag => `
                                        <span style="background: #e9f7ef; color: #1e8449; padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 0.3rem;">
                                            ${tag === 'Amazing problem solver' || tag === 'Technically competent' ? '<span style="font-size: 0.9rem;">😊</span>' : ''} ${tag}
                                        </span>
                                    `).join('')}
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-border); padding-top: 1.5rem;">
                                    <div style="display: flex; align-items: center; gap: 0.9rem;">
                                        <div style="width: 45px; height: 45px; border-radius: 50%; background: var(--color-border); display: flex; align-items: center; justify-content: center; overflow: hidden; font-weight: 700; color: var(--color-text-muted); font-size: 1rem;">
                                            ${testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <h4 style="font-size: 1rem; color: var(--color-text-main); margin-bottom: 0.15rem; font-weight: 700;">
                                                ${testimonial.name} <span style="margin-left: 0.4rem;">${testimonial.location}</span>
                                            </h4>
                                            <p style="font-size: 0.8rem; color: var(--color-secondary); font-weight: 500; margin: 0;">
                                                ${testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div style="color: var(--color-text-muted); font-size: 0.8rem; font-weight: 600; opacity: 0.7;">
                                        ${testimonial.relationship}
                                    </div>
                                </div>
                            </div>
                        `}).join('')}
                    </div>
                </div>

                <!-- Mobile Testimonials (Stacked & Sliding) -->
                <div class="testimonials-mobile" style="display: none; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
                    <div id="testimonial-carousel-container" style="display: flex; flex-direction: column; gap: 1.5rem; transition: transform 0.4s ease;">
                        ${portfolioData.home.testimonials.map((testimonial, i) => {
            const isLong = testimonial.text.length > 300;
            const shortText = isLong ? testimonial.text.substring(0, 200) + '...' : testimonial.text;
            const fullText = testimonial.text;

            return `
                            <div class="card testimonial-card testimonial-mobile-item" data-testimonial-index="${i}" style="padding: 1.25rem; background: var(--color-bg-alt); border-radius: 8px; border: 1px solid var(--color-border); display: ${i < 2 ? 'flex' : 'none'}; flex-direction: column; box-shadow: 0 2px 10px rgba(0,0,0,0.03); opacity: 1; transition: opacity 0.3s ease;">
                                <p class="testimonial-text" style="font-size: 0.9rem; color: #000000; line-height: 1.5; margin-bottom: 1rem; font-weight: 500; font-family: var(--font-serif); flex-grow: 1; white-space: pre-line;">
                                    <span class="short-text">${shortText}</span>
                                    ${isLong ? `<span class="full-text" style="display: none;">${fullText}</span>` : ''}
                                </p>
                                ${isLong ? `
                                    <button onclick="toggleTestimonial(this)" style="background: none; border: none; color: var(--color-accent); font-size: 0.75rem; font-weight: 700; cursor: pointer; padding: 0; margin-bottom: 1rem; text-align: left; width: fit-content; text-decoration: underline;">Read More</button>
                                ` : ''}
                                <div style="display: flex; flex-wrap: wrap; gap: 0.3rem; margin-bottom: 1rem;">
                                    ${testimonial.tags.map(tag => `
                                        <span style="background: #e9f7ef; color: #1e8449; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-weight: 700; display: flex; align-items: center; gap: 0.2rem;">
                                            ${tag === 'Amazing problem solver' || tag === 'Technically competent' ? '<span style="font-size: 0.8rem;">😊</span>' : ''} ${tag}
                                        </span>
                                    `).join('')}
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-border); padding-top: 1rem;">
                                    <div style="display: flex; align-items: center; gap: 0.6rem;">
                                        <div style="width: 35px; height: 35px; border-radius: 50%; background: var(--color-border); display: flex; align-items: center; justify-content: center; overflow: hidden; font-weight: 700; color: var(--color-text-muted); font-size: 0.8rem;">
                                            ${testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <h4 style="font-size: 0.85rem; color: #000000; margin: 0; font-weight: 700;">
                                                ${testimonial.name} <span style="margin-left: 0.3rem;">${testimonial.location}</span>
                                            </h4>
                                            <p style="font-size: 0.7rem; color: var(--color-secondary); font-weight: 500; margin: 0;">
                                                ${testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `}).join('')}
                    </div>
                    
                    <!-- Mobile Navigation Arrow -->
                    <div style="display: flex; justify-content: center; margin-top: 1.5rem;">
                        <button id="testimonial-next" onclick="shiftTestimonials(1)" style="background: var(--color-bg-alt); border: 1px solid var(--color-border); border-radius: 50%; width: 2.5rem; height: 2.5rem; font-size: 1rem; cursor: pointer; color: var(--color-accent); display: flex; align-items: center; justify-content: center; transition: all 0.2s ease;">
                            &#8594;
                        </button>
                    </div>
                </div>
            </div>

            <!-- News & Updates Section -->
            <div id="home-news" style="margin-top: 4rem; margin-bottom: 5rem; width: 100%;">
                <h3 class="section-title">Latest Updates</h3>
                
                <div style="position: relative; margin-top: 3rem; padding: 0 1rem;">
                    <!-- News Navigation Arrows -->
                    <button id="news-prev" onclick="shiftNews(-1)" style="position: absolute; left: -3.5rem; top: 50%; transform: translateY(-50%); background: var(--color-bg-alt); border: 1px solid var(--color-border); border-radius: 50%; width: 3rem; height: 3rem; font-size: 1.2rem; cursor: pointer; color: var(--color-accent); transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; z-index: 2; opacity: 0.4;" disabled>&#8592;</button>
                    <button id="news-next" onclick="shiftNews(1)" style="position: absolute; right: -3.5rem; top: 50%; transform: translateY(-50%); background: var(--color-bg-alt); border: 1px solid var(--color-border); border-radius: 50%; width: 3rem; height: 3rem; font-size: 1.2rem; cursor: pointer; color: var(--color-accent); transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; z-index: 2;">&#8594;</button>

                    <!-- News Grid Wrapper (Carousel) -->
                    <div id="news-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; overflow: hidden;">
                        ${portfolioData.news.map((item, index) => `
                            <div class="card news-card" data-news-index="${index}" style="display: ${index < 3 ? 'flex' : 'none'}; flex-direction: column; height: 100%; min-height: 480px; justify-content: flex-start; padding: 2rem;">
                                ${item.image ? `<div style="margin: -2rem -2rem 1.5rem -2rem; overflow: hidden; border-radius: 8px 8px 0 0; aspect-ratio: 16/10; background: var(--color-bg-alt); border-bottom: 1px solid var(--color-border);">
                                    <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: contain; background: #fdfdfd; transition: transform 0.5s ease;">
                                </div>` : ''}
                                <div class="card-date" style="color: var(--color-secondary); font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 1rem;">${item.date}</div>
                                <h3 class="card-title" style="font-size: 1.2rem; line-height: 1.4; margin-bottom: 1.25rem; color: var(--color-text-main); font-family: var(--font-serif); font-weight: 700; height: 3.4em; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${item.title}</h3>
                                <p class="card-desc" style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.7; margin: 0; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">${item.summary}</p>
                            </div>
                        `).join('')}
                    </div>

                    <!-- News Dot Indicators -->
                    <div id="news-dots" style="margin-top: 3.5rem; display: flex; justify-content: center; gap: 0.8rem;">
                        ${portfolioData.news.slice(0, portfolioData.news.length - 2).map((_, i) => `
                            <div class="news-dot" data-news-dot="${i}" style="width: 10px; height: 10px; border-radius: 50%; background: ${i === 0 ? 'var(--color-accent)' : 'var(--color-border)'}; cursor: pointer; transition: all 0.3s ease;"></div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </section>
    `,

    about: () => `
        <section class="container fade-in">
            <!-- Desktop Hero Section (Hidden on Mobile) -->
            <div class="about-desktop-hero" style="margin-bottom: 4rem;">
                <h1 class="about-headline" style="font-size: 3rem; line-height: 1.2; font-weight: 800; color: #1a1a1a; margin-bottom: 3rem; max-width: 900px;">
                    ${portfolioData.about.headline.split(' ').map((word, i) => i > 4 && i < 11 ? `<span style="color: var(--color-accent);">${word}</span>` : word).join(' ')}
                </h1>

                <div class="about-bio-grid" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; position: relative;">
                    <div style="display: flex; flex-direction: column;">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                            <img src="${portfolioData.about.profileImage}" alt="${portfolioData.profile.name}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;">
                            <div>
                                <h3 style="margin: 0; font-size: 1.1rem; color: #1a1a1a;">${portfolioData.profile.name}</h3>
                                <p style="margin: 0; font-size: 0.9rem; color: var(--color-text-muted);">PhD in Medical Technology at IIT and AIIMS</p>
                            </div>
                        </div>
                        
                        <div style="color: #1a1a1a; font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem;">
                            ${portfolioData.about.bio.slice(0, 2).map(p => `<p style="margin-bottom: 1.2rem;">${p}</p>`).join('')}
                        </div>

                        <div style="display: flex; gap: 1rem;">
                            <a href="${portfolioData.cv.downloadLink}" class="cta-button" style="background: var(--color-accent); color: white; padding: 0.8rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem; transition: all 0.3s ease;">
                                <i class="fas fa-file-download"></i> Download CV
                            </a>
                            <a href="${portfolioData.profile.linkedin}" target="_blank" class="cta-button" style="background: transparent; border: 2px solid var(--color-border); color: var(--color-text-main); padding: 0.8rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 600; transition: all 0.3s ease;">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                        <div style="position: relative; width: 100%; height: 100%;">
                        <img src="${portfolioData.about.aboutImage}" alt="Umme Abiha at Conference" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.2); display: block;">
                    </div>
                </div>
            </div>

            <!-- Mobile-Specific Hero (Matches Screenshot Order: Headline -> Image -> Profile) -->
            <div class="about-mobile-hero" style="display: none; flex-direction: column; gap: 1.25rem; margin-bottom: 4rem;">
                <div style="margin-top: 0.5rem;">
                    <h1 style="font-size: 1.8rem; line-height: 1.3; font-weight: 800; color: #1a1a1a; margin-bottom: 0;">
                        ${portfolioData.about.headline.replace("into validated, AI-enabled medical systems that", `<span style="color: var(--color-accent);">into validated, AI-enabled medical systems that</span>`)}
                    </h1>
                </div>

                <div style="width: 90%; margin: 0 auto;">
                    <img src="${portfolioData.about.aboutImage}" alt="Community" style="width: 100%; height: auto; object-fit: contain; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.06); display: block;">
                </div>

                <div style="display: flex; align-items: center; gap: 1.25rem; margin-top: 0.75rem;">
                    <img src="${portfolioData.about.profileImage}" alt="${portfolioData.profile.name}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                    <div>
                        <h3 style="margin: 0; font-size: 1.5rem; font-weight: 700; color: #000; letter-spacing: -0.5px;">${portfolioData.profile.name}</h3>
                        <p style="margin: 0; font-size: 1.05rem; color: #666; font-weight: 400;">PhD Scholar at IIT Jodhpur</p>
                    </div>
                </div>

                <div style="font-size: 1.1rem; line-height: 1.6; color: #1a1a1a;">
                    <p id="about-mobile-bio-visible" style="margin-bottom: 0;">
                        ${portfolioData.about.bio[0].split('. ')[0]}. 
                        <a href="javascript:void(0)" id="mobile-read-more" onclick="document.getElementById('mobile-extra-bio').style.display='block'; this.style.display='none';" style="color: var(--color-accent); text-decoration: underline; font-weight: 600;">Read more</a>
                    </p>
                    <div id="mobile-extra-bio" style="display: none; margin-top: 0.5rem;">
                        <p style="margin-bottom: 1.2rem;">${portfolioData.about.bio[0].split('. ').slice(1).join('. ')}</p>
                        ${portfolioData.about.bio.slice(1).map(p => `<p style="margin-bottom: 1.2rem;">${p}</p>`).join('')}
                        <a href="javascript:void(0)" onclick="document.getElementById('mobile-extra-bio').style.display='none'; document.getElementById('mobile-read-more').style.display='inline';" style="color: var(--color-accent); text-decoration: underline; font-weight: 600; display: block; margin-top: -0.5rem; margin-bottom: 1rem;">Read less</a>
                    </div>
                </div>

                <div style="display: flex; gap: 1rem;">
                    <a href="${portfolioData.cv.downloadLink}" class="cta-button" style="flex: 1; background: var(--color-accent); color: white; padding: 0.9rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; font-size: 0.95rem; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; transition: all 0.3s ease;">
                        <i class="fas fa-file-download"></i> Download CV
                    </a>
                    <a href="${portfolioData.profile.linkedin}" target="_blank" class="cta-button" style="flex: 1; background: transparent; border: 2px solid var(--color-border); color: var(--color-text-main); padding: 0.9rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; font-size: 0.95rem; transition: all 0.3s ease;">
                        LinkedIn
                    </a>
                </div>
            </div>

            <div style="margin-top: 4rem; width: 100%;">
                <!-- Education + Work Experience side by side -->
                <div class="about-edu-exp-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 0; margin-bottom: 1.5rem; align-items: start;">

                    <!-- Work Experience Column -->
                    <div>
                        <h2 class="section-title" style="margin-bottom: 2rem;">Work Experience</h2>

                        ${portfolioData.experience.map(exp => `
                            <div style="border-left: 3px solid var(--color-accent); padding-left: 1.5rem; margin-bottom: 2rem;">
                                <div style="display: flex; align-items: baseline; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.4rem;">
                                    <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--color-accent); margin: 0;">${exp.title}</h3>
                                    <span style="font-size: 0.9rem; color: var(--color-text-muted);">| ${exp.year}</span>
                                </div>
                                <p style="margin: 0; font-size: 0.95rem; color: #1a1a1a;">${exp.organization}</p>
                                ${exp.description ? `<p style="margin: 0.3rem 0 0 0; font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.4;">${exp.description}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>

                    <!-- Education Column -->
                    <div>
                        <h2 class="section-title" style="margin-bottom: 2rem;">Education</h2>

                        ${portfolioData.education.map(edu => `
                            <div style="border-left: 3px solid var(--color-accent); padding-left: 1.5rem; margin-bottom: 2rem;">
                                <div style="display: flex; align-items: baseline; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.4rem;">
                                    <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--color-accent); margin: 0;">${edu.degree}</h3>
                                    <span style="font-size: 0.9rem; color: var(--color-text-muted);">| ${edu.year}</span>
                                </div>
                                <p style="margin: 0; font-size: 0.95rem; color: #1a1a1a;">${edu.institution}</p>
                                ${edu.details ? `<p style="margin: 0 0 0.3rem 0; font-size: 0.95rem; color: #1a1a1a;"><strong>${edu.details}</strong></p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Certifications Section -->
                <h2 class="section-title" style="margin-bottom: 2rem;">Certifications</h2>
                <div class="cert-grid" style="margin-bottom: 1.5rem;">
                    ${portfolioData.certifications.slice(0, 6).map(cert => {
        let cleanIssuer = cert.issuer.split('|')[0].trim();
        if (cleanIssuer.toLowerCase().includes('coursera') && cert.title.toLowerCase().includes('miro')) {
            cleanIssuer = 'Coursera';
        } else if (cleanIssuer.toLowerCase().includes('coursera')) {
            cleanIssuer = cleanIssuer.replace(/via Coursera/i, '').replace(/Coursera/i, '').trim() || 'Coursera';
        }
        return `
                    <div class="cert-card">
                        <div class="cert-logo-box">
                            <img src="${cert.logo}" alt="${cleanIssuer}">
                        </div>
                        <div class="cert-info">
                            <h3 class="cert-title">${cert.title}</h3>
                            <div class="cert-issuer">${cleanIssuer}</div>
                        </div>
                    </div>
                `;
    }).join('')}
                </div>
                ${portfolioData.certifications.length > 6 ? `
                <details class="cert-more" style="margin-bottom: 5rem;">
                    <summary style="cursor: pointer; font-size: 0.95rem; color: var(--color-accent); font-weight: 600; padding: 0.75rem 0; user-select: none; list-style: none; display: flex; align-items: center; gap: 0.5rem;">
                        <span class="cert-more-arrow" style="display:inline-block; transition: transform 0.2s;">&#9660;</span>
                        Show ${portfolioData.certifications.length - 6} more certifications
                    </summary>
                    <div class="cert-grid" style="margin-top: 1.5rem;">
                        ${portfolioData.certifications.slice(6).map(cert => {
        let cleanIssuer = cert.issuer.split('|')[0].trim();
        if (cleanIssuer.toLowerCase().includes('coursera') && cert.title.toLowerCase().includes('miro')) {
            cleanIssuer = 'Coursera';
        } else if (cleanIssuer.toLowerCase().includes('coursera')) {
            cleanIssuer = cleanIssuer.replace(/via Coursera/i, '').replace(/Coursera/i, '').trim() || 'Coursera';
        }
        return `
                        <div class="cert-card">
                            <div class="cert-logo-box">
                                <img src="${cert.logo}" alt="${cleanIssuer}">
                            </div>
                            <div class="cert-info">
                                <h3 class="cert-title">${cert.title}</h3>
                                <div class="cert-issuer">${cleanIssuer}</div>
                            </div>
                        </div>
                    `;
    }).join('')}
                    </div>
                </details>
                ` : '<div style="margin-bottom: 5rem;"></div>'}

                <!-- Testimonials replicated from Home Page -->
                <div id="testimonials" style="margin-top: 2rem; margin-bottom: 5rem; width: 100%;">
                    <h2 class="section-title" style="margin-bottom: 2rem;">Testimonials</h2>
                    
                    <!-- Desktop Testimonials (Carousel) -->
                    <div class="testimonials-desktop-wrapper" style="position: relative; margin-top: 3rem;">
                        <!-- Desktop Navigation Arrows -->
                        <button id="testimonial-desktop-prev" onclick="shiftTestimonials(-1)" style="position: absolute; left: -4rem; top: 50%; transform: translateY(-50%); background: var(--color-bg-alt); border: 1px solid var(--color-border); border-radius: 50%; width: 3.5rem; height: 3.5rem; font-size: 1.2rem; cursor: pointer; color: var(--color-accent); transition: all 0.2s ease; display: none; align-items: center; justify-content: center; z-index: 2; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">&#8592;</button>
                        <button id="testimonial-desktop-next" onclick="shiftTestimonials(1)" style="position: absolute; right: -4rem; top: 50%; transform: translateY(-50%); background: var(--color-bg-alt); border: 1px solid var(--color-border); border-radius: 50%; width: 3.5rem; height: 3.5rem; font-size: 1.2rem; cursor: pointer; color: var(--color-accent); transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; z-index: 2; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">&#8594;</button>

                        <div class="testimonials-desktop" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; overflow: hidden;">
                            ${portfolioData.home.testimonials.map((testimonial, i) => {
        const isLong = testimonial.text.length > 300;
        const shortText = isLong ? testimonial.text.substring(0, 280) + '...' : testimonial.text;
        const fullText = testimonial.text;

        return `
                                <div class="card testimonial-card testimonial-desktop-item" data-testimonial-index="${i}" style="padding: 1.8rem; background: var(--color-bg-alt); border-radius: 12px; border: 1px solid var(--color-border); position: relative; display: ${i < 3 ? 'flex' : 'none'}; flex-direction: column; box-shadow: 0 2px 15px rgba(0,0,0,0.04); transition: all 0.4s ease; opacity: 1;">
                                    <p class="testimonial-text" style="font-size: 1rem; color: #1a1a1a; line-height: 1.6; margin-bottom: 1.5rem; font-weight: 500; font-family: var(--font-serif); flex-grow: 1; white-space: pre-line;">
                                        <span class="short-text">${shortText}</span>
                                        ${isLong ? `<span class="full-text" style="display: none;">${fullText}</span>` : ''}
                                    </p>
                                    ${isLong ? `
                                        <button onclick="toggleTestimonial(this)" style="background: none; border: none; color: var(--color-accent); font-size: 0.85rem; font-weight: 700; cursor: pointer; padding: 0; margin-bottom: 1.5rem; text-align: left; width: fit-content; text-decoration: underline;">Read More</button>
                                    ` : ''}
                                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.8rem;">
                                        ${testimonial.tags.map(tag => `
                                            <span style="background: #e9f7ef; color: #1e8449; padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 0.3rem;">
                                                ${tag === 'Amazing problem solver' || tag === 'Technically competent' ? '<span style="font-size: 0.9rem;">😊</span>' : ''} ${tag}
                                            </span>
                                        `).join('')}
                                    </div>
                                    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-border); padding-top: 1.5rem;">
                                        <div style="display: flex; align-items: center; gap: 0.9rem;">
                                            <div style="width: 45px; height: 45px; border-radius: 50%; background: var(--color-border); display: flex; align-items: center; justify-content: center; overflow: hidden; font-weight: 700; color: var(--color-text-muted); font-size: 1rem;">
                                                ${testimonial.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <h4 style="font-size: 1rem; color: var(--color-text-main); margin-bottom: 0.15rem; font-weight: 700;">
                                                    ${testimonial.name} <span style="margin-left: 0.4rem;">${testimonial.location}</span>
                                                </h4>
                                                <p style="font-size: 0.8rem; color: var(--color-secondary); font-weight: 500; margin: 0;">
                                                    ${testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                        <div style="color: var(--color-text-muted); font-size: 0.8rem; font-weight: 600; opacity: 0.7;">
                                            ${testimonial.relationship}
                                        </div>
                                    </div>
                                </div>
                            `}).join('')}
                        </div>
                    </div>

                    <!-- Mobile Testimonials (Stacked & Sliding) -->
                    <div class="testimonials-mobile" style="display: none; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
                        <div id="testimonial-carousel-container" style="display: flex; flex-direction: column; gap: 1.5rem;">
                            ${portfolioData.home.testimonials.map((testimonial, i) => {
            const isLong = testimonial.text.length > 300;
            const shortText = isLong ? testimonial.text.substring(0, 200) + '...' : testimonial.text;
            const fullText = testimonial.text;

            return `
                                <div class="card testimonial-card testimonial-mobile-item" data-testimonial-index="${i}" style="padding: 1.25rem; background: var(--color-bg-alt); border-radius: 8px; border: 1px solid var(--color-border); display: ${i < 2 ? 'flex' : 'none'}; flex-direction: column; box-shadow: 0 2px 10px rgba(0,0,0,0.03); opacity: 1; transition: opacity 0.3s ease;">
                                    <p class="testimonial-text" style="font-size: 0.9rem; color: #1a1a1a; line-height: 1.5; margin-bottom: 1rem; font-weight: 500; font-family: var(--font-serif); flex-grow: 1; white-space: pre-line;">
                                        <span class="short-text">${shortText}</span>
                                        ${isLong ? `<span class="full-text" style="display: none;">${fullText}</span>` : ''}
                                    </p>
                                    ${isLong ? `
                                        <button onclick="toggleTestimonial(this)" style="background: none; border: none; color: var(--color-accent); font-size: 0.75rem; font-weight: 700; cursor: pointer; padding: 0; margin-bottom: 1rem; text-align: left; width: fit-content; text-decoration: underline;">Read More</button>
                                    ` : ''}
                                    <div style="display: flex; flex-wrap: wrap; gap: 0.3rem; margin-bottom: 1rem;">
                                        ${testimonial.tags.map(tag => `
                                            <span style="background: #e9f7ef; color: #1e8449; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-weight: 700; display: flex; align-items: center; gap: 0.2rem;">
                                                ${tag === 'Amazing problem solver' || tag === 'Technically competent' ? '<span style="font-size: 0.8rem;">😊</span>' : ''} ${tag}
                                            </span>
                                        `).join('')}
                                    </div>
                                    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-border); padding-top: 1rem;">
                                        <div style="display: flex; align-items: center; gap: 0.6rem;">
                                            <div style="width: 35px; height: 35px; border-radius: 50%; background: var(--color-border); display: flex; align-items: center; justify-content: center; overflow: hidden; font-weight: 700; color: var(--color-text-muted); font-size: 0.8rem;">
                                                ${testimonial.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <h4 style="font-size: 0.85rem; color: #1a1a1a; margin: 0; font-weight: 700;">
                                                    ${testimonial.name} <span style="margin-left: 0.3rem;">${testimonial.location}</span>
                                                </h4>
                                                <p style="font-size: 0.7rem; color: var(--color-secondary); font-weight: 500; margin: 0;">
                                                    ${testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `}).join('')}
                        </div>
                        
                        <!-- Mobile Navigation Arrow -->
                        <div style="display: flex; justify-content: center; margin-top: 1.5rem;">
                            <button id="testimonial-next" onclick="shiftTestimonials(1)" style="background: var(--color-bg-alt); border: 1px solid var(--color-border); border-radius: 50%; width: 2.5rem; height: 2.5rem; font-size: 1rem; cursor: pointer; color: var(--color-accent); display: flex; align-items: center; justify-content: center; transition: all 0.2s ease;">
                                &#8594;
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    `,

    publications: () => {
        const categories = [
            { id: "Cluster I", title: "I. Diagnostic Signal Modeling & Clinical Performance Engineering" },
            { id: "Cluster II", title: "II. Disease Mechanisms & Clinical Systems Intelligence" },
            { id: "Cluster III", title: "III. Computational & Systems Architecture Frameworks" }
        ];

        return `
            <section class="container fade-in">
                <h2 class="section-title">Peer-reviewed Publications</h2>
                
                <!-- Preamble -->
                <div style="margin-bottom: 4rem; padding: 2rem; background: var(--color-bg-alt); border-radius: 12px; border-left: 5px solid var(--color-accent);">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--color-text-main);">Research Foundation Behind My Clinical System Architecture</h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text-muted); margin-bottom: 1rem;">
                        My research examines biological systems across scales, from molecular pathways and disease mechanisms to optical signal behavior and computational modeling.
                    </p>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text-muted); margin-bottom: 1rem;">
                        Spanning immunology, nanomedicine, bioinformatics, and multi-site diagnostic validation, my work examines how biological variability can be quantified, modeled, and translated into clinically reliable technologies.
                    </p>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text-muted); margin: 0;">
                        This interdisciplinary foundation forms the scientific backbone of my approach to AI-enabled medical product architecture, where molecular insight, signal integrity, validation rigor, and regulatory foresight must align.
                    </p>
                </div>

                <!-- Clusters -->
                ${categories.map(cat => `
                    <details class="pub-cluster">
                        <summary class="pub-cluster-summary">
                            <span class="pub-cluster-title">${cat.title}</span>
                            <span class="pub-cluster-arrow">&#9660;</span>
                        </summary>
                        <div class="pub-cluster-body">
                            ${portfolioData.publications
                .filter(pub => pub.category === cat.id)
                .map((pub, index) => `
                                    <div class="card">
                                        <div class="card-date">${index + 1}. ${pub.year} | ${pub.journal}</div>
                                        <h3 class="card-title">${pub.title}</h3>
                                        <p class="card-desc">${pub.authors}</p>
                                        ${pub.link && pub.link !== '#' ? `<a href="${pub.link}" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); font-size: 0.9rem; margin-top: 0.5rem; display: inline-block;">Read Paper &rarr;</a>` : ''}
                                    </div>
                                `).join('')}
                        </div>
                    </details>
                `).join('')}

                <!-- Concluding Statement -->
                <div style="margin-top: 6rem; text-align: center; padding: 3rem; border-top: 1px solid var(--color-border);">
                    <p style="font-size: 1.3rem; line-height: 1.6; color: var(--color-text-main);">
                        <strong>Across these domains, my work is unified by a single question:</strong><br>
                        <strong style="font-style: italic; color: var(--color-accent); display: block; margin-top: 1rem;">
                            "How can complex biological systems be modeled, validated, and translated into scalable, clinically reliable technological architectures?"
                        </strong>
                    </p>
                </div>
            </section>
        `;
    },

    projects: () => `
        <section class="container fade-in" style="margin-top: -2rem;">
            <h2 class="section-title" style="margin-bottom: 2rem;">Projects</h2>

            <!-- Project Impact Stats -->
            <div style="margin-top: 0.5rem; margin-bottom: 0.5rem;">
                <h3 style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 2px;">Product Impact</h3>
            </div>
            <div class="stats-strip" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem; padding: 1.5rem 0; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); margin: 0 0 3rem 0;">
                ${portfolioData.projectStats.map(stat => `
                    <div style="display: flex; flex-direction: column; gap: 0.25rem; text-align: center;">
                        <span style="font-size: 1.8rem; font-weight: 800; color: var(--color-accent);">${stat.value}</span>
                        <span style="font-size: 0.8rem; color: var(--color-accent); text-transform: uppercase; letter-spacing: 1px; line-height: 1.4; opacity: 0.9;">${stat.label}</span>
                    </div>
                `).join('')}
            </div>
            <div class="card-grid">
                ${portfolioData.projects.map(proj => `
                    <div class="card" id="${proj.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '')}" style="display: flex; flex-direction: column; gap: 0.75rem; ${proj.link && proj.link !== '#' ? 'cursor: pointer;' : ''}" ${proj.link && proj.link !== '#' ? `onclick="window.location.href='${proj.link}'"` : ''}>
                        <div style="display: flex; flex-direction: column; gap: 0.2rem;">
                            <h3 class="card-title" style="color: #1a1a1a; margin-bottom: 0;">${proj.title}</h3>
                        </div>

                        <div class="project-card-media" style="position: relative; aspect-ratio: 16/9; overflow: hidden; border-radius: 8px; background: var(--color-bg-alt); box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                            ${proj.video ? `
                                <video autoplay muted loop playsinline controls poster="${proj.heroImage}" style="width: 100%; height: 100%; object-fit: contain; background: #f5f5f5;">
                                    <source src="${proj.video}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            ` : (proj.secondaryHeroImage ? `
                                <div style="display: grid; grid-template-columns: 1fr 1fr; height: 100%; width: 100%;">
                                    <img src="${proj.heroImage}" style="width: 100%; height: 100%; object-fit: cover; border-right: 2px solid #fff;">
                                    <img src="${proj.secondaryHeroImage}" style="width: 100%; height: 100%; object-fit: cover;">
                                </div>
                            ` : `
                                <img src="${proj.heroImage}" alt="${proj.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
                            `)}
                        </div>

                        <p class="card-desc" style="margin-top: 0;">${proj.description}</p>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: auto;">
                            ${proj.tech.map(t => `<span style="font-size: 0.75rem; color: var(--color-secondary); border: 1px solid var(--color-border); padding: 2px 8px; border-radius: 4px; font-weight: 500;">${t}</span>`).join('')}
                        </div>
                        ${proj.link && proj.link !== '#' ? `
                        <div style="margin-top: 0.5rem; text-align: left;">
                            <a href="${proj.link}" class="btn-primary" style="display: inline-block; padding: 0.6rem 1.2rem; background: var(--color-accent); color: #fff; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 0.85rem; transition: background 0.3s ease;">${proj.buttonText || 'View Full Case Study'} &rarr;</a>
                        </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>

            <!-- Acknowledgment Section -->
            <div style="margin-top: 5rem; text-align: center;">
                <h3 style="font-size: 1.25rem; color: var(--color-text-muted); margin-bottom: 2rem; font-weight: 400;">
                    Supported by leading institutions in research and innovation
                </h3>
                <div class="logo-scroll-container">
                    <div class="logo-scroll">
                        <div class="partner-item">
                            <img src="./assets/images/aiims_logo.png" alt="AIIMS Jodhpur" class="partner-logo">
                            <span class="partner-name">AIIMS Jodhpur</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/iit_logo.png" alt="IIT Jodhpur" class="partner-logo">
                            <span class="partner-name">IIT Jodhpur</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/tih_iitb_logo.png" alt="TIH Foundation IIT Bombay" class="partner-logo">
                            <span class="partner-name">TIH Foundation IIT Bombay</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/tisc_logo.png" alt="TISC IIT Jodhpur" class="partner-logo">
                            <span class="partner-name">TISC IIT Jodhpur</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/icmr_logo_v2.png" alt="ICMR" class="partner-logo icmr-logo">
                            <span class="partner-name">ICMR</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/iit_madras_gdc_logo.png" alt="IIT Madras GDC" class="partner-logo">
                            <span class="partner-name">IIT Madras GDC</span>
                        </div>
                        <!-- Duplicate for seamless loop -->
                        <div class="partner-item">
                            <img src="./assets/images/aiims_logo.png" alt="AIIMS Jodhpur" class="partner-logo">
                            <span class="partner-name">AIIMS Jodhpur</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/iit_logo.png" alt="IIT Jodhpur" class="partner-logo">
                            <span class="partner-name">IIT Jodhpur</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/tih_iitb_logo.png" alt="TIH Foundation IIT Bombay" class="partner-logo">
                            <span class="partner-name">TIH Foundation IIT Bombay</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/tisc_logo.png" alt="TISC IIT Jodhpur" class="partner-logo">
                            <span class="partner-name">TISC IIT Jodhpur</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/icmr_logo_v2.png" alt="ICMR" class="partner-logo icmr-logo">
                            <span class="partner-name">ICMR</span>
                        </div>
                        <div class="partner-item">
                            <img src="./assets/images/iit_madras_gdc_logo.png" alt="IIT Madras GDC" class="partner-logo">
                            <span class="partner-name">IIT Madras GDC</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,

    certifications: () => `
        <section class="container fade-in">
            <h2 class="section-title">Certifications</h2>
            <div class="cert-grid" style="margin-bottom: 1.5rem;">
                ${portfolioData.certifications.slice(0, 6).map(cert => {
        let cleanIssuer = cert.issuer.split('|')[0].trim();
        if (cleanIssuer.toLowerCase().includes('coursera') && cert.title.toLowerCase().includes('miro')) {
            cleanIssuer = 'Coursera';
        } else if (cleanIssuer.toLowerCase().includes('coursera')) {
            cleanIssuer = cleanIssuer.replace(/via Coursera/i, '').replace(/Coursera/i, '').trim() || 'Coursera';
        }
        return `
                    <div class="cert-card">
                        <div class="cert-logo-box">
                            <img src="${cert.logo}" alt="${cleanIssuer}">
                        </div>
                        <div class="cert-info">
                            <h3 class="cert-title">${cert.title}</h3>
                            <div class="cert-issuer">${cleanIssuer}</div>
                        </div>
                    </div>
                `}).join('')}
            </div>
            ${portfolioData.certifications.length > 6 ? `
            <details class="cert-more">
                <summary style="cursor: pointer; font-size: 0.95rem; color: var(--color-accent); font-weight: 600; padding: 0.75rem 0; user-select: none; list-style: none; display: flex; align-items: center; gap: 0.5rem;">
                    <span style="display:inline-block; transition: transform 0.2s;">&#9660;</span>
                    Show ${portfolioData.certifications.length - 6} more certifications
                </summary>
                <div class="cert-grid" style="margin-top: 1.5rem;">
                    ${portfolioData.certifications.slice(6).map(cert => {
            let cleanIssuer = cert.issuer.split('|')[0].trim();
            if (cleanIssuer.toLowerCase().includes('coursera') && cert.title.toLowerCase().includes('miro')) {
                cleanIssuer = 'Coursera';
            } else if (cleanIssuer.toLowerCase().includes('coursera')) {
                cleanIssuer = cleanIssuer.replace(/via Coursera/i, '').replace(/Coursera/i, '').trim() || 'Coursera';
            }
            return `
                        <div class="cert-card">
                            <div class="cert-logo-box">
                                <img src="${cert.logo}" alt="${cleanIssuer}">
                            </div>
                            <div class="cert-info">
                                <h3 class="cert-title">${cert.title}</h3>
                                <div class="cert-issuer">${cleanIssuer}</div>
                            </div>
                        </div>
                    `}).join('')}
                </div>
            </details>
            ` : ''}
        </section>
    `,

    recognition: () => `
        <section class="container fade-in">
            <!-- Patents and Design Registrations -->
            <h2 class="section-title" style="margin-bottom: 2rem;">Patents & Design Registrations</h2>
            <div class="ip-list" style="margin-bottom: 4rem;">
                ${portfolioData.ip.map(item => `
                    <div class="ip-item">
                        <div class="ip-item-meta">
                            <span class="ip-year">${item.year}</span>
                            <span class="ip-status">${item.status}</span>
                        </div>
                        <div class="ip-item-content">
                            <h3 class="ip-title" style="color: #1a1a1a;">${item.title}</h3>
                            <p class="ip-id">${item.id}</p>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Peer-reviewed Publications -->
            <h2 id="publications-section" class="section-title" style="margin-bottom: 2rem; margin-top: 4rem; scroll-margin-top: 120px;">Peer-reviewed Publications</h2>

            <div style="margin-bottom: 4rem; padding: 2rem; background: var(--color-bg-alt); border-radius: 12px; border-left: 5px solid var(--color-accent);">
                <h4 style="font-size: 1.3rem; margin-bottom: 1.25rem; color: #1a1a1a;">Research Foundation Behind My Clinical System Architecture</h4>
                <p style="font-size: 1rem; line-height: 1.7; color: var(--color-text-muted); margin-bottom: 0.75rem;">
                    My research examines biological systems across scales, from molecular pathways and disease mechanisms to optical signal behavior and computational modeling.
                </p>
                <p style="font-size: 1rem; line-height: 1.7; color: var(--color-text-muted); margin-bottom: 0.75rem;">
                    Spanning immunology, nanomedicine, bioinformatics, and multi-site diagnostic validation, my work examines how biological variability can be quantified, modeled, and translated into clinically reliable technologies.
                </p>
                <p style="font-size: 1rem; line-height: 1.7; color: var(--color-text-muted); margin: 0;">
                    This interdisciplinary foundation forms the scientific backbone of my approach to AI-enabled medical product architecture, where molecular insight, signal integrity, validation rigor, and regulatory foresight must align.
                </p>
            </div>

            ${[
            { id: "Cluster I", title: "I. Diagnostic Signal Modeling &amp; Clinical Performance Engineering" },
            { id: "Cluster II", title: "II. Disease Mechanisms &amp; Clinical Systems Intelligence" },
            { id: "Cluster III", title: "III. Computational &amp; Systems Architecture Frameworks" }
        ].map(cat => `
                <details class="pub-cluster">
                    <summary class="pub-cluster-summary">
                        <span class="pub-cluster-title">${cat.title}</span>
                        <span class="pub-cluster-arrow">&#9660;</span>
                    </summary>
                    <div class="pub-cluster-body">
                        ${portfolioData.publications
                .filter(pub => pub.category === cat.id)
                .map((pub, index) => `
                                <div class="card">
                                    <div class="card-date">${index + 1}. ${pub.year} | ${pub.journal}</div>
                                    <h3 class="card-title" style="color: #1a1a1a;">${pub.title}</h3>
                                    <p class="card-desc">${pub.authors}</p>
                                    ${pub.link && pub.link !== '#' ? `<a href="${pub.link}" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); font-size: 0.9rem; margin-top: 0.5rem; display: inline-block;">Read Paper &rarr;</a>` : ''}
                                </div>
                            `).join('')}
                    </div>
                </details>
            `).join('')}

            <!-- Concluding Statement -->
            <div style="margin-top: 6rem; text-align: center; padding: 3rem; border-top: 1px solid var(--color-border);">
                <p style="font-size: 1.3rem; line-height: 1.6; color: var(--color-text-main);">
                    <strong style="color: #1a1a1a;">Across these domains, my work is unified by a single question:</strong><br>
                    <strong style="font-style: italic; color: var(--color-accent); display: block; margin-top: 1rem;">
                        "How can complex biological systems be modeled, validated, and translated into scalable, clinically reliable technological architectures?"
                    </strong>
                </p>
            </div>

            <!-- Awards Section -->
            <h2 class="section-title" style="margin-bottom: 2rem; margin-top: 4rem;">Awards</h2>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 4rem;">
                ${portfolioData.awards.map(award => `
                    <div class="card" style="border-left: 3px solid var(--color-accent); padding: 1rem; display: flex; flex-direction: column; justify-content: center; min-height: 80px;">
                        <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 0.5rem; margin-bottom: 0.25rem;">
                            <h3 style="font-size: 0.95rem; font-weight: 700; color: #1a1a1a; margin: 0; line-height: 1.3;">${award.title}</h3>
                            <span style="font-size: 0.8rem; color: var(--color-text-muted); white-space: nowrap; font-weight: 600;">${award.year}</span>
                        </div>
                        <p style="margin: 0; font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.4;">${award.organization}</p>
                    </div>
                `).join('')}
            </div>

            <!-- Conferences Section -->
            <h2 class="section-title" style="margin-bottom: 2rem; margin-top: 4rem;">Conferences</h2>
            <div class="card-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                ${portfolioData.conferences.map(conf => conf.isSummary ? `
                    <div class="card" style="grid-column: 1 / -1; border-left: 4px solid var(--color-accent); background: var(--color-bg-alt); padding: 1.5rem;">
                        <h3 class="card-title" style="font-size: 1.2rem; margin-bottom: 0.75rem;">${conf.title}</h3>
                        <p class="card-desc" style="line-height: 1.6; font-size: 0.95rem;">${conf.summary}</p>
                    </div>
                ` : `
                    <div class="card" style="border-left: 3px solid var(--color-secondary); padding: 1.25rem; display: flex; flex-direction: column; height: 100%;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.4rem;">
                            <h4 style="margin: 0; font-size: 1.05rem; color: #1a1a1a; font-weight: 700; line-height: 1.3;">${conf.title}</h4>
                            <span style="font-size: 0.8rem; color: var(--color-text-muted); white-space: nowrap; margin-left: 0.75rem; font-weight: 600;">${conf.date}</span>
                        </div>
                        <div style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 0.5rem;">
                            <strong>${conf.event}</strong> | ${conf.location}
                        </div>
                        <div style="font-size: 0.85rem; font-weight: 600; margin-bottom: 0.75rem; color: var(--color-secondary); text-transform: uppercase; letter-spacing: 0.5px;">
                            ${conf.role}
                        </div>
                        <p class="card-desc" style="font-size: 0.88rem; line-height: 1.45; margin: 0; color: var(--color-text-main);">${conf.summary}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `,

    // Redirect stubs for old routes
    awards: () => { window.location.hash = 'recognition'; return '<div></div>'; },
    conferences: () => { window.location.hash = 'recognition'; return '<div></div>'; },


    news: () => { window.location.hash = ''; return '<div></div>'; },

    contact: () => `
        <section class="container fade-in" id="contact-section">
            <h2 class="section-title">Contact</h2>
            <div class="contact-grid">
                <!-- Left Card: Ready to Create -->
                <div class="contact-card" style="background: #f8fafc;">
                    <div>
                        <h2 style="font-family: var(--font-sans); font-weight: 500; font-size: 3.5rem; line-height: 1.1; letter-spacing: -0.02em; color: #1b1e22; margin: 0;">
                            Ready to translate<br>
                            <span style="color: var(--color-accent); font-weight: 700;">bedside signals</span><br>
                            into scalable MedTech?<br>
                            <span style="font-weight: 700;">Let's connect!</span>
                        </h2>
                    </div>
                </div>

                <!-- Right Card: Contact Details -->
                <div class="contact-card">
                    <div>
                        <div class="contact-label">Email</div>
                        <div class="contact-value">
                            <a href="mailto:${portfolioData.profile.email}">${portfolioData.profile.email}</a>
                        </div>
                        
                        <div style="margin: 1.5rem 0 2rem 0;">
                            <a href="${portfolioData.cv.downloadLink}" class="btn-primary" style="display: inline-block; background: #0000FF; color: white; padding: 0.8rem 2rem; border-radius: 4px; font-weight: 700; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 0 #000080; transition: transform 0.1s; text-align: center; width: 100%;" onmousedown="this.style.transform='translateY(2px)'; this.style.boxShadow='0 2px 0 #000080';" onmouseup="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 0 #000080';" onmouseleave="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 0 #000080';">
                                Download CV
                            </a>
                        </div>
                        
                        <div style="height: 1px; background: #e2e8f0; margin-bottom: 2rem;"></div>

                        <div class="contact-social-icons" style="justify-content: center;">
                            <a href="mailto:${portfolioData.profile.email}" class="contact-social-icon" title="Email">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </a>
                            <a href="${portfolioData.profile.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-social-icon" title="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="${portfolioData.profile.researchgate}" target="_blank" rel="noopener noreferrer" class="contact-social-icon" title="ResearchGate">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.5,4.5a1.5,1.5,0,0,1,1.5,1.5,1.5,1.5,0,0,1-1.5,1.5,1.5,1.5,0,0,1-1.5-1.5A1.5,1.5,0,0,1,19.5,4.5ZM13.88,10.12l-1.61,4.28a.18.18,0,0,0,.19.25h1.22l.66-2H16l.66,2h1.22a.18.18,0,0,0,.19-.25l-1.61-4.28a.42.42,0,0,0-.39-.27H14.27A.42.42,0,0,0,13.88,10.12ZM24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12ZM10.51,7.22l-.18-.08A1.88,1.88,0,0,0,9,7.06a3.25,3.25,0,0,0-2.47,1.15A4.47,4.47,0,0,0,5.63,11a5.61,5.61,0,0,0,.3,2,3.31,3.31,0,0,0,1.21,1.53,2.77,2.77,0,0,0,1.59.45,3.35,3.35,0,0,0,2.1-.73V11.45H8.76l-.16.12a.18.18,0,0,0-.07.21l.48,1.26a.18.18,0,0,0,.21.11h1.31v.61a1.2,1.2,0,0,1-.53.9,1.6,1.6,0,0,1-.83.2,1.21,1.21,0,0,1-1-.48,2.79,2.79,0,0,1-.41-1.84,2.94,2.94,0,0,1,.45-1.88,1.21,1.21,0,0,1,1-.45,1.12,1.12,0,0,1,.69.2l.14.12a.18.18,0,0,0,.26,0l.85-.85a.18.18,0,0,0,0-.26,3.17,3.17,0,0,0-2-1.07l-.14,0V7.22h0Z"></path>
                                </svg>
                            </a>
                            <a href="${portfolioData.profile.scholar}" target="_blank" rel="noopener noreferrer" class="contact-social-icon" title="Google Scholar">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,

    philosophy: () => `
        <section class="container fade-in" style="text-align: center;">
            <h2 id="philosophy-heading" class="section-title" style="display: block; text-align: center; margin-left: auto; margin-right: auto;">${portfolioData.philosophy.title}</h2>
            <style>
                #philosophy-heading::after {
                    left: 50% !important;
                    transform: translateX(-50%) !important;
                }
            </style>
            <div style="max-width: 900px; margin: 0 auto;">
                ${portfolioData.philosophy.image ? `
                    <div style="margin-bottom: 3.5rem; border-radius: 12px; overflow: hidden; box-shadow: 0 15px 40px -10px rgba(0,0,0,0.15);">
                        <img src="${portfolioData.philosophy.image}" alt="Clinical Immersion" style="width: 100%; max-height: 500px; object-fit: cover; border-radius: 12px;">
                        <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 1rem; font-style: italic; text-align: center;">"My thinking about healthcare innovation was shaped during early clinical immersion in a NICU."</p>
                    </div>
                ` : ''}
                ${portfolioData.philosophy.content.map(p => `
                    <p style="font-size: 1.15rem; line-height: 1.8; color: #1a1a1a; margin-bottom: 2rem; text-align: justify;">
                        ${p}
                    </p>
                `).join('')}
                
                <div style="margin-top: 4rem; text-align: center;">
                    <a href="#home" class="btn-primary" style="display: inline-block;">Back to Home</a>
                </div>
            </div>
        </section>
    `
};

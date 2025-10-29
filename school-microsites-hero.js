// Hero Component - Reusable hero section for SchoolBlocks
// Based on the provided design with blue theme and mobile responsiveness

class HeroComponent {
    constructor(config = {}) {
        this.config = {
            title: config.title || "Powerful School Microsites",
            subtitle: config.subtitle || "Targeted Content for Every Need",
            description: config.description || "Create focused, purpose-built microsites for specific programs, events, or departments. Perfect for athletics, academics, special events, and targeted communications that need their own dedicated space.",
            ctaText: config.ctaText || "Schedule a Demo",
            ctaUrl: config.ctaUrl || "#",
            heroImage: config.heroImage || "Photos/Images/HomePage/horovectorart.png",
            showPartners: config.showPartners !== false,
            backgroundColor: config.backgroundColor || "#E8F4FD", // Light blue background
            ...config
        };
    }

    // Generate the CSS styles for the hero component
    generateStyles() {
        return `
        <style>
            .hero-component {
                background: linear-gradient(135deg, #E8F4FD 0%, #F0F8FF 50%, #E8F4FD 100%);
                min-height: calc(100vh - 86px); /* Account for navbar height (86px) */
                height: calc(100vh - 86px);
                display: flex;
                align-items: center;
                position: relative;
                overflow: hidden;
                padding: 0;
                margin-top: 86px; /* Push content below navbar */
            }

            .hero-component::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: 
                    radial-gradient(circle at 20% 80%, rgba(74, 144, 226, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(78, 205, 196, 0.1) 0%, transparent 50%);
                z-index: 1;
            }

            .hero-container {
                width: 100%;
                max-width: none;
                margin: 0;
                padding: 0 20px;
                position: relative;
                z-index: 10;
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: space-between;
            }

            .hero-main {
                flex: 1;
                display: grid;
                grid-template-columns: 1fr 1fr;
                align-items: center;
                gap: 40px;
                min-height: 0;
                padding: 40px 0 20px 0;
            }

            .hero-content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                text-align: left;
                padding-right: 10px;
            }

            .hero-visual {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                position: relative;
                padding-left: 10px;
            }

            .hero-title {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                font-size: clamp(3.25rem, 5.85vw, 5.2rem);
                font-weight: 700;
                color: #2C3E50;
                margin-bottom: 0.5rem;
                line-height: 1.1;
                letter-spacing: -0.02em;
            }

            .hero-subtitle {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                font-size: clamp(2.34rem, 3.9vw, 3.25rem);
                font-weight: 600;
                color: #4A90E2;
                margin-bottom: 1.5rem;
                line-height: 1.2;
            }

            .hero-description {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                font-size: clamp(1.3rem, 1.56vw, 1.56rem);
                line-height: 1.6;
                color: #5A6C7D;
                margin-bottom: 2rem;
                max-width: 95%;
            }

            .hero-cta {
                margin-bottom: 0;
            }

            .hero-cta-btn {
                background: #4A90E2;
                color: white;
                padding: 18px 40px;
                border-radius: 50px;
                text-decoration: none;
                font-weight: 600;
                font-size: 1.1rem;
                display: inline-block;
                transition: all 0.3s ease;
                border: none;
                cursor: pointer;
                letter-spacing: 0.5px;
                text-transform: uppercase;
                box-shadow: 0 4px 20px rgba(74, 144, 226, 0.3);
            }

            .hero-cta-btn:hover {
                background: #357ABD;
                transform: translateY(-2px);
                box-shadow: 0 8px 30px rgba(74, 144, 226, 0.4);
                text-decoration: none;
                color: white;
            }

            .hero-image-container {
                width: 100%;
                height: 500px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
            }

            .hero-image {
                width: 100%;
                height: 100%;
                object-fit: contain;
                border-radius: 20px;
                filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1));
            }

            .hero-partners {
                padding: 20px 0 30px 0;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 30px;
                flex-wrap: wrap;
                flex-shrink: 0;
                margin-top: auto;
            }

            .partner-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 12px;
                padding: 14px 24px;
                background: rgba(255, 255, 255, 0.9);
                border: 1px solid rgba(74, 144, 226, 0.2);
                border-radius: 50px;
                text-decoration: none;
                color: #5A6C7D;
                font-size: 0.9rem;
                font-weight: 500;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(10px);
                min-width: 220px;
                height: 52px;
                text-align: center;
                position: relative;
                overflow: hidden;
            }

            .partner-btn::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
                transition: left 0.5s ease;
                z-index: 1;
            }

            .partner-btn:hover::before {
                left: 100%;
            }

            .partner-btn > * {
                position: relative;
                z-index: 2;
            }

            .partner-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                text-decoration: none;
                color: #5A6C7D;
                border-color: rgba(74, 144, 226, 0.3);
                background: rgba(255, 255, 255, 0.95);
            }

            .partner-logo {
                width: 24px;
                height: 24px;
                object-fit: contain;
                flex-shrink: 0;
            }

            .google-logo {
                width: 24px;
                height: 24px;
                background: url('Photos/Images/HomePage/google.png') no-repeat center;
                background-size: contain;
            }

            .microsoft-logo {
                width: 24px;
                height: 24px;
                background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjguNSIgaGVpZ2h0PSI4LjUiIGZpbGw9IiNGMjUwMjIiLz4KPHJlY3QgeD0iMTIuNSIgeT0iMyIgd2lkdGg9IjguNSIgaGVpZ2h0PSI4LjUiIGZpbGw9IiM3RkJBMDAiLz4KPHJlY3QgeD0iMyIgeT0iMTIuNSIgd2lkdGg9IjguNSIgaGVpZ2h0PSI4LjUiIGZpbGw9IiMwMEE0RUYiLz4KPHJlY3QgeD0iMTIuNSIgeT0iMTIuNSIgd2lkdGg9IjguNSIgaGVpZ2h0PSI4LjUiIGZpbGw9IiNGRkI5MDAiLz4KPC9zdmc+Cg==') no-repeat center;
                background-size: contain;
            }

            /* Specific fix for medium screens where partner buttons overlap */
            @media (max-width: 1200px) and (min-width: 769px) {
                .hero-component {
                    min-height: calc(100vh - 86px);
                    height: auto;
                    margin-top: 86px;
                }

                .hero-container {
                    padding: 0 30px;
                    justify-content: space-between;
                }

                .hero-main {
                    gap: 40px;
                    padding: 30px 0 10px 0;
                    flex: 1;
                }

                .hero-content {
                    padding-right: 15px;
                }

                .hero-visual {
                    padding-left: 15px;
                }

                .hero-description {
                    font-size: clamp(0.95rem, 1.1vw, 1.1rem);
                    margin-bottom: 1.5rem;
                    max-width: 100%;
                }

                .hero-partners {
                    padding: 15px 0 25px 0;
                    margin-top: auto;
                    flex-shrink: 0;
                }

                .partner-btn {
                    min-width: 200px;
                    height: 48px;
                    font-size: 0.85rem;
                }
            }

            /* Mobile Responsive Design */
            @media (max-width: 1024px) {
                .hero-container {
                    padding: 0 30px;
                }

                .hero-main {
                    gap: 40px;
                    padding: 30px 0 15px 0;
                }

                .hero-content {
                    padding-right: 15px;
                }

                .hero-visual {
                    padding-left: 15px;
                }

                .hero-title {
                    font-size: clamp(2.2rem, 4vw, 3.5rem);
                }

                .hero-subtitle {
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                }

                .hero-description {
                    font-size: clamp(0.95rem, 1.1vw, 1.1rem);
                    margin-bottom: 1.8rem;
                }

                .partner-btn {
                    min-width: 200px;
                    height: 50px;
                }
            }

            @media (max-width: 768px) {
                .hero-component {
                    min-height: calc(100vh - 86px);
                    height: auto;
                    padding: 15px 0;
                    margin-top: 86px;
                }

                .hero-container {
                    padding: 0 20px;
                    justify-content: flex-start;
                }

                .hero-main {
                    grid-template-columns: 1fr;
                    gap: 30px;
                    text-align: center;
                    padding: 20px 0 15px 0;
                }

                .hero-content {
                    order: 2;
                    text-align: center;
                    align-items: center;
                    padding-right: 0;
                }

                .hero-visual {
                    order: 1;
                    justify-content: center;
                    padding-left: 0;
                }

                .hero-description {
                    max-width: 100%;
                    margin-bottom: 1.5rem;
                }

                .hero-image-container {
                    height: 300px;
                }

                .hero-partners {
                    padding: 15px 0 20px 0;
                    flex-direction: column;
                    gap: 15px;
                    margin-top: 0;
                }

                .partner-btn {
                    width: 100%;
                    max-width: 280px;
                    min-width: 280px;
                    justify-content: center;
                    height: 52px;
                }
            }

            @media (max-width: 480px) {
                .hero-container {
                    padding: 0 15px;
                }

                .hero-main {
                    gap: 30px;
                }

                .hero-title {
                    font-size: clamp(1.8rem, 6vw, 2.5rem);
                    margin-bottom: 0.8rem;
                }

                .hero-subtitle {
                    font-size: clamp(1.4rem, 5vw, 1.8rem);
                    margin-bottom: 1.2rem;
                }

                .hero-description {
                    font-size: clamp(0.95rem, 3.5vw, 1.1rem);
                    margin-bottom: 2rem;
                }

                .hero-cta-btn {
                    padding: 16px 32px;
                    font-size: 1rem;
                }

                .hero-image-container {
                    height: 280px;
                }

                .partner-btn {
                    padding: 12px 20px;
                    font-size: 0.85rem;
                    min-width: 260px;
                    max-width: 260px;
                    height: 48px;
                }
            }

            /* Extra small screens */
            @media (max-width: 360px) {
                .hero-title {
                    font-size: clamp(1.6rem, 7vw, 2.2rem);
                }

                .hero-subtitle {
                    font-size: clamp(1.3rem, 5.5vw, 1.6rem);
                }

                .hero-image-container {
                    height: 250px;
                }
            }
        </style>
        `;
    }

    // Generate the HTML structure for the hero component
    generateHTML() {
        const partnersHTML = this.config.showPartners ? `
            <div class="hero-partners">
                <a href="google-integration.html" class="partner-btn">
                    <div class="google-logo"></div>
                    <span>Google for Education Partner</span>
                </a>
                <a href="microsoft-integration.html" class="partner-btn">
                    <div class="microsoft-logo"></div>
                    <span>Microsoft Partner</span>
                </a>
            </div>
        ` : '';

        return `
        <section class="hero-component">
            <div class="hero-container">
                <div class="hero-main">
                    <div class="hero-content">
                        <h1 class="hero-title">${this.config.title}</h1>
                        ${this.config.subtitle ? `<h2 class="hero-subtitle">${this.config.subtitle}</h2>` : ''}
                        <p class="hero-description">${this.config.description}</p>
                        <div class="hero-cta">
                            <a href="${this.config.ctaUrl}" class="hero-cta-btn">${this.config.ctaText}</a>
                        </div>
                    </div>
                    
                    <div class="hero-visual">
                        <div class="hero-image-container">
                            <img src="${this.config.heroImage}" alt="SchoolBlocks Platform Illustration" class="hero-image" />
                        </div>
                    </div>
                </div>
                
                ${partnersHTML}
            </div>
        </section>
        `;
    }

    // Render the complete hero component
    render() {
        return this.generateStyles() + this.generateHTML();
    }

    // Initialize the hero component in a container
    init(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.render();
        } else {
            console.error(`Hero Component: Container with id "${containerId}" not found`);
        }
    }

    // Static method to create and render hero component
    static create(config = {}, containerId = null) {
        const hero = new HeroComponent(config);
        if (containerId) {
            hero.init(containerId);
        }
        return hero;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HeroComponent;
}

// Make available globally
window.HeroComponent = HeroComponent;

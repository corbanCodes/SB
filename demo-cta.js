// Demo CTA Component - Reusable demo section with 3D phone effect
// Maintains identical styling and functionality from the original design

class DemoCTAComponent {
    constructor(config = {}) {
        this.config = {
            title: config.title || "Want to know more about our product?",
            subtitle: config.subtitle || "Schedule a demo today!",
            buttonText: config.buttonText || "Request a Demo",
            buttonUrl: config.buttonUrl || "get-started.html",
            phoneImage: config.phoneImage || "Photos/Images/HomePage/editmephone.webp",
            phoneAlt: config.phoneAlt || "SchoolBlocks Mobile App Demo",
            showAnimation: config.showAnimation !== false,
            ...config
        };
    }

    // Generate the CSS styles for the demo CTA component
    generateStyles() {
        return `
        <style>
            /* Demo CTA Section */
            .demo-cta {
                padding: 120px 0;
                background: #ffffff;
                position: relative;
                overflow: hidden;
            }
            
            .demo-cta::before {
                display: none;
            }
            
            .demo-container {
                max-width: 1000px;
                margin: 0 auto;
                padding: 0 40px;
                position: relative;
                z-index: 2;
            }
            
            .demo-content {
                background: rgba(255, 255, 255, 0.25);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 32px;
                padding: 60px;
                box-shadow: 
                    0 25px 80px rgba(0, 0, 0, 0.1),
                    0 8px 32px rgba(102, 126, 234, 0.15),
                    inset 0 1px 0 rgba(255, 255, 255, 0.4);
                text-align: center;
                position: relative;
                overflow: hidden;
                opacity: 0;
                transform: translateY(50px);
                transition: all 0.8s ease-out;
            }
            
            .demo-content.fade-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            .demo-content::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
                pointer-events: none;
                z-index: 1;
            }
            
            .demo-text {
                position: relative;
                z-index: 2;
            }
            
            .demo-text h2 {
                font-size: clamp(2.5rem, 4vw, 3.5rem);
                font-weight: 600;
                color: #1a202c;
                margin-bottom: 20px;
                line-height: 1.2;
                letter-spacing: -0.02em;
            }
            
            .demo-text p {
                font-size: 1.3rem;
                color: #4a5568;
                margin-bottom: 40px;
                line-height: 1.5;
            }
            
            .demo-button {
                display: inline-block;
                background: rgba(255, 255, 255, 0.2);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                color: #1a202c;
                border: 2px solid rgba(66, 153, 225, 0.3);
                padding: 18px 40px;
                border-radius: 50px;
                text-decoration: none;
                font-weight: 600;
                font-size: 1.1rem;
                transition: all 0.3s ease;
                box-shadow: 0 4px 20px rgba(66, 153, 225, 0.2);
                margin-bottom: 50px;
            }
            
            .demo-button:hover {
                transform: translateY(-3px);
                background: rgba(66, 153, 225, 0.15);
                border-color: rgba(66, 153, 225, 0.5);
                box-shadow: 0 8px 30px rgba(66, 153, 225, 0.3);
                color: #1a202c;
                text-decoration: none;
            }
            
            .demo-visual {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 40px;
            }
            
            .phone-container {
                perspective: 1200px;
                transform-style: preserve-3d;
                cursor: pointer;
            }
            
            .demo-phone {
                width: 600px; /* 400px * 1.5 = 600px */
                height: auto;
                transition: transform 0.15s ease-out;
                transform-origin: center center;
                filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.2));
                will-change: transform;
            }
            
            /* Mobile Responsive for Demo CTA */
            @media (max-width: 1160px) {
                .demo-cta {
                    padding: 80px 0;
                }
                
                .demo-content {
                    padding: 40px;
                }
                
                .demo-phone {
                    width: 525px; /* 350px * 1.5 = 525px */
                }
            }
            
            @media (max-width: 768px) {
                .demo-cta {
                    padding: 60px 0;
                }
                
                .demo-container {
                    padding: 0 20px;
                }
                
                .demo-content {
                    padding: 30px 20px;
                }
                
                .demo-text p {
                    font-size: 1.1rem;
                    margin-bottom: 30px;
                }
                
                .demo-button {
                    padding: 16px 32px;
                    font-size: 1rem;
                    margin-bottom: 30px;
                }
                
                .demo-phone {
                    width: 420px; /* 280px * 1.5 = 420px */
                }
            }
        </style>
        `;
    }

    // Generate the HTML structure for the demo CTA component
    generateHTML() {
        const uniqueId = 'demo-' + Math.random().toString(36).substr(2, 9);
        const phoneContainerId = `phoneContainer-${uniqueId}`;
        const demoPhoneId = `demoPhone-${uniqueId}`;

        return `
        <section class="demo-cta">
            <div class="demo-container">
                <div class="demo-content">
                    <div class="demo-text">
                        <h2>${this.config.title}</h2>
                        <p>${this.config.subtitle}</p>
                        <a href="${this.config.buttonUrl}" class="demo-button">${this.config.buttonText}</a>
                        <div class="demo-visual">
                            <div class="phone-container" id="${phoneContainerId}">
                                <img src="${this.config.phoneImage}" alt="${this.config.phoneAlt}" class="demo-phone" id="${demoPhoneId}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    // Initialize the 3D phone effect
    init3DEffect(phoneContainerId, demoPhoneId) {
        const phoneContainer = document.getElementById(phoneContainerId);
        const demoPhone = document.getElementById(demoPhoneId);
        
        if (!phoneContainer || !demoPhone) return;
        
        phoneContainer.addEventListener('mousemove', function(e) {
            const rect = phoneContainer.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Calculate mouse position relative to center
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            
            // Calculate rotation (max 20 degrees)
            const rotateY = (mouseX / rect.width) * 20; // Max 20 degrees
            const rotateX = -(mouseY / rect.height) * 15; // Max 15 degrees
            
            // Apply transform
            demoPhone.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.02)`;
        });
        
        phoneContainer.addEventListener('mouseleave', function() {
            // Reset to neutral position
            demoPhone.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
        });
        
        phoneContainer.addEventListener('mouseenter', function() {
            // Slight scale on enter
            demoPhone.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1.02)';
        });
    }

    // Initialize fade-in animation
    initFadeInAnimation() {
        if (!this.config.showAnimation) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe demo content for fade-in animation
        setTimeout(() => {
            const demoContent = document.querySelector('.demo-content');
            if (demoContent) {
                observer.observe(demoContent);
            }
        }, 100);
    }

    // Render the complete demo CTA component
    render() {
        return this.generateStyles() + this.generateHTML();
    }

    // Initialize the demo CTA component in a container
    init(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.render();
            
            // Wait for DOM to be ready, then initialize effects
            setTimeout(() => {
                const phoneContainerId = container.querySelector('.phone-container').id;
                const demoPhoneId = container.querySelector('.demo-phone').id;
                
                this.init3DEffect(phoneContainerId, demoPhoneId);
                this.initFadeInAnimation();
            }, 100);
        } else {
            console.error(`Demo CTA Component: Container with id "${containerId}" not found`);
        }
    }

    // Static method to create and render demo CTA component
    static create(config = {}, containerId = null) {
        const demoCTA = new DemoCTAComponent(config);
        if (containerId) {
            demoCTA.init(containerId);
        }
        return demoCTA;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DemoCTAComponent;
}

// Make available globally
window.DemoCTAComponent = DemoCTAComponent;

// SchoolBlocks Footer Loader - Comprehensive Professional Footer
// This script dynamically loads a comprehensive footer with all site links

function loadFooter() {
    const footerHTML = `
        <footer class="site-footer">
            <div class="footer-container">
                <div class="footer-top">
                    <div class="footer-brand">
                        <img src="Photos/Logo/SchoolBlocks Logo-2024_long-logo.png" alt="SchoolBlocks" class="footer-logo">
                        <p class="footer-tagline">Empowering Educators. Amplifying Impact.</p>
                        <p class="footer-description">Comprehensive digital solutions designed specifically for K-12 education, trusted by over 3,000 schools nationwide.</p>
                        
                        <div class="footer-contact">
                            <div class="contact-item">
                                <i class="bi bi-geo-alt"></i>
                                <a href="https://maps.google.com/?q=417+Main+Street+Suite+U,+Carbondale,+CO+81623" target="_blank" class="contact-link">
                                    417 Main Street Suite U<br>Carbondale, CO 81623
                                </a>
                            </div>
                            <div class="contact-item">
                                <i class="bi bi-telephone"></i>
                                <a href="tel:+18003136438" class="contact-link">
                                    (800) 313-6438
                                </a>
                            </div>
                            <div class="contact-item">
                                <i class="bi bi-envelope"></i>
                                <a href="mailto:info@schoolblocks.com" class="contact-link">
                                    info@schoolblocks.com
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="footer-links">
                        <div class="footer-column">
                            <h4 class="footer-heading">What We Do</h4>
                            <ul class="footer-nav">
                                <li><a href="school-websites.html" class="footer-link">School & District Websites</a></li>
                                <li><a href="apps.html" class="footer-link">Mobile School Apps</a></li>
                                <li><a href="google-integration.html" class="footer-link">Google Integration Tools</a></li>
                                <li><a href="school-microsites.html" class="footer-link">Microsites</a></li>
                                <li><a href="document-engagement.html" class="footer-link">Document Engagement <span class="new-badge">NEW</span></a></li>
                                <li><a href="welcome-chat.html" class="footer-link">AI-powered Answers <span class="new-badge">NEW</span></a></li>
                                <li><a href="spirit-store.html" class="footer-link">Spirit Gear Store <span class="new-badge">NEW</span></a></li>
                                <li><a href="schoolfeed-social.html" class="footer-link">SchoolFeed Social <span class="new-badge">NEW</span></a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h4 class="footer-heading">Who We Serve</h4>
                            <ul class="footer-nav">
                                <li><a href="administrators.html" class="footer-link">Administration</a></li>
                                <li><a href="faculty.html" class="footer-link">Faculty</a></li>
                                <li><a href="parents.html" class="footer-link">Parents</a></li>
                                <li><a href="students.html" class="footer-link">Students</a></li>
                            </ul>
                            
                            <h4 class="footer-heading">Learning Resources</h4>
                            <ul class="footer-nav">
                                <li><a href="blog.html" class="footer-link">Blog</a></li>
                                <li><a href="case-studies.html" class="footer-link">Case Studies</a></li>
                                <li><a href="client-stories.html" class="footer-link">Client Stories</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h4 class="footer-heading">Company</h4>
                            <ul class="footer-nav">
                                <li><a href="who-we-are.html" class="footer-link">Who We Are</a></li>
                                <li><a href="what-we-do.html" class="footer-link">What We Do</a></li>
                                <li><a href="who-we-serve.html" class="footer-link">Who We Serve</a></li>
                                <li><a href="learning-resources.html" class="footer-link">Learning Resources</a></li>
                                <li><a href="webmaster-success.html" class="footer-link">Webmaster Success</a></li>
                                <li><a href="ada-compliance.html" class="footer-link">ADA Compliance</a></li>
                                <li><a href="hosting.html" class="footer-link">Hosting</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h4 class="footer-heading">Get Started</h4>
                            <ul class="footer-nav">
                                <li><a href="get-started.html" class="footer-link">Request Demo</a></li>
                                <li><a href="demo-cta-usage-example.html" class="footer-link">Schedule Consultation</a></li>
                                <li><a href="#" class="footer-link">Pricing</a></li>
                                <li><a href="#" class="footer-link">Support Center</a></li>
                                <li><a href="#" class="footer-link">Training Resources</a></li>
                            </ul>
                            
                            <h4 class="footer-heading">Legal</h4>
                            <ul class="footer-nav">
                                <li><a href="#" class="footer-link">Privacy Policy</a></li>
                                <li><a href="#" class="footer-link">Terms of Service</a></li>
                                <li><a href="#" class="footer-link">Cookie Policy</a></li>
                                <li><a href="#" class="footer-link">Accessibility</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <div class="footer-social">
                        <a href="#" class="social-link facebook" aria-label="Follow us on Facebook">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" class="social-link twitter" aria-label="Follow us on Twitter">
                            <i class="bi bi-twitter"></i>
                        </a>
                        <a href="#" class="social-link linkedin" aria-label="Follow us on LinkedIn">
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a href="#" class="social-link youtube" aria-label="Follow us on YouTube">
                            <i class="bi bi-youtube"></i>
                        </a>
                        <a href="#" class="social-link instagram" aria-label="Follow us on Instagram">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>
                    
                    <div class="footer-copyright">
                        <p>&copy; <span id="current-year"></span> SchoolBlocks. All rights reserved.</p>
                        <p class="footer-subtitle">Trusted by over 3,000 schools nationwide • 25 Years of K-12 Innovation</p>
                    </div>
                </div>
            </div>
        </footer>
    `;

    const footerCSS = `
        <style>
            /* SchoolBlocks Professional Footer Styles */
            .site-footer {
                background: linear-gradient(135deg, #2C3E50 0%, #34495E 100%);
                color: #ffffff;
                padding: 80px 0 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            
            .footer-container {
                max-width: 1400px;
                margin: 0 auto;
                padding: 0 40px;
            }
            
            .footer-top {
                display: grid;
                grid-template-columns: 1fr 2fr;
                gap: 80px;
                padding-bottom: 60px;
            }
            
            /* Brand Section */
            .footer-brand {
                max-width: 400px;
            }
            
            .footer-logo {
                height: 60px;
                width: auto;
                margin-bottom: 24px;
                filter: brightness(0) invert(1);
            }
            
            .footer-tagline {
                font-size: 1.25rem;
                font-weight: 600;
                color: #74a9e8;
                margin: 0 0 16px 0;
                line-height: 1.3;
            }
            
            .footer-description {
                font-size: 1rem;
                color: rgba(255, 255, 255, 0.8);
                line-height: 1.6;
                margin: 0 0 32px 0;
            }
            
            .footer-contact {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }
            
            .contact-item {
                display: flex;
                align-items: flex-start;
                gap: 12px;
            }
            
            .contact-item i {
                color: #74a9e8;
                font-size: 18px;
                margin-top: 2px;
                flex-shrink: 0;
            }
            
            .contact-link {
                color: rgba(255, 255, 255, 0.9);
                text-decoration: none;
                font-size: 0.95rem;
                line-height: 1.5;
                transition: color 0.3s ease;
            }
            
            .contact-link:hover {
                color: #74a9e8;
            }
            
            /* Links Section */
            .footer-links {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 40px;
            }
            
            .footer-column {
                display: flex;
                flex-direction: column;
            }
            
            .footer-heading {
                font-size: 1.1rem;
                font-weight: 700;
                color: #ffffff;
                margin: 0 0 20px 0;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .footer-nav {
                list-style: none;
                padding: 0;
                margin: 0 0 32px 0;
            }
            
            .footer-nav li {
                margin-bottom: 12px;
            }
            
            .footer-nav li:last-child {
                margin-bottom: 0;
            }
            
            .footer-link {
                color: rgba(255, 255, 255, 0.8);
                text-decoration: none;
                font-size: 0.9rem;
                line-height: 1.4;
                transition: all 0.3s ease;
                display: inline-flex;
                align-items: center;
                gap: 8px;
            }
            
            .footer-link:hover {
                color: #74a9e8;
                transform: translateX(4px);
            }
            
            .new-badge {
                background: linear-gradient(135deg, #4A90E2, #357ABD);
                color: white;
                font-size: 0.7rem;
                font-weight: 600;
                padding: 2px 6px;
                border-radius: 10px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            /* Footer Bottom */
            .footer-bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 40px 0;
                margin-top: 60px;
            }
            
            .footer-social {
                display: flex;
                gap: 16px;
            }
            
            .social-link {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 44px;
                height: 44px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                color: rgba(255, 255, 255, 0.8);
                text-decoration: none;
                transition: all 0.3s ease;
                font-size: 18px;
            }
            
            .social-link:hover {
                background: #74a9e8;
                color: #ffffff;
                transform: translateY(-3px);
            }
            
            .footer-copyright {
                text-align: right;
            }
            
            .footer-copyright p {
                margin: 0;
                font-size: 0.9rem;
                color: rgba(255, 255, 255, 0.8);
                line-height: 1.4;
            }
            
            .footer-subtitle {
                font-size: 0.8rem !important;
                color: rgba(255, 255, 255, 0.6) !important;
                margin-top: 4px !important;
            }
            
            /* Responsive Design */
            @media (max-width: 1200px) {
                .footer-top {
                    grid-template-columns: 1fr;
                    gap: 60px;
                }
                
                .footer-links {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 40px;
                }
            }
            
            @media (max-width: 768px) {
                .site-footer {
                    padding: 60px 0 0;
                }
                
                .footer-container {
                    padding: 0 20px;
                }
                
                .footer-top {
                    gap: 50px;
                }
                
                .footer-links {
                    grid-template-columns: 1fr;
                    gap: 40px;
                }
                
                .footer-bottom {
                    flex-direction: column;
                    gap: 30px;
                    text-align: center;
                }
                
                .footer-copyright {
                    text-align: center;
                }
                
                .footer-brand {
                    max-width: none;
                    text-align: center;
                }
                
                .footer-contact {
                    align-items: center;
                }
            }
            
            @media (max-width: 480px) {
                .site-footer {
                    padding: 40px 0 0;
                }
                
                .footer-container {
                    padding: 0 15px;
                }
                
                .footer-top {
                    gap: 40px;
                }
                
                .footer-logo {
                    height: 48px;
                }
                
                .footer-tagline {
                    font-size: 1.1rem;
                }
                
                .footer-description {
                    font-size: 0.9rem;
                }
                
                .social-link {
                    width: 40px;
                    height: 40px;
                    font-size: 16px;
                }
            }
        </style>
    `;

    // Insert CSS into head
    document.head.insertAdjacentHTML('beforeend', footerCSS);
    
    // Insert footer HTML
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
        
        // Set current year
        const currentYearSpan = document.getElementById('current-year');
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    }
}

// Auto-load footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);

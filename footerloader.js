// SchoolBlocks Footer Loader
// This script dynamically loads the footer HTML and CSS for reuse across pages

function loadFooter() {
    const footerHTML = `
        <footer class="site-footer">
            <div class="footer-main">
                <div class="footer-left">
                    <div class="footer-logo">
                        <img src="Photos/Logo/SchoolBlocks Logo-2024_long-logo.png" alt="SchoolBlocks" class="footer-logo-img">
                        <p class="footer-tagline">Empowering Educators. Amplifying Impact.</p>
                    </div>
                    
                    <div class="footer-contact">
                        <div class="contact-item">
                            <a href="https://maps.google.com/?q=417+Main+Street+Suite+U,+Carbondale,+CO+81623" target="_blank" class="contact-link">
                                417 Main Street Suite U<br>
                                Carbondale, CO 81623
                            </a>
                        </div>
                        <div class="contact-item">
                            <a href="tel:+18003136438" class="contact-link">
                                +(800) 313-6438
                            </a>
                        </div>
                    </div>
                    
                    <div class="footer-social">
                        <a href="#" class="social-link facebook" aria-label="Follow us on Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link twitter" aria-label="Follow us on Twitter">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link linkedin" aria-label="Follow us on LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <div class="footer-right">
                    <a href="/contact" class="footer-nav-link">Contact</a>
                    <a href="/careers" class="footer-nav-link">Careers <span class="red-dot"></span></a>
                    <a href="/privacy-policy" class="footer-nav-link">Privacy Policy</a>
                </div>
            </div>
            
            <div class="footer-social-mobile">
                <a href="#" class="social-link facebook" aria-label="Follow us on Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                </a>
                <a href="#" class="social-link twitter" aria-label="Follow us on Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                </a>
                <a href="#" class="social-link linkedin" aria-label="Follow us on LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>
            </div>
            
            <div class="footer-copyright">
                <p class="copyright">Copyright ©<span id="current-year"></span> School Blocks</p>
            </div>
        </footer>
    `;

    const footerCSS = `
        <style>
            /* SchoolBlocks Footer Styles - Clean Structure */
            .site-footer {
                background: #ffffff;
                color: #333333;
                padding: 60px 40px 30px;
                width: 100%;
                box-sizing: border-box;
            }
            
            .footer-main {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 40px;
                width: 100%;
            }
            
            .footer-left {
                text-align: left;
            }
            
            .footer-logo {
                margin-bottom: 30px;
            }
            
            .footer-logo-img {
                height: 48px;
                width: auto;
                margin-bottom: 15px;
            }
            
            .footer-tagline {
                color: #333333;
                font-size: 16px;
                margin: 0;
                font-weight: 400;
            }
            
            .footer-contact {
                margin-bottom: 30px;
            }
            
            .contact-item {
                margin-bottom: 15px;
            }
            
            .contact-item:last-child {
                margin-bottom: 0;
            }
            
            .contact-link {
                color: #333333;
                text-decoration: none;
                font-size: 16px;
                line-height: 1.5;
                transition: color 0.3s ease;
                display: inline-block;
                font-weight: 500;
            }
            
            .contact-link:hover {
                color: #4A90E2;
                text-decoration: underline;
            }
            
            .footer-social {
                display: flex;
                gap: 15px;
            }
            
            .footer-social-mobile {
                display: none;
            }
            
            .social-link {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 44px;
                height: 44px;
                background: rgba(74, 144, 226, 0.1);
                border-radius: 50%;
                color: #333333;
                text-decoration: none;
                transition: all 0.3s ease;
            }
            
            .social-link:hover {
                background: #4A90E2;
                color: #ffffff;
                transform: translateY(-2px);
            }
            
            .footer-right {
                display: flex;
                flex-direction: column;
                gap: 20px;
                text-align: right;
            }
            
            .footer-nav-link {
                color: #333333;
                text-decoration: none;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 1px;
                transition: color 0.3s ease;
            }
            
            .footer-nav-link:hover {
                color: #4A90E2;
            }
            
            .red-dot {
                display: inline-block;
                width: 8px;
                height: 8px;
                background-color: #ff4444;
                border-radius: 50%;
                margin-left: 6px;
                vertical-align: middle;
            }
            
            .footer-copyright {
                text-align: center;
                padding-top: 30px;
            }
            
            .copyright {
                color: #333333;
                font-size: 14px;
                margin: 0;
                font-weight: 400;
            }
            
            /* Responsive Design */
            @media (max-width: 759px) {
                .site-footer {
                    padding: 40px 20px 20px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                }
                
                .footer-main {
                    flex-direction: column;
                    gap: 30px;
                    text-align: center;
                    align-items: center;
                    order: 1;
                }
                
                .footer-left,
                .footer-right {
                    text-align: center;
                    width: 100%;
                }
                
                .footer-right {
                    display: flex;
                    flex-direction: row;
                    gap: 30px;
                    justify-content: center;
                    flex-wrap: wrap;
                    order: 2;
                }
                
                .footer-social {
                    display: none;
                }
                
                .footer-social-mobile {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    order: 3;
                    margin: 20px 0;
                }
                
                .footer-copyright {
                    order: 4;
                }
            }
            
            @media (max-width: 480px) {
                .site-footer {
                    padding: 30px 15px 15px;
                }
                
                .footer-main {
                    gap: 30px;
                }
                
                .footer-logo-img {
                    height: 40px;
                }
                
                .footer-tagline,
                .contact-link,
                .footer-nav-link {
                    font-size: 14px;
                }
                
                .social-link {
                    width: 40px;
                    height: 40px;
                }
                
                .social-link svg {
                    width: 18px;
                    height: 18px;
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

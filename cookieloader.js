// SchoolBlocks Cookie Consent Loader
// This script manages cookie consent banner and preferences

function loadCookieConsent() {
    console.log('🍪 Loading cookie consent...');
    
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('schoolblocks-cookie-consent');
    
    if (cookieConsent) {
        console.log('✅ Cookie consent already provided:', cookieConsent);
        return;
    }
    
    console.log('🍪 No previous consent found, showing banner...');
    
    // Create cookie consent banner HTML
    const cookieBannerHTML = `
        <div id="cookie-consent-banner" class="cookie-consent-banner">
            <div class="cookie-consent-container">
                <div class="cookie-consent-content">
                    <div class="cookie-consent-text">
                        <h4>We Use Cookies</h4>
                        <p>This website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. By continuing to use this site, you consent to our use of cookies.</p>
                    </div>
                    <div class="cookie-consent-actions">
                        <button id="cookie-accept" class="cookie-btn cookie-accept">Accept All</button>
                        <button id="cookie-decline" class="cookie-btn cookie-decline">Decline</button>
                        <button id="cookie-settings" class="cookie-btn cookie-settings">Cookie Settings</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="cookie-settings-modal" class="cookie-settings-modal" style="display: none;">
            <div class="cookie-modal-overlay"></div>
            <div class="cookie-modal-content">
                <div class="cookie-modal-header">
                    <h3>Cookie Settings</h3>
                    <button id="cookie-modal-close" class="cookie-modal-close">&times;</button>
                </div>
                <div class="cookie-modal-body">
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h4>Essential Cookies</h4>
                            <label class="cookie-toggle">
                                <input type="checkbox" checked disabled>
                                <span class="cookie-slider"></span>
                            </label>
                        </div>
                        <p>These cookies are necessary for the website to function and cannot be switched off.</p>
                    </div>
                    
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h4>Analytics Cookies</h4>
                            <label class="cookie-toggle">
                                <input type="checkbox" id="analytics-cookies">
                                <span class="cookie-slider"></span>
                            </label>
                        </div>
                        <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                    </div>
                    
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h4>Marketing Cookies</h4>
                            <label class="cookie-toggle">
                                <input type="checkbox" id="marketing-cookies">
                                <span class="cookie-slider"></span>
                            </label>
                        </div>
                        <p>These cookies are used to track visitors across websites to display relevant advertisements.</p>
                    </div>
                </div>
                <div class="cookie-modal-footer">
                    <button id="cookie-save-preferences" class="cookie-btn cookie-accept">Save Preferences</button>
                    <button id="cookie-accept-all" class="cookie-btn cookie-decline">Accept All</button>
                </div>
            </div>
        </div>
    `;
    
    // Cookie consent CSS
    const cookieCSS = `
        <style>
            /* Cookie Consent Banner Styles */
            .cookie-consent-banner {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(20px);
                border-top: 1px solid rgba(74, 144, 226, 0.2);
                box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
                z-index: 10000;
                animation: slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            @keyframes slideUp {
                from {
                    transform: translateY(100%);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            
            .cookie-consent-container {
                max-width: 1400px;
                margin: 0 auto;
                padding: 20px 40px;
            }
            
            .cookie-consent-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 30px;
            }
            
            .cookie-consent-text {
                flex: 1;
            }
            
            .cookie-consent-text h4 {
                margin: 0 0 8px 0;
                font-size: 18px;
                font-weight: 600;
                color: #2c3e50;
            }
            
            .cookie-consent-text p {
                margin: 0;
                font-size: 14px;
                color: #6c757d;
                line-height: 1.5;
            }
            
            .cookie-consent-actions {
                display: flex;
                gap: 12px;
                flex-shrink: 0;
            }
            
            .cookie-btn {
                padding: 10px 20px;
                border: none;
                border-radius: 6px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s ease;
                text-decoration: none;
                display: inline-block;
                text-align: center;
            }
            
            .cookie-accept {
                background: #4A90E2;
                color: white;
            }
            
            .cookie-accept:hover {
                background: #357ABD;
                transform: translateY(-1px);
            }
            
            .cookie-decline {
                background: transparent;
                color: #6c757d;
                border: 1px solid #dee2e6;
            }
            
            .cookie-decline:hover {
                background: #f8f9fa;
                color: #495057;
            }
            
            .cookie-settings {
                background: transparent;
                color: #4A90E2;
                border: 1px solid #4A90E2;
            }
            
            .cookie-settings:hover {
                background: #4A90E2;
                color: white;
            }
            
            /* Cookie Settings Modal */
            .cookie-settings-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 10001;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: fadeIn 0.3s ease;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .cookie-modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(4px);
            }
            
            .cookie-modal-content {
                position: relative;
                background: white;
                border-radius: 12px;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                animation: slideInUp 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            @keyframes slideInUp {
                from {
                    transform: translateY(30px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            
            .cookie-modal-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px 24px;
                border-bottom: 1px solid #e9ecef;
            }
            
            .cookie-modal-header h3 {
                margin: 0;
                font-size: 20px;
                font-weight: 600;
                color: #2c3e50;
            }
            
            .cookie-modal-close {
                background: none;
                border: none;
                font-size: 24px;
                color: #6c757d;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.2s ease;
            }
            
            .cookie-modal-close:hover {
                background: #f8f9fa;
                color: #495057;
            }
            
            .cookie-modal-body {
                padding: 24px;
            }
            
            .cookie-category {
                margin-bottom: 24px;
            }
            
            .cookie-category:last-child {
                margin-bottom: 0;
            }
            
            .cookie-category-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 8px;
            }
            
            .cookie-category-header h4 {
                margin: 0;
                font-size: 16px;
                font-weight: 600;
                color: #2c3e50;
            }
            
            .cookie-category p {
                margin: 0;
                font-size: 14px;
                color: #6c757d;
                line-height: 1.5;
            }
            
            /* Cookie Toggle Switch */
            .cookie-toggle {
                position: relative;
                display: inline-block;
                width: 50px;
                height: 24px;
            }
            
            .cookie-toggle input {
                opacity: 0;
                width: 0;
                height: 0;
            }
            
            .cookie-slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                transition: 0.3s;
                border-radius: 24px;
            }
            
            .cookie-slider:before {
                position: absolute;
                content: "";
                height: 18px;
                width: 18px;
                left: 3px;
                bottom: 3px;
                background-color: white;
                transition: 0.3s;
                border-radius: 50%;
            }
            
            .cookie-toggle input:checked + .cookie-slider {
                background-color: #4A90E2;
            }
            
            .cookie-toggle input:checked + .cookie-slider:before {
                transform: translateX(26px);
            }
            
            .cookie-toggle input:disabled + .cookie-slider {
                background-color: #4A90E2;
                opacity: 0.6;
                cursor: not-allowed;
            }
            
            .cookie-modal-footer {
                padding: 20px 24px;
                border-top: 1px solid #e9ecef;
                display: flex;
                gap: 12px;
                justify-content: flex-end;
            }
            
            /* Responsive Design */
            @media (max-width: 768px) {
                .cookie-consent-container {
                    padding: 16px 20px;
                }
                
                .cookie-consent-content {
                    flex-direction: column;
                    align-items: stretch;
                    gap: 16px;
                }
                
                .cookie-consent-actions {
                    justify-content: center;
                    flex-wrap: wrap;
                }
                
                .cookie-btn {
                    flex: 1;
                    min-width: 100px;
                }
                
                .cookie-modal-content {
                    margin: 20px;
                    width: calc(100% - 40px);
                }
                
                .cookie-modal-footer {
                    flex-direction: column;
                }
                
                .cookie-modal-footer .cookie-btn {
                    width: 100%;
                }
            }
        </style>
    `;
    
    // Insert CSS into head
    document.head.insertAdjacentHTML('beforeend', cookieCSS);
    
    // Insert banner HTML into body
    document.body.insertAdjacentHTML('beforeend', cookieBannerHTML);
    
    // Add event listeners
    setupCookieEventListeners();
    
    console.log('🍪 Cookie consent banner loaded');
}

function setupCookieEventListeners() {
    const banner = document.getElementById('cookie-consent-banner');
    const modal = document.getElementById('cookie-settings-modal');
    
    // Accept all cookies
    document.getElementById('cookie-accept').addEventListener('click', () => {
        setCookieConsent('accepted');
        hideCookieBanner();
    });
    
    // Decline cookies
    document.getElementById('cookie-decline').addEventListener('click', () => {
        setCookieConsent('declined');
        hideCookieBanner();
    });
    
    // Show settings modal
    document.getElementById('cookie-settings').addEventListener('click', () => {
        showCookieSettings();
    });
    
    // Close modal
    document.getElementById('cookie-modal-close').addEventListener('click', () => {
        hideCookieSettings();
    });
    
    // Close modal on overlay click
    document.querySelector('.cookie-modal-overlay').addEventListener('click', () => {
        hideCookieSettings();
    });
    
    // Save preferences
    document.getElementById('cookie-save-preferences').addEventListener('click', () => {
        saveCookiePreferences();
        hideCookieSettings();
        hideCookieBanner();
    });
    
    // Accept all from modal
    document.getElementById('cookie-accept-all').addEventListener('click', () => {
        setCookieConsent('accepted');
        hideCookieSettings();
        hideCookieBanner();
    });
}

function setCookieConsent(status) {
    const consent = {
        status: status,
        timestamp: new Date().toISOString(),
        essential: true,
        analytics: status === 'accepted',
        marketing: status === 'accepted'
    };
    
    localStorage.setItem('schoolblocks-cookie-consent', JSON.stringify(consent));
    console.log('🍪 Cookie consent saved:', consent);
}

function saveCookiePreferences() {
    const analyticsChecked = document.getElementById('analytics-cookies').checked;
    const marketingChecked = document.getElementById('marketing-cookies').checked;
    
    const consent = {
        status: 'customized',
        timestamp: new Date().toISOString(),
        essential: true,
        analytics: analyticsChecked,
        marketing: marketingChecked
    };
    
    localStorage.setItem('schoolblocks-cookie-consent', JSON.stringify(consent));
    console.log('🍪 Cookie preferences saved:', consent);
}

function showCookieSettings() {
    const modal = document.getElementById('cookie-settings-modal');
    modal.style.display = 'flex';
    
    // Load current preferences
    const consent = getCookieConsent();
    if (consent) {
        document.getElementById('analytics-cookies').checked = consent.analytics;
        document.getElementById('marketing-cookies').checked = consent.marketing;
    }
}

function hideCookieSettings() {
    const modal = document.getElementById('cookie-settings-modal');
    modal.style.display = 'none';
}

function hideCookieBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) {
        banner.style.animation = 'slideDown 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        setTimeout(() => {
            banner.remove();
        }, 400);
    }
}

function getCookieConsent() {
    const consent = localStorage.getItem('schoolblocks-cookie-consent');
    return consent ? JSON.parse(consent) : null;
}

// Function to clear cookie consent for testing (call in browser console)
function clearCookieConsent() {
    localStorage.removeItem('schoolblocks-cookie-consent');
    console.log('🍪 Cookie consent cleared! Refresh the page to see the banner again.');
}

// Make it available globally for testing
window.clearCookieConsent = clearCookieConsent;

// Add slide down animation
const slideDownCSS = `
    <style>
        @keyframes slideDown {
            from {
                transform: translateY(0);
                opacity: 1;
            }
            to {
                transform: translateY(100%);
                opacity: 0;
            }
        }
    </style>
`;

// Auto-load cookie consent when DOM is ready or immediately if already ready
function initializeCookieConsent() {
    // Add slide down animation CSS
    document.head.insertAdjacentHTML('beforeend', slideDownCSS);
    
    // Load cookie consent after a short delay to ensure page is ready
    setTimeout(loadCookieConsent, 500);
}

// Check if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCookieConsent);
} else {
    // DOM is already loaded, initialize immediately
    initializeCookieConsent();
}

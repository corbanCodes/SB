// ADA Compliance Widget - SchoolBlocks
// Provides accessibility tools and compliance features

// IMMEDIATE: Check for saved language BEFORE widget loads
(function() {
    try {
        const saved = localStorage.getItem('ada-widget-settings');
        console.log('📋 Checking for saved language...', saved ? 'Found settings' : 'No settings');
        
        if (saved) {
            const settings = JSON.parse(saved);
            console.log('📋 Parsed settings:', settings);
            
            if (settings.language && settings.language !== 'en') {
                // Set Google's cookies (both versions for compatibility)
                const cookieValue = `/en/${settings.language}`;
                document.cookie = `googtrans=${cookieValue}; path=/`;
                document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`;
                
                console.log(`🚀 PRE-LOAD: Setting cookie for language: ${settings.language}`);
                console.log(`🍪 Cookie value: ${cookieValue}`);
            } else {
                console.log('📋 Language is English or not set');
            }
        }
    } catch (e) {
        console.error('❌ Could not pre-load language:', e);
    }
})();

class ADAWidget {
    constructor() {
        this.isOpen = false;
        this.fontSize = 100; // percentage
        this.highContrast = false;
        this.selectedLanguage = 'en';
        this.init();
    }

    init() {
        this.createWidget();
        this.attachEventListeners();
        this.loadSettings();
        this.initGoogleTranslate();
        this.monitorLanguageChanges();
        console.log('✅ ADA Compliance Widget initialized');
    }

    createWidget() {
        const widget = document.createElement('div');
        widget.innerHTML = `
            <!-- ADA Widget Container -->
            <div id="ada-widget" class="ada-widget" aria-label="Accessibility Tools">
                <!-- Toggle Button -->
                <button id="ada-toggle" class="ada-toggle" aria-label="Open Accessibility Tools" title="Accessibility Tools">
                    <i class="bi bi-universal-access"></i>
                </button>
                
                <!-- Widget Panel -->
                <div id="ada-panel" class="ada-panel">
                    <!-- Header -->
                    <div class="ada-header">
                        <div class="ada-title">
                            <i class="bi bi-shield-check"></i>
                            <span>Accessibility Tools</span>
                        </div>
                        <button id="ada-close" class="ada-close" aria-label="Close Panel" title="Close">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    
                    <!-- Controls -->
                    <div class="ada-controls">
                        <!-- Font Size Controls -->
                        <div class="ada-control-group">
                            <label class="ada-control-label">
                                <i class="bi bi-fonts"></i>
                                Text Size
                            </label>
                            <div class="ada-button-group">
                                <button id="ada-font-decrease" class="ada-btn ada-btn-sm" aria-label="Decrease font size" title="Smaller Text">
                                    <i class="bi bi-dash-lg"></i>
                                </button>
                                <span id="ada-font-size" class="ada-font-display">100%</span>
                                <button id="ada-font-increase" class="ada-btn ada-btn-sm" aria-label="Increase font size" title="Larger Text">
                                    <i class="bi bi-plus-lg"></i>
                                </button>
                            </div>
                        </div>
                        
                        <!-- High Contrast Toggle -->
                        <div class="ada-control-group">
                            <label class="ada-control-label">
                                <i class="bi bi-circle-half"></i>
                                High Contrast
                            </label>
                            <button id="ada-contrast-toggle" class="ada-btn ada-toggle-btn" aria-label="Toggle high contrast mode" title="High Contrast Mode">
                                <span class="ada-toggle-text">Off</span>
                                <i class="bi bi-toggle-off"></i>
                            </button>
                        </div>
                        
                        <!-- Language Selector -->
                        <div class="ada-control-group">
                            <label class="ada-control-label">
                                <i class="bi bi-translate"></i>
                                Language / Idioma
                            </label>
                            <div id="google_translate_element"></div>
                        </div>
                        
                        <!-- Skip Links -->
                        <div class="ada-control-group">
                            <label class="ada-control-label">
                                <i class="bi bi-skip-forward"></i>
                                Quick Navigation
                            </label>
                            <div class="ada-skip-links">
                                <button id="ada-skip-content-down" class="ada-btn ada-skip-btn">
                                    <i class="bi bi-arrow-down"></i>
                                    Next Section
                                </button>
                                <button id="ada-skip-content-up" class="ada-btn ada-skip-btn">
                                    <i class="bi bi-arrow-up"></i>
                                    Previous Section
                                </button>
                                <button id="ada-back-top" class="ada-btn ada-skip-btn">
                                    <i class="bi bi-arrow-up-circle"></i>
                                    Back to Top
                                </button>
                            </div>
                        </div>
                        
                        <!-- Reset Button -->
                        <div class="ada-control-group">
                            <button id="ada-reset" class="ada-btn ada-btn-reset" aria-label="Reset all accessibility settings" title="Reset Settings">
                                <i class="bi bi-arrow-clockwise"></i>
                                Reset All Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(widget);
        this.addStyles();
    }

    addStyles() {
        const styles = document.createElement('style');
        styles.textContent = `
            /* ADA Widget Styles */
            .ada-widget {
                position: fixed;
                bottom: 20px;
                left: 20px;
                z-index: 10000;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: 14px;
            }
            
            .ada-toggle {
                width: 56px;
                height: 56px;
                border-radius: 50%;
                background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(74, 144, 226, 0.3);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                z-index: 10001;
            }
            
            .ada-toggle:hover {
                transform: translateY(-2px) scale(1.05);
                box-shadow: 0 8px 30px rgba(74, 144, 226, 0.4);
                background: linear-gradient(135deg, #357ABD 0%, #2C5F94 100%);
            }
            
            .ada-toggle:focus {
                outline: 3px solid #FFD700;
                outline-offset: 2px;
            }
            
            .ada-panel {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 320px;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(20px);
                border-radius: 16px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                border: 1px solid rgba(255, 255, 255, 0.2);
                transform: translateX(-100%) translateY(100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                overflow: hidden;
            }
            
            .ada-widget.open .ada-panel {
                transform: translateX(0) translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            .ada-header {
                background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
                color: white;
                padding: 16px 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: relative;
            }
            
            .ada-title {
                display: flex;
                align-items: center;
                gap: 8px;
                font-weight: 600;
                font-size: 16px;
                flex: 1;
            }
            
            .ada-close {
                background: none;
                border: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
                padding: 6px;
                border-radius: 4px;
                transition: all 0.2s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 32px;
            }
            
            .ada-close:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: scale(1.1);
            }
            
            .ada-close:focus {
                outline: 2px solid rgba(255, 255, 255, 0.5);
                outline-offset: 2px;
            }
            
            .ada-controls {
                padding: 20px;
            }
            
            .ada-control-group {
                margin-bottom: 20px;
            }
            
            .ada-control-group:last-child {
                margin-bottom: 0;
            }
            
            .ada-control-label {
                display: flex;
                align-items: center;
                gap: 8px;
                font-weight: 600;
                color: #2C3E50;
                margin-bottom: 12px;
                font-size: 14px;
            }
            
            .ada-button-group {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .ada-btn {
                background: #f8f9fa;
                border: 1px solid #e9ecef;
                border-radius: 8px;
                padding: 8px 12px;
                cursor: pointer;
                transition: all 0.2s ease;
                font-size: 14px;
                font-weight: 500;
                display: flex;
                align-items: center;
                gap: 6px;
                color: #495057;
            }
            
            .ada-btn:hover {
                background: #e9ecef;
                border-color: #dee2e6;
                transform: translateY(-1px);
            }
            
            .ada-btn:focus {
                outline: 2px solid #4A90E2;
                outline-offset: 2px;
            }
            
            .ada-btn-sm {
                padding: 6px 10px;
                font-size: 16px;
                min-width: 36px;
                justify-content: center;
            }
            
            .ada-font-display {
                font-weight: 600;
                color: #4A90E2;
                min-width: 40px;
                text-align: center;
            }
            
            .ada-toggle-btn {
                justify-content: space-between;
                min-width: 80px;
            }
            
            .ada-toggle-btn.active {
                background: #4A90E2;
                color: white;
                border-color: #4A90E2;
            }
            
            .ada-skip-links {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            
            .ada-skip-btn {
                justify-content: flex-start;
                width: 100%;
            }
            
            .ada-btn-reset {
                background: #dc3545;
                color: white;
                border-color: #dc3545;
                width: 100%;
                justify-content: center;
            }
            
            .ada-btn-reset:hover {
                background: #c82333;
                border-color: #bd2130;
            }
            
            /* High Contrast Mode - Better approach without filter that hides widget */
            body.ada-high-contrast {
                background-color: #000000 !important;
                color: #FFFFFF !important;
            }
            
            body.ada-high-contrast *:not(.ada-widget):not(.ada-widget *) {
                background-color: #000000 !important;
                color: #FFFFFF !important;
                border-color: #FFFFFF !important;
                text-shadow: none !important;
            }
            
            body.ada-high-contrast a:not(.ada-widget a) {
                color: #FFFF00 !important;
                text-decoration: underline !important;
            }
            
            body.ada-high-contrast button:not(.ada-widget button),
            body.ada-high-contrast input:not(.ada-widget input),
            body.ada-high-contrast select:not(.ada-widget select),
            body.ada-high-contrast textarea:not(.ada-widget textarea) {
                background-color: #FFFFFF !important;
                color: #000000 !important;
                border: 2px solid #FFFFFF !important;
            }
            
            body.ada-high-contrast img:not(.ada-widget img) {
                border: 2px solid #FFFFFF !important;
                opacity: 0.8;
            }
            
            /* Keep ADA Widget visible and styled in high contrast mode */
            body.ada-high-contrast .ada-toggle {
                background: #4A90E2 !important;
                color: #FFFFFF !important;
                border: 3px solid #FFFFFF !important;
                box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3) !important;
            }
            
            body.ada-high-contrast .ada-panel {
                background: rgba(255, 255, 255, 0.98) !important;
                border: 3px solid #4A90E2 !important;
                box-shadow: 0 0 30px rgba(74, 144, 226, 0.5) !important;
            }
            
            body.ada-high-contrast .ada-header {
                background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%) !important;
                color: #FFFFFF !important;
            }
            
            body.ada-high-contrast .ada-btn {
                background: #f8f9fa !important;
                color: #000000 !important;
                border: 2px solid #4A90E2 !important;
            }
            
            body.ada-high-contrast .ada-btn:hover {
                background: #4A90E2 !important;
                color: #FFFFFF !important;
            }
            
            body.ada-high-contrast .ada-btn.active,
            body.ada-high-contrast .ada-toggle-btn.active {
                background: #4A90E2 !important;
                color: #FFFFFF !important;
                border-color: #357ABD !important;
            }
            
            body.ada-high-contrast .ada-control-label {
                color: #2C3E50 !important;
            }
            
            body.ada-high-contrast .ada-font-display {
                color: #4A90E2 !important;
            }
            
            /* Google Translate Styling */
            #google_translate_element {
                margin-top: 4px;
            }
            
            /* Style the select button */
            .goog-te-combo {
                background: #f8f9fa !important;
                border: 1px solid #e9ecef !important;
                border-radius: 8px !important;
                padding: 10px 32px 10px 12px !important;
                width: 100% !important;
                font-size: 14px !important;
                font-weight: 500 !important;
                color: #495057 !important;
                cursor: pointer !important;
                transition: all 0.2s ease !important;
                appearance: none !important;
                -webkit-appearance: none !important;
                -moz-appearance: none !important;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23495057' d='M6 9L1 4h10z'/%3E%3C/svg%3E") !important;
                background-repeat: no-repeat !important;
                background-position: right 10px center !important;
                background-size: 12px !important;
            }
            
            .goog-te-combo:hover {
                background-color: #e9ecef !important;
                border-color: #dee2e6 !important;
            }
            
            .goog-te-combo:focus {
                outline: 2px solid #4A90E2 !important;
                outline-offset: 2px !important;
                border-color: #4A90E2 !important;
                background-color: #ffffff !important;
            }
            
            /* Style the dropdown menu */
            .goog-te-menu-frame {
                border-radius: 12px !important;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
                border: 1px solid #e9ecef !important;
                overflow: hidden !important;
            }
            
            /* Change arrow to X */
            .goog-te-menu-frame .goog-te-menu2-item .text::after {
                content: "" !important;
            }
            
            /* Close button styling */
            .goog-te-menu-frame .indicator {
                display: none !important;
            }
            
            .goog-te-menu-frame::before {
                content: "✕" !important;
                position: absolute !important;
                top: 12px !important;
                right: 12px !important;
                font-size: 20px !important;
                color: #495057 !important;
                cursor: pointer !important;
                z-index: 1000 !important;
                width: 24px !important;
                height: 24px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                border-radius: 4px !important;
                transition: all 0.2s ease !important;
            }
            
            .goog-te-menu-frame::before:hover {
                background: #f0f0f0 !important;
                color: #000000 !important;
            }
            
            .goog-te-menu2 {
                border: none !important;
                background: #ffffff !important;
                max-height: 400px !important;
                overflow-y: auto !important;
            }
            
            .goog-te-menu2-item {
                padding: 10px 16px !important;
                font-size: 14px !important;
                font-weight: 500 !important;
                color: #495057 !important;
                border-bottom: 1px solid #f0f0f0 !important;
                transition: all 0.2s ease !important;
            }
            
            .goog-te-menu2-item:hover {
                background: #f8f9fa !important;
                color: #4A90E2 !important;
            }
            
            .goog-te-menu2-item-selected {
                background: #e7f3ff !important;
                color: #4A90E2 !important;
                font-weight: 600 !important;
            }
            
            .goog-te-menu2-item:last-child {
                border-bottom: none !important;
            }
            
            /* Column layout improvements */
            .goog-te-menu2-colpad {
                padding: 8px !important;
            }
            
            /* Scrollbar styling */
            .goog-te-menu2::-webkit-scrollbar {
                width: 8px;
            }
            
            .goog-te-menu2::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 4px;
            }
            
            .goog-te-menu2::-webkit-scrollbar-thumb {
                background: #c1c1c1;
                border-radius: 4px;
            }
            
            .goog-te-menu2::-webkit-scrollbar-thumb:hover {
                background: #a8a8a8;
            }
            
            /* Hide Google branding */
            .goog-te-gadget {
                font-size: 0 !important;
                color: transparent !important;
            }
            
            .goog-te-gadget > span {
                display: none !important;
            }
            
            .goog-te-gadget > div {
                display: inline-block !important;
            }
            
            /* Style the powered by text */
            .goog-te-gadget .goog-te-combo {
                margin: 0 !important;
            }
            
            /* Hide the Google Translate banner at top */
            .goog-te-banner-frame {
                display: none !important;
            }
            
            body {
                top: 0 !important;
            }
            
            /* High contrast mode for translate */
            body.ada-high-contrast .goog-te-combo {
                background: #ffffff !important;
                color: #000000 !important;
                border: 2px solid #000000 !important;
            }
            
            body.ada-high-contrast .goog-te-combo:hover {
                background: #f0f0f0 !important;
            }
            
            /* Font Size Scaling - Scale html element for universal effect */
            html.ada-font-110 { font-size: 110%; }
            html.ada-font-120 { font-size: 120%; }
            html.ada-font-130 { font-size: 130%; }
            html.ada-font-140 { font-size: 140%; }
            html.ada-font-150 { font-size: 150%; }
            
            /* Alternative: Scale body content but not widget */
            body.ada-font-110 > *:not(.ada-widget) { font-size: 110% !important; }
            body.ada-font-120 > *:not(.ada-widget) { font-size: 120% !important; }
            body.ada-font-130 > *:not(.ada-widget) { font-size: 130% !important; }
            body.ada-font-140 > *:not(.ada-widget) { font-size: 140% !important; }
            body.ada-font-150 > *:not(.ada-widget) { font-size: 150% !important; }
            
            /* Mobile Responsive */
            @media (max-width: 768px) {
                .ada-widget {
                    bottom: 15px;
                    left: 15px;
                }
                
                .ada-toggle {
                    width: 50px;
                    height: 50px;
                    font-size: 20px;
                }
                
                .ada-panel {
                    width: calc(100vw - 30px);
                    max-width: 300px;
                }
                
                .ada-header {
                    padding: 14px 16px;
                }
                
                .ada-title {
                    font-size: 14px;
                }
                
                .ada-dev-badge {
                    font-size: 10px;
                    padding: 3px 6px;
                }
                
                .ada-controls {
                    padding: 16px;
                }
                
                .ada-control-group {
                    margin-bottom: 16px;
                }
            }
            
            @media (max-width: 480px) {
                .ada-panel {
                    width: calc(100vw - 20px);
                }
            }
        `;
        
        document.head.appendChild(styles);
    }

    attachEventListeners() {
        const toggle = document.getElementById('ada-toggle');
        const close = document.getElementById('ada-close');
        const fontIncrease = document.getElementById('ada-font-increase');
        const fontDecrease = document.getElementById('ada-font-decrease');
        const contrastToggle = document.getElementById('ada-contrast-toggle');
        const reset = document.getElementById('ada-reset');
        const skipContentDown = document.getElementById('ada-skip-content-down');
        const skipContentUp = document.getElementById('ada-skip-content-up');
        const backTop = document.getElementById('ada-back-top');

        toggle?.addEventListener('click', () => this.toggleWidget());
        close?.addEventListener('click', () => this.closeWidget());
        fontIncrease?.addEventListener('click', () => this.changeFontSize(10));
        fontDecrease?.addEventListener('click', () => this.changeFontSize(-10));
        contrastToggle?.addEventListener('click', () => this.toggleHighContrast());
        reset?.addEventListener('click', () => this.resetSettings());
        skipContentDown?.addEventListener('click', () => this.skipToContentDown());
        skipContentUp?.addEventListener('click', () => this.skipToContentUp());
        backTop?.addEventListener('click', () => this.backToTop());

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key === 'a') {
                e.preventDefault();
                this.toggleWidget();
            }
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            const widget = document.getElementById('ada-widget');
            if (this.isOpen && !widget?.contains(e.target)) {
                this.closeWidget();
            }
        });
    }

    toggleWidget() {
        const widget = document.getElementById('ada-widget');
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            widget?.classList.add('open');
            this.announceToScreenReader('Accessibility tools panel opened');
        } else {
            widget?.classList.remove('open');
            this.announceToScreenReader('Accessibility tools panel closed');
        }
        
        this.updateToggleButton();
    }

    closeWidget() {
        const widget = document.getElementById('ada-widget');
        this.isOpen = false;
        widget?.classList.remove('open');
        this.updateToggleButton();
        this.announceToScreenReader('Accessibility tools panel closed');
    }

    changeFontSize(change) {
        this.fontSize = Math.max(80, Math.min(150, this.fontSize + change));
        
        // Remove existing font size classes from both html and body
        document.documentElement.classList.remove('ada-font-110', 'ada-font-120', 'ada-font-130', 'ada-font-140', 'ada-font-150');
        document.body.classList.remove('ada-font-110', 'ada-font-120', 'ada-font-130', 'ada-font-140', 'ada-font-150');
        
        // Add new font size class to both html and body
        if (this.fontSize > 100) {
            document.documentElement.classList.add(`ada-font-${this.fontSize}`);
            document.body.classList.add(`ada-font-${this.fontSize}`);
        }
        
        // Update display
        const display = document.getElementById('ada-font-size');
        if (display) display.textContent = `${this.fontSize}%`;
        
        this.saveSettings();
        this.announceToScreenReader(`Font size changed to ${this.fontSize}%`);
    }

    toggleHighContrast() {
        this.highContrast = !this.highContrast;
        const button = document.getElementById('ada-contrast-toggle');
        
        if (this.highContrast) {
            document.body.classList.add('ada-high-contrast');
            button?.classList.add('active');
            button.querySelector('.ada-toggle-text').textContent = 'On';
            button.querySelector('i').className = 'bi bi-toggle-on';
            this.announceToScreenReader('High contrast mode enabled');
        } else {
            document.body.classList.remove('ada-high-contrast');
            button?.classList.remove('active');
            button.querySelector('.ada-toggle-text').textContent = 'Off';
            button.querySelector('i').className = 'bi bi-toggle-off';
            this.announceToScreenReader('High contrast mode disabled');
        }
        
        this.saveSettings();
    }

    skipToContentDown() {
        // Find next section below current scroll position
        const currentScroll = window.scrollY;
        const sections = document.querySelectorAll('section, article, main, [role="main"], .hero-section, #hero-section, h1, h2');
        
        // Find first section that's below current position (with small buffer)
        for (const section of sections) {
            const sectionTop = section.getBoundingClientRect().top + currentScroll;
            if (sectionTop > currentScroll + 100) { // 100px buffer
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Try to focus if possible
                if (section.tabIndex === -1) section.tabIndex = -1;
                section.focus({ preventScroll: true });
                this.announceToScreenReader('Skipped to next section');
                return;
            }
        }
        
        // Fallback: scroll down one viewport height
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
        this.announceToScreenReader('Scrolled to next content area');
    }
    
    skipToContentUp() {
        // Find previous section above current scroll position
        const currentScroll = window.scrollY;
        const sections = document.querySelectorAll('section, article, main, [role="main"], .hero-section, #hero-section, h1, h2');
        
        // Convert to array and reverse to search from bottom up
        const sectionsArray = Array.from(sections).reverse();
        
        // Find first section that's above current position (with small buffer)
        for (const section of sectionsArray) {
            const sectionTop = section.getBoundingClientRect().top + currentScroll;
            if (sectionTop < currentScroll - 100) { // 100px buffer
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Try to focus if possible
                if (section.tabIndex === -1) section.tabIndex = -1;
                section.focus({ preventScroll: true });
                this.announceToScreenReader('Skipped to previous section');
                return;
            }
        }
        
        // Fallback: scroll up one viewport height
        window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' });
        this.announceToScreenReader('Scrolled to previous content area');
    }
    
    backToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.announceToScreenReader('Scrolled to top of page');
    }

    resetSettings() {
        this.fontSize = 100;
        this.highContrast = false;
        this.selectedLanguage = 'en';
        
        // Remove all classes from both html and body
        document.documentElement.classList.remove('ada-font-110', 'ada-font-120', 'ada-font-130', 'ada-font-140', 'ada-font-150');
        document.body.classList.remove('ada-font-110', 'ada-font-120', 'ada-font-130', 'ada-font-140', 'ada-font-150', 'ada-high-contrast');
        
        // Reset language to English and clear cookie
        document.cookie = 'googtrans=; path=/; max-age=0';
        const select = document.querySelector('.goog-te-combo');
        if (select) {
            select.value = 'en';
            select.dispatchEvent(new Event('change'));
        }
        
        // Update UI
        const fontDisplay = document.getElementById('ada-font-size');
        const contrastButton = document.getElementById('ada-contrast-toggle');
        
        if (fontDisplay) fontDisplay.textContent = '100%';
        if (contrastButton) {
            contrastButton.classList.remove('active');
            const toggleText = contrastButton.querySelector('.ada-toggle-text');
            const toggleIcon = contrastButton.querySelector('i');
            if (toggleText) toggleText.textContent = 'Off';
            if (toggleIcon) toggleIcon.className = 'bi bi-toggle-off';
        }
        
        this.saveSettings();
        this.announceToScreenReader('All accessibility settings have been reset');
    }

    updateToggleButton() {
        const toggle = document.getElementById('ada-toggle');
        if (toggle) {
            toggle.setAttribute('aria-label', this.isOpen ? 'Close Accessibility Tools' : 'Open Accessibility Tools');
            toggle.setAttribute('title', this.isOpen ? 'Close Accessibility Tools' : 'Open Accessibility Tools');
        }
    }

    announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.style.position = 'absolute';
        announcement.style.left = '-10000px';
        announcement.style.width = '1px';
        announcement.style.height = '1px';
        announcement.style.overflow = 'hidden';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    saveSettings() {
        const settings = {
            fontSize: this.fontSize,
            highContrast: this.highContrast,
            language: this.selectedLanguage
        };
        localStorage.setItem('ada-widget-settings', JSON.stringify(settings));
    }

    loadSettings() {
        try {
            const saved = localStorage.getItem('ada-widget-settings');
            if (saved) {
                const settings = JSON.parse(saved);
                
                if (settings.fontSize && settings.fontSize !== 100) {
                    this.fontSize = settings.fontSize;
                    this.changeFontSize(0);
                }
                
                if (settings.highContrast) {
                    this.toggleHighContrast();
                }
                
                if (settings.language && settings.language !== 'en') {
                    this.selectedLanguage = settings.language;
                    this.applyLanguageWhenReady();
                }
            }
        } catch (e) {
            console.warn('Could not load ADA widget settings:', e);
        }
    }
    
    applyLanguageWhenReady() {
        // Aggressively wait for dropdown and force translation
        let attempts = 0;
        const checkInterval = setInterval(() => {
            const select = document.querySelector('.goog-te-combo');
            if (select || attempts > 100) { // Try for 10 seconds
                clearInterval(checkInterval);
                if (select && select.value !== this.selectedLanguage) {
                    // Force the value change multiple ways
                    select.value = this.selectedLanguage;
                    
                    // Trigger multiple events to ensure Google picks it up
                    const changeEvent = new Event('change', { bubbles: true, cancelable: true });
                    select.dispatchEvent(changeEvent);
                    
                    const inputEvent = new Event('input', { bubbles: true, cancelable: true });
                    select.dispatchEvent(inputEvent);
                    
                    // Click event as backup
                    setTimeout(() => {
                        if (select.value === this.selectedLanguage) {
                            select.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                    }, 200);
                    
                    console.log(`🌐 Language forced to: ${this.selectedLanguage}`);
                }
            }
            attempts++;
        }, 100);
    }
    
    monitorLanguageChanges() {
        // Simple: just watch for the dropdown and save changes
        const observer = new MutationObserver(() => {
            const select = document.querySelector('.goog-te-combo');
            if (select && !select.dataset.monitored) {
                select.dataset.monitored = 'true';
                select.addEventListener('change', (e) => {
                    this.selectedLanguage = e.target.value;
                    this.saveSettings();
                    // Set Google's cookie for next page
                    const cookieValue = e.target.value === 'en' ? '' : `/en/${e.target.value}`;
                    document.cookie = `googtrans=${cookieValue}; path=/`;
                    document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`;
                    console.log(`🌐 Language saved to localStorage and cookie: ${this.selectedLanguage}`);
                    console.log(`Cookie set: googtrans=${cookieValue}`);
                });
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    initGoogleTranslate() {
        // Define global callback FIRST before loading script
        window.googleTranslateElementInit = () => {
            if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'en,es,fr,de,zh-CN,ja,ko,ar,pt,ru,vi,it,pl,nl,tr,th,hi,id,uk,cs,ro,sv,hu,el,da,fi,no,he,bn,ta,te,mr,gu,kn,ml,ur',
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false,
                    multilanguagePage: true
                }, 'google_translate_element');
                
                console.log('🌐 Google Translate initialized with English + 30 languages');
            }
        };
        
        // Load Google Translate script if not already loaded
        if (!document.querySelector('script[src*="translate.google.com"]')) {
            const script = document.createElement('script');
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            script.onerror = () => console.error('Failed to load Google Translate');
            document.head.appendChild(script);
            console.log('Loading Google Translate script...');
        } else if (window.google && window.google.translate) {
            // Script already loaded, just initialize
            window.googleTranslateElementInit();
        }
    }
}

// Initialize widget when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.adaWidget = new ADAWidget();
    });
} else {
    window.adaWidget = new ADAWidget();
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ADAWidget;
}

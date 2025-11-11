// ADA Compliance Widget - SchoolBlocks
// Provides accessibility tools and compliance features

class ADAWidget {
    constructor() {
        this.isOpen = false;
        this.isMinimized = false;
        this.fontSize = 100; // percentage
        this.highContrast = false;
        this.init();
    }

    init() {
        this.createWidget();
        this.attachEventListeners();
        this.loadSettings();
        console.log('🔧 ADA Compliance Widget initialized (Development Version)');
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
                        <div class="ada-dev-badge">
                            <i class="bi bi-code-slash"></i>
                            <span>In Development</span>
                        </div>
                        <button id="ada-minimize" class="ada-minimize" aria-label="Minimize Panel" title="Minimize">
                            <i class="bi bi-chevron-left"></i>
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
                        
                        <!-- Skip Links -->
                        <div class="ada-control-group">
                            <label class="ada-control-label">
                                <i class="bi bi-skip-forward"></i>
                                Quick Navigation
                            </label>
                            <div class="ada-skip-links">
                                <button class="ada-btn ada-skip-btn" onclick="document.querySelector('.main-content')?.scrollIntoView({behavior: 'smooth'})">
                                    <i class="bi bi-arrow-down"></i>
                                    Skip to Content
                                </button>
                                <button class="ada-btn ada-skip-btn" onclick="document.querySelector('.navbar')?.scrollIntoView({behavior: 'smooth'})">
                                    <i class="bi bi-arrow-up"></i>
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
            
            .ada-widget.minimized .ada-panel {
                transform: translateX(-280px) translateY(0);
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
            }
            
            .ada-dev-badge {
                display: flex;
                align-items: center;
                gap: 4px;
                background: rgba(255, 255, 255, 0.2);
                padding: 4px 8px;
                border-radius: 12px;
                font-size: 11px;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .ada-minimize {
                background: none;
                border: none;
                color: white;
                font-size: 18px;
                cursor: pointer;
                padding: 4px;
                border-radius: 4px;
                transition: all 0.2s ease;
            }
            
            .ada-minimize:hover {
                background: rgba(255, 255, 255, 0.2);
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
            
            /* High Contrast Mode */
            body.ada-high-contrast {
                filter: contrast(150%) brightness(1.1);
            }
            
            body.ada-high-contrast * {
                text-shadow: none !important;
                box-shadow: none !important;
            }
            
            /* Protect ADA Widget from high contrast filter */
            body.ada-high-contrast .ada-widget {
                filter: none !important;
            }
            
            body.ada-high-contrast .ada-widget * {
                filter: none !important;
            }
            
            /* Enhanced visibility in high contrast mode */
            body.ada-high-contrast .ada-toggle {
                background: #000000 !important;
                color: #FFFFFF !important;
                border: 3px solid #FFFFFF !important;
                box-shadow: 0 0 0 2px #000000 !important;
            }
            
            body.ada-high-contrast .ada-panel {
                background: #FFFFFF !important;
                border: 3px solid #000000 !important;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.8) !important;
            }
            
            body.ada-high-contrast .ada-header {
                background: #000000 !important;
                color: #FFFFFF !important;
            }
            
            body.ada-high-contrast .ada-btn {
                background: #FFFFFF !important;
                color: #000000 !important;
                border: 2px solid #000000 !important;
            }
            
            body.ada-high-contrast .ada-btn:hover {
                background: #000000 !important;
                color: #FFFFFF !important;
            }
            
            body.ada-high-contrast .ada-btn.active {
                background: #000000 !important;
                color: #FFFFFF !important;
            }
            
            /* Font Size Scaling */
            body.ada-font-110 { font-size: 110%; }
            body.ada-font-120 { font-size: 120%; }
            body.ada-font-130 { font-size: 130%; }
            body.ada-font-140 { font-size: 140%; }
            body.ada-font-150 { font-size: 150%; }
            
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
                
                .ada-widget.minimized .ada-panel {
                    transform: translateX(calc(-100vw + 70px)) translateY(0);
                }
            }
        `;
        
        document.head.appendChild(styles);
    }

    attachEventListeners() {
        const toggle = document.getElementById('ada-toggle');
        const minimize = document.getElementById('ada-minimize');
        const fontIncrease = document.getElementById('ada-font-increase');
        const fontDecrease = document.getElementById('ada-font-decrease');
        const contrastToggle = document.getElementById('ada-contrast-toggle');
        const reset = document.getElementById('ada-reset');

        toggle?.addEventListener('click', () => this.toggleWidget());
        minimize?.addEventListener('click', () => this.minimizeWidget());
        fontIncrease?.addEventListener('click', () => this.changeFontSize(10));
        fontDecrease?.addEventListener('click', () => this.changeFontSize(-10));
        contrastToggle?.addEventListener('click', () => this.toggleHighContrast());
        reset?.addEventListener('click', () => this.resetSettings());

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
            widget?.classList.remove('minimized');
            this.isMinimized = false;
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
    }

    minimizeWidget() {
        const widget = document.getElementById('ada-widget');
        this.isMinimized = !this.isMinimized;
        
        if (this.isMinimized) {
            widget?.classList.add('minimized');
            this.announceToScreenReader('Accessibility panel minimized');
        } else {
            widget?.classList.remove('minimized');
            this.announceToScreenReader('Accessibility panel expanded');
        }
    }

    changeFontSize(change) {
        this.fontSize = Math.max(80, Math.min(150, this.fontSize + change));
        
        // Remove existing font size classes
        document.body.classList.remove('ada-font-110', 'ada-font-120', 'ada-font-130', 'ada-font-140', 'ada-font-150');
        
        // Add new font size class
        if (this.fontSize > 100) {
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

    resetSettings() {
        this.fontSize = 100;
        this.highContrast = false;
        
        // Remove all classes
        document.body.classList.remove('ada-font-110', 'ada-font-120', 'ada-font-130', 'ada-font-140', 'ada-font-150', 'ada-high-contrast');
        
        // Update UI
        const fontDisplay = document.getElementById('ada-font-size');
        const contrastButton = document.getElementById('ada-contrast-toggle');
        
        if (fontDisplay) fontDisplay.textContent = '100%';
        if (contrastButton) {
            contrastButton.classList.remove('active');
            contrastButton.querySelector('.ada-toggle-text').textContent = 'Off';
            contrastButton.querySelector('i').className = 'bi bi-toggle-off';
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
            highContrast: this.highContrast
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
                    this.changeFontSize(0); // Apply without changing
                }
                
                if (settings.highContrast) {
                    this.toggleHighContrast();
                }
            }
        } catch (e) {
            console.warn('Could not load ADA widget settings:', e);
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

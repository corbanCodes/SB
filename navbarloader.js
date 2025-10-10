// SchoolBlocks Navbar Loader
// This script dynamically loads the navbar HTML and CSS for reuse across pages

function loadNavbar() {
    const navbarHTML = `
        <div class="header-top">
            <div class="navbar-container">
                <div class="logo-section">
                    <a href="/" class="logo-link">
                        <img src="Photos/Logo/Logo.png" alt="SchoolBlocks" class="logo-img">
                        <span class="logo-text">SCHOOLBLOCKS</span>
                    </a>
                </div>
                
                <nav class="main-navigation">
                    <ul class="nav-menu">
                        <li><a href="/what-we-do">WHAT WE DO</a></li>
                        <li><a href="/who-we-serve">WHO WE SERVE</a></li>
                        <li><a href="/who-we-are">WHO WE ARE</a></li>
                        <li><a href="/learning-resources">LEARNING RESOURCES</a></li>
                    </ul>
                </nav>
                
                <div class="button-section">
                    <button role="button" class="toggle-search" aria-label="Site Search">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transform: scaleX(-1);">
                            <circle cx="10" cy="10" r="7"></circle>
                            <path d="m21 21-6-6"></path>
                        </svg>
                        <span class="fsStyleSROnly">Toggle Search</span>
                    </button>
                    
                    <a href="/clients" target="_blank" class="client-portal-link" data-hs-event-95043485="1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span class="fsStyleSROnly">Client Portal (opens in new window/tab)</span>
                    </a>
                    
                    <a href="/get-started" class="get-started-btn">
                        <span>GET STARTED</span>
                    </a>
                    <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </button>
                </div>
            </div>
        </div>
    `;

    const navbarCSS = `
        <style>
            /* SchoolBlocks Navbar Styles */
            .header-top {
                background: white;
                border-bottom: 1px solid #e0e0e0;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 1000;
                width: 100%;
            }
            
            /* Remove padding - we'll handle this with JavaScript */
            .main-content {
                padding-top: 0;
            }
            
            .navbar-container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 15px 40px;
                width: 100%;
                max-width: none;
            }
            
            .logo-section {
                flex: 0 0 auto;
            }
            
            .logo-link {
                display: flex;
                align-items: center;
                text-decoration: none;
                gap: 12px;
            }
            
            .logo-img {
                height: 40px;
                width: auto;
            }
            
            .logo-text {
                font-size: 1.4rem;
                font-weight: 400;
                color: #666;
                letter-spacing: 2px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            }
            
            .main-navigation {
                flex: 1;
                display: flex;
                justify-content: center;
            }
            
            .nav-menu {
                display: flex;
                list-style: none;
                margin: 0;
                padding: 0;
                gap: 40px;
            }
            
            .nav-menu li a {
                text-decoration: none;
                color: #333;
                font-weight: 500;
                font-size: 14px;
                letter-spacing: 1px;
                transition: color 0.3s ease;
            }
            
            .nav-menu li a:hover {
                color: #4A90E2;
            }
            
            .button-section {
                flex: 0 0 auto;
                display: flex;
                align-items: center;
                gap: 20px;
            }
            
            .toggle-search,
            .client-portal-link {
                background: none;
                border: none;
                color: #333;
                cursor: pointer;
                padding: 8px;
                border-radius: 4px;
                transition: color 0.3s ease;
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .toggle-search:hover,
            .client-portal-link:hover {
                color: #4A90E2;
            }
            
            .fsStyleSROnly {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0,0,0,0);
                white-space: nowrap;
                border: 0;
            }
            
            .mobile-menu-toggle {
                display: none;
                background: none;
                border: none;
                cursor: pointer;
                flex-direction: column;
                gap: 4px;
                padding: 8px;
            }
            
            .hamburger-line {
                width: 25px;
                height: 3px;
                background: #333;
                transition: all 0.3s ease;
                transform-origin: center;
            }
            
            .get-started-btn {
                background: transparent;
                color: #4A90E2 !important;
                padding: 12px 24px;
                border: 2px solid #4A90E2;
                border-radius: 25px;
                font-weight: 600;
                font-size: 14px;
                text-decoration: none;
                transition: all 0.3s ease;
                display: inline-block;
                letter-spacing: 0.5px;
            }
            
            .get-started-btn:hover {
                background: #4A90E2;
                color: white !important;
            }
            
            /* Progressive responsive adjustments to prevent text wrapping */
            @media (max-width: 1300px) {
                .nav-menu {
                    gap: 35px;
                }
                
                .navbar-container {
                    padding: 15px 30px;
                }
                
                .button-section {
                    gap: 15px;
                }
            }
            
            @media (max-width: 1250px) {
                .nav-menu {
                    gap: 30px;
                }
                
                .nav-menu li a {
                    font-size: 13px;
                    letter-spacing: 0.5px;
                }
                
                .logo-text {
                    font-size: 1.3rem;
                    letter-spacing: 1.5px;
                }
            }
            
            @media (max-width: 1200px) {
                .nav-menu {
                    gap: 25px;
                }
                
                .navbar-container {
                    padding: 15px 25px;
                }
                
                .button-section {
                    gap: 12px;
                }
            }
            
            @media (max-width: 1180px) {
                .nav-menu {
                    gap: 20px;
                }
                
                .nav-menu li a {
                    font-size: 12px;
                    letter-spacing: 0.3px;
                }
                
                .get-started-btn {
                    padding: 10px 20px;
                    font-size: 13px;
                }
            }
            
            /* Switch to hamburger menu to prevent any text wrapping */
            @media (max-width: 1160px) {
                .navbar-container {
                    padding: 15px 20px;
                }
                
                .logo-text {
                    font-size: 1.2rem;
                    letter-spacing: 1px;
                }
                
                .main-navigation {
                    display: none;
                }
                
                .toggle-search,
                .client-portal-link,
                .get-started-btn {
                    display: none;
                }
                
                .mobile-menu-toggle {
                    display: flex;
                }
                
                .main-navigation.mobile-open {
                    display: block;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    border-top: 1px solid #e0e0e0;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
                
                .main-navigation.mobile-open .nav-menu {
                    flex-direction: column;
                    gap: 0;
                    padding: 20px;
                }
                
                .main-navigation.mobile-open .nav-menu li {
                    border-bottom: 1px solid #f0f0f0;
                }
                
                .main-navigation.mobile-open .nav-menu li:last-child {
                    border-bottom: none;
                }
                
                .main-navigation.mobile-open .nav-menu li a {
                    display: block;
                    padding: 15px 0;
                    font-size: 16px;
                }
                
                .mobile-menu-toggle.active .hamburger-line:nth-child(1) {
                    transform: translateY(7px) rotate(45deg);
                }
                
                .mobile-menu-toggle.active .hamburger-line:nth-child(2) {
                    opacity: 0;
                }
                
                .mobile-menu-toggle.active .hamburger-line:nth-child(3) {
                    transform: translateY(-7px) rotate(-45deg);
                }
            }
        </style>
    `;

    // Insert CSS into head
    document.head.insertAdjacentHTML('beforeend', navbarCSS);
    
    // Insert navbar HTML
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
    }
    
    // Mobile menu toggle functionality
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-navigation');
    
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('mobile-open');
            mobileToggle.classList.toggle('active');
        });
    }
    
    // Dynamically adjust main content padding based on navbar height
    function adjustMainContentPadding() {
        const navbar = document.querySelector('.header-top');
        const mainContent = document.querySelector('.main-content');
        
        if (navbar && mainContent) {
            const navbarHeight = navbar.offsetHeight;
            mainContent.style.paddingTop = navbarHeight + 'px';
        }
    }
    
    // Adjust padding on load and resize
    adjustMainContentPadding();
    window.addEventListener('resize', adjustMainContentPadding);
}

// Auto-load navbar when DOM is ready
document.addEventListener('DOMContentLoaded', loadNavbar);

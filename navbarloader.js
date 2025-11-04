// SchoolBlocks Navbar Loader
// This script dynamically loads the navbar HTML and CSS for reuse across pages

function loadFavicon() {
    // Remove any existing favicon links
    const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
    existingFavicons.forEach(favicon => favicon.remove());
    
    // Create and add new favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = 'Photos/Logo/small sB only official.png';
    
    // Add to document head
    document.head.appendChild(favicon);
}

function loadNavbar() {
    // Load favicon first
    loadFavicon();
    const navbarHTML = `
        <div class="header-top">
            <div class="navbar-container">
                <div class="logo-section">
                    <a href="index.html" class="logo-link">
                        <img src="Photos/Logo/SchoolBlocks Logo-2024_long-logo.png" alt="SchoolBlocks" class="logo-img">
                    </a>
                </div>
                
                <nav class="main-navigation">
                    <ul class="nav-menu">
                        <li class="dropdown-menu-item">
                            <a href="/what-we-do" class="main-nav-link" data-mobile-toggle="true">
                                <span>WHAT WE DO</span>
                                <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9"></polyline>
                                </svg>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-content">
                                    <div class="dropdown-left">
                                        <ul class="dropdown-links">
                                            <li><a href="school-websites.html">School and District Websites</a></li>
                                            <li><a href="apps.html">Mobile School Apps</a></li>
                                            <li><a href="google-integration.html">Google Integration Tools</a></li>
                                            <li><a href="school-microsites.html">Microsites</a></li>
                                            <li><a href="document-engagement.html"><span class="new-badge">NEW</span> Document Engagement Platform</a></li>
                                            <li><a href="welcome-chat.html"><span class="new-badge">NEW</span> AI-powered Answers (WelcomeChat)</a></li>
                                            <li><a href="spirit-store.html"><span class="new-badge">NEW</span> Spirit Gear Store</a></li>
                                            <li><a href="schoolfeed-social.html"><span class="new-badge">NEW</span> SchoolFeed Social Platform</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="mobile-dropdown-content">
                                <ul class="mobile-dropdown-links">
                                    <li><a href="school-websites.html">School and District Websites</a></li>
                                    <li><a href="apps.html">Mobile School Apps</a></li>
                                    <li><a href="google-integration.html">Google Integration Tools</a></li>
                                    <li><a href="school-microsites.html">Microsites</a></li>
                                    <li><a href="document-engagement.html"><span class="new-badge">NEW</span> Document Engagement Platform</a></li>
                                    <li><a href="welcome-chat.html"><span class="new-badge">NEW</span> AI-powered Answers (WelcomeChat)</a></li>
                                    <li><a href="spirit-store.html"><span class="new-badge">NEW</span> Spirit Gear Store</a></li>
                                    <li><a href="schoolfeed-social.html"><span class="new-badge">NEW</span> SchoolFeed Social Platform</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="dropdown-menu-item">
                            <a href="/who-we-serve" class="main-nav-link" data-mobile-toggle="true">
                                <span>WHO WE SERVE</span>
                                <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9"></polyline>
                                </svg>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-content">
                                    <div class="dropdown-left">
                                        <ul class="dropdown-links">
                                            <li><a href="administrators.html">Administration</a></li>
                                            <li><a href="faculty.html">Faculty</a></li>
                                            <li><a href="parents.html">Parents</a></li>
                                            <li><a href="students.html">Students</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="mobile-dropdown-content">
                                <ul class="mobile-dropdown-links">
                                    <li><a href="administrators.html">Administration</a></li>
                                    <li><a href="faculty.html">Faculty</a></li>
                                    <li><a href="parents.html">Parents</a></li>
                                    <li><a href="students.html">Students</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="who-we-are.html">WHO WE ARE</a></li>
                        <li class="dropdown-menu-item">
                            <a href="/learning-resources" class="main-nav-link" data-mobile-toggle="true">
                                <span>LEARNING RESOURCES</span>
                                <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9"></polyline>
                                </svg>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-content">
                                    <div class="dropdown-left">
                                        <ul class="dropdown-links">
                                            <li><a href="/blog">Blog</a></li>
                                            <li><a href="/case-studies">Case Studies</a></li>
                                            <li><a href="/client-stories">Client Stories</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="mobile-dropdown-content">
                                <ul class="mobile-dropdown-links">
                                    <li><a href="/blog">Blog</a></li>
                                    <li><a href="/case-studies">Case Studies</a></li>
                                    <li><a href="/client-stories">Client Stories</a></li>
                                    <li><a href="/2025-communications-report">The 2025 District Communications Report</a></li>
                                </ul>
                            </div>
                        </li>
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
            }
            
            .logo-img {
                height: 56px;
                width: auto;
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
            
            /* Dropdown Menu Styles */
            .dropdown-menu-item {
                position: relative;
            }
            
            .dropdown-menu {
                position: fixed;
                top: 86px;
                left: 0;
                right: 0;
                width: 100vw;
                background: white;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
                border-top: 1px solid rgba(0, 0, 0, 0.08);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                z-index: 999;
                transform: translateY(-10px);
            }
            
            .dropdown-menu-item:hover .dropdown-menu {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            
            .dropdown-content {
                width: 100%;
                margin: 0;
                display: flex;
                padding: 0;
                height: auto;
                max-height: 350px;
                min-height: 200px;
            }
            
            .dropdown-left {
                width: 100%;
                padding: 30px 60px;
                background: #fafbfc;
                overflow-y: auto;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .dropdown-links {
                list-style: none;
                margin: 0;
                padding: 0;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
                gap: 15px 40px;
                max-width: 1000px;
                width: 100%;
                justify-content: center;
            }
            
            .dropdown-links li {
                margin-bottom: 0;
            }
            
            .dropdown-links li:last-child {
                margin-bottom: 0;
            }
            
            .dropdown-links a {
                color: #2c3e50 !important;
                text-decoration: none;
                font-size: 16px;
                font-weight: 500;
                letter-spacing: -0.2px;
                padding: 8px 0;
                display: block;
                transition: all 0.3s ease;
                border-radius: 8px;
                position: relative;
            }
            
            .dropdown-links a:hover {
                color: #4A90E2 !important;
                transform: translateX(8px);
            }
            
            .dropdown-links a::before {
                content: '';
                position: absolute;
                left: -20px;
                top: 50%;
                transform: translateY(-50%);
                width: 4px;
                height: 0;
                background: #4A90E2;
                transition: height 0.3s ease;
                border-radius: 2px;
            }
            
            .dropdown-links a:hover::before {
                height: 100%;
            }
            
            /* NEW Badge Styles */
            .new-badge {
                background: linear-gradient(135deg, #ff6b6b, #ff8e53);
                color: white;
                font-size: 8px;
                font-weight: 600;
                padding: 2px 6px;
                border-radius: 8px;
                margin-right: 6px;
                text-transform: uppercase;
                letter-spacing: 0.3px;
                display: inline-block;
                vertical-align: middle;
                box-shadow: 0 1px 4px rgba(255, 107, 107, 0.2);
                animation: pulse 3s infinite;
                line-height: 1;
                position: relative;
                top: -1px;
            }
            
            @keyframes pulse {
                0% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.02); opacity: 0.9; }
                100% { transform: scale(1); opacity: 1; }
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
                
                /* Hide dropdown on mobile */
                .dropdown-menu {
                    display: none;
                }
            }
            
            /* Responsive adjustments for dropdown */
            @media (max-width: 1400px) {
                .dropdown-left {
                    padding: 25px 50px;
                }
                
                .dropdown-content {
                    max-height: 320px;
                    min-height: 180px;
                }
                
                .dropdown-links {
                    gap: 12px 40px;
                }
            }
            
            @media (max-width: 1300px) {
                .dropdown-left {
                    padding: 25px 40px;
                }
                
                .dropdown-content {
                    max-height: 300px;
                    min-height: 160px;
                }
                
                .dropdown-links {
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 12px 35px;
                }
                
                .dropdown-links a {
                    font-size: 15px;
                    padding: 6px 0;
                }
                
                .new-badge {
                    font-size: 7px;
                    padding: 1.5px 5px;
                    margin-right: 5px;
                    border-radius: 6px;
                }
            }
            
            
            /* Optimize for medium screens */
            @media (max-width: 1250px) {
                .dropdown-content {
                    max-height: 280px;
                    min-height: 140px;
                }
                
                .dropdown-left {
                    padding: 20px 40px;
                }
                
                .dropdown-links {
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 10px 25px;
                    max-width: 900px;
                }
                
                .dropdown-links a {
                    font-size: 14px;
                    padding: 5px 0;
                }
                
                .new-badge {
                    font-size: 7px;
                    padding: 1.5px 4px;
                    margin-right: 4px;
                    border-radius: 5px;
                    top: -0.5px;
                }
            }
            
            /* Mobile dropdown styles */
            .mobile-dropdown-toggle {
                display: none;
                background: none;
                border: none;
                cursor: pointer;
                padding: 8px;
                margin-left: auto;
            }
            
            .dropdown-arrow {
                width: 16px;
                height: 16px;
                color: #333;
                transition: transform 0.3s ease;
                display: none;
            }
            
            .mobile-dropdown-content {
                display: none;
                background: white;
                margin-top: 0;
            }
            
            .mobile-dropdown-links {
                list-style: none;
                margin: 0;
                padding: 0;
            }
            
            .mobile-dropdown-links li {
                border-bottom: 1px solid #e9ecef;
            }
            
            .mobile-dropdown-links li:last-child {
                border-bottom: none;
            }
            
            .mobile-dropdown-links a {
                display: block;
                padding: 15px 30px;
                color: #495057 !important;
                text-decoration: none;
                font-size: 15px;
                font-weight: 400;
                transition: all 0.3s ease;
                background: #f8f9fa;
            }
            
            .mobile-dropdown-links a:hover {
                background: #e9ecef;
                color: #4A90E2 !important;
                padding-left: 35px;
            }
            
            /* Hide dropdown completely on mobile screens */
            @media (max-width: 1160px) {
                .dropdown-menu {
                    display: none !important;
                }
                
                .dropdown-menu-item:hover .dropdown-menu {
                    opacity: 0 !important;
                    visibility: hidden !important;
                }
                
                .mobile-dropdown-toggle {
                    display: block;
                }
                
                .main-navigation.mobile-open .dropdown-menu-item {
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                }
                
                .main-navigation.mobile-open .dropdown-menu-item > a {
                    flex: 1;
                }
                
                .main-navigation.mobile-open .nav-menu li {
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                }
                
                .main-navigation.mobile-open .nav-menu > li:not(.dropdown-menu-item) {
                    display: block;
                }
                
                .main-navigation.mobile-open .mobile-dropdown-content.open {
                    display: block;
                }
                
                .mobile-dropdown-toggle.active .dropdown-arrow {
                    transform: rotate(180deg);
                }
            }
                
                .main-navigation.mobile-open {
                    display: block;
                    position: fixed;
                    top: 86px;
                    left: 0;
                    right: 0;
                    width: 100vw;
                    background: white;
                    border-top: 1px solid #e0e0e0;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    max-height: calc(100vh - 86px);
                    overflow-y: auto;
                    -webkit-overflow-scrolling: touch;
                    z-index: 1000;
                }
                
                .main-navigation.mobile-open .nav-menu {
                    flex-direction: column;
                    gap: 0;
                    padding: 0;
                    margin: 0;
                    width: 100%;
                }
                
                .main-navigation.mobile-open .nav-menu li {
                    border-bottom: 1px solid #f0f0f0;
                    width: 100%;
                }
                
                .main-navigation.mobile-open .nav-menu li:last-child {
                    border-bottom: none;
                }
                
                .main-navigation.mobile-open .nav-menu li a {
                    display: block;
                    padding: 20px;
                    font-size: 16px;
                    width: 100%;
                }
                
                .main-navigation.mobile-open .dropdown-menu-item {
                    display: block;
                }
                
                .main-navigation.mobile-open .dropdown-menu-item > a {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 20px;
                    cursor: pointer;
                    width: 100%;
                }
                
                .main-navigation.mobile-open .dropdown-arrow {
                    display: block;
                    margin-left: auto;
                    flex-shrink: 0;
                }
                
                .main-navigation.mobile-open .dropdown-menu-item > a.active .dropdown-arrow {
                    transform: rotate(180deg);
                }
                
                .main-navigation.mobile-open .mobile-dropdown-toggle {
                    display: none;
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
    
    // Mobile dropdown toggle functionality
    const mobileNavLinks = document.querySelectorAll('[data-mobile-toggle="true"]');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only prevent default and toggle on mobile
            if (window.innerWidth <= 1160) {
                e.preventDefault();
                e.stopPropagation();
                
                const dropdownContent = link.parentElement.querySelector('.mobile-dropdown-content');
                const isOpen = dropdownContent.classList.contains('open');
                
                // Close all other dropdowns
                document.querySelectorAll('.mobile-dropdown-content.open').forEach(content => {
                    content.classList.remove('open');
                });
                document.querySelectorAll('[data-mobile-toggle="true"].active').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                
                // Toggle current dropdown
                if (!isOpen) {
                    dropdownContent.classList.add('open');
                    link.classList.add('active');
                }
            }
            // On desktop, let the link work normally
        });
    });
    
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

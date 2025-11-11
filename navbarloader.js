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
                            <a href="what-we-do.html" class="main-nav-link" data-mobile-toggle="true">
                                <span>WHAT WE DO</span>
                                <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9"></polyline>
                                </svg>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-content">
                                    <div class="dropdown-section">
                                        <h4 class="dropdown-title">Core Services</h4>
                                        <ul class="dropdown-links">
                                            <li>
                                                <a href="school-websites.html">
                                                    <i class="bi bi-globe2"></i>
                                                    <div class="link-content">
                                                        <span class="link-title">School and District Websites</span>
                                                        <span class="link-desc">Professional websites that engage communities</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="apps.html">
                                                    <i class="bi bi-phone"></i>
                                                    <div class="link-content">
                                                        <span class="link-title">Mobile School Apps</span>
                                                        <span class="link-desc">Native iOS and Android applications</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="google-integration.html">
                                                    <i class="bi bi-google"></i>
                                                    <div class="link-content">
                                                        <span class="link-title">Google Integration Tools</span>
                                                        <span class="link-desc">Seamless Google Workspace integration</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="school-microsites.html">
                                                    <i class="bi bi-layout-text-window"></i>
                                                    <div class="link-content">
                                                        <span class="link-title">Microsites</span>
                                                        <span class="link-desc">Dedicated sites for departments and events</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="dropdown-section">
                                        <h4 class="dropdown-title">New Features</h4>
                                        <ul class="dropdown-links">
                                            <li>
                                                <a href="document-engagement.html">
                                                    <i class="bi bi-file-earmark-text"></i>
                                                    <div class="link-content">
                                                        <span class="link-title">Document Engagement Platform <span class="new-badge">NEW</span></span>
                                                        <span class="link-desc">Interactive document experiences</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="welcome-chat.html">
                                                    <i class="bi bi-chat-dots"></i>
                                                    <div class="link-content">
                                                        <span class="link-title">AI-powered Answers (WelcomeChat) <span class="new-badge">NEW</span></span>
                                                        <span class="link-desc">Intelligent chatbot for instant support</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="spirit-store.html">
                                                    <i class="bi bi-shop"></i>
                                                    <div class="link-content">
                                                        <span class="link-title">Spirit Gear Store <span class="new-badge">NEW</span></span>
                                                        <span class="link-desc">Branded merchandise and fundraising</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="schoolfeed-social.html">
                                                    <i class="bi bi-people"></i>
                                                    <div class="link-content">
                                                        <span class="link-title">SchoolFeed Social Platform <span class="new-badge">NEW</span></span>
                                                        <span class="link-desc">Safe social networking for schools</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="mobile-dropdown-content">
                                <div class="mobile-dropdown-header">
                                    <a href="what-we-do.html" class="mobile-dropdown-main-link">
                                        <i class="bi bi-arrow-right-circle"></i>
                                        <span>Explore Our Platform</span>
                                    </a>
                                </div>
                                <ul class="mobile-dropdown-links">
                                    <li><a href="school-websites.html"><i class="bi bi-globe2"></i>School and District Websites</a></li>
                                    <li><a href="apps.html"><i class="bi bi-phone"></i>Mobile School Apps</a></li>
                                    <li><a href="google-integration.html"><i class="bi bi-google"></i>Google Integration Tools</a></li>
                                    <li><a href="school-microsites.html"><i class="bi bi-layout-text-window"></i>Microsites</a></li>
                                    <li><a href="document-engagement.html"><i class="bi bi-file-earmark-text"></i><span class="new-badge">NEW</span> Document Engagement Platform</a></li>
                                    <li><a href="welcome-chat.html"><i class="bi bi-chat-dots"></i><span class="new-badge">NEW</span> AI-powered Answers (WelcomeChat)</a></li>
                                    <li><a href="spirit-store.html"><i class="bi bi-shop"></i><span class="new-badge">NEW</span> Spirit Gear Store</a></li>
                                    <li><a href="schoolfeed-social.html"><i class="bi bi-people"></i><span class="new-badge">NEW</span> SchoolFeed Social Platform</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="dropdown-menu-item">
                            <a href="who-we-serve.html" class="main-nav-link" data-mobile-toggle="true">
                                <span>WHO WE SERVE</span>
                                <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9"></polyline>
                                </svg>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-content">
                                    <div class="dropdown-section">
                                        <h4 class="dropdown-title">Our Community</h4>
                                        <ul class="dropdown-links">
                                            <li>
                                                <a href="administrators.html">
                                                    <i class="bi bi-person-badge"></i>
                                                    <div class="link-content">
                                                        <span class="link-title">Administration</span>
                                                        <span class="link-desc">Strategic leadership tools and insights</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="faculty.html">
                                                    <i class="bi bi-mortarboard"></i>
                                                    <div class="link-content">
                                                        <span class="link-title">Faculty</span>
                                                        <span class="link-desc">Empower your greatest asset</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="parents.html">
                                                    <i class="bi bi-house-heart"></i>
                                                    <div class="link-content">
                                                        <span class="link-title">Parents</span>
                                                        <span class="link-desc">Stay connected and informed</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="students.html">
                                                    <i class="bi bi-backpack"></i>
                                                    <div class="link-content">
                                                        <span class="link-title">Students</span>
                                                        <span class="link-desc">Student-centered digital experience</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="mobile-dropdown-content">
                                <div class="mobile-dropdown-header">
                                    <a href="who-we-serve.html" class="mobile-dropdown-main-link">
                                        <i class="bi bi-people-fill"></i>
                                        <span>Meet Our Community</span>
                                    </a>
                                </div>
                                <ul class="mobile-dropdown-links">
                                    <li><a href="administrators.html"><i class="bi bi-person-badge"></i>Administration</a></li>
                                    <li><a href="faculty.html"><i class="bi bi-mortarboard"></i>Faculty</a></li>
                                    <li><a href="parents.html"><i class="bi bi-house-heart"></i>Parents</a></li>
                                    <li><a href="students.html"><i class="bi bi-backpack"></i>Students</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="who-we-are.html">WHO WE ARE</a></li>
                        <li class="dropdown-menu-item">
                            <a href="learning-resources.html" class="main-nav-link" data-mobile-toggle="true">
                                <span>LEARNING RESOURCES</span>
                                <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9"></polyline>
                                </svg>
                            </a>
                            <div class="dropdown-menu">
                                <div class="dropdown-content">
                                    <div class="dropdown-section">
                                        <h4 class="dropdown-title">Learn & Explore</h4>
                                        <ul class="dropdown-links">
                                            <li>
                                                <a href="blog.html">
                                                    <i class="bi bi-journal-text"></i>
                                                    <div class="link-content">
                                                        <span class="link-title">Blog</span>
                                                        <span class="link-desc">Insights & tips from education experts</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="case-studies.html">
                                                    <i class="bi bi-graph-up"></i>
                                                    <div class="link-content">
                                                        <span class="link-title">Case Studies</span>
                                                        <span class="link-desc">In-depth analysis & measurable outcomes</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="client-stories.html">
                                                    <i class="bi bi-chat-quote"></i>
                                                    <div class="link-content">
                                                        <span class="link-title">Client Stories</span>
                                                        <span class="link-desc">Real schools, real success stories</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="mobile-dropdown-content">
                                <div class="mobile-dropdown-header">
                                    <a href="learning-resources.html" class="mobile-dropdown-main-link">
                                        <i class="bi bi-book-half"></i>
                                        <span>Start Learning Today</span>
                                    </a>
                                </div>
                                <ul class="mobile-dropdown-links">
                                    <li><a href="blog.html"><i class="bi bi-journal-text"></i>Blog</a></li>
                                    <li><a href="case-studies.html"><i class="bi bi-graph-up"></i>Case Studies</a></li>
                                    <li><a href="client-stories.html"><i class="bi bi-chat-quote"></i>Client Stories</a></li>
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
                    
                    <a href="//help.schoolblocks.com" target="_blank" class="client-portal-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span class="fsStyleSROnly">Client Portal (opens in new window/tab)</span>
                    </a>
                    
                    <a href="get-started.html" class="get-started-btn">
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" rel="stylesheet">
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
            
            /* Modern Dropdown Menu Styles */
            .dropdown-menu-item {
                position: relative;
            }
            
            .dropdown-menu {
                position: absolute !important;
                top: 100% !important;
                left: 50% !important;
                transform: translateX(-50%) !important;
                background: white !important;
                border-radius: 12px !important;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15) !important;
                border: 1px solid rgba(74, 144, 226, 0.1) !important;
                opacity: 0 !important;
                visibility: hidden !important;
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
                z-index: 9999 !important;
                transform: translateX(-50%) translateY(-10px) !important;
                min-width: 320px !important;
                max-width: 480px !important;
                width: max-content !important;
                margin-top: 8px !important;
            }
            
            /* Wider dropdown for "What We Do" with more content */
            .dropdown-menu-item:first-child .dropdown-menu {
                min-width: 420px;
                max-width: 580px;
            }
            
            .dropdown-menu-item:hover .dropdown-menu {
                opacity: 1 !important;
                visibility: visible !important;
                transform: translateX(-50%) translateY(0) !important;
            }
            
            .dropdown-content {
                padding: 16px;
            }
            
            .dropdown-section {
                margin-bottom: 0;
            }
            
            .dropdown-section + .dropdown-section {
                margin-top: 16px;
                padding-top: 16px;
                border-top: 1px solid rgba(74, 144, 226, 0.1);
            }
            
            .dropdown-title {
                font-size: 13px;
                font-weight: 600;
                color: #74a9e8;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin: 0 0 12px 0;
                padding: 0 12px;
            }
            
            .dropdown-links {
                list-style: none;
                margin: 0;
                padding: 0;
            }
            
            .dropdown-links li {
                margin: 0;
            }
            
            .dropdown-links a {
                display: flex;
                align-items: flex-start;
                padding: 12px;
                text-decoration: none;
                border-radius: 8px;
                transition: all 0.2s ease;
                color: #2c3e50 !important;
                gap: 12px;
            }
            
            .dropdown-links a:hover {
                background: rgba(74, 144, 226, 0.08);
                color: #4A90E2 !important;
                transform: translateY(-1px);
            }
            
            .dropdown-links a i {
                font-size: 18px;
                color: #74a9e8;
                flex-shrink: 0;
                margin-top: 2px;
            }
            
            .dropdown-links a:hover i {
                color: #4A90E2;
            }
            
            .link-content {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }
            
            .link-title {
                font-size: 14px;
                font-weight: 600;
                color: inherit;
                line-height: 1.3;
            }
            
            .link-desc {
                font-size: 12px;
                color: #6c757d;
                line-height: 1.4;
                font-weight: 400;
            }
            
            .dropdown-links a:hover .link-desc {
                color: #5a6c7d;
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
            
            /* Responsive adjustments for modern dropdown */
            @media (max-width: 1400px) {
                .dropdown-menu {
                    min-width: 300px;
                    max-width: 420px;
                }
                
                .dropdown-content {
                    padding: 14px;
                }
                
                .dropdown-links a {
                    padding: 10px;
                }
                
                .link-title {
                    font-size: 13px;
                }
                
                .link-desc {
                    font-size: 11px;
                }
            }
            
            @media (max-width: 1300px) {
                .dropdown-menu {
                    min-width: 280px;
                    max-width: 380px;
                }
                
                .dropdown-content {
                    padding: 12px;
                }
                
                .dropdown-links a {
                    padding: 8px;
                    gap: 10px;
                }
                
                .dropdown-links a i {
                    font-size: 16px;
                }
                
                .link-title {
                    font-size: 12px;
                }
                
                .link-desc {
                    font-size: 10px;
                }
                
                .dropdown-title {
                    font-size: 11px;
                    margin-bottom: 8px;
                }
            }
            
            @media (max-width: 1250px) {
                .dropdown-menu {
                    min-width: 260px;
                    max-width: 340px;
                }
                
                .dropdown-links a {
                    padding: 6px;
                }
                
                .new-badge {
                    font-size: 7px;
                    padding: 1px 4px;
                    margin-left: 4px;
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
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                margin: 8px 16px;
            }
            
            .mobile-dropdown-header {
                background: linear-gradient(135deg, #4A90E2, #357ABD);
                padding: 0;
                margin: 0;
                border-bottom: 1px solid rgba(0,0,0,0.1);
            }
            
            .mobile-dropdown-main-link {
                display: flex !important;
                align-items: center !important;
                padding: 16px 20px !important;
                color: white !important;
                text-decoration: none !important;
                font-weight: 600 !important;
                font-size: 15px !important;
                gap: 12px !important;
                transition: all 0.3s ease !important;
            }
            
            .mobile-dropdown-main-link:hover {
                background: rgba(255, 255, 255, 0.1) !important;
                color: white !important;
            }
            
            .mobile-dropdown-main-link i {
                font-size: 18px !important;
                color: white !important;
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
                display: flex !important;
                align-items: center !important;
                padding: 15px 20px !important;
                color: #495057 !important;
                text-decoration: none !important;
                font-size: 15px !important;
                font-weight: 400 !important;
                transition: all 0.3s ease !important;
                background: #f8f9fa !important;
                gap: 12px !important;
            }
            
            .mobile-dropdown-links a:hover {
                background: #e9ecef !important;
                color: #4A90E2 !important;
                transform: translateX(4px) !important;
            }
            
            .mobile-dropdown-links a i {
                font-size: 16px !important;
                color: #74a9e8 !important;
                flex-shrink: 0 !important;
                width: 20px !important;
                text-align: center !important;
            }
            
            .mobile-dropdown-links a:hover i {
                color: #4A90E2 !important;
            }
            
            .mobile-dropdown-links .new-badge {
                margin-left: 8px !important;
                margin-right: 0 !important;
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
                    display: flex !important;
                    align-items: center !important;
                    justify-content: space-between !important;
                    padding: 20px !important;
                    cursor: pointer !important;
                    width: 100% !important;
                    text-decoration: none !important;
                    color: #333 !important;
                    background: transparent !important;
                    border: none !important;
                    font-size: 16px !important;
                    font-weight: 500 !important;
                    transition: background-color 0.3s ease !important;
                }
                
                .main-navigation.mobile-open .dropdown-menu-item > a:hover,
                .main-navigation.mobile-open .dropdown-menu-item > a:focus {
                    background-color: #f8f9fa !important;
                    color: #4A90E2 !important;
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
        console.log('✅ Navbar HTML loaded successfully');
        
        // Debug: Check if dropdown elements exist
        setTimeout(() => {
            const dropdowns = document.querySelectorAll('.dropdown-menu');
            console.log(`📋 Found ${dropdowns.length} dropdown menus`);
            dropdowns.forEach((dropdown, index) => {
                const computedStyle = window.getComputedStyle(dropdown);
                console.log(`Dropdown ${index}: position=${computedStyle.position}, z-index=${computedStyle.zIndex}, opacity=${computedStyle.opacity}`);
            });
        }, 100);
    } else {
        console.error('❌ navbar-container not found!');
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
                console.log('📱 Mobile dropdown clicked:', link.textContent.trim());
                e.preventDefault();
                e.stopPropagation();
                
                const dropdownContent = link.parentElement.querySelector('.mobile-dropdown-content');
                const isOpen = dropdownContent.classList.contains('open');
                
                console.log('📋 Dropdown state:', isOpen ? 'open' : 'closed');
                
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
                    console.log('✅ Dropdown opened');
                } else {
                    console.log('❌ Dropdown closed');
                }
            }
            // On desktop, let the link work normally
        });
        
        // Add touch event for better mobile responsiveness
        link.addEventListener('touchstart', (e) => {
            if (window.innerWidth <= 1160) {
                // Add visual feedback on touch
                link.style.backgroundColor = '#f8f9fa';
                setTimeout(() => {
                    link.style.backgroundColor = '';
                }, 150);
            }
        });
    });
    
    // Load search functionality after navbar is ready
    const searchScript = document.createElement('script');
    searchScript.src = 'search.js';
    searchScript.onload = () => {
        console.log('Search script loaded successfully');
    };
    searchScript.onerror = () => {
        console.error('Failed to load search script');
    };
    document.head.appendChild(searchScript);
    
    // Load cookie consent functionality
    const cookieScript = document.createElement('script');
    cookieScript.src = 'cookieloader.js';
    cookieScript.onload = () => {
        console.log('Cookie consent script loaded successfully');
    };
    cookieScript.onerror = () => {
        console.error('Failed to load cookie consent script');
    };
    document.head.appendChild(cookieScript);
    
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
    
    // Load Help Scout Beacon Chat Widget
    function loadChatWidget() {
        try {
            console.log('Starting Help Scout Beacon chat widget initialization...');
            
            // Help Scout Beacon initialization script
            !function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});
            
            // Wait a bit for the script to load, then initialize
            setTimeout(() => {
                if (window.Beacon) {
                    console.log('Beacon object found, initializing...');
                    // Initialize Beacon with SchoolBlocks ID
                    window.Beacon('init', '86c64d0d-c7d8-48ca-9917-5138db3cb7b0');
                    console.log('Help Scout Beacon chat widget initialized successfully');
                    
                    // Check if widget elements exist after initialization
                    setTimeout(() => {
                        const beaconElements = document.querySelectorAll('[data-beacon], [class*="beacon"], [id*="beacon"]');
                        console.log('Found Beacon elements:', beaconElements.length);
                        beaconElements.forEach((el, index) => {
                            console.log(`Beacon element ${index}:`, el, 'Visible:', el.offsetParent !== null);
                        });
                    }, 3000);
                } else {
                    console.error('Beacon object not found - chat widget may not load');
                }
            }, 2000);
            
        } catch (error) {
            console.error('Error loading Help Scout Beacon chat widget:', error);
        }
    }
    
    // Load chat widget after a short delay to ensure page is ready
    setTimeout(loadChatWidget, 1500);
}

// Auto-load navbar when DOM is ready
document.addEventListener('DOMContentLoaded', loadNavbar);

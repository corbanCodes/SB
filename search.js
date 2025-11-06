// Modern Search Component for SchoolBlocks
// Provides fast, beautiful search across all site pages

class ModernSearch {
    constructor() {
        this.isOpen = false;
        this.selectedIndex = -1;
        this.searchData = [
            // Main Pages
            { title: "Home", url: "index.html", description: "SchoolBlocks - Inspiring School Connections", category: "Main" },
            { title: "What We Do", url: "what-we-do.html", description: "Community Relationship Management Platform", category: "Main" },
            { title: "Who We Serve", url: "who-we-serve.html", description: "Administration, Faculty, Parents, Students", category: "Main" },
            { title: "Who We Are", url: "who-we-are.html", description: "About SchoolBlocks team and mission", category: "Main" },
            { title: "Learning Resources", url: "learning-resources.html", description: "Blog, case studies, and client stories", category: "Main" },
            
            // Products & Services
            { title: "School Websites", url: "school-websites.html", description: "Professional school district websites", category: "Products" },
            { title: "Mobile Apps", url: "apps.html", description: "Custom school mobile applications", category: "Products" },
            { title: "Google Integration", url: "google-integration.html", description: "Google for Education tools and integration", category: "Products" },
            { title: "Microsoft Integration", url: "microsoft-integration.html", description: "Microsoft education platform integration", category: "Products" },
            { title: "School Microsites", url: "school-microsites.html", description: "Specialized microsites for schools", category: "Products" },
            { title: "Document Engagement", url: "document-engagement.html", description: "DocMersion - Interactive document platform", category: "Products" },
            { title: "WelcomeChat", url: "welcome-chat.html", description: "AI-powered answers for school websites", category: "Products" },
            { title: "Spirit Store", url: "spirit-store.html", description: "School spirit gear and merchandise", category: "Products" },
            { title: "SchoolFeed Social", url: "schoolfeed-social.html", description: "Social platform for school communities", category: "Products" },
            
            // Audiences
            { title: "Administrators", url: "administrators.html", description: "Solutions for school administration", category: "Audiences" },
            { title: "Faculty", url: "faculty.html", description: "Tools and resources for teachers", category: "audiences" },
            { title: "Parents", url: "parents.html", description: "Parent engagement and communication", category: "Audiences" },
            { title: "Students", url: "students.html", description: "Student-focused features and tools", category: "Audiences" },
            
            // Resources
            { title: "Blog", url: "blog.html", description: "Latest insights and school technology trends", category: "Resources" },
            { title: "Case Studies", url: "case-studies.html", description: "Success stories from our school partners", category: "Resources" },
            { title: "Client Stories", url: "client-stories.html", description: "Real experiences from school districts", category: "Resources" },
            
            // Specialized Pages
            { title: "ADA Compliance", url: "ada-compliance.html", description: "Website accessibility and compliance", category: "Features" },
            { title: "Webmaster Success", url: "webmaster-success.html", description: "Tools for successful school webmasters", category: "Features" },
            { title: "Hosting", url: "hosting.html", description: "Reliable school website hosting solutions", category: "Services" }
        ];
        
        this.init();
    }
    
    init() {
        this.createSearchOverlay();
        this.bindEvents();
    }
    
    createSearchOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'search-overlay';
        overlay.innerHTML = `
            <div class="search-backdrop"></div>
            <div class="search-container">
                <div class="search-header">
                    <div class="search-input-wrapper">
                        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="10" cy="10" r="7"></circle>
                            <path d="m21 21-6-6"></path>
                        </svg>
                        <input type="text" id="search-input" placeholder="Search pages, features, or topics..." autocomplete="off" spellcheck="false">
                        <button class="search-close" aria-label="Close search">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="search-content">
                    <div class="search-results" id="search-results"></div>
                    <div class="search-footer">
                        <div class="search-shortcuts">
                            <span class="shortcut"><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
                            <span class="shortcut"><kbd>Enter</kbd> Select</span>
                            <span class="shortcut"><kbd>Esc</kbd> Close</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        this.addStyles();
    }
    
    addStyles() {
        const styles = `
            <style id="modern-search-styles">
                #search-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 10000;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
                }
                
                #search-overlay.active {
                    opacity: 1;
                    visibility: visible;
                }
                
                .search-backdrop {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                }
                
                .search-container {
                    position: relative;
                    max-width: 600px;
                    margin: 80px auto 0;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border-radius: 16px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    overflow: hidden;
                    transform: translateY(-20px) scale(0.95);
                    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
                }
                
                #search-overlay.active .search-container {
                    transform: translateY(0) scale(1);
                }
                
                .search-header {
                    padding: 20px 24px;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
                }
                
                .search-input-wrapper {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                
                .search-icon {
                    width: 20px;
                    height: 20px;
                    color: #6b7280;
                    flex-shrink: 0;
                }
                
                #search-input {
                    flex: 1;
                    border: none;
                    outline: none;
                    background: transparent;
                    font-size: 18px;
                    font-weight: 400;
                    color: #1f2937;
                    placeholder-color: #9ca3af;
                }
                
                #search-input::placeholder {
                    color: #9ca3af;
                }
                
                .search-close {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 4px;
                    border-radius: 6px;
                    color: #6b7280;
                    transition: all 0.2s ease;
                    flex-shrink: 0;
                }
                
                .search-close:hover {
                    background: rgba(0, 0, 0, 0.05);
                    color: #374151;
                }
                
                .search-close svg {
                    width: 18px;
                    height: 18px;
                }
                
                .search-content {
                    max-height: 400px;
                    overflow-y: auto;
                }
                
                .search-results {
                    padding: 8px 0;
                }
                
                .search-result {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    padding: 12px 24px;
                    cursor: pointer;
                    transition: all 0.15s ease;
                    border-left: 3px solid transparent;
                }
                
                .search-result:hover,
                .search-result.selected {
                    background: rgba(74, 144, 226, 0.08);
                    border-left-color: #4A90E2;
                }
                
                .search-result-icon {
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    margin-top: 2px;
                }
                
                .search-result-icon.main { background: linear-gradient(135deg, #4A90E2, #357ABD); }
                .search-result-icon.products { background: linear-gradient(135deg, #10b981, #059669); }
                .search-result-icon.audiences { background: linear-gradient(135deg, #f59e0b, #d97706); }
                .search-result-icon.resources { background: linear-gradient(135deg, #8b5cf6, #7c3aed); }
                .search-result-icon.features { background: linear-gradient(135deg, #ef4444, #dc2626); }
                .search-result-icon.services { background: linear-gradient(135deg, #06b6d4, #0891b2); }
                
                .search-result-icon svg {
                    width: 16px;
                    height: 16px;
                    color: white;
                }
                
                .search-result-content {
                    flex: 1;
                    min-width: 0;
                }
                
                .search-result-title {
                    font-size: 16px;
                    font-weight: 600;
                    color: #1f2937;
                    margin-bottom: 2px;
                    line-height: 1.3;
                }
                
                .search-result-description {
                    font-size: 14px;
                    color: #6b7280;
                    line-height: 1.4;
                }
                
                .search-result-category {
                    font-size: 11px;
                    font-weight: 500;
                    color: #9ca3af;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-top: 4px;
                }
                
                .search-footer {
                    padding: 16px 24px;
                    border-top: 1px solid rgba(0, 0, 0, 0.08);
                    background: rgba(249, 250, 251, 0.8);
                }
                
                .search-shortcuts {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                    justify-content: center;
                }
                
                .shortcut {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 12px;
                    color: #6b7280;
                }
                
                .shortcut kbd {
                    background: white;
                    border: 1px solid #d1d5db;
                    border-radius: 4px;
                    padding: 2px 6px;
                    font-size: 11px;
                    font-weight: 500;
                    color: #374151;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                }
                
                .no-results {
                    padding: 40px 24px;
                    text-align: center;
                    color: #6b7280;
                }
                
                .no-results-icon {
                    width: 48px;
                    height: 48px;
                    margin: 0 auto 16px;
                    opacity: 0.5;
                }
                
                .no-results-title {
                    font-size: 16px;
                    font-weight: 600;
                    margin-bottom: 4px;
                }
                
                .no-results-description {
                    font-size: 14px;
                }
                
                /* Mobile responsive */
                @media (max-width: 768px) {
                    .search-container {
                        margin: 20px;
                        margin-top: 60px;
                        max-width: none;
                    }
                    
                    .search-header {
                        padding: 16px 20px;
                    }
                    
                    #search-input {
                        font-size: 16px;
                    }
                    
                    .search-result {
                        padding: 12px 20px;
                    }
                    
                    .search-footer {
                        padding: 12px 20px;
                    }
                    
                    .search-shortcuts {
                        gap: 12px;
                    }
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }
    
    bindEvents() {
        // Search button click
        document.addEventListener('click', (e) => {
            if (e.target.closest('.toggle-search')) {
                e.preventDefault();
                console.log('Search button clicked!'); // Debug log
                this.open();
            }
        });
        
        // Close events
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('search-backdrop') || e.target.closest('.search-close')) {
                this.close();
            }
        });
        
        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
            
            // Cmd/Ctrl + K to open search
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                this.open();
            }
            
            if (this.isOpen) {
                this.handleKeyNavigation(e);
            }
        });
        
        // Search input
        document.addEventListener('input', (e) => {
            if (e.target.id === 'search-input') {
                this.handleSearch(e.target.value);
            }
        });
    }
    
    open() {
        this.isOpen = true;
        const overlay = document.getElementById('search-overlay');
        const input = document.getElementById('search-input');
        
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus input after animation
        setTimeout(() => {
            input.focus();
            this.showAllResults();
        }, 100);
    }
    
    close() {
        this.isOpen = false;
        const overlay = document.getElementById('search-overlay');
        const input = document.getElementById('search-input');
        
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        input.value = '';
        this.selectedIndex = -1;
    }
    
    handleSearch(query) {
        const results = this.searchData.filter(item => {
            const searchText = `${item.title} ${item.description} ${item.category}`.toLowerCase();
            return searchText.includes(query.toLowerCase());
        });
        
        this.displayResults(results, query);
    }
    
    showAllResults() {
        this.displayResults(this.searchData, '');
    }
    
    displayResults(results, query) {
        const container = document.getElementById('search-results');
        
        if (results.length === 0 && query) {
            container.innerHTML = `
                <div class="no-results">
                    <svg class="no-results-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="10" cy="10" r="7"></circle>
                        <path d="m21 21-6-6"></path>
                    </svg>
                    <div class="no-results-title">No results found</div>
                    <div class="no-results-description">Try searching for something else</div>
                </div>
            `;
            return;
        }
        
        container.innerHTML = results.map((item, index) => `
            <div class="search-result" data-index="${index}" data-url="${item.url}">
                <div class="search-result-icon ${item.category.toLowerCase()}">
                    ${this.getCategoryIcon(item.category)}
                </div>
                <div class="search-result-content">
                    <div class="search-result-title">${this.highlightText(item.title, query)}</div>
                    <div class="search-result-description">${this.highlightText(item.description, query)}</div>
                    <div class="search-result-category">${item.category}</div>
                </div>
            </div>
        `).join('');
        
        // Add click handlers
        container.querySelectorAll('.search-result').forEach(result => {
            result.addEventListener('click', () => {
                const url = result.dataset.url;
                window.location.href = url;
            });
        });
        
        this.selectedIndex = -1;
    }
    
    getCategoryIcon(category) {
        const icons = {
            'Main': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9,22 9,12 15,12 15,22"></polyline></svg>',
            'Products': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
            'Audiences': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
            'Resources': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline></svg>',
            'Features': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>',
            'Services': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>'
        };
        return icons[category] || icons['Main'];
    }
    
    highlightText(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark style="background: #fef3c7; color: #92400e; padding: 0 2px; border-radius: 2px;">$1</mark>');
    }
    
    handleKeyNavigation(e) {
        const results = document.querySelectorAll('.search-result');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.selectedIndex = Math.min(this.selectedIndex + 1, results.length - 1);
            this.updateSelection(results);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
            this.updateSelection(results);
        } else if (e.key === 'Enter' && this.selectedIndex >= 0) {
            e.preventDefault();
            const selectedResult = results[this.selectedIndex];
            if (selectedResult) {
                window.location.href = selectedResult.dataset.url;
            }
        }
    }
    
    updateSelection(results) {
        results.forEach((result, index) => {
            result.classList.toggle('selected', index === this.selectedIndex);
        });
        
        // Scroll selected item into view
        if (this.selectedIndex >= 0) {
            results[this.selectedIndex].scrollIntoView({
                block: 'nearest',
                behavior: 'smooth'
            });
        }
    }
}

// Initialize search when DOM is ready
function initializeSearch() {
    console.log('Search script loaded and initializing...'); // Debug log
    if (!window.searchInstance) {
        window.searchInstance = new ModernSearch();
    }
}

// Try multiple initialization methods to ensure it works
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSearch);
} else {
    // DOM already loaded
    initializeSearch();
}

// Also try after a short delay as fallback
setTimeout(initializeSearch, 100);

// Export for potential external use
window.ModernSearch = ModernSearch;

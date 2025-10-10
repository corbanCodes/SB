// Modern Grid Testimonial Carousel
class TestimonialCarousel {
    constructor() {
        this.track = document.getElementById('testimonial-track');
        this.dots = document.querySelectorAll('.testimonial-dot');
        
        this.currentGroup = 0;
        this.totalGroups = 2; // 2 groups of 3 testimonials each
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    init() {
        if (!this.track) return;
        
        this.setupEventListeners();
        this.updateCarousel();
        this.startAutoPlay();
    }
    
    setupEventListeners() {
        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToGroup(index));
        });
        
        // Pause auto-play on hover
        this.track.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.track.addEventListener('mouseleave', () => this.startAutoPlay());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevGroup();
            if (e.key === 'ArrowRight') this.nextGroup();
        });
        
        // Touch/swipe support
        this.setupTouchEvents();
    }
    
    setupTouchEvents() {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            this.stopAutoPlay();
        });
        
        this.track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });
        
        this.track.addEventListener('touchend', () => {
            if (!isDragging) return;
            
            const diffX = startX - currentX;
            const threshold = 50;
            
            if (Math.abs(diffX) > threshold) {
                if (diffX > 0) {
                    this.nextGroup();
                } else {
                    this.prevGroup();
                }
            }
            
            isDragging = false;
            this.startAutoPlay();
        });
    }
    
    updateCarousel() {
        const translateX = -this.currentGroup * 100;
        this.track.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentGroup);
        });
    }
    
    nextGroup() {
        if (this.currentGroup < this.totalGroups - 1) {
            this.currentGroup++;
        } else {
            // Cycle to beginning
            this.currentGroup = 0;
        }
        this.updateCarousel();
    }
    
    prevGroup() {
        if (this.currentGroup > 0) {
            this.currentGroup--;
        } else {
            // Cycle to end
            this.currentGroup = this.totalGroups - 1;
        }
        this.updateCarousel();
    }
    
    goToGroup(groupIndex) {
        this.currentGroup = groupIndex;
        this.updateCarousel();
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextGroup();
        }, 8000); // Change group every 8 seconds
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TestimonialCarousel();
});

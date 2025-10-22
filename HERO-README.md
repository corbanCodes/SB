# Hero Component

A reusable, mobile-responsive hero section component for SchoolBlocks websites. Based on the provided design with a blue theme and modern styling.

## Features

- **Mobile Responsive**: Automatically adapts to all screen sizes
- **Full Viewport Height**: Takes up entire viewport minus navbar height
- **Customizable**: Easy to configure text, colors, and images
- **Blue Theme**: Styled with a professional blue color scheme
- **Partner Integration**: Optional partner logos/buttons
- **Modern Design**: Clean, contemporary styling with smooth animations

## Usage

### 1. Include the Component

```html
<!-- Include the hero component script -->
<script src="hero.js"></script>
```

### 2. Create a Container

```html
<!-- Create a container for the hero component -->
<div id="hero-section"></div>
```

### 3. Initialize the Component

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Basic usage with default configuration
    HeroComponent.create({}, 'hero-section');
    
    // Or with custom configuration
    HeroComponent.create({
        title: "Your Custom Title",
        subtitle: "Your Custom Subtitle",
        description: "Your custom description text...",
        ctaText: "GET STARTED",
        ctaUrl: "/get-started",
        showPartners: true
    }, 'hero-section');
});
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `title` | String | "Smarter School Websites" | Main hero title |
| `subtitle` | String | "Better-Informed Communities" | Hero subtitle |
| `description` | String | Default description | Hero description text |
| `ctaText` | String | "GET STARTED" | Call-to-action button text |
| `ctaUrl` | String | "/get-started" | Call-to-action button URL |
| `heroImage` | String | "Photos/Images/HomePage/horovectorart.png" | Hero image path |
| `showPartners` | Boolean | true | Whether to show partner buttons |
| `backgroundColor` | String | "#E8F4FD" | Background color |

## Examples

### Basic Hero
```javascript
HeroComponent.create({}, 'hero-container');
```

### Custom Hero
```javascript
HeroComponent.create({
    title: "Welcome to Our School",
    subtitle: "Excellence in Education",
    description: "We provide world-class education with modern technology and caring teachers.",
    ctaText: "ENROLL NOW",
    ctaUrl: "/enrollment",
    showPartners: false
}, 'hero-container');
```

### Different Background Color
```javascript
HeroComponent.create({
    backgroundColor: "#F0F8FF",
    title: "Custom Background",
    subtitle: "Light Blue Theme"
}, 'hero-container');
```

## Responsive Behavior

- **Desktop (1024px+)**: Two-column layout with text on left, image on right
- **Tablet (768px-1024px)**: Reduced spacing, smaller text sizes
- **Mobile (768px and below)**: Single column, stacked layout, image on top
- **Small Mobile (480px and below)**: Further optimized spacing and text sizes

## File Structure

```
hero.js                 # Main component file
hero-illustration.svg   # Default hero illustration
hero-usage-example.html # Usage examples
HERO-README.md         # This documentation
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE11+ (with polyfills)

## Customization

The component is designed to be easily customizable. You can:

1. **Change Colors**: Modify the CSS variables in the component
2. **Update Images**: Replace the default illustration with your own
3. **Modify Layout**: Adjust the grid structure for different layouts
4. **Add Animations**: Extend with additional CSS animations

## Integration with Existing Sites

To integrate with existing SchoolBlocks sites:

1. Include `hero.js` in your HTML head
2. Replace existing hero HTML with `<div id="hero-section"></div>`
3. Initialize the component with your desired configuration
4. Remove old hero CSS styles to avoid conflicts

## Notes

- The component automatically handles navbar height calculations
- Partner logos use existing Google and Microsoft assets
- All animations are CSS-based for optimal performance
- The component is self-contained with no external dependencies

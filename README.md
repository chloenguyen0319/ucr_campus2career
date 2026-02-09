# UCR Campus to Career Session Series

A landing page for the UCR Campus to Career Session Series event, showcasing guest speakers and event registration information.

## 📁 Project Structure

```
ucr_campus2career/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
├── js/                 # JavaScript files (for future use)
├── assets/             # Images, icons, and other static resources
└── README.md           # Project documentation
```

## 🎨 Design Features

- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **UCR Branding**: Uses official UCR colors (Blue: #003DA5, Gold: #FFB81C)
- **Interactive Elements**: Hover effects on speaker cards and buttons
- **Modern Typography**: Combines EB Garamond, Fira Sans, and Oswald fonts

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies required! This is a static HTML site.

### Running Locally

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Or use a simple HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (with http-server installed)
   npx http-server
   ```

## 📝 Customization Guide

### Event Information
Update event details in `index.html` under the `.info-strip` section:
- Date
- Time
- Venue

### Speakers
Modify speaker information in the `.speakers-section`:
- Replace image URLs
- Update names, roles, and companies

### Branding Colors
Customize colors in `css/styles.css` by modifying the CSS variables:
```css
:root {
    --brand-blue: #003DA5;
    --brand-gold: #FFB81C;
    --white: #ffffff;
    --overlay: rgba(0, 0, 0, 0.2);
}
```

### Registration Link
Update the registration button URL in `index.html`:
```html
<a href="YOUR_REGISTRATION_URL" class="btn">Register Now</a>
```

## 🔧 Future Enhancements

- [ ] Add JavaScript for form validation
- [ ] Implement countdown timer to event
- [ ] Add smooth scroll navigation
- [ ] Include speaker bio modals
- [ ] Add social media sharing buttons
- [ ] Implement actual registration form

## 📄 License

© 2025 A. Gary Anderson Graduate School of Management, University of California, Riverside

## 👥 Contact

For questions or updates, contact the UCR Anderson School of Management.


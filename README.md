# KeffiRooms - Static HTML/CSS/JavaScript Version

A pure static version of KeffiRooms with zero dependencies. Works by simply opening `index.html` in any browser.

## Features

- **Pure HTML/CSS/JavaScript** - No build tools, frameworks, or dependencies
- **Dark & Light Mode** - Toggle in top-right corner
- **Fully Responsive** - Mobile, tablet, and desktop
- **Glassmorphism Design** - Premium frosted glass effects
- **Smooth Animations** - Fade-in, slide-in, and glow effects
- **WhatsApp Integration** - Contact agents via WhatsApp
- **Material Symbols** - Professional icon system (no emojis)
- **All Pages Included**:
  - Landing page with role selection
  - Seeker home with property listings
  - Agent dashboard
  - Admin verification panel
  - Authentication screens

## Quick Start

### Option 1: Open Directly
1. Extract the zip file
2. Double-click `index.html`
3. Done!

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

### Option 3: Upload to GitHub Pages
1. Create a new repository
2. Upload all files
3. Enable GitHub Pages in settings
4. Your site is live!

## File Structure

```
keffirooms-static/
├── index.html           # Main HTML file (all pages)
├── css/
│   └── styles.css       # All styling (dark/light mode)
├── js/
│   └── app.js           # All JavaScript logic
└── README.md            # This file
```

## How It Works

### Single HTML File
All pages are in one `index.html` with `data-page` attributes. JavaScript handles navigation by showing/hiding sections.

### CSS Variables
Dark and light modes are handled with CSS variables that change on `body.dark-mode` class toggle.

### Vanilla JavaScript
No frameworks - pure JavaScript for:
- Page navigation
- Theme toggling
- Listing rendering
- WhatsApp contact integration
- Form handling

## Features Explained

### Dark/Light Mode
- Click the sun/moon icon in top-right corner
- Preference is saved in browser localStorage
- All components automatically adapt

### WhatsApp Contact
When you click "Contact" on a listing:
1. App opens WhatsApp with pre-filled message
2. Message includes listing details + seeker info
3. Coordinator receives notification at +2347066068160
4. Coordinator manually connects seeker and agent

### Navigation
- Click role cards to navigate
- "Sign Out" buttons return to landing page
- All transitions are smooth with animations

### Responsive Design
- Mobile-first approach
- Adapts to all screen sizes
- Touch-friendly buttons and spacing

## Customization

### Change WhatsApp Number
Edit `js/app.js`, find `contactAgent()` function:
```javascript
const whatsappUrl = `https://wa.me/2347066068160?text=...`;
// Change 2347066068160 to your number
```

### Change Colors
Edit `css/styles.css`, update root variables:
```css
:root {
    --primary: #0D8B7E;      /* Teal */
    --accent: #16A34A;       /* Green */
    --warning: #EA580C;      /* Orange */
}
```

### Add More Properties
Edit `js/app.js`, add to `properties` array:
```javascript
const properties = [
    {
        id: 5,
        title: "Your Property",
        price: 50000,
        location: "Your Location",
        beds: 2,
        baths: 1,
        wifi: true,
        verified: true,
        agent: { name: "Your Name", phone: "+234..." },
        rating: 4.8,
    },
    // ... more properties
];
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Mobile browsers (iOS Safari 15+, Chrome Mobile)

## File Sizes

- **HTML**: ~50 KB
- **CSS**: ~40 KB
- **JavaScript**: ~15 KB
- **Total**: ~105 KB
- **Gzipped**: ~30 KB

## Performance

- Instant loading (no build step)
- No external dependencies
- CSS animations run on GPU
- Optimized for mobile networks

## Deployment Options

### GitHub Pages (Free)
1. Push to GitHub
2. Enable Pages in settings
3. Live at `username.github.io/repo-name`

### Netlify (Free)
1. Drag and drop folder
2. Instant deployment
3. Custom domain support

### Vercel (Free)
1. Connect GitHub repo
2. Auto-deploys on push
3. Global CDN

### Traditional Hosting
Upload all files to any web host via FTP/SFTP.

## Troubleshooting

### Page doesn't load
- Make sure all files are in the same directory
- Check browser console for errors (F12)
- Try a different browser

### Styles not loading
- Verify `css/styles.css` exists
- Check file paths in `index.html`
- Clear browser cache (Ctrl+Shift+Delete)

### WhatsApp not opening
- Check if WhatsApp is installed
- Verify phone number format (+234...)
- Try opening WhatsApp manually

### Dark mode not saving
- Check if localStorage is enabled
- Try clearing browser cache
- Try a different browser

## Features Not Included (Static Version)

- Real authentication (no backend)
- Database integration
- Payment processing
- User accounts
- Real-time messaging
- File uploads

These can be added with a backend server.

## Next Steps

To add backend functionality:
1. Set up a Node.js/Python/PHP server
2. Create API endpoints
3. Update JavaScript to call APIs
4. Add database integration
5. Deploy to a server

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review the code comments
3. Check browser console for errors
4. Try a different browser

## License

MIT License - Free to use and modify

## Credits

Built with:
- Pure HTML5
- CSS3 with variables
- Vanilla JavaScript (ES6+)
- Google Fonts (Syne, Inter)
- Material Symbols Icons

Design: AI Studio Glow - Premium Dark Mode with Glassmorphism

---

**Made for NSUK Students - Trusted Housing, Every Time**

**No build tools. No dependencies. Just pure web.**

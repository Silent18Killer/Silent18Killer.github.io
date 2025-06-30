# Kaustabh Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a contact form and a password-protected admin panel to view submissions.

## 🌐 Live Website

Once deployed to GitHub Pages, your main website will be accessible at:
`https://silent18killer.github.io`

## 🔐 Admin Panel Access

The admin panel is password-protected and can be accessed at:
`https://silent18killer.github.io/admin-panel.html`

**Default Password:** `admin123`

⚠️ **IMPORTANT:** Change the password in `admin-panel.html` before deploying!

## 🚀 Setup Instructions

### 1. Deploy to GitHub Pages

1. Push all files to your GitHub repository
2. Go to your repository settings
3. Scroll down to "GitHub Pages" section
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### 2. Change Admin Password

Before deploying, change the admin password:

1. Open `admin-panel.html`
2. Find this line: `const ADMIN_PASSWORD = "admin123";`
3. Replace `"admin123"` with your desired password
4. Save the file

### 3. Test Your Setup

1. Visit your main website: `https://silent18killer.github.io`
2. Test the contact form by submitting a message
3. Access admin panel: `https://silent18killer.github.io/admin-panel.html`
4. Enter your password to view submissions

## 📁 File Structure

```
Silent18Killer.github.io/
├── index.html          # Main portfolio website
├── admin-panel.html    # Password-protected admin panel
├── style.css          # Main website styles
├── script.js          # Main website functionality
├── image.png          # Profile image
└── README.md          # This file
```

## 🔧 Features

### Main Website (`index.html`)
- ✅ Responsive design
- ✅ Contact form with validation
- ✅ Smooth scrolling navigation
- ✅ Animated text effects
- ✅ Social media links
- ✅ Download CV functionality

### Admin Panel (`admin-panel.html`)
- ✅ Password protection
- ✅ View all contact form submissions
- ✅ Delete individual submissions
- ✅ Clear all data
- ✅ Export to CSV/JSON
- ✅ Real-time statistics
- ✅ Responsive design

### Contact Form
- ✅ Form validation
- ✅ Data stored in localStorage
- ✅ Success/error messages
- ✅ Required field indicators

## 🔒 Security Notes

- The admin panel uses client-side password protection
- For production use, consider implementing server-side authentication
- Contact form data is stored in browser localStorage
- Consider adding server-side storage for production

## 🎨 Customization

### Colors
The website uses a dark theme with cyan accents. You can customize colors in `style.css`:
- Primary: `#00ffee` (cyan)
- Background: `#080808` (dark)
- Secondary background: `#131313`

### Content
- Update personal information in `index.html`
- Replace `image.png` with your profile photo
- Update social media links
- Modify the contact form fields if needed

## 📞 Support

If you need help with:
- GitHub Pages deployment
- Customizing the design
- Adding new features
- Troubleshooting issues

Feel free to reach out!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

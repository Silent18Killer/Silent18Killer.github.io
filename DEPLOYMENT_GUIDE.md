# 🚀 GitHub Pages Deployment Guide

Follow these steps to deploy your portfolio website to GitHub Pages.

## Step 1: Prepare Your Repository

1. **Create a new repository** on GitHub named exactly: `Silent18Killer.github.io`
2. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/Silent18Killer/Silent18Killer.github.io.git
   ```

## Step 2: Add Your Files

1. **Copy all your website files** into the repository folder:
   - `index.html`
   - `admin-panel.html`
   - `style.css`
   - `script.js`
   - `image.png`
   - `README.md`

2. **Change the admin password** in `admin-panel.html`:
   - Open the file
   - Find: `const ADMIN_PASSWORD = "admin123";`
   - Replace `"admin123"` with your secure password

## Step 3: Push to GitHub

1. **Add all files** to git:
   ```bash
   git add .
   ```

2. **Commit your changes**:
   ```bash
   git commit -m "Initial portfolio website commit"
   ```

3. **Push to GitHub**:
   ```bash
   git push origin main
   ```

## Step 4: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click on "Settings"** tab
3. **Scroll down** to "Pages" section (in the left sidebar)
4. **Under "Source"**, select "Deploy from a branch"
5. **Choose "main"** branch
6. **Select "/ (root)"** folder
7. **Click "Save"**

## Step 5: Wait for Deployment

- GitHub Pages will take a few minutes to deploy your site
- You'll see a green checkmark when deployment is complete
- Your site will be available at: `https://silent18killer.github.io`

## Step 6: Test Your Website

1. **Visit your main website**: `https://silent18killer.github.io`
2. **Test the contact form** by submitting a message
3. **Access admin panel**: `https://silent18killer.github.io/admin-panel.html`
4. **Enter your password** to view submissions

## 🔧 Troubleshooting

### Site Not Loading
- Wait 5-10 minutes for initial deployment
- Check repository settings for GitHub Pages configuration
- Ensure repository is public

### Admin Panel Not Working
- Verify password is correctly set in `admin-panel.html`
- Check browser console for JavaScript errors
- Clear browser cache and try again

### Contact Form Not Working
- Check browser console for errors
- Ensure all files are properly uploaded
- Test in different browsers

### Styling Issues
- Verify `style.css` is in the root directory
- Check file paths in HTML files
- Clear browser cache

## 📝 Important Notes

- **Repository must be public** for free GitHub Pages
- **Repository name must match** your GitHub username + `.github.io`
- **Files must be in the root directory** or `/docs` folder
- **Changes may take a few minutes** to appear live

## 🔒 Security Reminder

Remember to change the default admin password (`admin123`) before deploying!

## 📞 Need Help?

If you encounter any issues:
1. Check the GitHub Pages documentation
2. Verify all files are properly uploaded
3. Check browser console for errors
4. Ensure repository settings are correct 
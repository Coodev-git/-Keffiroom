# GitHub Pages Setup Guide

Deploy KeffiRooms static version to GitHub Pages in 5 minutes.

## Step 1: Extract Files

```bash
unzip keffirooms-static-final.zip
cd keffirooms-static-final
```

## Step 2: Initialize Git

```bash
git init
git add .
git commit -m "Initial commit: KeffiRooms static version"
```

## Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Create repository named: `KeffiRooms` (or any name)
3. Make it **Public**
4. Click "Create repository"

## Step 4: Add Remote and Push

```bash
# Replace USERNAME with your GitHub username
git remote add origin https://github.com/USERNAME/KeffiRooms.git
git branch -M main
git push -u origin main
```

## Step 5: Enable GitHub Pages

1. Go to your repository: `https://github.com/USERNAME/KeffiRooms`
2. Click **Settings** (top menu)
3. Scroll to **Pages** section
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 6: Done!

Your site is now live at:
```
https://USERNAME.github.io/KeffiRooms/
```

Wait 1-2 minutes for GitHub to build and deploy.

---

## Alternative: Using GitHub CLI

If you have GitHub CLI installed:

```bash
# Login to GitHub
gh auth login

# Create repository
gh repo create KeffiRooms --public --source=. --remote=origin --push

# Done! Your site is live at:
# https://USERNAME.github.io/KeffiRooms/
```

---

## Verify Deployment

1. Check GitHub Actions tab for build status
2. Visit your site URL
3. Check browser console (F12) for any errors

---

## Troubleshooting

### Site shows 404
- Wait 2-3 minutes for GitHub to build
- Check that `index.html` is in root directory
- Verify GitHub Pages is enabled in Settings

### Styles not loading
- Check that `css/styles.css` exists
- Verify file paths in `index.html`
- Clear browser cache (Ctrl+Shift+Delete)

### WhatsApp not working
- Verify phone number in `js/app.js`
- Check that WhatsApp is installed on device
- Try opening WhatsApp manually

---

## Custom Domain (Optional)

To use a custom domain:

1. Go to Settings → Pages
2. Under "Custom domain", enter your domain
3. Update DNS records at your domain provider
4. GitHub will verify and enable HTTPS

---

## Update Your Site

To make changes:

```bash
# Edit files
# ...

# Commit and push
git add .
git commit -m "Update: Your changes"
git push
```

GitHub will automatically rebuild and deploy within 1-2 minutes.

---

## Share Your Site

Your site is now live and ready to share:
- Share the URL: `https://USERNAME.github.io/KeffiRooms/`
- Add to your portfolio
- Share on social media
- Send to investors/stakeholders

---

**Your KeffiRooms static site is now deployed!**

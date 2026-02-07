# 🏡 Kartik Villa - Luxury Property Website

A beautiful, responsive single-page website for your luxury villa rental property. Built with pure HTML, CSS, and JavaScript - no frameworks, no build process, just simple and elegant.

## ✨ Features

- **Responsive Design**: Looks perfect on all devices (mobile, tablet, desktop)
- **Hero Slider**: Automatic image slideshow with smooth transitions
- **Photo Gallery**: Click-to-expand lightbox with keyboard navigation
- **Luxury Styling**: Gold accents, elegant typography, smooth animations
- **WhatsApp Integration**: Direct booking inquiries via WhatsApp
- **Email Integration**: Pre-filled email templates for bookings
- **Airbnb Link**: Easy redirect to your Airbnb listing
- **SEO Optimized**: Meta tags and Open Graph for social sharing
- **Fast Loading**: Lazy loading images, optimized performance
- **Easy to Edit**: Clear comments and configuration section

## 📁 File Structure

```
KartikVilla/
├── index.html          # Main website file (edit this!)
├── styles.css          # All styling (customize colors here)
├── script.js           # Interactive features
├── images/             # Your property photos go here
│   ├── hero.jpg        # Main hero image
│   ├── hero2.jpg       # Second hero image
│   ├── hero3.jpg       # Third hero image
│   ├── gallery1.jpg    # Gallery images
│   ├── gallery2.jpg
│   └── ...             # Add more as needed
└── README.md           # This file
```

## 🚀 Quick Start (5 minutes to deployment!)

### Step 1: Customize Your Content

1. Open `index.html` in any text editor (VS Code, Notepad++, or even Notepad)
2. Find the **CONFIGURATION SECTION** at the top (around line 40)
3. Update these values:

```javascript
const PROPERTY_CONFIG = {
    name: "Kartik Villa",
    whatsapp: "919876543210",           // Your WhatsApp number (no + or spaces)
    email: "booking@kartikvilla.com",   // Your booking email
    airbnbLink: "https://www.airbnb.co.in/rooms/YOUR_LISTING_ID",
    
    bedrooms: 3,                        // Number of bedrooms
    bathrooms: 2,                       // Number of bathrooms
    maxGuests: 6,                       // Maximum guests
    
    location: "Goa, India",             // Your property location
};
```

### Step 2: Add Your Photos

1. Create an `images` folder in the same directory as `index.html`
2. Add your property photos with these names:
   - `hero.jpg` - Main hero image (landscape, 1920x1080px recommended)
   - `hero2.jpg` - Second hero image (optional)
   - `hero3.jpg` - Third hero image (optional)
   - `gallery1.jpg` through `gallery8.jpg` - Gallery images (1200x800px recommended)

**Don't have images yet?** The website will show placeholder backgrounds. You can add images later.

### Step 3: Edit Property Description

1. In `index.html`, search for `<!-- EDIT: Replace this description -->`
2. Replace the placeholder text with your actual property description
3. Update amenities list to match your property features

### Step 4: Deploy to GitHub Pages

#### Option A: Using GitHub Desktop (Easiest)

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop and click "File" → "Add Local Repository"
3. Select your `KartikVilla` folder
4. Click "Publish repository"
5. Name it `KartikVilla` (or any name you prefer)
6. Click "Publish Repository"
7. On GitHub.com:
   - Go to your repository
   - Click "Settings"
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
8. **Your site will be live at**: `https://yourusername.github.io/KartikVilla`

#### Option B: Using Command Line (If you know Git)

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Kartik Villa website"

# Create a new repository on GitHub.com first, then:
git remote add origin https://github.com/yourusername/KartikVilla.git
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository settings
```

### Step 5: Done! 🎉

Your website is now live! Visit it at `https://yourusername.github.io/KartikVilla`

## 🎨 Customization Guide

### Change Colors

Open `styles.css` and edit the CSS variables at the top:

```css
:root {
    --primary-color: #c9a961;        /* Gold - change to your brand color */
    --secondary-color: #1a2332;      /* Dark navy */
    --accent-color: #8b7355;         /* Bronze */
}
```

### Add More Gallery Images

1. Add your images to the `/images/` folder (e.g., `gallery9.jpg`, `gallery10.jpg`)
2. In `index.html`, find the gallery section (search for `<!-- EDIT: Replace these images -->`)
3. Copy this block and paste it below:

```html
<div class="gallery-item">
    <img src="./images/gallery9.jpg" alt="Your description" loading="lazy">
    <div class="gallery-overlay">
        <span class="gallery-icon">🔍</span>
    </div>
</div>
```

### Add/Remove Amenities

In `index.html`, find the amenities section and copy/paste or remove amenity items:

```html
<div class="amenity-item">
    <div class="amenity-icon">🏊</div>
    <h3 class="amenity-title">Your Amenity</h3>
    <p class="amenity-description">Description here</p>
</div>
```

### Change Fonts

In `index.html` `<head>` section, replace the Google Fonts link:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then update `styles.css`:

```css
--font-heading: 'Your Heading Font', serif;
--font-body: 'Your Body Font', sans-serif;
```

## 📱 Testing Your Website

### Test Locally (Before Deploying)

1. Simply double-click `index.html` to open it in your browser
2. Or right-click → "Open with" → Choose your browser
3. Test all buttons, gallery, and mobile responsiveness

### Test Responsiveness

1. Press `F12` in your browser to open Developer Tools
2. Click the device icon (mobile view)
3. Test different screen sizes

## 🔧 Troubleshooting

### Images Not Showing?

- Check that images are in the `/images/` folder
- Check file names match exactly (case-sensitive on some systems)
- Make sure images are in JPG or PNG format

### WhatsApp Button Not Working?

- Verify your WhatsApp number is in this format: `919876543210`
- No spaces, no dashes, no + symbol
- Include country code

### Website Not Updating on GitHub Pages?

- Changes can take 1-5 minutes to appear
- Try clearing your browser cache (Ctrl+Shift+R)
- Make sure you committed and pushed your changes

### Mobile Menu Not Working?

- Check that all three files (HTML, CSS, JS) are in the same folder
- Make sure `script.js` is loading properly

## 📋 Edit Checklist

Use this checklist to make sure you've customized everything:

- [ ] Updated `PROPERTY_CONFIG` with your details
- [ ] Changed WhatsApp number
- [ ] Changed email address
- [ ] Updated Airbnb link
- [ ] Changed property description
- [ ] Updated bedroom/bathroom/guest counts
- [ ] Added your property photos
- [ ] Updated amenities list
- [ ] Changed location name
- [ ] Added nearby attractions
- [ ] Updated footer contact info
- [ ] (Optional) Added Google Maps embed
- [ ] (Optional) Added social media links
- [ ] Tested all buttons and links
- [ ] Tested on mobile device

## 🌟 Pro Tips

1. **Image Optimization**: Compress your images before uploading using [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
2. **Custom Domain**: You can add a custom domain (e.g., kartikvilla.com) in GitHub Pages settings
3. **Analytics**: Add Google Analytics to track visitors
4. **Social Media**: Share your direct website link instead of just Airbnb
5. **SEO**: Update the meta description in the `<head>` section for better search results

## 🎯 What to Edit - Quick Reference

| What to Change | Where to Find It | Search For |
|----------------|------------------|------------|
| WhatsApp Number | `index.html` | `PROPERTY_CONFIG` |
| Email Address | `index.html` | `PROPERTY_CONFIG` |
| Property Description | `index.html` | `<!-- EDIT: Replace this description -->` |
| Photos | `/images/` folder | Add your JPG/PNG files |
| Colors | `styles.css` | `:root` (top of file) |
| Amenities | `index.html` | `<!-- EDIT: Add, remove, or modify amenities -->` |
| Location Info | `index.html` | `<!-- EDIT: Update location details -->` |
| Property Stats | `index.html` | `PROPERTY_CONFIG` |

## 🆘 Need Help?

- **Find something to edit**: Search for `<!-- EDIT` in `index.html` - all editable sections are marked!
- **Can't find a file**: Make sure you're in the `KartikVilla` folder
- **Website looks broken**: Check that all 3 files (HTML, CSS, JS) are in the same folder
- **Still stuck**: Check if all images are properly named and in the `/images/` folder

## 📄 License

Free to use for your property rental website. No attribution required.

## 🚀 Ready to Launch?

1. ✅ Customize content
2. ✅ Add photos
3. ✅ Test locally
4. ✅ Deploy to GitHub Pages
5. ✅ Share your link!

**Your website will be live at**: `https://yourusername.github.io/KartikVilla`

---

Made with ❤️ for Kartik Villa

**Questions?** All editable sections are marked with `<!-- EDIT -->` comments in the code!

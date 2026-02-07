# 🎨 Quick Customization Guide

Simple instructions to personalize your Kartik Villa website.

## 🚀 5-Minute Quick Start

### 1. Open `index.html` in a text editor

Any text editor works:
- **VS Code** (recommended) - [code.visualstudio.com](https://code.visualstudio.com/)
- **Notepad++** - [notepad-plus-plus.org](https://notepad-plus-plus.org/)
- **Sublime Text** - [sublimetext.com](https://www.sublimetext.com/)
- Even regular **Notepad** works!

### 2. Find the Configuration Section

Press `Ctrl+F` (or `Cmd+F` on Mac) and search for:
```
PROPERTY_CONFIG
```

You'll find this section around line 40:

```javascript
const PROPERTY_CONFIG = {
    name: "Kartik Villa",
    whatsapp: "919876543210",           // EDIT THIS
    email: "booking@kartikvilla.com",   // EDIT THIS
    airbnbLink: "https://www.airbnb.co.in/rooms/YOUR_LISTING_ID",
    
    bedrooms: 3,        // EDIT THIS
    bathrooms: 2,       // EDIT THIS
    maxGuests: 6,       // EDIT THIS
    
    location: "Goa, India",  // EDIT THIS
};
```

### 3. Update Your Details

Replace with your actual information:
- **whatsapp**: Your WhatsApp number (no + or spaces)
  - Example: `919876543210` for +91 98765 43210
- **email**: Your booking email address
- **airbnbLink**: Your full Airbnb listing URL
- **bedrooms/bathrooms/maxGuests**: Your property stats
- **location**: Your property location

### 4. Save and Test

1. Save the file (`Ctrl+S` or `Cmd+S`)
2. Double-click `index.html` to open in browser
3. Click the WhatsApp and Email buttons to test!

---

## 📝 Editing Content

### Property Description

**Search for:** `<!-- EDIT: Replace this description -->`

You'll find the About section. Replace this text:

```html
<p class="about-text lead">
    Experience the epitome of luxury...  <!-- Replace this entire paragraph -->
</p>
```

**Tips:**
- Keep it engaging and descriptive
- Highlight unique features
- Mention nearby attractions
- 2-3 paragraphs is ideal

### Hero Section Title

**Search for:** `<h1 class="hero-title">`

```html
<h1 class="hero-title">Kartik Villa</h1>  <!-- Change "Kartik Villa" -->
<p class="hero-subtitle">Your Luxury Escape Awaits</p>  <!-- Change subtitle -->
```

### Amenities

**Search for:** `<!-- EDIT: Add, remove, or modify amenities -->`

To add an amenity, copy this block:

```html
<div class="amenity-item">
    <div class="amenity-icon">🏊</div>  <!-- Change emoji -->
    <h3 class="amenity-title">Private Pool</h3>  <!-- Change title -->
    <p class="amenity-description">Exclusive swimming pool</p>  <!-- Change description -->
</div>
```

**Emoji Ideas:**
- 📶 WiFi
- ❄️ Air Conditioning
- 🍳 Kitchen
- 🏊 Pool
- 🅿️ Parking
- 📺 TV
- 🧺 Laundry
- 🔐 Security
- 🌳 Garden
- ☕ Coffee Maker
- 🔥 BBQ Grill
- 🎯 Games

To remove an amenity, delete the entire `<div class="amenity-item">...</div>` block.

### Location & Nearby Attractions

**Search for:** `<!-- EDIT: Add your nearby attractions -->`

Edit the list:

```html
<li>🏖️ Beach - 2 km</li>
<li>🏪 Shopping Center - 3 km</li>
<!-- Add more or remove items -->
```

---

## 🖼️ Adding Photos

### Required Photos

1. Create `images` folder (if not exists)
2. Add these images:

**Hero Images** (shown in the main banner):
- `hero.jpg` - Main image
- `hero2.jpg` - Second image (optional)
- `hero3.jpg` - Third image (optional)

**Gallery Images**:
- `gallery1.jpg` through `gallery8.jpg`
- Add more: `gallery9.jpg`, `gallery10.jpg`, etc.

### Image Specifications

**Hero Images:**
- Size: 1920x1080px (landscape)
- Format: JPG or PNG
- Max file size: 500KB (compress if needed)

**Gallery Images:**
- Size: 1200x800px (landscape)
- Format: JPG or PNG
- Max file size: 300KB each

### Compress Images (Important!)

Before adding images, compress them:
1. Go to [tinypng.com](https://tinypng.com/)
2. Drop your images
3. Download compressed versions
4. Use those in your website

### Adding More Gallery Images

1. Add image to `/images/` folder (e.g., `gallery9.jpg`)
2. In `index.html`, find gallery section
3. Copy this block and paste below others:

```html
<div class="gallery-item">
    <img src="./images/gallery9.jpg" alt="Your Room Name" loading="lazy">
    <div class="gallery-overlay">
        <span class="gallery-icon">🔍</span>
    </div>
</div>
```

4. Change `gallery9.jpg` to your image name
5. Change `"Your Room Name"` to describe the photo

---

## 🎨 Changing Colors

Open `styles.css` and find this section at the top:

```css
:root {
    --primary-color: #c9a961;        /* Gold - Change this! */
    --secondary-color: #1a2332;      /* Dark Navy */
    --accent-color: #8b7355;         /* Bronze */
}
```

**Popular Color Schemes:**

**Luxury Gold (Default)**
```css
--primary-color: #c9a961;
--secondary-color: #1a2332;
--accent-color: #8b7355;
```

**Ocean Blue**
```css
--primary-color: #00a8cc;
--secondary-color: #0d3b66;
--accent-color: #118ab2;
```

**Elegant Purple**
```css
--primary-color: #7b2cbf;
--secondary-color: #240046;
--accent-color: #9d4edd;
```

**Warm Sunset**
```css
--primary-color: #ff6b35;
--secondary-color: #004e89;
--accent-color: #ff9f1c;
```

**Forest Green**
```css
--primary-color: #2d6a4f;
--secondary-color: #1b4332;
--accent-color: #52b788;
```

**Find More Colors:** Use [coolors.co](https://coolors.co/) to generate color palettes!

---

## 🗺️ Adding Google Maps

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your property location
3. Click **Share** button
4. Click **Embed a map** tab
5. Copy the `<iframe>` code
6. In `index.html`, search for: `<!-- EDIT: Replace with your Google Maps -->`
7. Uncomment the iframe section and paste your code

Example:
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=YOUR_MAP_CODE_HERE"
    width="100%" 
    height="100%" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

---

## 📱 Social Media Links

**Search for:** `<!-- EDIT: Add your social media links -->`

Update the footer social links:

```html
<div class="social-links">
    <a href="https://instagram.com/yourhandle" class="social-link">📷</a>
    <a href="https://facebook.com/yourpage" class="social-link">📘</a>
    <a href="https://twitter.com/yourhandle" class="social-link">🐦</a>
</div>
```

Don't have social media? Simply remove the links or leave them as `href="#"`.

---

## 🔤 Changing Fonts

Current fonts:
- Headings: **Playfair Display** (elegant serif)
- Body text: **Inter** (clean sans-serif)

### To Change Fonts:

1. Visit [Google Fonts](https://fonts.google.com/)
2. Select fonts you like
3. Copy the `<link>` code
4. In `index.html`, find the fonts section and replace:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

5. In `styles.css`, update:

```css
:root {
    --font-heading: 'Your Heading Font', serif;
    --font-body: 'Your Body Font', sans-serif;
}
```

**Popular Font Combinations:**
- Montserrat + Open Sans (modern)
- Lora + Lato (elegant)
- Raleway + Roboto (clean)
- Merriweather + Muli (traditional)

---

## ✅ Final Checklist

Before deploying, make sure you've done:

- [ ] Updated `PROPERTY_CONFIG` with all your details
- [ ] Changed WhatsApp number
- [ ] Changed email address
- [ ] Updated Airbnb link
- [ ] Edited property description
- [ ] Added all property photos
- [ ] Updated amenities list
- [ ] Changed location and nearby attractions
- [ ] Tested website locally (open in browser)
- [ ] Clicked all buttons to verify they work
- [ ] Tested on mobile (F12 → device toolbar)
- [ ] Compressed all images
- [ ] Updated footer contact info

---

## 🆘 Common Issues

### WhatsApp button opens but message is wrong?

Check the phone number format:
- ✅ Correct: `919876543210` (no spaces, no +)
- ❌ Wrong: `+91 98765 43210`
- ❌ Wrong: `+919876543210`

### Images not showing?

- File names are case-sensitive (`gallery1.jpg` ≠ `Gallery1.JPG`)
- Make sure images are in `/images/` folder
- Check file extensions are lowercase (`.jpg` not `.JPG`)

### Website looks broken after editing?

- Check you didn't accidentally delete any `>` or `<` characters
- Make sure all `"` quotes are closed
- Use an HTML validator: [validator.w3.org](https://validator.w3.org/)

### Colors look weird?

- Make sure hex colors start with `#`
- Use 6-character hex codes: `#ffffff` not `#fff`
- Test colors on [htmlcolorcodes.com](https://htmlcolorcodes.com/)

---

## 💡 Pro Tips

1. **Test locally first**: Always open `index.html` in your browser before deploying
2. **Keep backups**: Make a copy of `index.html` before major changes
3. **Small changes**: Edit one thing at a time, test, then move on
4. **Search function**: Use `Ctrl+F` to quickly find sections to edit
5. **Comment your changes**: Add `<!-- Updated on DATE -->` notes
6. **Mobile first**: Always test on mobile view (F12 in browser)
7. **Image quality**: Use high-quality photos, but compress them
8. **Consistent style**: Match your Airbnb branding/colors

---

## 📚 Learn More

Want to customize further?

- **HTML Tutorial**: [w3schools.com/html](https://www.w3schools.com/html/)
- **CSS Tutorial**: [w3schools.com/css](https://www.w3schools.com/css/)
- **Color Tools**: [coolors.co](https://coolors.co/)
- **Font Pairing**: [fontpair.co](https://fontpair.co/)
- **Icon Finder**: [emojipedia.org](https://emojipedia.org/)

---

**Ready to customize?** Start with the `PROPERTY_CONFIG` section and work your way down!

All editable sections are marked with `<!-- EDIT -->` comments in the code!

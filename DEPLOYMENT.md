# 🚀 Deployment Guide - Get Your Website Online!

This guide will help you deploy your Kartik Villa website to GitHub Pages (free hosting).

## ⏱️ Total Time: 5-10 minutes

---

## Method 1: GitHub Desktop (Easiest - Recommended)

Perfect if you've never used Git or GitHub before.

### Step 1: Install GitHub Desktop

1. Go to [desktop.github.com](https://desktop.github.com/)
2. Download and install GitHub Desktop
3. Open GitHub Desktop and sign in with your GitHub account
   - Don't have an account? Create one at [github.com](https://github.com/) (it's free!)

### Step 2: Publish Your Website

1. In GitHub Desktop, click **File → Add Local Repository**
2. Click **Choose...** and select your `KartikVilla` folder
3. Click **Add Repository**
4. If it says "This directory does not appear to be a Git repository":
   - Click **Create a Repository**
   - Repository name: `KartikVilla`
   - Click **Create Repository**
5. Click **Publish repository** button (top right)
6. Uncheck "Keep this code private" (if you want it public)
7. Click **Publish Repository**

✅ Your code is now on GitHub!

### Step 3: Enable GitHub Pages

1. Go to [github.com](https://github.com) and sign in
2. Find your `KartikVilla` repository
3. Click **Settings** (gear icon)
4. Scroll down to **Pages** section (left sidebar)
5. Under "Source":
   - Select branch: **main**
   - Select folder: **/ (root)**
6. Click **Save**
7. Wait 1-2 minutes

### Step 4: Visit Your Live Website! 🎉

Your website will be live at:
```
https://yourusername.github.io/KartikVilla
```

(Replace `yourusername` with your actual GitHub username)

### Step 5: Making Updates

When you edit files:
1. Open GitHub Desktop
2. You'll see your changes listed
3. Write a summary (e.g., "Updated property description")
4. Click **Commit to main**
5. Click **Push origin**
6. Your website updates automatically in 1-2 minutes!

---

## Method 2: Command Line (For Advanced Users)

If you're comfortable with terminal/command prompt:

### Initial Setup

```bash
# Navigate to your project folder
cd /path/to/KartikVilla

# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Kartik Villa website"

# Create repository on GitHub.com, then:
git remote add origin https://github.com/yourusername/KartikVilla.git
git branch -M main
git push -u origin main
```

### Enable GitHub Pages

1. Go to your repository on GitHub.com
2. Settings → Pages
3. Source: main branch, / (root) folder
4. Save

### Making Updates

```bash
git add .
git commit -m "Description of changes"
git push
```

---

## Alternative: Deploy to Netlify (Another Free Option)

Netlify offers drag-and-drop deployment:

### Option 1: Drag & Drop

1. Go to [netlify.com](https://netlify.com/)
2. Sign up for free
3. Drag your entire `KartikVilla` folder onto the Netlify dashboard
4. Done! You get a URL like `kartikvilla-random.netlify.app`
5. Can customize the URL in settings

### Option 2: Connect to GitHub

1. Push your code to GitHub (see above)
2. On Netlify, click "New site from Git"
3. Connect your GitHub repository
4. Click "Deploy site"
5. Automatic deployments on every Git push!

---

## Custom Domain (Optional)

Want `kartikvilla.com` instead of `yourusername.github.io/KartikVilla`?

### Buy a Domain

Buy from:
- [Namecheap](https://www.namecheap.com/) ($8-15/year)
- [Google Domains](https://domains.google/) ($12/year)
- [GoDaddy](https://www.godaddy.com/)

### Connect to GitHub Pages

1. In your domain registrar, add these DNS records:
   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   CNAME www  yourusername.github.io
   ```

2. In your GitHub repository:
   - Settings → Pages
   - Custom domain: `kartikvilla.com`
   - Save

3. Create a file named `CNAME` in your project root:
   ```
   kartikvilla.com
   ```

4. Wait 24-48 hours for DNS to propagate

---

## Troubleshooting

### Website not showing up?

- Wait 5 minutes (first deployment takes time)
- Check GitHub Pages is enabled in Settings
- Make sure `index.html` is in the root folder
- Clear your browser cache (Ctrl+Shift+R)

### Images not loading?

- Check images are in `/images/` folder
- File names must match exactly (case-sensitive)
- Make sure you committed and pushed the images folder

### Changes not appearing?

- Wait 1-2 minutes for GitHub to rebuild
- Clear browser cache
- Check you committed and pushed changes
- Verify changes are on GitHub.com

### 404 Error?

- Make sure the file is named `index.html` (not `Index.html`)
- Check it's in the root folder (not in a subfolder)
- Verify GitHub Pages is enabled for the main branch

---

## Checklist Before Deploying

- [ ] Customized `PROPERTY_CONFIG` in `index.html`
- [ ] Added your property photos to `/images/` folder
- [ ] Updated property description
- [ ] Tested website locally (open `index.html` in browser)
- [ ] All buttons work (WhatsApp, Email, Airbnb)
- [ ] Mobile responsive (test with F12 → device mode)
- [ ] Photos load correctly

---

## Post-Deployment

### Share Your Website

Share this link:
- With guests inquiring about your property
- On social media
- In email signatures
- On business cards
- As an alternative to Airbnb

### Monitor Performance

- Add Google Analytics to track visitors
- Monitor booking inquiries
- Update photos seasonally
- Add testimonials/reviews

### Keep It Updated

- Update availability calendar (if you add one)
- Refresh photos annually
- Update prices/amenities as needed
- Respond quickly to inquiries

---

## Quick Links

- **GitHub Desktop**: [desktop.github.com](https://desktop.github.com/)
- **GitHub**: [github.com](https://github.com/)
- **Netlify**: [netlify.com](https://netlify.com/)
- **Help with Git**: [try.github.io](https://try.github.io/)

---

## Need Help?

- **GitHub Pages Documentation**: [docs.github.com/pages](https://docs.github.com/pages)
- **GitHub Desktop Tutorial**: [docs.github.com/desktop](https://docs.github.com/desktop)

---

**Congratulations!** 🎉 Your luxury property website is now live!

Your guests can now book directly through WhatsApp or Email!

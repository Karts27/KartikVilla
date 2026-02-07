# 🚀 Deploy Kartik Villa Website from a Different GitHub Account

This guide will help you deploy the Kartik Villa website using a different GitHub account.

---

## 📦 What You Have

You have a zip file: **`KartikVilla-Website.zip`**

This contains:
- Complete website code (HTML, CSS, JavaScript)
- 22 property photos organized by room type
- All documentation files
- Ready-to-deploy configuration

---

## ⏱️ Total Time: 10-15 minutes

---

## Step 1: Unzip the Website Files

### On Mac:
1. Locate `KartikVilla-Website.zip` in your Downloads folder
2. **Double-click** the zip file to extract it
3. A folder named `KartikVilla` will be created
4. Move this folder to your desired location (e.g., Desktop or Documents)

### On Windows:
1. Locate `KartikVilla-Website.zip` in your Downloads folder
2. **Right-click** → Select **"Extract All..."**
3. Choose where to extract (e.g., Desktop)
4. Click **"Extract"**

### On Linux:
```bash
unzip KartikVilla-Website.zip -d ~/KartikVilla
```

---

## Step 2: Verify the Files

After unzipping, your folder should contain:

```
KartikVilla/
├── index.html                    # Main website file
├── styles.css                    # Styling
├── script.js                     # Interactive features
├── images/                       # All photos
│   └── Kartik Villa/
│       ├── Bathroom/
│       ├── Hall/
│       ├── KK Vila/
│       ├── Patio/
│       └── Rooms/
├── README.md                     # Documentation
├── DEPLOYMENT.md                 # Deployment guide
├── CUSTOMIZATION_GUIDE.md        # How to customize
├── GET_AIRBNB_PHOTOS.md         # Photo guide
└── .gitignore                    # Git configuration
```

✅ If you see all these files, you're ready to proceed!

---

## Step 3: Create GitHub Account (If Needed)

If you don't have a GitHub account or want to use a different one:

1. Go to [github.com](https://github.com/)
2. Click **"Sign up"**
3. Enter email, password, and username
4. Verify your email address
5. Choose the **Free** plan

✅ **Account created!**

---

## Step 4: Install GitHub Desktop (Easiest Method)

### Download & Install:

1. Go to [desktop.github.com](https://desktop.github.com/)
2. Download for your operating system
3. Install the application
4. Open GitHub Desktop

### Sign In:

1. Click **"Sign in to GitHub.com"**
2. Enter your GitHub credentials
3. Authorize GitHub Desktop
4. Click **"Finish"**

✅ **GitHub Desktop is ready!**

---

## Step 5: Upload Website to GitHub

### Create Repository:

1. In GitHub Desktop, click **"File"** → **"Add Local Repository"**
2. Click **"Choose..."**
3. Select your `KartikVilla` folder
4. You'll see a message: *"This directory does not appear to be a Git repository"*
5. Click **"Create a Repository"**

### Repository Settings:

Fill in these details:
- **Name**: `KartikVilla` (or any name you prefer)
- **Description**: `Luxury villa website for Kartik Villa in Ranikhet`
- **Keep this code private**: Uncheck this box (website needs to be public for GitHub Pages)
- **Initialize this repository with a README**: Leave unchecked (we already have one)
- **Git Ignore**: None
- **License**: None

6. Click **"Create Repository"**

### Publish to GitHub:

7. Click the **"Publish repository"** button (top right)
8. Confirm the repository name
9. Make sure **"Keep this code private"** is UNCHECKED
10. Click **"Publish Repository"**

⏳ Wait 10-30 seconds for upload to complete...

✅ **Your website is now on GitHub!**

---

## Step 6: Enable GitHub Pages (Make it Live!)

### Go to GitHub Website:

1. Open your browser
2. Go to [github.com](https://github.com/)
3. Sign in with your GitHub account
4. You should see your `KartikVilla` repository on your profile

### Enable Pages:

5. Click on the **`KartikVilla`** repository
6. Click **"Settings"** (gear icon at the top)
7. In the left sidebar, scroll down and click **"Pages"**

### Configure Pages:

8. Under **"Source"**:
   - **Branch**: Select **`main`** (or `master`)
   - **Folder**: Select **`/ (root)`**
9. Click **"Save"**

10. Wait 1-2 minutes for GitHub to build your site

### Get Your Live URL:

11. Refresh the page
12. You'll see a green box that says:
    > **"Your site is live at `https://username.github.io/KartikVilla/`"**

13. Click the **"Visit site"** button or copy the URL

---

## 🎉 Your Website is LIVE!

Your Kartik Villa website is now online at:

```
https://YOUR-USERNAME.github.io/KartikVilla/
```

(Replace `YOUR-USERNAME` with your actual GitHub username)

---

## 🔗 Share Your Website

You can now share this link:
- With potential guests
- On social media
- In email signatures
- On business cards
- As an alternative to Airbnb

---

## 📱 Test Your Live Website

### Check Everything Works:

1. **Visit your live URL**
2. **Test on Mobile**: Open on your phone
3. **Click WhatsApp button**: Should open WhatsApp with +91 78383 16633
4. **Click Email button**: Should open email to kkgroup285@gmail.com
5. **Click Airbnb button**: Should go to your Airbnb listing
6. **Test Gallery**: Click photos to open lightbox
7. **Test Navigation**: Click menu items
8. **Check Google Maps**: Map should load and show location

✅ Everything working? Congratulations! 🎊

---

## 🔄 How to Make Updates Later

When you want to update content (change text, add photos, etc.):

### Method 1: Using GitHub Desktop (Easiest)

1. Open the `KartikVilla` folder on your computer
2. Edit files (e.g., open `index.html` in a text editor)
3. Save your changes
4. Open **GitHub Desktop**
5. You'll see your changes listed
6. Write a summary (e.g., "Updated property description")
7. Click **"Commit to main"**
8. Click **"Push origin"**
9. Wait 1-2 minutes
10. Refresh your live website - changes appear!

### Method 2: Edit Directly on GitHub

1. Go to your repository on github.com
2. Click on the file you want to edit (e.g., `index.html`)
3. Click the **pencil icon** (Edit this file)
4. Make your changes
5. Scroll down, write a commit message
6. Click **"Commit changes"**
7. Wait 1-2 minutes - your site updates automatically!

---

## 🎨 Customize Your Website

See the **`CUSTOMIZATION_GUIDE.md`** file for:
- How to change colors
- How to update text content
- How to add more photos
- How to modify amenities
- How to change fonts

---

## 🆘 Troubleshooting

### Website not showing up after 5 minutes?

1. Check GitHub Pages is enabled (Settings → Pages)
2. Make sure repository is **Public** (not Private)
3. Make sure branch is set to **`main`** or **`master`**
4. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Images not loading?

1. Check that the `images` folder was uploaded
2. Make sure folder structure is intact: `images/Kartik Villa/...`
3. File names are case-sensitive - verify they match exactly

### 404 Error?

1. Make sure `index.html` is in the root folder (not in a subfolder)
2. Check spelling of repository name in URL
3. Wait 2-3 minutes after enabling Pages

### Changes not appearing?

1. Wait 1-2 minutes for GitHub to rebuild
2. Clear browser cache (Ctrl+Shift+R)
3. Check you committed and pushed changes (in GitHub Desktop)

### WhatsApp/Email buttons not working?

1. Check phone number is: `917838316633` (no spaces, no +)
2. Check email is: `kkgroup285@gmail.com`
3. These are set in the `PROPERTY_CONFIG` section of `index.html`

---

## 🌐 Custom Domain (Optional)

Want `kartikvilla.com` instead of `username.github.io/KartikVilla`?

### Buy a Domain:

1. Purchase from [Namecheap](https://www.namecheap.com/) ($8-15/year)
2. Or [Google Domains](https://domains.google/) ($12/year)
3. Or [GoDaddy](https://www.godaddy.com/)

### Connect to GitHub Pages:

1. In your domain registrar, add DNS records:
   ```
   Type    Name    Value
   A       @       185.199.108.153
   A       @       185.199.109.153
   A       @       185.199.110.153
   A       @       185.199.111.153
   CNAME   www     yourusername.github.io
   ```

2. In GitHub repository:
   - Settings → Pages
   - Custom domain: `yourdomain.com`
   - Save

3. Create a file named `CNAME` in your repository:
   - Content: `yourdomain.com`
   - Commit and push

4. Wait 24-48 hours for DNS to propagate

---

## 📊 Track Visitors (Optional)

Add **Google Analytics** to see how many people visit:

1. Go to [analytics.google.com](https://analytics.google.com/)
2. Create a free account
3. Get your tracking code
4. Add it to `index.html` before the `</head>` tag
5. Commit and push

---

## 🔐 Important Notes

### Keep Your Repository Public

- GitHub Pages only works with **public** repositories on free accounts
- Your code will be visible, but that's normal for websites
- Your photos and content are yours - this is just the display code

### Contact Information

The website has these contact details built-in:
- **WhatsApp**: +91 78383 16633
- **Email**: kkgroup285@gmail.com
- **Location**: Ranikhet, Uttarakhand

To change these, edit the `PROPERTY_CONFIG` section in `index.html`.

---

## 📋 Quick Reference

| What | Where | How |
|------|-------|-----|
| Live Website | `https://username.github.io/KartikVilla/` | Share this link |
| Edit Content | `index.html` | Open in text editor |
| Add Photos | `images/Kartik Villa/` folder | Add .jpg or .png files |
| Change Colors | `styles.css` | Edit `:root` section |
| Update Site | GitHub Desktop | Commit → Push |
| GitHub Settings | github.com → Repository → Settings | Enable Pages |

---

## 🎯 Next Steps

1. ✅ Unzip the files
2. ✅ Create/Sign in to GitHub account
3. ✅ Install GitHub Desktop
4. ✅ Upload repository
5. ✅ Enable GitHub Pages
6. ✅ Test your live website
7. 🎉 Share your link!

---

## 💡 Pro Tips

1. **Bookmark your live URL** - You'll share it often!
2. **Test on multiple devices** - Phone, tablet, desktop
3. **Update photos seasonally** - Keep content fresh
4. **Respond quickly** to WhatsApp/Email inquiries
5. **Share on social media** - More visibility = more bookings
6. **Keep a backup** - Save the zip file somewhere safe

---

## 📞 Quick Contact Reference

When guests book through your website, they'll reach you at:
- 📱 WhatsApp: +91 78383 16633
- ✉️ Email: kkgroup285@gmail.com

Make sure to check these regularly!

---

## ✨ Features Your Website Has

- ✅ 22 professional photos organized by room
- ✅ 4 bedrooms, 4 bathrooms, 8 guests
- ✅ Ranikhet location with Google Maps
- ✅ WhatsApp & Email booking buttons
- ✅ Airbnb listing link
- ✅ Mobile responsive design
- ✅ Fast loading (optimized)
- ✅ SEO optimized (Google search ready)
- ✅ Professional luxury design
- ✅ Gallery lightbox feature

---

## 🆘 Need Help?

If you get stuck:

1. **Check this guide** - Read the troubleshooting section
2. **GitHub Pages Documentation**: [docs.github.com/pages](https://docs.github.com/pages)
3. **GitHub Desktop Help**: [docs.github.com/desktop](https://docs.github.com/desktop)
4. **Test locally first**: Open `index.html` in a browser before deploying

---

## 🎊 Congratulations!

You now have a professional website for Kartik Villa!

**Your website URL**: `https://YOUR-USERNAME.github.io/KartikVilla/`

Share it with the world and start getting direct bookings! 🏡✨

---

**Created for Kartik Villa - Ranikhet, Uttarakhand**

*Last updated: February 2026*

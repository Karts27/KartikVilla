# 🔄 How to Push Further Changes to the Kartik Villa Website

After you edit the site (text, photos, styles, or code), use this guide to publish updates so they appear on **https://kkgroupstays.github.io/KartikVilla/** (or your custom domain).

---

## 📍 Your setup

- **Local folder:** `KartikVilla-Website` (on your computer)  
  Full path example: `/Users/kk/Documents/Kartik Villa/Website/KartikVilla-Website`
- **GitHub repo:** https://github.com/kkGroupStays/KartikVilla  
- **Branch:** `main`  
- **Live site:** https://kkgroupstays.github.io/KartikVilla/

---

## Method 1: Terminal (recommended if you use the command line)

### 1. Open Terminal and go to the project

```bash
cd "/Users/kk/Documents/Kartik Villa/Website/KartikVilla-Website"
```

### 2. Make your edits

Edit files in this folder (e.g. `index.html`, `styles.css`, `script.js`, or add/replace images in `images/Kartik Villa/`). Save when done.

### 3. Stage, commit, and push

```bash
# See what changed
git status

# Stage all changes (new, modified, deleted files)
git add -A

# Commit with a short message describing the update
git commit -m "Update property description and add new patio photo"

# Push to GitHub (this publishes the update)
git push
```

If `git push` asks for credentials and you have GitHub CLI (`gh`) installed, you can use:

```bash
GIT_ASKPASS=gh git push
```

### 4. Wait for the site to update

- GitHub Pages usually rebuilds within **1–2 minutes**.
- Refresh the live site (hard refresh: **Cmd+Shift+R** on Mac, **Ctrl+Shift+R** on Windows).

---

## Method 2: GitHub Desktop

### 1. Open GitHub Desktop

Make sure you’re in the **KartikVilla** repository (if not: **File → Add Local Repository** and choose the `KartikVilla-Website` folder).

### 2. Make your edits

Edit files in `KartikVilla-Website` with any editor (e.g. Cursor, VS Code, Notepad). Save.

### 3. Commit in GitHub Desktop

- Your changes will appear in the left sidebar.
- Write a **summary** (e.g. “Updated contact number and gallery photos”).
- Click **Commit to main**.

### 4. Push to GitHub

- Click **Push origin** (or **Publish branch** if it’s the first time).
- Wait 1–2 minutes, then refresh the live website.

---

## Method 3: Edit directly on GitHub

Good for small, one-off changes (e.g. fixing a typo).

### 1. Open the repo

Go to **https://github.com/kkGroupStays/KartikVilla**.

### 2. Open the file to edit

Click the file (e.g. `index.html`, `README.md`).

### 3. Edit and commit

- Click the **pencil icon** (Edit this file).
- Make your changes.
- Scroll down to **Commit changes**.
- Add a short message (e.g. “Fix phone number in footer”).
- Click **Commit changes**.

The site will rebuild automatically; wait 1–2 minutes and refresh.

**Note:** For image changes, you’d need to upload new files (e.g. **Add file → Upload files**) and commit. For many edits or new images, Method 1 or 2 is easier.

---

## What to edit where

| What you want to change | File or place |
|-------------------------|----------------|
| Text, titles, descriptions, contact info | `index.html` (and `PROPERTY_CONFIG` section for phone/email) |
| Colors, fonts, spacing, layout | `styles.css` |
| Buttons, gallery, interactive behaviour | `script.js` |
| Photos (gallery, rooms) | `images/Kartik Villa/` (Bathroom, Hall, Patio, Rooms, etc.) |
| Favicon | Replace `images/favicon.png` (and keep the same name if possible) |

For more detailed customization (copy, structure, links), see **CUSTOMIZATION_GUIDE.md**.

---

## Checklist before you push

- [ ] Edits saved in the **KartikVilla-Website** folder (or you’re editing the right repo on GitHub).
- [ ] You’re on the **main** branch (Terminal: `git branch`; GitHub Desktop: check the branch name).
- [ ] Commit message is clear (e.g. “Update WhatsApp number”, “Add 3 new bathroom photos”).

---

## If changes don’t show on the site

1. **Wait 1–2 minutes** after pushing.
2. **Hard refresh** the page: **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R** (Windows).
3. Try an **incognito/private** window.
4. Confirm the push succeeded:
   - Terminal: `git status` should say “nothing to commit, working tree clean” after a successful push.
   - GitHub: open the repo and check that the latest commit is on **main** and includes your change.

---

## Quick copy-paste (Terminal)

From your project folder:

```bash
cd "/Users/kk/Documents/Kartik Villa/Website/KartikVilla-Website"
git add -A
git commit -m "Describe your update here"
git push
```

Replace `"Describe your update here"` with a short message (e.g. `"Update gallery and contact info"`).

---

*Last updated: February 2026*

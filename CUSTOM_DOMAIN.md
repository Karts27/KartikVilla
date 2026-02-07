# 🌐 How to Buy and Use a Custom Domain for Kartik Villa

This guide explains how to buy a domain (e.g. **kartikvilla.com**) and connect it to your GitHub Pages site so your villa is reachable at your own URL instead of `kkgroupstays.github.io/KartikVilla`.

---

## 📦 What You Have Now

- **Current URL:** https://kkgroupstays.github.io/KartikVilla/
- **GitHub repo:** https://github.com/kkGroupStays/KartikVilla

After following this guide, you can have a custom URL like:
- **https://kartikvilla.com** (and **https://www.kartikvilla.com**)

---

## Step 1: Choose and Buy a Domain

### Popular registrars (pick one)

| Registrar | Typical price | Link |
|-----------|----------------|------|
| **Namecheap** | ~$8–15/year | [namecheap.com](https://www.namecheap.com/) |
| **Google Domains** (now Squarespace) | ~$12/year | [domains.google](https://domains.google/) |
| **Cloudflare** | At-cost (~$9–12/year) | [cloudflare.com/products/registrar](https://www.cloudflare.com/products/registrar/) |
| **GoDaddy** | ~$10–20/year | [godaddy.com](https://www.godaddy.com/) |

### What to do

1. Go to the registrar’s website.
2. Search for the name you want (e.g. **kartikvilla.com**, **kartikvilla.in**).
3. Add it to cart and complete purchase (create an account if needed).
4. Keep the domain **unlocked** and use the registrar’s DNS (don’t point nameservers elsewhere unless you know what you’re doing).

✅ **Domain purchased.**

---

## Step 2: Add DNS Records at Your Registrar

You need to tell the internet: “Send traffic for **yourdomain.com** to GitHub Pages.”

In your registrar’s dashboard, find **DNS**, **DNS Management**, or **Manage DNS** and add these records.

### For the root domain (e.g. kartikvilla.com)

Add **four A records** (same name, four different values):

| Type | Name / Host | Value / Points to | TTL |
|------|-------------|-------------------|-----|
| A | `@` | `185.199.108.153` | 3600 (or default) |
| A | `@` | `185.199.109.153` | 3600 |
| A | `@` | `185.199.110.153` | 3600 |
| A | `@` | `185.199.111.153` | 3600 |

- **Name:** `@` means “root domain” (kartikvilla.com).
- Some panels use “@”, others leave “Name” blank for root—use what your registrar shows for the main domain.

### For www (e.g. www.kartikvilla.com)

Add **one CNAME record**:

| Type | Name / Host | Value / Points to | TTL |
|------|-------------|-------------------|-----|
| CNAME | `www` | `kkgroupstays.github.io` | 3600 (or default) |

- **Name:** `www`
- **Value:** exactly `kkgroupstays.github.io` (no `https://`, no path, no trailing slash)

Save the DNS settings. Changes can take from a few minutes up to 24–48 hours to propagate.

---

## Step 3: Set the Custom Domain in GitHub

1. Open your repo: **https://github.com/kkGroupStays/KartikVilla**
2. Click **Settings** → in the left sidebar, **Pages**.
3. Under **Custom domain**, type your domain:
   - Use the root domain, e.g. **kartikvilla.com** (not `www.kartikvilla.com`).
4. Click **Save**.
5. If GitHub offers **Enforce HTTPS**, turn it on after the domain is verified (you may need to wait until DNS is working).

GitHub will check DNS. When it’s correct, the domain will show as verified.

---

## Step 4: Add a CNAME File to Your Repo

So that GitHub Pages knows to serve your site for this domain:

1. In your **KartikVilla-Website** folder (or in the repo on GitHub), create a file named **`CNAME`** (all caps, no extension).
2. Put **one line** inside: your root domain, e.g.  
   **kartikvilla.com**
3. Save the file in the **root** of the repo (same level as `index.html`).

### If you edit locally

```bash
cd "/Users/kk/Documents/Kartik Villa/Website/KartikVilla-Website"
echo "kartikvilla.com" > CNAME
git add CNAME
git commit -m "Add custom domain CNAME"
git push
```

### If you edit on GitHub

1. Repo → **Add file** → **Create new file**.
2. File name: **CNAME**.
3. Content: **kartikvilla.com** (or your actual domain).
4. Commit to the default branch (e.g. **main**).

---

## Step 5: Wait and Test

- DNS can take **up to 24–48 hours** (often 15–30 minutes).
- In GitHub **Settings → Pages**, wait until the custom domain shows as **verified**.
- Then:
  - Open **https://kartikvilla.com**
  - Open **https://www.kartikvilla.com**
- If you enabled **Enforce HTTPS**, both should load over HTTPS.

---

## 📋 Quick Reference: DNS Summary

```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     kkgroupstays.github.io
```

- **Repo:** kkGroupStays/KartikVilla  
- **CNAME file content:** your root domain (e.g. kartikvilla.com)  
- **GitHub Pages:** Settings → Pages → Custom domain = same root domain  

---

## 🆘 Troubleshooting

### Domain not verifying in GitHub

- Wait at least 1–2 hours after changing DNS.
- Confirm the four A records and the CNAME are exactly as above.
- Use [dnschecker.org](https://dnschecker.org) and check your domain from several locations.

### “Domain’s DNS record could not be retrieved”

- DNS might not have propagated yet; wait and try again.
- Ensure there are no typos in the A and CNAME values.

### www works but root (kartikvilla.com) doesn’t

- Check that all four A records for `@` are present and correct.
- Ensure in GitHub Pages you set the custom domain to the **root** domain (e.g. kartikvilla.com), not www.

### HTTPS not available yet

- Turn on **Enforce HTTPS** only after the domain is verified.
- Certificate provisioning can take up to an hour.

---

## 💡 Tips

- **Renew the domain** every year so it doesn’t expire.
- **Keep the CNAME file** in the repo; if you delete it, the custom domain will stop working.
- Your existing link **https://kkgroupstays.github.io/KartikVilla/** will usually redirect to your custom domain once it’s set and HTTPS is enforced.

---

*Last updated: February 2026*

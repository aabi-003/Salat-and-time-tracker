# 🕌 SalatTracker

**Your personal Islamic prayer companion — track your five daily prayers with peace and purpose.**

A fully offline-capable Progressive Web App (PWA) that works as a native Android app — no Play Store required.

---

## ✨ Features

- 🕌 **5 Daily Prayer Times** — Fajr, Dhuhr, Asr, Maghrib, Isha
- 📍 **Any City Worldwide** — Powered by the free Aladhan API
- ⏳ **Live Countdown** to next prayer
- ✅ **Prayer Tracking** — Mark each prayer offered or missed
- 📊 **Daily Report** — Score card with Fard + Nafl
- 💬 **Built-in Chatbot** — Ask about times, special prayers, Makrooh times
- 🌅 **Special Times** — Ishraq, Chaasht, Zawal, Sehri, Iftaari
- 📱 **Installable on Android** — Works exactly like a native app
- 🔄 **Offline Support** — Service Worker caches everything
- 🌙 **Auto Daily Reset** — Fresh start at midnight every day

---

## 📱 How to Install on Android (for users)

Once deployed, share the link with anyone. Here's how they install it:

1. Open the site in **Chrome** on Android
2. Tap the **⋮ menu** (top right)
3. Tap **"Add to Home Screen"** or **"Install App"**
4. Tap **Install** on the prompt
5. SalatTracker appears on your home screen like any app!

---

## 🚀 Deploy on GitHub Pages (Step-by-Step)

### Step 1 — Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click **Sign up** and create a free account
3. Verify your email address

---

### Step 2 — Create a New Repository

1. After logging in, click the **+** icon (top right) → **New repository**
2. Fill in:
   - **Repository name:** `salattracker` (or any name you like)
   - **Description:** My Islamic Prayer Tracker App
   - **Visibility:** ✅ Public *(required for free GitHub Pages)*
   - **Do NOT** check "Add README" (we have our own)
3. Click **Create repository**

---

### Step 3 — Upload the Project Files

**Option A — Using GitHub's website (easiest, no coding needed):**

1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop ALL project files into the upload area:
   ```
   index.html
   manifest.json
   sw.js
   css/
     style.css
   js/
     app.js
   icons/
     icon-192.png
     icon-512.png
   README.md
   .gitignore
   ```
   > ⚠️ Upload the `css/`, `js/`, and `icons/` folders as folders (drag the whole folder)
3. Scroll down, add a commit message like: `Initial release of SalatTracker`
4. Click **Commit changes**

**Option B — Using Git (for developers):**

```bash
# Clone your new repo
git clone https://github.com/YOUR_USERNAME/salattracker.git

# Copy all project files into the folder
cp -r /path/to/salattracker/* salattracker/

# Commit and push
cd salattracker
git add .
git commit -m "Initial release of SalatTracker 🕌"
git push origin main
```

---

### Step 4 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (tab near the top)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Wait 1–2 minutes, then refresh the page
7. You'll see a green box: **"Your site is published at https://YOUR_USERNAME.github.io/salattracker/"**

---

### Step 5 — Share Your App!

Your app is now live at:
```
https://YOUR_USERNAME.github.io/salattracker/
```

Share this URL with anyone — on WhatsApp, Instagram, or anywhere. They can install it as an Android app in seconds!

---

## 🛠️ Project Structure

```
salattracker/
├── index.html          # Main app shell
├── manifest.json       # PWA manifest (makes it installable)
├── sw.js               # Service worker (offline + caching)
├── css/
│   └── style.css       # All styles
├── js/
│   └── app.js          # Full app logic
├── icons/
│   ├── icon-192.png    # App icon (small)
│   └── icon-512.png    # App icon (large)
└── README.md
```

---

## ⚙️ Technical Details

- **No backend required** — 100% client-side
- **No API key needed** — Uses free [Aladhan API](https://aladhan.com/prayer-times-api)
- **Offline capable** — Service Worker caches the app shell
- **PWA compliant** — Passes Lighthouse PWA audit
- **Prayer calculation method:** University of Islamic Sciences, Karachi (Method 1) — suitable for Pakistan and South Asia

---

## 🔧 Customization

To change the calculation method for a different region, edit `js/app.js`:

```javascript
// Find this line in fetchPrayerTimes():
const url = `https://api.aladhan.com/v1/timingsByCity?city=...&method=1`;
```

Method numbers:
| # | Authority | Region |
|---|-----------|--------|
| 1 | University of Islamic Sciences, Karachi | Pakistan/South Asia |
| 2 | Islamic Society of North America | North America |
| 3 | Muslim World League | Europe/Far East |
| 4 | Umm Al-Qura University | Saudi Arabia |
| 5 | Egyptian General Authority | Egypt |

---

## 🤲 JazakAllah Khair

May Allah accept your prayers. Built with love for the Muslim Ummah.

**Free to use, share, and modify.**

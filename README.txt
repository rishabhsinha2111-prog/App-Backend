# SalesOps PWA — Deployment Guide
# Go live in 30 minutes, zero coding

## WHAT'S IN THIS FOLDER

  index.html     → The entire app (all screens, logic, offline support)
  manifest.json  → Makes it installable as an app on phones
  sw.js          → Service worker (offline mode + background sync)
  vercel.json    → Hosting config for Vercel
  icons/         → App icons (home screen + splash screen)

---

## STEP 1 — Create a GitHub account (2 minutes)
  1. Go to github.com → Sign up (free)
  2. Click "New repository"
  3. Name it: salesops-pwa
  4. Set to Public
  5. Click "Create repository"

## STEP 2 — Upload your files (3 minutes)
  1. On the repository page, click "uploading an existing file"
  2. Drag ALL files from this folder into the upload area:
       index.html, manifest.json, sw.js, vercel.json
  3. Also drag the entire "icons" folder
  4. Scroll down → click "Commit changes"

## STEP 3 — Deploy on Vercel (5 minutes)
  1. Go to vercel.com → Sign up with your GitHub account (free)
  2. Click "Add New Project"
  3. Select your "salesops-pwa" repository
  4. Click "Deploy" — no settings to change
  5. Wait ~60 seconds
  6. Vercel gives you a URL like: salesops-pwa.vercel.app
     → THIS IS YOUR APP LIVE ON THE INTERNET

## STEP 4 — Connect your Google Sheet (5 minutes)
  1. Open your Google Sheet
  2. Look at the URL: docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
  3. Copy the long ID between /d/ and /edit
  4. Open index.html in a text editor (Notepad is fine)
  5. Find this line near the top:
       const DEFAULT_SHEET_ID = "YOUR_SHEET_ID_HERE";
  6. Replace YOUR_SHEET_ID_HERE with your actual Sheet ID
  7. Save the file
  8. Go back to GitHub → open index.html → click the pencil edit icon
  9. Make the same change → click "Commit changes"
  10. Vercel auto-redeploys in ~30 seconds

## STEP 5 — Add user PINs for your RSMs (5 minutes)
  In index.html, find this section:
  
    const USERS = {
      "arjun sharma":  {zone:"Pune West",  pin:"1234", role:"rsm"},
      ...
    }
  
  Replace with your actual RSM names and zones.
  Each RSM gets their own 4-digit PIN.
  Manager login: role:"manager" — sees all RSMs.
  Commit to GitHub → Vercel redeploys automatically.

## STEP 6 — Share with your team (2 minutes)
  Send your RSMs this message:
  
  "Open this link on your phone: salesops-pwa.vercel.app
   Type your name and PIN: [their PIN]
   When prompted, tap 'Add to Home Screen'
   It works exactly like an app!"

  iPhone: Safari → share button → Add to Home Screen
  Android: Chrome → three dots menu → Add to Home Screen
           OR Chrome shows an automatic install banner

---

## UPDATING THE APP LATER
  - Any change you make in GitHub automatically redeploys in 60 seconds
  - All your RSMs get the update instantly — no reinstalling
  - Data is saved on each phone (localStorage) and syncs to Google Sheet when online

## CUSTOM DOMAIN (optional, free)
  - In Vercel dashboard → Settings → Domains
  - Add your own domain e.g. field.yourcompany.com
  - Vercel handles SSL certificate automatically

## COSTS
  - GitHub: Free
  - Vercel: Free (up to 100GB bandwidth/month — more than enough)
  - Total: ₹0/month

---

## NEED HELP?
  If you get stuck on any step, share a screenshot and Claude can help
  you fix it in seconds.

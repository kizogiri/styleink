# Netlify CLI Deployment Steps

Since the CLI requires interactive input, follow these steps:

## Step 1: Initialize the site
Run this command:
```bash
npx netlify-cli init
```

When prompted:
1. **"Do you want to create a Netlify site without a git repository?"**
   - Select: **"Yes, create and deploy site manually"**
   - Press Enter

2. **"Team:"**
   - Select your team (use arrow keys, then Enter)

3. **"Site name (e.g. awesome-site.netlify.app):"**
   - Type: `style-ink-tshirt` (or any name you prefer)
   - Press Enter

4. **"Your build command (hugo build/yarn build/etc):"**
   - Just press Enter (leave empty, this is a static site)

5. **"Directory to deploy:"**
   - Type: `.` (current directory)
   - Press Enter

## Step 2: Deploy to production
After initialization, run:
```bash
npx netlify-cli deploy --prod
```

Your site will be deployed and you'll get a URL!

---

**OR use the simpler drag & drop method:**
1. Go to https://app.netlify.com/drop
2. Drag the entire `tshirt` folder
3. Done!


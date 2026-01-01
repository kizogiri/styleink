# Deploy to Netlify

## Option 1: Quick Deploy (Easiest - No CLI needed)
1. Go to https://app.netlify.com/drop
2. Drag and drop the entire `tshirt` folder into your browser
3. Your site will be deployed automatically!

## Option 2: Deploy via CLI
Since you're already logged in to Netlify CLI, run:

```bash
npx netlify-cli deploy --dir . --prod
```

When prompted:
- Select "Create & configure a new site"
- Choose a site name (or press Enter for auto-generated name)
- Your site will be deployed!

After deployment, you'll get a URL like: `https://your-site-name.netlify.app`

## Option 3: Using Netlify Dashboard
1. Go to https://app.netlify.com
2. Click "Add new site" → "Deploy manually"
3. Drag and drop your `tshirt` folder
4. Done!


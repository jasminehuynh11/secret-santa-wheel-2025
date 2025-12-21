# How to Deploy and Share Your Secret Santa Website

## Important: Localhost vs. Online Deployment

**`http://localhost:3000` only works on YOUR computer.** When you send this link to others, it won't work for them because "localhost" means "this computer."

To share the website with everyone, you need to **deploy it online**. This guide will help you do that for free!

---

## Option 1: Deploy to Vercel (Recommended - Easiest & Free)

Vercel is the best option for Next.js websites. It's free and takes about 5 minutes to set up.

### Step 1: Push Code to GitHub

First, you need to put your code on GitHub (if you haven't already):

1. **Create a GitHub account** at [github.com](https://github.com) (if you don't have one)

2. **Create a new repository:**
   - Click the "+" icon → "New repository"
   - Name it: `secret-santa-wheel-2025`
   - Make it **Public** or **Private** (your choice)
   - Don't initialize with README (you already have one)
   - Click "Create repository"

3. **Push your code:**
   
   Open terminal in your project folder and run:
   
   ```bash
   git init
   git add .
   git commit -m "Secret Santa Wheel 2025"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/secret-santa-wheel-2025.git
   git push -u origin main
   ```
   
   Replace `YOUR_USERNAME` with your GitHub username.

### Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub" (easiest option)

2. **Import your project:**
   - Click "Add New..." → "Project"
   - Find your `secret-santa-wheel-2025` repository
   - Click "Import"

3. **Configure project (usually auto-detected):**
   - Framework Preset: **Next.js** (should be auto-detected)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (should be auto-filled)
   - Output Directory: `.next` (should be auto-filled)
   - Install Command: `npm install` (should be auto-filled)
   
   **Click "Deploy"** (you don't need to change anything usually)

4. **Wait for deployment:**
   - This takes 1-2 minutes
   - You'll see the build progress

5. **Get your shareable link:**
   - Once deployed, you'll see: ✅ "Your deployment is ready!"
   - You'll get a URL like: `https://secret-santa-wheel-2025.vercel.app`
   - **This is the link to share with everyone!** 🎉

### Step 3: Share with Your Friends

Send them the Vercel URL. For example:
```
Hey everyone! 🎄 Spin the Secret Santa wheel here:
https://secret-santa-wheel-2025.vercel.app
```

---

## Option 2: Deploy via Vercel CLI (Alternative)

If you prefer using the command line:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? (select your account)
   - Link to existing project? **No**
   - Project name? (press Enter for default)
   - Directory? `./` (press Enter)
   - Override settings? **No**

4. **Your site will be deployed!** You'll get a URL to share.

---

## Option 3: Deploy to Netlify (Alternative)

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"
6. Get your shareable Netlify URL

---

## After Deployment

### Updating the Website

If you make changes to the code:

1. **Push changes to GitHub:**
   ```bash
   git add .
   git commit -m "Updated hints"
   git push
   ```

2. **Vercel automatically redeploys** when you push to GitHub!
   - Wait 1-2 minutes
   - Your changes will be live automatically

### Custom Domain (Optional)

Vercel allows you to use a custom domain for free:
- In Vercel dashboard → Your project → Settings → Domains
- Add your custom domain
- Follow the instructions to configure DNS

---

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Make sure `npm run build` works locally first
- Check the build logs in Vercel dashboard

### Website Not Working
- Check that the deployment succeeded (green checkmark in Vercel)
- Try the URL in an incognito/private browser window
- Check browser console for errors

### Need Help?
- Vercel has great documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js deployment guide: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

---

## Quick Summary

1. ✅ Push code to GitHub
2. ✅ Sign up for Vercel (free)
3. ✅ Import GitHub repository
4. ✅ Click Deploy
5. ✅ Share the Vercel URL with everyone! 🎄🎁

**That's it! Your Secret Santa website is now online and everyone can access it!**


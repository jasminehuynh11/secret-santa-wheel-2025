# Secret Santa Wheel 2025 🎄🎅

A festive Secret Santa wheel website for Christmas 2025 and New Year 2026!

## Features

- 🎡 Interactive spinning wheel to assign Secret Santa partners
- 🎯 Prevents duplicate assignments (one person per recipient)
- 🔒 Private results - each person only sees their own assignment
- 🎨 Beautiful Christmas/New Year themed design
- 📱 Responsive design for mobile and desktop
- ✨ Animated snowflakes and festive decorations

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## How It Works

1. Each person selects their name from the dropdown
2. Clicks "Spin the Wheel" to get their Secret Santa assignment
3. Results are private - only visible to the person who spun
4. Each person can only spin once
5. No duplicate assignments - each person gets one unique recipient

## Party Information

- **Date & Time**: 05:00 PM Sunday 28/12/2025 at Khánh's house
- **Gift Budget**: $30
- **Participants**: 6 people (Khánh, Jasmine, Tan, Vĩnh Nguyên, Chị Nga, Linh Đan)

## Technology Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Deployment

### Deploy to Vercel (Recommended - Free & Easy)

**Important:** `http://localhost:3000` only works on your computer. To share the website with everyone, you need to deploy it online!

#### Option 1: Deploy via Vercel Website (Easiest)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to [Vercel.com](https://vercel.com)**
   - Sign up/login with your GitHub account (free)

3. **Import your project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

4. **Wait for deployment** (usually 1-2 minutes)

5. **Get your shareable link:**
   - You'll get a URL like: `https://your-project-name.vercel.app`
   - **This is the link to share with everyone!** ✅

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts (login if needed)
   - Accept default settings
   - Your site will be deployed!

3. **Share the URL** that Vercel provides

### Other Deployment Options

- **Netlify**: Similar to Vercel, also free for Next.js
- **Railway**: Good alternative with database options
- **Render**: Another free hosting option

## Notes

- Assignment storage is in-memory (resets on server restart)
- To persist assignments across server restarts, consider adding a database
- Hints for each person can be updated in `data/people.ts`
- After deployment, everyone with the link can access and spin the wheel!


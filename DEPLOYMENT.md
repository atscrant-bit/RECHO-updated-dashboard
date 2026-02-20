# Deployment Guide

## Quick Start (5 Minutes)

### 1. Install Dependencies

```bash
cd reddit-dashboard
npm install
```

### 2. Test Locally

```bash
npm run dev
```

Open http://localhost:5173 in your browser

### 3. Deploy to GitHub Pages

```bash
npm run deploy
```

That's it! Your dashboard will be live at:
```
https://atscrant-bit.github.io/reddit-pulse/
```

## Detailed Instructions

### First-Time Setup

1. **Clone or download this repository**
   ```bash
   git clone <your-repo-url>
   cd reddit-dashboard
   ```

2. **Install Node.js** (if not already installed)
   - Download from https://nodejs.org/
   - Version 18 or higher required

3. **Install dependencies**
   ```bash
   npm install
   ```

### Development Workflow

```bash
# Start development server with hot reload
npm run dev

# Build for production (creates dist folder)
npm run build

# Preview production build locally
npm run preview
```

### Deployment Options

#### Option 1: Automated (Recommended)

```bash
# This builds and deploys in one command
npm run deploy
```

This command:
1. Builds your project (`npm run build`)
2. Creates a `gh-pages` branch (if it doesn't exist)
3. Pushes the `dist` folder to that branch
4. GitHub Pages automatically serves from `gh-pages`

#### Option 2: Manual

```bash
# 1. Build the project
npm run build

# 2. The dist folder now contains your site

# 3. Push to GitHub
git add dist
git commit -m "Build dashboard"
git push

# 4. Configure GitHub Pages:
#    Settings → Pages → Source: main → /dist folder
```

### GitHub Pages Configuration

After first deployment:

1. Go to your repository on GitHub
2. Settings → Pages (in sidebar)
3. Source should show `gh-pages` branch
4. Your site URL will appear at the top
5. Wait 1-2 minutes for deployment

### Updating the Dashboard

After making changes:

```bash
# 1. Test locally
npm run dev

# 2. When satisfied, deploy
npm run deploy
```

Changes will be live in 1-2 minutes.

### Troubleshooting

**npm install fails:**
- Ensure Node.js 18+ is installed
- Try: `npm cache clean --force` then `npm install` again

**Dashboard not loading:**
- Check browser console (F12) for errors
- Verify `base: '/reddit-pulse/'` in `vite.config.js` matches your repo name
- Clear browser cache (Ctrl+Shift+R)

**Changes not appearing:**
- Wait 2-3 minutes after deployment
- Hard refresh browser (Ctrl+Shift+R)
- Check GitHub Pages build status in repo settings

**404 errors on refresh:**
- This is normal for single-page apps on GitHub Pages
- Users should navigate from the homepage

### Updating Data

To update with real data, edit `src/data/sampleData.js`:

```javascript
export const topSubreddits = [
  // Replace with your actual data
  { name: 'r/example', impressions: 12345, upvotes: 678, engagement: 4.5 },
];
```

Then redeploy:
```bash
npm run deploy
```

### Custom Domain (Optional)

1. Add a `CNAME` file to `/public` folder:
   ```
   your-domain.com
   ```

2. Configure DNS with your domain provider:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   ```

3. In GitHub Pages settings, add your custom domain

### Environment Variables

For API keys or secrets, create `.env`:

```bash
VITE_API_KEY=your_api_key_here
```

Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

**Never commit `.env` to Git!**

### Performance Tips

- Images: Place in `/public` folder
- Large data: Consider lazy loading
- Charts: Already optimized with Recharts
- Bundle size: Currently ~150KB gzipped

### Support

Need help?
1. Check `README.md` for full documentation
2. Review error messages in browser console
3. Verify all files are in correct locations
4. Try deleting `node_modules` and reinstalling

## Next Steps

After deployment:
1. ✅ Test all tabs and features
2. ✅ Update with real data
3. ✅ Customize colors and branding
4. ✅ Set up automated data updates
5. ✅ Monitor GitHub Pages uptime

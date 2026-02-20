# 🚀 Quick Start Guide

## Get Your Dashboard Running in 3 Steps

### Step 1: Setup (2 minutes)

```bash
cd reddit-dashboard
npm install
```

### Step 2: Test Locally (1 minute)

```bash
npm run dev
```

Open http://localhost:5173 - your dashboard is live!

### Step 3: Deploy (2 minutes)

```bash
npm run deploy
```

Done! Visit: https://atscrant-bit.github.io/reddit-pulse/

---

## What You Get

✅ **5 Complete Dashboards**
- Overview - Key performance metrics
- Organic - User profile & subreddit performance  
- Brand - Sentiment analysis & mentions
- Subreddit - Community growth metrics
- Paid Ads - Campaign performance & creative insights

✅ **Advanced Features**
- Executive summaries on every tab
- 6 date range filters (3-day to current month)
- Info tooltips on all metrics
- Top 10 subreddits (expanded from 5)
- Top 20 performing content pieces
- Interactive charts (Recharts)
- Responsive design (mobile-ready)

✅ **Easy Customization**
- Update data in `src/data/sampleData.js`
- Change colors in `src/index.css`
- Add metrics with `<MetricCard>` component

---

## Folder Structure

```
reddit-dashboard/
├── src/
│   ├── components/        # React components
│   ├── data/             # Data source (UPDATE HERE!)
│   ├── utils/            # Helper functions
│   └── App.jsx           # Main app
├── public/               # Static files
└── package.json          # Dependencies
```

---

## Update Your Data

Edit `src/data/sampleData.js`:

```javascript
export const topSubreddits = [
  // Replace with your real data
  { name: 'r/yoursubreddit', impressions: 12345, upvotes: 678, engagement: 4.5 },
];
```

Deploy changes:
```bash
npm run deploy
```

---

## Common Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run deploy    # Build & deploy to GitHub Pages
```

---

## Need Help?

1. **Full Documentation**: See `README.md`
2. **Deployment Guide**: See `DEPLOYMENT.md`
3. **Issues**: Check browser console (F12)

---

## Tech Stack

- React 18
- Vite 5  
- Recharts 2.5
- Pure CSS

## Browser Support

✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+

---

## What's Different from Old Dashboard?

### New Features
✅ Impressions as primary metric
✅ "Monthly Budget Spent" label
✅ Last updated timestamp
✅ Executive summaries on all tabs
✅ Info tooltips for all metrics
✅ Top 10 subreddits (was 5)
✅ Top 20 content pieces (was none)
✅ 6 date filters (was none)
✅ Brand sentiment split (positive/negative)
✅ Proper component structure

### Better Development
✅ Easy to update data
✅ Easy to customize
✅ Easy to deploy
✅ Easy to maintain
✅ Proper React components
✅ Organized file structure

---

## Support

Questions? Check:
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Deployment help
- Browser console - Error messages

---

Made with ❤️ for RECHO

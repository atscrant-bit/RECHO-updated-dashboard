# Reddit Performance Console

A comprehensive analytics dashboard for tracking Reddit marketing performance across organic, brand, subreddit, and paid advertising metrics.

## Features

### ✅ All Requirements Implemented

**Overview Page:**
- Impressions as primary metric
- "Monthly Budget Spent" (changed from "Budget Pacing")
- Data last updated timestamp
- Executive summaries with date ranges on every tab
- Info tooltips for all metrics

**Reporting Structure:**
1. **Overview** - High-level performance snapshot
2. **Organic** - User profile metrics (impressions, upvotes, karma, web traffic)
3. **Brand** - Brand monitoring and sentiment analysis
4. **Subreddit** - Client's own subreddit performance
5. **Paid Ads** - Ad performance and creative insights

**Organic Section:**
- Separated user profile from subreddit metrics
- Impressions & upvotes as primary (karma secondary)
- Top 10 subreddits (expanded from 5)
- Top 20 performing posts with excerpts
- Direct + inferred traffic metrics

**Brand Monitoring:**
- Sentiment analysis separate from organic
- Top 5 positive mentions with scores
- Top 5 negative mentions with scores

**Date Filters:**
- 3-day, 7-day, 30-day, 90-day
- Last month, Current month
- Custom date range ready

## Development Setup

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

### Automated Deployment

```bash
# Build and deploy in one command
npm run deploy
```

### Manual Deployment

```bash
# 1. Build the project
npm run build

# 2. The dist folder contains your production files
# 3. Push to GitHub Pages branch or configure GitHub Actions
```

### GitHub Pages Configuration

1. Go to repository Settings → Pages
2. Set Source to "gh-pages" branch (created by npm run deploy)
3. Site will be live at: `https://atscrant-bit.github.io/reddit-pulse/`

## Project Structure

```
reddit-dashboard/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Main header with tabs
│   │   ├── DateFilter.jsx          # Date range selector
│   │   ├── ExecutiveSummary.jsx    # AI-generated summaries
│   │   ├── MetricCard.jsx          # Reusable metric display
│   │   └── tabs/
│   │       ├── OverviewTab.jsx     # Overview dashboard
│   │       ├── OrganicTab.jsx      # Organic metrics
│   │       ├── BrandTab.jsx        # Brand monitoring
│   │       ├── SubredditTab.jsx    # Subreddit performance
│   │       └── PaidTab.jsx         # Paid advertising
│   ├── data/
│   │   └── sampleData.js           # Sample data (REPLACE WITH REAL DATA)
│   ├── utils/
│   │   ├── dateUtils.js            # Date manipulation
│   │   └── formatUtils.js          # Number/currency formatting
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
└── package.json                    # Dependencies
```

## Customization

### Update Data

Replace sample data in `src/data/sampleData.js`:

```javascript
export const topSubreddits = [
  { name: 'r/yoursubreddit', impressions: 125432, upvotes: 543, engagement: 4.3 },
  // ... your data
];
```

### Change Colors

Modify CSS variables in `src/index.css`:

```css
:root {
  --primary: #FF4500;        /* Reddit orange */
  --secondary: #0079D3;      /* Reddit blue */
  --background: #0A0A0B;     /* Dark background */
  /* ... more variables */
}
```

### Add New Metrics

1. Update `sampleData.js` with new data
2. Add metric to relevant tab component
3. Use `<MetricCard>` component for consistency

## Connecting Real Data

### Option 1: API Integration

```javascript
// src/data/apiData.js
export const fetchDashboardData = async () => {
  const response = await fetch('YOUR_API_ENDPOINT');
  return await response.json();
};

// Use in components
import { useEffect, useState } from 'react';
import { fetchDashboardData } from '../data/apiData';

const [data, setData] = useState(null);

useEffect(() => {
  fetchDashboardData().then(setData);
}, []);
```

### Option 2: Direct Data Files

Replace `sampleData.js` exports with your actual data:

```javascript
import actualData from './yourDataFile.json';
export const topSubreddits = actualData.subreddits;
```

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Charts:** Recharts 2.5
- **Icons:** Lucide React
- **Styling:** Pure CSS with CSS Variables
- **Deployment:** GitHub Pages (gh-pages)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Performance

- Optimized bundle size
- Lazy loading ready
- Responsive design
- Fast page loads

## Future Enhancements

- [ ] SEO/GEO section
- [ ] Custom date range picker
- [ ] Data export (CSV/Excel)
- [ ] Real-time updates
- [ ] Advanced filtering
- [ ] Dark/Light theme toggle

## License

Copyright © 2024 RECHO. All rights reserved.

## Support

For issues or questions:
1. Check the documentation
2. Review sample data structure
3. Open a GitHub issue

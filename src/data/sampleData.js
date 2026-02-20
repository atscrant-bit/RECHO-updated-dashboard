// Sample data - replace with real data from your API or database

export const sampleTimeSeriesData = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  impressions: Math.floor(20000 + Math.random() * 15000),
  upvotes: Math.floor(50 + Math.random() * 100),
  clicks: Math.floor(500 + Math.random() * 500),
  engagement: parseFloat((Math.random() * 5 + 3).toFixed(2))
}));

export const topSubreddits = [
  { name: 'r/technology', impressions: 125432, upvotes: 543, engagement: 4.3 },
  { name: 'r/programming', impressions: 98234, upvotes: 421, engagement: 4.1 },
  { name: 'r/webdev', impressions: 87654, upvotes: 387, engagement: 4.4 },
  { name: 'r/startups', impressions: 76543, upvotes: 298, engagement: 3.9 },
  { name: 'r/marketing', impressions: 65432, upvotes: 276, engagement: 4.2 },
  { name: 'r/entrepreneur', impressions: 54321, upvotes: 234, engagement: 4.3 },
  { name: 'r/business', impressions: 48765, upvotes: 198, engagement: 4.1 },
  { name: 'r/SaaS', impressions: 43210, upvotes: 187, engagement: 4.3 },
  { name: 'r/socialmedia', impressions: 38901, upvotes: 165, engagement: 4.2 },
  { name: 'r/analytics', impressions: 32456, upvotes: 143, engagement: 4.4 }
];

export const topContent = [
  { title: 'How we scaled our Reddit presence from 0 to 100K impressions', upvotes: 234, comments: 45, impressions: 12543 },
  { title: 'Lessons learned from 6 months of Reddit marketing', upvotes: 198, comments: 38, impressions: 11234 },
  { title: 'The complete guide to Reddit analytics', upvotes: 176, comments: 32, impressions: 10987 },
  { title: 'Best practices for community engagement', upvotes: 154, comments: 28, impressions: 9876 },
  { title: 'Data-driven approach to subreddit selection', upvotes: 143, comments: 25, impressions: 9234 },
  { title: 'Understanding Reddit\'s algorithm in 2024', upvotes: 132, comments: 23, impressions: 8765 },
  { title: 'How to build authentic communities on Reddit', upvotes: 121, comments: 21, impressions: 8234 },
  { title: 'Reddit advertising vs organic: A comparison', upvotes: 110, comments: 19, impressions: 7890 },
  { title: 'Top 10 mistakes to avoid on Reddit', upvotes: 98, comments: 17, impressions: 7456 },
  { title: 'Growing your startup community on Reddit', upvotes: 87, comments: 15, impressions: 7123 },
  { title: 'Reddit content strategy for B2B companies', upvotes: 76, comments: 14, impressions: 6789 },
  { title: 'Measuring ROI from Reddit marketing', upvotes: 65, comments: 12, impressions: 6345 },
  { title: 'The art of Reddit copywriting', upvotes: 54, comments: 11, impressions: 5890 },
  { title: 'Building trust through Reddit engagement', upvotes: 43, comments: 9, impressions: 5432 },
  { title: 'Reddit vs other social platforms', upvotes: 32, comments: 8, impressions: 4987 },
  { title: 'Community moderation best practices', upvotes: 28, comments: 7, impressions: 4567 },
  { title: 'Timing your Reddit posts for maximum reach', upvotes: 24, comments: 6, impressions: 4123 },
  { title: 'Cross-promoting content across subreddits', upvotes: 21, comments: 5, impressions: 3789 },
  { title: 'Reddit karma: What it means and why it matters', upvotes: 18, comments: 4, impressions: 3456 },
  { title: 'Building a content calendar for Reddit', upvotes: 15, comments: 3, impressions: 3123 }
];

export const brandMentions = {
  positive: [
    { text: 'Amazing customer service experience!', subreddit: 'r/reviews', score: 145 },
    { text: 'Best product in this category hands down', subreddit: 'r/technology', score: 123 },
    { text: 'Highly recommend, exceeded expectations', subreddit: 'r/ProductReviews', score: 98 },
    { text: 'Great value for money, very satisfied', subreddit: 'r/BuyItForLife', score: 87 },
    { text: 'Customer support was incredibly helpful', subreddit: 'r/CustomerService', score: 76 }
  ],
  negative: [
    { text: 'Shipping took longer than expected', subreddit: 'r/reviews', score: -34 },
    { text: 'Price point seems a bit high', subreddit: 'r/Frugal', score: -28 },
    { text: 'Website could use better navigation', subreddit: 'r/webdev', score: -23 },
    { text: 'Would like to see more color options', subreddit: 'r/ProductDesign', score: -19 },
    { text: 'Mobile app needs improvement', subreddit: 'r/AppReviews', score: -15 }
  ]
};

export const campaignData = [
  { campaign: 'Brand Awareness', impressions: 85000, clicks: 2380, conversions: 156 },
  { campaign: 'Product Launch', impressions: 72000, clicks: 2016, conversions: 189 },
  { campaign: 'Retargeting', impressions: 48000, clicks: 1680, conversions: 142 },
  { campaign: 'Community Building', impressions: 29567, clicks: 887, conversions: 78 }
];

export const creativeFormats = [
  { format: 'Carousel Ads', ctr: '3.2%', color: '#FF4500' },
  { format: 'Video Ads', ctr: '2.9%', color: '#0079D3' },
  { format: 'Static Image', ctr: '2.1%', color: '#46D160' },
  { format: 'Text-Only', ctr: '1.8%', color: '#FFB020' }
];

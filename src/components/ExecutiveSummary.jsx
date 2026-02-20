import './ExecutiveSummary.css';

const ExecutiveSummary = ({ dateRange, section }) => {
  const summaries = {
    overview: `Performance snapshot for ${dateRange}: Overall engagement is trending upward with impressions increasing by 23.5% and total interactions up 18.2%. Content quality metrics show strong improvement, particularly in highly-engaged subreddits. Budget pacing is on track at 67% utilization.`,
    organic: `User profile performance for ${dateRange}: Organic reach expanded significantly with 847K impressions across 12 active subreddits. Top-performing content focused on technical discussions and community building, generating 2,341 upvotes. Web traffic from Reddit increased by 31% with strong engagement metrics.`,
    brand: `Brand monitoring insights for ${dateRange}: Sentiment analysis shows 78% positive mentions across tracked subreddits. Brand awareness campaigns generated significant organic discussion, with community sentiment improving by 12 points. Key themes include product quality and customer service excellence.`,
    subreddit: `Subreddit growth metrics for ${dateRange}: Community expansion continued with 1,234 new followers and 45K post impressions. Engagement rate increased to 8.7%, with video content driving the highest interaction rates. Traffic to owned properties up 28% compared to previous period.`,
    paid: `Paid advertising performance for ${dateRange}: Campaign efficiency improved with CTR up 15% to 2.8% and CPC down 8% to $0.42. Top-performing creative formats include carousel ads and video content. ROAS stands at 3.2x with strong conversion rates in target demographics.`
  };
  
  return (
    <div className="executive-summary">
      <div className="executive-summary-label">Executive Summary</div>
      <div className="executive-summary-text">
        {summaries[section]}
      </div>
    </div>
  );
};

export default ExecutiveSummary;

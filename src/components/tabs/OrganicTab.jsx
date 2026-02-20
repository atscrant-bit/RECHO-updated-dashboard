import MetricCard from '../MetricCard';
import { formatNumber } from '../../utils/formatUtils';
import { topSubreddits, topContent } from '../../data/sampleData';
import './OverviewTab.css';

const OrganicTab = ({ dateFilter }) => {
  return (
    <div className="tab-content">
      {/* Organic Metrics */}
      <div className="metrics-grid">
        <MetricCard 
          title="Profile Impressions" 
          value={formatNumber(847234)} 
          change={31.2}
          icon="👁️"
          tooltip="Total impressions on your user profile content across Reddit"
        />
        <MetricCard 
          title="Total Upvotes" 
          value={formatNumber(2341)} 
          change={24.6}
          icon="⬆️"
          tooltip="Cumulative upvotes across all organic posts and comments"
        />
        <MetricCard 
          title="Karma Score" 
          value={formatNumber(15678)} 
          change={18.9}
          icon="⭐"
          tooltip="Your overall Reddit karma score - a measure of community contribution"
        />
        <MetricCard 
          title="Web Traffic" 
          value={formatNumber(12543)} 
          change={28.3}
          icon="🔗"
          tooltip="Website visits attributed to Reddit referrals (direct + inferred)"
        />
      </div>

      {/* Top 10 Subreddits */}
      <div className="table-card">
        <h3 className="table-title">Top 10 Subreddits by Organic Performance</h3>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Subreddit</th>
                <th>Impressions</th>
                <th>Upvotes</th>
                <th>Engagement</th>
              </tr>
            </thead>
            <tbody>
              {topSubreddits.map((sub, i) => (
                <tr key={i}>
                  <td className="font-medium" style={{ color: 'var(--text-tertiary)' }}>#{i + 1}</td>
                  <td className="font-medium">{sub.name}</td>
                  <td>{formatNumber(sub.impressions)}</td>
                  <td>{formatNumber(sub.upvotes)}</td>
                  <td>{sub.engagement}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top 20 Performing Content - showing top 5 for now */}
      <div className="table-card">
        <h3 className="table-title">Top 20 Performing Posts & Replies</h3>
        <div className="content-list">
          {topContent.slice(0, 20).map((content, i) => (
            <div key={i} className="content-item">
              <div className="content-item-title">
                {content.title}
              </div>
              <div className="content-item-stats">
                <span>⬆️ {content.upvotes} upvotes</span>
                <span>💬 {content.comments} comments</span>
                <span>👁️ {formatNumber(content.impressions)} impressions</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganicTab;

import MetricCard from '../MetricCard';
import { formatNumber } from '../../utils/formatUtils';
import { brandMentions } from '../../data/sampleData';
import './OverviewTab.css';

const BrandTab = ({ dateFilter }) => {
  return (
    <div className="tab-content">
      {/* Brand Metrics */}
      <div className="metrics-grid">
        <MetricCard 
          title="Brand Mentions" 
          value={formatNumber(1847)} 
          change={15.3}
          icon="📢"
          tooltip="Total brand mentions across monitored subreddits"
        />
        <MetricCard 
          title="Positive Sentiment" 
          value="78%" 
          change={12.1}
          icon="😊"
          tooltip="Percentage of brand mentions with positive sentiment"
        />
        <MetricCard 
          title="Sentiment Score" 
          value="+42" 
          change={8.7}
          icon="📈"
          tooltip="Net sentiment score (positive mentions minus negative mentions)"
        />
        <MetricCard 
          title="Share of Voice" 
          value="23.4%" 
          change={6.2}
          icon="🔊"
          tooltip="Your brand's share of total category discussions"
        />
      </div>

      {/* Brand Mentions Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Positive Mentions */}
        <div className="table-card">
          <h3 className="table-title" style={{ color: 'var(--success)' }}>
            Top 5 Positive Mentions
          </h3>
          <div className="content-list">
            {brandMentions.positive.map((mention, i) => (
              <div key={i} className="mention-card positive">
                <div className="mention-text">
                  "{mention.text}"
                </div>
                <div className="mention-meta">
                  <span>{mention.subreddit}</span>
                  <span className="mention-score positive">+{mention.score} score</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Negative Mentions */}
        <div className="table-card">
          <h3 className="table-title" style={{ color: 'var(--warning)' }}>
            Top 5 Negative Mentions
          </h3>
          <div className="content-list">
            {brandMentions.negative.map((mention, i) => (
              <div key={i} className="mention-card negative">
                <div className="mention-text">
                  "{mention.text}"
                </div>
                <div className="mention-meta">
                  <span>{mention.subreddit}</span>
                  <span className="mention-score negative">{mention.score} score</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandTab;

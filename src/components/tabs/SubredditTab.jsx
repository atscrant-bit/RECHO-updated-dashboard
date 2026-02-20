import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MetricCard from '../MetricCard';
import { formatNumber } from '../../utils/formatUtils';
import { sampleTimeSeriesData } from '../../data/sampleData';
import './OverviewTab.css';

const SubredditTab = ({ dateFilter }) => {
  return (
    <div className="tab-content">
      {/* Subreddit Metrics */}
      <div className="metrics-grid">
        <MetricCard 
          title="Post Impressions" 
          value={formatNumber(45123)} 
          change={22.4}
          icon="👁️"
          tooltip="Total impressions on posts in your subreddit"
        />
        <MetricCard 
          title="Followers" 
          value={formatNumber(1234)} 
          change={15.8}
          icon="👥"
          tooltip="New followers gained during the selected period"
        />
        <MetricCard 
          title="Subreddit Views" 
          value={formatNumber(23456)} 
          change={19.3}
          icon="📊"
          tooltip="Total views of your subreddit page"
        />
        <MetricCard 
          title="Traffic to Site" 
          value={formatNumber(3421)} 
          change={28.1}
          icon="🔗"
          tooltip="Clicks from your subreddit to your website"
        />
      </div>

      {/* Growth Chart */}
      <div className="chart-card" style={{ marginBottom: '32px' }}>
        <h3 className="chart-title">Subreddit Growth Trend</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={sampleTimeSeriesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="date" stroke="var(--text-tertiary)" style={{ fontSize: '12px' }} />
            <YAxis stroke="var(--text-tertiary)" style={{ fontSize: '12px' }} />
            <Tooltip 
              contentStyle={{ 
                background: 'var(--surface-elevated)', 
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-primary)'
              }} 
            />
            <Legend />
            <Line type="monotone" dataKey="impressions" stroke="#FF4500" strokeWidth={2} name="Impressions" />
            <Line type="monotone" dataKey="clicks" stroke="#0079D3" strokeWidth={2} name="Clicks" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Engagement Rate */}
      <div className="table-card">
        <h3 className="table-title">Engagement Rate: 8.7%</h3>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: '87%' }}>
            87% of benchmark
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubredditTab;

import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import MetricCard from '../MetricCard';
import { formatNumber } from '../../utils/formatUtils';
import { sampleTimeSeriesData, topSubreddits } from '../../data/sampleData';
import './OverviewTab.css';

const OverviewTab = ({ dateFilter }) => {
  return (
    <div className="tab-content">
      {/* Primary Metrics */}
      <div className="metrics-grid">
        <MetricCard 
          title="Impressions" 
          value={formatNumber(847234)} 
          change={23.5}
          icon="👁️"
          tooltip="Total number of times your content was displayed to Reddit users"
        />
        <MetricCard 
          title="Upvotes" 
          value={formatNumber(2341)} 
          change={18.2}
          icon="⬆️"
          tooltip="Total upvotes received across all posts and comments"
        />
        <MetricCard 
          title="Engagement Rate" 
          value="4.2%" 
          change={12.8}
          icon="💬"
          tooltip="Percentage of impressions that resulted in user interaction (upvotes, comments, clicks)"
        />
        <MetricCard 
          title="Monthly Budget Spent" 
          value="67%" 
          change={-3.2}
          icon="💵"
          tooltip="Percentage of monthly advertising budget utilized to date"
        />
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="chart-card">
          <h3 className="chart-title">Impressions Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={sampleTimeSeriesData}>
              <defs>
                <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF4500" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#FF4500" stopOpacity={0}/>
                </linearGradient>
              </defs>
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
              <Area type="monotone" dataKey="impressions" stroke="#FF4500" strokeWidth={2} fill="url(#colorImpressions)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Engagement Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Upvotes', value: 45 },
                  { name: 'Comments', value: 30 },
                  { name: 'Clicks', value: 25 }
                ]}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                <Cell fill="#FF4500" />
                <Cell fill="#0079D3" />
                <Cell fill="#46D160" />
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  background: 'var(--surface-elevated)', 
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Subreddits */}
      <div className="table-card">
        <h3 className="table-title">Top 5 Subreddits by Performance</h3>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Subreddit</th>
                <th>Impressions</th>
                <th>Upvotes</th>
                <th>Engagement</th>
              </tr>
            </thead>
            <tbody>
              {topSubreddits.slice(0, 5).map((sub, i) => (
                <tr key={i}>
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
    </div>
  );
};

export default OverviewTab;

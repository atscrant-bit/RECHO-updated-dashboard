import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MetricCard from '../MetricCard';
import { formatNumber } from '../../utils/formatUtils';
import { campaignData, creativeFormats } from '../../data/sampleData';
import './OverviewTab.css';

const PaidTab = ({ dateFilter }) => {
  return (
    <div className="tab-content">
      {/* Paid Metrics */}
      <div className="metrics-grid">
        <MetricCard 
          title="Ad Impressions" 
          value={formatNumber(234567)} 
          change={18.3}
          icon="👁️"
          tooltip="Total paid ad impressions across all campaigns"
        />
        <MetricCard 
          title="Click-Through Rate" 
          value="2.8%" 
          change={15.2}
          icon="🖱️"
          tooltip="Percentage of ad impressions that resulted in clicks"
        />
        <MetricCard 
          title="Cost Per Click" 
          value="$0.42" 
          change={-8.1}
          icon="💰"
          tooltip="Average cost per click across all campaigns"
        />
        <MetricCard 
          title="ROAS" 
          value="3.2x" 
          change={12.5}
          icon="📈"
          tooltip="Return on Ad Spend - revenue generated per dollar spent"
        />
      </div>

      {/* Campaign Performance */}
      <div className="chart-card" style={{ marginBottom: '32px' }}>
        <h3 className="chart-title">Campaign Performance Comparison</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={campaignData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="campaign" stroke="var(--text-tertiary)" style={{ fontSize: '12px' }} />
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
            <Bar dataKey="impressions" fill="#FF4500" name="Impressions" />
            <Bar dataKey="clicks" fill="#0079D3" name="Clicks" />
            <Bar dataKey="conversions" fill="#46D160" name="Conversions" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Creative Insights */}
      <div className="table-card">
        <h3 className="table-title">Top Performing Creative Formats</h3>
        <div className="creative-grid">
          {creativeFormats.map((item, i) => (
            <div key={i} className="creative-card">
              <div className="creative-label">{item.format}</div>
              <div className="creative-value" style={{ color: item.color }}>
                {item.ctr}
              </div>
              <div className="creative-metric">CTR</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaidTab;

import { useState, useMemo } from 'react';
import Header from './components/Header';
import DateFilter from './components/DateFilter';
import ExecutiveSummary from './components/ExecutiveSummary';
import OverviewTab from './components/tabs/OverviewTab';
import OrganicTab from './components/tabs/OrganicTab';
import BrandTab from './components/tabs/BrandTab';
import SubredditTab from './components/tabs/SubredditTab';
import PaidTab from './components/tabs/PaidTab';
import { getDateRange } from './utils/dateUtils';
import './App.css';

const TABS = [
  { id: 'overview', label: 'Overview', icon: '📊' },
  { id: 'organic', label: 'Organic', icon: '🌱' },
  { id: 'brand', label: 'Brand', icon: '🏷️' },
  { id: 'subreddit', label: 'Subreddit', icon: '👥' },
  { id: 'paid', label: 'Paid Ads', icon: '💰' },
];

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateFilter, setDateFilter] = useState('30-day');
  const [lastUpdated] = useState(new Date());

  const dateRangeText = useMemo(() => {
    const { start, end } = getDateRange(dateFilter);
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
  }, [dateFilter]);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab dateFilter={dateFilter} />;
      case 'organic':
        return <OrganicTab dateFilter={dateFilter} />;
      case 'brand':
        return <BrandTab dateFilter={dateFilter} />;
      case 'subreddit':
        return <SubredditTab dateFilter={dateFilter} />;
      case 'paid':
        return <PaidTab dateFilter={dateFilter} />;
      default:
        return <OverviewTab dateFilter={dateFilter} />;
    }
  };

  return (
    <div className="app">
      <Header
        lastUpdated={lastUpdated}
        dateRangeText={dateRangeText}
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main className="main-content">
        <DateFilter selected={dateFilter} onChange={setDateFilter} />
        <ExecutiveSummary dateRange={dateRangeText} section={activeTab} />
        {renderActiveTab()}
      </main>
    </div>
  );
}

export default App;

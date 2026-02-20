import './Header.css';

const Header = ({ lastUpdated, dateRangeText, tabs, activeTab, onTabChange }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <div>
            <h1 className="header-title">
              Reddit Performance Console
            </h1>
            <div className="header-subtitle">
              Last updated: {lastUpdated.toLocaleString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </div>
          <div className="header-date-range">
            <div className="date-range-label">Date Range</div>
            <div className="date-range-value">{dateRangeText}</div>
          </div>
        </div>
        
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useState } from 'react';
import './MetricCard.css';

const InfoTooltip = ({ text }) => {
  const [show, setShow] = useState(false);
  
  return (
    <div className="info-tooltip-container">
      <button
        className="info-tooltip-btn"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        ?
      </button>
      {show && (
        <div className="info-tooltip">
          {text}
          <div className="info-tooltip-arrow" />
        </div>
      )}
    </div>
  );
};

const MetricCard = ({ title, value, change, tooltip, icon }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="metric-card">
      <div className="metric-card-header">
        {icon && <span className="metric-card-icon">{icon}</span>}
        <span className="metric-card-title">{title}</span>
        {tooltip && <InfoTooltip text={tooltip} />}
      </div>
      <div className="metric-card-value">{value}</div>
      {change !== undefined && (
        <div className={`metric-card-change ${isPositive ? 'positive' : 'negative'}`}>
          <span>{isPositive ? '↑' : '↓'}</span>
          <span>{Math.abs(change)}%</span>
          <span className="metric-card-change-label">vs prev period</span>
        </div>
      )}
    </div>
  );
};

export default MetricCard;

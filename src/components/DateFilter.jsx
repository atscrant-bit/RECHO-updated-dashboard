import './DateFilter.css';

const DateFilter = ({ selected, onChange }) => {
  const periods = [
    { value: '3-day', label: '3 Days' },
    { value: '7-day', label: '7 Days' },
    { value: '30-day', label: '30 Days' },
    { value: '90-day', label: '90 Days' },
    { value: 'last-month', label: 'Last Month' },
    { value: 'current-month', label: 'Current Month' },
  ];
  
  return (
    <div className="date-filter">
      {periods.map(period => (
        <button
          key={period.value}
          onClick={() => onChange(period.value)}
          className={`date-filter-btn ${selected === period.value ? 'date-filter-btn-active' : ''}`}
        >
          {period.label}
        </button>
      ))}
    </div>
  );
};

export default DateFilter;

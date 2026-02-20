export const getDateRange = (period) => {
  const end = new Date();
  const start = new Date();
  
  switch(period) {
    case '3-day':
      start.setDate(end.getDate() - 3);
      break;
    case '7-day':
      start.setDate(end.getDate() - 7);
      break;
    case '30-day':
      start.setDate(end.getDate() - 30);
      break;
    case '90-day':
      start.setDate(end.getDate() - 90);
      break;
    case 'last-month':
      start.setMonth(end.getMonth() - 1, 1);
      end.setDate(0);
      break;
    case 'current-month':
      start.setDate(1);
      break;
    default:
      start.setDate(end.getDate() - 30);
  }
  
  return { start, end };
};

export const COLORS = ['#FF9F0A', '#30D158', '#0A84FF', '#BF5AF2', '#FF453A'];

export const formatINR = (value: number) => {
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
  if (value >= 1000) return `₹${(value / 1000).toFixed(1)}k`;
  return `₹${value}`;
};

export interface ChartData {
  name: string;
  revenue: number;
}

export const chartData: Record<'Daily' | 'Weekly' | 'Monthly', ChartData[]> = {
  Daily: [
    { name: 'Mon', revenue: 10000 },
    { name: 'Tue', revenue: 15000 },
    { name: 'Wed', revenue: 12000 },
    { name: 'Thu', revenue: 20000 },
    { name: 'Fri', revenue: 25000 },
    { name: 'Sat', revenue: 30000 },
    { name: 'Sun', revenue: 28000 },
  ],
  Weekly: [
    { name: 'Week 1', revenue: 50000 },
    { name: 'Week 2', revenue: 65000 },
    { name: 'Week 3', revenue: 60000 },
    { name: 'Week 4', revenue: 80000 },
  ],
  Monthly: [
    { name: 'Jan', revenue: 120000 },
    { name: 'Feb', revenue: 150000 },
    { name: 'Mar', revenue: 180000 },
    { name: 'Apr', revenue: 210000 },
    { name: 'May', revenue: 240000 },
    { name: 'Jun', revenue: 310000 },
  ],
};

export const donutData: Record<string, { name: string; value: number }[]> = {
  All: [
    { name: 'Organic', value: 45 },
    { name: 'Paid Ads', value: 30 },
    { name: 'Referral', value: 15 },
    { name: 'Direct', value: 10 },
  ],
  Paid: [
    { name: 'Meta', value: 50 },
    { name: 'Google Search', value: 35 },
    { name: 'LinkedIn', value: 15 },
  ],
};

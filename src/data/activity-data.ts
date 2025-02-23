
export type ActivityStatus = 'available' | 'away' | 'busy';

export interface MonthlyActivity {
  year: number;
  months: {
    [key: string]: {
      count: number;
      status: ActivityStatus;
    };
  };
}

export const activityData: MonthlyActivity[] = [
  {
    year: 2025,
    months: {
      Jan: { count: 1, status: 'available' },
    },
  },
  {
    year: 2024,
    months: {
      Jan: { count: 16, status: 'busy' },
      Feb: { count: 20, status: 'busy' },
      Mar: { count: 5, status: 'available' },
      Oct: { count: 2, status: 'away' },
      Nov: { count: 4, status: 'available' },
      Dec: { count: 3, status: 'away' },
    },
  },
  {
    year: 2023,
    months: {
      Jan: { count: 14, status: 'busy' },
      Feb: { count: 2, status: 'away' },
      Mar: { count: 10, status: 'busy' },
      Apr: { count: 11, status: 'busy' },
      May: { count: 13, status: 'busy' },
      Jun: { count: 32, status: 'busy' },
      Jul: { count: 5, status: 'available' },
      Aug: { count: 9, status: 'available' },
      Sep: { count: 5, status: 'available' },
      Oct: { count: 12, status: 'busy' },
      Nov: { count: 10, status: 'busy' },
      Dec: { count: 12, status: 'busy' },
    },
  },
];


export interface MonthlyActivity {
  year: number;
  months: {
    [key: string]: number;
  };
}

export const activityData: MonthlyActivity[] = [
  {
    year: 2025,
    months: {
      Jan: 1,
    },
  },
  {
    year: 2024,
    months: {
      Jan: 16,
      Feb: 20,
      Mar: 5,
      Oct: 2,
      Nov: 4,
      Dec: 3,
    },
  },
  {
    year: 2023,
    months: {
      Jan: 14,
      Feb: 2,
      Mar: 10,
      Apr: 11,
      May: 13,
      Jun: 32,
      Jul: 5,
      Aug: 9,
      Sep: 5,
      Oct: 12,
      Nov: 10,
      Dec: 12,
    },
  },
];

export const summaryStats = {
  totalVideos: 384,
  verifiedClients: 17,
  since: "Nov 2021",
};

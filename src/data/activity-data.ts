
export type ActivityStatus = 'available' | 'away' | 'busy';

export interface WeeklyActivity {
  year: number;
  months: {
    [key: string]: {
      weeks: ActivityStatus[];
    };
  };
}

export const activityData: WeeklyActivity[] = [
  {
    year: 2025,
    months: {
      Jan: {
        weeks: ['available', 'away', 'busy', 'available']
      },
      Feb: {
        weeks: ['busy', 'busy', 'available', 'away']
      },
      Mar: {
        weeks: ['available', 'available', 'busy', 'available']
      },
      Apr: {
        weeks: ['away', 'available', 'available', 'busy']
      },
      May: {
        weeks: ['busy', 'busy', 'available', 'available']
      },
      Jun: {
        weeks: ['available', 'away', 'away', 'available']
      }
    }
  },
  {
    year: 2024,
    months: {
      Jul: {
        weeks: ['busy', 'busy', 'available', 'away']
      },
      Aug: {
        weeks: ['available', 'available', 'busy', 'available']
      },
      Sep: {
        weeks: ['away', 'available', 'available', 'busy']
      },
      Oct: {
        weeks: ['busy', 'busy', 'available', 'available']
      },
      Nov: {
        weeks: ['available', 'away', 'away', 'available']
      },
      Dec: {
        weeks: ['busy', 'available', 'busy', 'available']
      }
    }
  }
];

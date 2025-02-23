
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { activityData, summaryStats } from '../data/activity-data';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const ActivityBoard = () => {
  const getActivityColor = (count: number) => {
    if (count === 0) return 'bg-[#232836]';
    if (count < 5) return 'bg-green-900';
    if (count < 10) return 'bg-green-700';
    if (count < 20) return 'bg-green-500';
    return 'bg-green-400';
  };

  return (
    <Card className="bg-[#232836] border-purple-500/20 mb-8">
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Activity Board</h2>
            <div className="space-y-1">
              <p className="text-gray-300">{summaryStats.totalVideos} Videos</p>
              <p className="text-gray-300">{summaryStats.verifiedClients} Verified clients</p>
              <p className="text-gray-300">Since {summaryStats.since}</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[768px]">
              {/* Month headers */}
              <div className="grid grid-cols-[80px_repeat(12,1fr)] gap-1 mb-1">
                <div className="text-gray-400 text-sm"></div>
                {months.map((month) => (
                  <div key={month} className="text-gray-400 text-sm text-center">
                    {month}
                  </div>
                ))}
              </div>

              {/* Activity grid */}
              {activityData.map((yearData) => (
                <div key={yearData.year} className="grid grid-cols-[80px_repeat(12,1fr)] gap-1 mb-1">
                  <div className="text-gray-400 text-sm">{yearData.year}</div>
                  {months.map((month) => {
                    const count = yearData.months[month] || 0;
                    return (
                      <div
                        key={`${yearData.year}-${month}`}
                        className={`aspect-square rounded ${getActivityColor(count)} flex items-center justify-center`}
                      >
                        {count > 0 && (
                          <span className="text-xs text-white font-medium">
                            {count}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityBoard;

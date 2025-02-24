
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Circle, CircleSlash, AlertCircle } from "lucide-react";
import { activityData, ActivityStatus } from '../data/activity-data';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const ActivityBoard = () => {
  const getStatusColor = (status: ActivityStatus) => {
    switch (status) {
      case 'available':
        return 'bg-purple-500';
      case 'busy':
        return 'bg-red-500';
      case 'away':
        return 'bg-gray-500';
      default:
        return 'bg-[#232836]';
    }
  };

  const getWeekStartDate = (year: number, month: string, weekIndex: number) => {
    const monthIndex = months.indexOf(month);
    const date = new Date(year, monthIndex, 1 + (weekIndex * 7));
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const statusLegend = [
    { status: 'available', icon: Circle, label: 'Available', color: 'text-purple-400' },
    { status: 'busy', icon: AlertCircle, label: 'Busy', color: 'text-red-400' },
    { status: 'away', icon: CircleSlash, label: 'Away', color: 'text-gray-400' },
  ];

  return (
    <Card className="bg-[#232836] border-purple-500/20 mb-8">
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Availability Timeline</h2>
            <div className="flex gap-4">
              {statusLegend.map(({ status, icon: Icon, label, color }) => (
                <div key={status} className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${color}`} />
                  <span className="text-gray-300 text-sm">{label}</span>
                </div>
              ))}
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
                <div key={yearData.year}>
                  <div className="grid grid-cols-[80px_repeat(12,1fr)] gap-1 mb-1">
                    <div className="text-gray-400 text-sm">{yearData.year}</div>
                    {months.map((month) => (
                      <div key={`${yearData.year}-${month}`} className="grid grid-rows-4 gap-1">
                        {(yearData.months[month]?.weeks || Array(4).fill('away')).map((status, weekIndex) => (
                          <div
                            key={`${yearData.year}-${month}-${weekIndex}`}
                            className={`aspect-square rounded ${getStatusColor(status)} p-1 flex items-center justify-center`}
                          >
                            <span className="text-[8px] text-white font-medium leading-none">
                              {getWeekStartDate(yearData.year, month, weekIndex)}
                            </span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
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

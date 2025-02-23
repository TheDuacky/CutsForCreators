
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Circle, CircleSlash, AlertCircle } from "lucide-react";
import { activityData, ActivityStatus } from '../data/activity-data';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const ActivityBoard = () => {
  const getActivityColor = (count: number, status: ActivityStatus) => {
    if (count === 0) return 'bg-[#232836]';
    
    switch (status) {
      case 'available':
        return count < 5 ? 'bg-purple-900' : count < 10 ? 'bg-purple-700' : count < 20 ? 'bg-purple-500' : 'bg-purple-400';
      case 'busy':
        return count < 5 ? 'bg-red-900' : count < 10 ? 'bg-red-700' : count < 20 ? 'bg-red-500' : 'bg-red-400';
      case 'away':
        return count < 5 ? 'bg-gray-700' : count < 10 ? 'bg-gray-600' : count < 20 ? 'bg-gray-500' : 'bg-gray-400';
    }
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
            <h2 className="text-2xl font-bold text-white">Activity Board</h2>
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
                <div key={yearData.year} className="grid grid-cols-[80px_repeat(12,1fr)] gap-1 mb-1">
                  <div className="text-gray-400 text-sm">{yearData.year}</div>
                  {months.map((month) => {
                    const activity = yearData.months[month] || { count: 0, status: 'away' as ActivityStatus };
                    return (
                      <div
                        key={`${yearData.year}-${month}`}
                        className={`aspect-square rounded ${getActivityColor(activity.count, activity.status)} flex items-center justify-center`}
                      >
                        {activity.count > 0 && (
                          <span className="text-xs text-white font-medium">
                            {activity.count}
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

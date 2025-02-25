
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Circle, CircleSlash, AlertCircle, CircleDot } from "lucide-react";
import { activityData, ActivityStatus } from '../data/activity-data';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const ActivityBoard = () => {
  const getStatusColor = (status: ActivityStatus, isCurrentWeek: boolean) => {
    if (isCurrentWeek) return 'bg-green-500';
    
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
    const firstDay = new Date(year, monthIndex, 1);
    
    // Find the first Monday
    const firstMonday = new Date(firstDay);
    while (firstMonday.getDay() !== 1) { // 1 represents Monday
      firstMonday.setDate(firstMonday.getDate() + 1);
    }
    
    // Add weeks
    const targetDate = new Date(firstMonday);
    targetDate.setDate(firstMonday.getDate() + (weekIndex * 7));
    
    return targetDate;
  };

  const getWeeksInMonth = (year: number, month: string) => {
    const monthIndex = months.indexOf(month);
    const firstDay = new Date(year, monthIndex, 1);
    const lastDay = new Date(year, monthIndex + 1, 0);
    
    // Find first Monday
    const firstMonday = new Date(firstDay);
    while (firstMonday.getDay() !== 1) {
      firstMonday.setDate(firstMonday.getDate() + 1);
    }
    
    // Find last Monday
    const lastMonday = new Date(lastDay);
    while (lastMonday.getDay() !== 1) {
      lastMonday.setDate(lastMonday.getDate() - 1);
    }
    
    // Calculate number of weeks
    return Math.ceil((lastMonday.getTime() - firstMonday.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
  };

  const isCurrentWeek = (date: Date) => {
    const today = new Date();
    const currentWeekStart = new Date(today);
    
    // Go back to Monday
    while (currentWeekStart.getDay() !== 1) {
      currentWeekStart.setDate(currentWeekStart.getDate() - 1);
    }
    
    // Reset time parts for comparison
    currentWeekStart.setHours(0, 0, 0, 0);
    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);
    
    return compareDate.getTime() === currentWeekStart.getTime();
  };

  const statusLegend = [
    { status: 'available', icon: CircleDot, label: 'Available', color: 'text-purple-400' },
    { status: 'busy', icon: AlertCircle, label: 'Busy', color: 'text-red-400' },
    { status: 'away', icon: CircleSlash, label: 'Away', color: 'text-gray-400' },
    { status: 'current', icon: Circle, label: 'Current Week', color: 'text-green-400' },
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
                    {months.map((month) => {
                      const weeksInMonth = getWeeksInMonth(yearData.year, month);
                      const monthData = yearData.months[month]?.weeks || Array(weeksInMonth).fill('away');
                      
                      // Ensure we have enough weeks (pad with 'away' if needed)
                      const paddedWeeks = [...monthData, ...Array(weeksInMonth - monthData.length).fill('away')];
                      
                      return (
                        <div key={`${yearData.year}-${month}`} className="grid gap-1" style={{ gridTemplateRows: `repeat(${weeksInMonth}, 1fr)` }}>
                          {paddedWeeks.map((status, weekIndex) => {
                            const weekDate = getWeekStartDate(yearData.year, month, weekIndex);
                            const currentWeek = isCurrentWeek(weekDate);
                            
                            return (
                              <div
                                key={`${yearData.year}-${month}-${weekIndex}`}
                                className={`aspect-square rounded ${getStatusColor(status, currentWeek)} p-1 flex items-center justify-center`}
                              >
                                <span className="text-[8px] text-white font-medium leading-none">
                                  {weekDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
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

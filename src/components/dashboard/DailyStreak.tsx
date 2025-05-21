
import React from "react";
import { cn } from "@/lib/utils";

const DAYS_OF_WEEK = ["M", "T", "W", "T", "F", "S", "S"];

interface DailyStreakProps {
  currentStreak: number;
  bestStreak: number;
  weekProgress: boolean[];
}

const DailyStreak: React.FC<DailyStreakProps> = ({
  currentStreak,
  bestStreak,
  weekProgress,
}) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-tutor-text">Daily Streak</h3>
        <div className="px-2 py-1 bg-tutor-primary/10 rounded-lg">
          <span className="text-sm font-medium text-tutor-primary">
            {currentStreak} days
          </span>
        </div>
      </div>

      <div className="flex justify-between mb-4">
        {DAYS_OF_WEEK.map((day, i) => {
          const isCompleted = weekProgress[i];
          const isToday = i === new Date().getDay() - 1 || (i === 6 && new Date().getDay() === 0);
          
          return (
            <div key={i} className="flex flex-col items-center">
              <div 
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full mb-1",
                  isCompleted ? "bg-tutor-primary text-white" : 
                    isToday ? "border-2 border-tutor-primary text-tutor-text" : 
                    "bg-gray-100 text-gray-500"
                )}
              >
                <span className="text-xs font-medium">{day}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center text-sm">
        <div className="text-gray-500">Best streak: <span className="text-tutor-text font-medium">{bestStreak} days</span></div>
        <div className="text-tutor-primary hover:text-tutor-primary/80 cursor-pointer underline underline-offset-2">View all</div>
      </div>
    </div>
  );
};

export default DailyStreak;

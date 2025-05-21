
import React from "react";
import ProgressCircle from "../ui/ProgressCircle";

interface TodayGoalProps {
  completedTasks: number;
  totalTasks: number;
}

const TodayGoal: React.FC<TodayGoalProps> = ({ completedTasks, totalTasks }) => {
  const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h3 className="font-semibold text-tutor-text mb-3">Today's Goal</h3>
      
      <div className="flex items-center">
        <ProgressCircle progress={progress} size="md" />
        
        <div className="ml-4">
          <div className="text-sm text-gray-500">
            {completedTasks} of {totalTasks} completed
          </div>
          
          <div className="mt-1 text-sm font-medium">
            {progress < 100 ? (
              <span>Keep it up! You're doing great.</span>
            ) : (
              <span className="text-tutor-secondary">All done for today! 🎉</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayGoal;

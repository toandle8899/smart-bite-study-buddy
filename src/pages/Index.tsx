
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import ContentCard from "@/components/ui/ContentCard";
import DailyStreak from "@/components/dashboard/DailyStreak";
import TodayGoal from "@/components/dashboard/TodayGoal";
import { learningContent, progressData } from "@/data/mockData";

const Index = () => {
  const todayContent = learningContent.slice(0, 3);
  
  return (
    <PageLayout title="AI Tutor">
      <div className="flex flex-col gap-4">
        {/* User greeting and today's progress */}
        <div className="mb-2">
          <h2 className="text-2xl font-bold text-tutor-text">Hello, Student!</h2>
          <p className="text-gray-500">
            Continue your learning journey today.
          </p>
        </div>

        {/* Progress widgets */}
        <div className="grid grid-cols-1 gap-4">
          <TodayGoal 
            completedTasks={progressData.todayCompleted} 
            totalTasks={progressData.todayTotal} 
          />
          <DailyStreak 
            currentStreak={progressData.currentStreak}
            bestStreak={progressData.bestStreak}
            weekProgress={progressData.weekProgress}
          />
        </div>

        {/* Continue learning */}
        <div className="mt-2">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-tutor-text">Continue Learning</h3>
            <button className="text-sm text-tutor-primary">See all</button>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {todayContent.map((content) => (
              <ContentCard
                key={content.id}
                title={content.title}
                description={content.description}
                type={content.type}
                progress={content.progress}
                duration={content.duration}
                onClick={() => console.log(`Clicked on ${content.title}`)}
              />
            ))}
          </div>
        </div>

        {/* Recommended for you */}
        <div className="mt-2">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-tutor-text">Recommended for You</h3>
            <button className="text-sm text-tutor-primary">See all</button>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {learningContent.slice(3, 5).map((content) => (
              <ContentCard
                key={content.id}
                title={content.title}
                description={content.description}
                type={content.type}
                duration={content.duration}
                onClick={() => console.log(`Clicked on ${content.title}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;

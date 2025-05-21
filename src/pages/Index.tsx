
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ContentCard from "@/components/ui/ContentCard";
import DailyStreak from "@/components/dashboard/DailyStreak";
import TodayGoal from "@/components/dashboard/TodayGoal";
import { learningContent, learningModules, progressData } from "@/data/mockData";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import VideoPlayer from "@/components/ui/VideoPlayer";

const Index = () => {
  const todayContent = learningContent.slice(0, 3);
  const [expandedModules, setExpandedModules] = useState<number[]>([1]);
  const [selectedContent, setSelectedContent] = useState<{
    id: string;
    title: string;
    description: string;
    type: string;
  } | null>(null);
  
  const handleContentClick = (content: {
    id: string;
    title: string;
    description: string;
    type: string;
  }) => {
    if (content.type === "video") {
      setSelectedContent(content);
    } else {
      toast({
        title: "Content selected",
        description: `You clicked on ${content.title}`,
      });
    }
    console.log(`Clicked on ${content.title}`);
  };
  
  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev => 
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };
  
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
                id={String(content.id)}
                title={content.title}
                description={content.description}
                type={content.type}
                progress={content.progress}
                duration={content.duration}
                onClick={() => handleContentClick({
                  id: String(content.id),
                  title: content.title,
                  description: content.description,
                  type: content.type
                })}
              />
            ))}
          </div>
        </div>

        {/* Learning Modules */}
        <div className="mt-4">
          <h3 className="font-semibold text-tutor-text mb-3">Learning Modules</h3>
          <div className="grid grid-cols-1 gap-4">
            {learningModules.map((module) => (
              <Card key={module.id} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer bg-white hover:bg-gray-50 p-4"
                  onClick={() => toggleModule(module.id)}
                >
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-semibold">{module.title}</CardTitle>
                    {expandedModules.includes(module.id) ? 
                      <ChevronUp size={20} /> : 
                      <ChevronDown size={20} />
                    }
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{module.description}</p>
                </CardHeader>
                
                {expandedModules.includes(module.id) && (
                  <CardContent className="p-3">
                    <div className="grid grid-cols-1 gap-3">
                      {learningContent
                        .filter(content => content.moduleId === module.id)
                        .map(content => (
                          <ContentCard
                            key={content.id}
                            id={String(content.id)}
                            title={content.title}
                            description={content.description}
                            type={content.type}
                            progress={content.progress}
                            duration={content.duration}
                            onClick={() => handleContentClick({
                              id: String(content.id),
                              title: content.title,
                              description: content.description,
                              type: content.type
                            })}
                          />
                        ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Video player dialog */}
        {selectedContent && (
          <VideoPlayer
            isOpen={!!selectedContent}
            onClose={() => setSelectedContent(null)}
            title={selectedContent.title}
            description={selectedContent.description}
          />
        )}
      </div>
    </PageLayout>
  );
};

export default Index;

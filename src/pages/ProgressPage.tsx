
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProgressCircle from "@/components/ui/ProgressCircle";
import { progressData } from "@/data/mockData";

const ProgressPage = () => {
  return (
    <PageLayout title="Learning Progress">
      <div className="flex flex-col gap-6">
        {/* Overall progress summary */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-tutor-text mb-4">Overall Progress</h3>
          
          <div className="flex justify-center mb-4">
            <ProgressCircle progress={45} size="lg" />
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-sm text-gray-500">Study time</p>
              <p className="text-xl font-semibold text-tutor-text">4.5h</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-sm text-gray-500">Quiz score</p>
              <p className="text-xl font-semibold text-tutor-text">78%</p>
            </div>
          </div>
        </div>
        
        {/* Subject progress */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-tutor-text">Progress by Topic</h3>
          </div>
          
          <div className="space-y-4">
            {progressData.subjectProgress.map((subject, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">{subject.subject}</span>
                  <span className="text-sm text-gray-500">{subject.progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-tutor-primary rounded-full"
                    style={{ width: `${subject.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements section */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-tutor-text">Achievements</h3>
            <span className="text-sm text-tutor-primary">3/12</span>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-tutor-gold/20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-tutor-gold flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🏆</span>
                  </div>
                </div>
                <span className="text-xs text-center mt-1">Study Streak</span>
              </div>
            ))}
            {[4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">?</span>
                  </div>
                </div>
                <span className="text-xs text-center mt-1">Locked</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProgressPage;

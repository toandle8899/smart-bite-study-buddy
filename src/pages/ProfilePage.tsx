
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { User, Settings, BookOpen, Star, Bell } from "lucide-react";

const ProfilePage = () => {
  return (
    <PageLayout title="Profile">
      <div className="flex flex-col gap-6">
        {/* User info */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-tutor-primary/10 rounded-full flex items-center justify-center">
              <User size={32} className="text-tutor-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-tutor-text">Student Name</h3>
              <p className="text-gray-500">student@example.com</p>
              <div className="mt-1 flex items-center">
                <span className="text-xs font-medium bg-tutor-primary/10 text-tutor-primary px-2 py-0.5 rounded-full">
                  Pro Member
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-sm text-gray-500">Current Streak</p>
              <p className="text-xl font-semibold text-tutor-text">4 days</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-sm text-gray-500">Completed</p>
              <p className="text-xl font-semibold text-tutor-text">12 modules</p>
            </div>
          </div>
        </div>

        {/* Settings and options */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <div className="divide-y divide-gray-100">
            <MenuItem icon={BookOpen} label="My Courses" />
            <MenuItem icon={Star} label="Favorites" />
            <MenuItem icon={Bell} label="Notifications" />
            <MenuItem icon={Settings} label="Settings" />
          </div>
        </div>

        {/* App info */}
        <div className="mt-auto text-center text-sm text-gray-400">
          <p>AI Tutor v1.0.0</p>
          <div className="mt-2 space-x-3">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

interface MenuItemProps {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, label, onClick }) => {
  return (
    <button
      className="w-full py-3 px-4 flex items-center justify-between hover:bg-gray-50"
      onClick={onClick}
    >
      <div className="flex items-center">
        <Icon size={18} className="text-gray-500 mr-3" />
        <span className="font-medium text-tutor-text">{label}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

export default ProfilePage;


import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BookOpen, MessageSquare, User, PieChart } from "lucide-react";

const MobileNavbar = () => {
  const location = useLocation();
  
  const navItems = [
    {
      icon: BookOpen,
      label: "Learn",
      path: "/",
    },
    {
      icon: MessageSquare,
      label: "Chat",
      path: "/chat",
    },
    {
      icon: PieChart,
      label: "Progress",
      path: "/progress",
    },
    {
      icon: User,
      label: "Profile",
      path: "/profile",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-2 py-2">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const IconComponent = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center py-1 px-3 rounded-lg",
                isActive 
                  ? "text-tutor-primary" 
                  : "text-gray-500 hover:text-tutor-primary"
              )}
            >
              <IconComponent size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavbar;

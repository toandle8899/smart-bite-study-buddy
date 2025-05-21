
import React from "react";
import { Bell } from "lucide-react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-tutor-text">{title}</h1>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} className="text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;

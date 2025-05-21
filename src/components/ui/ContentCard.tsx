
import React from "react";
import { cn } from "@/lib/utils";
import { Play, Calendar, MessageSquare, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export type ContentType = "video" | "flashcard" | "quiz" | "conversation";

interface ContentCardProps {
  id: string;
  title: string;
  description: string;
  type: ContentType;
  progress?: number;
  duration?: string;
  className?: string;
  onClick?: () => void;
}

const ContentCard: React.FC<ContentCardProps> = ({
  id,
  title,
  description,
  type,
  progress = 0,
  duration,
  className,
  onClick,
}) => {
  const navigate = useNavigate();
  
  const typeConfig = {
    video: {
      icon: Play,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    flashcard: {
      icon: Calendar,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    quiz: {
      icon: BookOpen,
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    conversation: {
      icon: MessageSquare,
      bgColor: "bg-amber-100",
      textColor: "text-amber-600",
    },
  };

  const { icon: Icon, bgColor, textColor } = typeConfig[type];

  const handleCardClick = () => {
    // Use the onClick prop if provided, otherwise navigate to the content page
    if (onClick) {
      onClick();
    } else {
      toast({
        title: "Opening content",
        description: `Loading ${title}...`,
      });
      navigate(`/content/${type}/${id}`);
    }
  };

  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer active:bg-gray-50",
        className
      )}
      onClick={handleCardClick}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className={cn("p-2 rounded-lg", bgColor)}>
            <Icon size={20} className={textColor} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-tutor-text">{title}</h3>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p>
            
            <div className="flex items-center justify-between mt-3">
              {duration && <span className="text-xs text-gray-500">{duration}</span>}
              
              {progress > 0 && (
                <div className="flex items-center">
                  <div className="h-1.5 w-24 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-tutor-primary rounded-full"
                      style={{ width: `${Math.min(100, progress)}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 ml-2">{progress}%</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;

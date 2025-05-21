
import React from "react";
import { cn } from "@/lib/utils";

interface ProgressCircleProps {
  progress: number; // 0 to 100
  size?: "sm" | "md" | "lg";
  showPercentage?: boolean;
  className?: string;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  progress,
  size = "md",
  showPercentage = true,
  className,
}) => {
  const normalizedProgress = Math.min(100, Math.max(0, progress));
  const circleSize = {
    sm: 60,
    md: 80,
    lg: 120,
  };
  const strokeWidth = {
    sm: 4,
    md: 5,
    lg: 6,
  };
  const fontSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };
  
  const actualSize = circleSize[size];
  const actualStrokeWidth = strokeWidth[size];
  const radius = (actualSize - actualStrokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const dash = (normalizedProgress * circumference) / 100;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg
        width={actualSize}
        height={actualSize}
        viewBox={`0 0 ${actualSize} ${actualSize}`}
        className="transform -rotate-90"
      >
        <circle
          cx={actualSize / 2}
          cy={actualSize / 2}
          r={radius}
          fill="transparent"
          stroke="#E5E7EB"
          strokeWidth={actualStrokeWidth}
        />
        <circle
          cx={actualSize / 2}
          cy={actualSize / 2}
          r={radius}
          fill="transparent"
          stroke={normalizedProgress < 100 ? "#4F46E5" : "#0D9488"}
          strokeLinecap="round"
          strokeWidth={actualStrokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - dash}
          className="transition-all duration-500 ease-out"
        />
      </svg>
      {showPercentage && (
        <div className={`absolute inset-0 flex items-center justify-center font-semibold ${fontSize[size]}`}>
          {normalizedProgress}%
        </div>
      )}
    </div>
  );
};

export default ProgressCircle;

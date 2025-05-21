
import React from "react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  isUser: boolean;
  timestamp: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, isUser, timestamp }) => {
  return (
    <div
      className={cn(
        "flex",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2 mb-2",
          isUser
            ? "bg-tutor-primary text-white rounded-br-sm"
            : "bg-gray-100 text-tutor-text rounded-bl-sm"
        )}
      >
        <p>{content}</p>
        <div
          className={cn(
            "text-xs mt-1",
            isUser ? "text-white/70" : "text-gray-500"
          )}
        >
          {timestamp}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;

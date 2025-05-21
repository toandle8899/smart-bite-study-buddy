
import React, { useState } from "react";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask anything about your course..."
        className="flex-1 bg-gray-100 border border-gray-200 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-tutor-primary/50 focus:border-transparent"
      />
      <button
        type="submit"
        className={`p-3 rounded-full ${
          message.trim()
            ? "bg-tutor-primary text-white"
            : "bg-gray-200 text-gray-400"
        }`}
        disabled={!message.trim()}
      >
        <ArrowUp size={20} />
      </button>
    </form>
  );
};

export default ChatInput;

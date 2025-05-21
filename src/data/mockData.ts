
import { ContentType } from "@/components/ui/ContentCard";

// Mock learning content
export const learningContent = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    description: "Learn the basics of machine learning algorithms and models",
    type: "video" as ContentType,
    duration: "5:30",
    progress: 75,
  },
  {
    id: 2,
    title: "Machine Learning Flashcards",
    description: "Test your knowledge with these key ML concept flashcards",
    type: "flashcard" as ContentType,
    duration: "10 cards",
    progress: 40,
  },
  {
    id: 3,
    title: "Module 1 Assessment",
    description: "Check your understanding of ML fundamental concepts",
    type: "quiz" as ContentType,
    duration: "10 questions",
    progress: 0,
  },
  {
    id: 4,
    title: "Ask the ML Expert",
    description: "Explore machine learning concepts with our AI tutor",
    type: "conversation" as ContentType,
    duration: "Open-ended",
    progress: 0,
  },
  {
    id: 5,
    title: "Supervised vs Unsupervised Learning",
    description: "Understand the key differences between these learning approaches",
    type: "video" as ContentType,
    duration: "4:15",
    progress: 0,
  },
];

// Mock chat messages
export const chatMessages = [
  {
    id: 1,
    content: "Hi there! How can I help you with your Machine Learning course today?",
    isUser: false,
    timestamp: "9:30 AM",
  },
  {
    id: 2,
    content: "Can you explain what a neural network is?",
    isUser: true,
    timestamp: "9:31 AM",
  },
  {
    id: 3,
    content: "A neural network is a computational model inspired by the human brain. It consists of layers of connected nodes or 'neurons' that process information. Each connection has a weight that adjusts as the network learns from data, allowing it to recognize patterns and make predictions.",
    isUser: false,
    timestamp: "9:31 AM",
  },
  {
    id: 4,
    content: "Thanks! What's the difference between a perceptron and a multi-layer neural network?",
    isUser: true,
    timestamp: "9:32 AM",
  },
  {
    id: 5,
    content: "A perceptron is the simplest form of neural network - just a single neuron that can only learn linearly separable patterns. A multi-layer neural network has multiple layers, including hidden layers between input and output. This allows it to learn complex, non-linear patterns and solve more sophisticated problems that a simple perceptron cannot handle.",
    isUser: false,
    timestamp: "9:33 AM",
  },
];

// Mock progress data
export const progressData = {
  currentStreak: 4,
  bestStreak: 7,
  weekProgress: [true, true, true, true, false, false, false],
  todayCompleted: 2,
  todayTotal: 5,
  subjectProgress: [
    { subject: "Machine Learning", progress: 65 },
    { subject: "Neural Networks", progress: 40 },
    { subject: "Deep Learning", progress: 25 },
    { subject: "Data Preprocessing", progress: 80 },
  ]
};

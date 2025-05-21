import { ContentType } from "@/components/ui/ContentCard";

// Mock learning modules
export const learningModules = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    description: "Learn the fundamentals of machine learning concepts and applications",
  },
  {
    id: 2,
    title: "Neural Networks",
    description: "Explore the structure and function of neural networks",
  },
  {
    id: 3,
    title: "Statistics 101",
    description: "Master fundamental statistical concepts for data analysis",
  },
  {
    id: 4,
    title: "Data Visualization",
    description: "Learn techniques to present data in meaningful visual formats",
  }
];

// Mock learning content
export const learningContent = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    description: "Learn the basics of machine learning algorithms and models",
    type: "video" as ContentType,
    duration: "5:30",
    progress: 75,
    moduleId: 1,
  },
  {
    id: 2,
    title: "Machine Learning Flashcards",
    description: "Test your knowledge with these key ML concept flashcards",
    type: "flashcard" as ContentType,
    duration: "10 cards",
    progress: 40,
    moduleId: 1,
  },
  {
    id: 3,
    title: "Module 1 Assessment",
    description: "Check your understanding of ML fundamental concepts",
    type: "quiz" as ContentType,
    duration: "10 questions",
    progress: 0,
    moduleId: 1,
  },
  {
    id: 4,
    title: "Ask the ML Expert",
    description: "Explore machine learning concepts with our AI tutor",
    type: "conversation" as ContentType,
    duration: "Open-ended",
    progress: 0,
    moduleId: 1,
  },
  {
    id: 5,
    title: "Supervised vs Unsupervised Learning",
    description: "Understand the key differences between these learning approaches",
    type: "video" as ContentType,
    duration: "4:15",
    progress: 0,
    moduleId: 1,
  },
  {
    id: 6,
    title: "Neural Network Basics",
    description: "Learn the fundamentals of neural network architecture",
    type: "video" as ContentType,
    duration: "6:45",
    progress: 0,
    moduleId: 2,
  },
  {
    id: 7,
    title: "Neural Network Flashcards",
    description: "Test your knowledge with these neural network concept flashcards",
    type: "flashcard" as ContentType,
    duration: "12 cards",
    progress: 0,
    moduleId: 2,
  },
  
  // Statistics 101 Module
  {
    id: 8,
    title: "Introduction to Statistics",
    description: "Learn the basic concepts of statistics and data analysis",
    type: "video" as ContentType,
    duration: "1:30",
    progress: 0,
    moduleId: 3,
    videoType: "vertical",
  },
  {
    id: 9,
    title: "Mean, Median, and Mode",
    description: "Understanding measures of central tendency in data sets",
    type: "flashcard" as ContentType,
    duration: "8 cards",
    progress: 0,
    moduleId: 3,
  },
  {
    id: 10,
    title: "Probability Distributions Quiz",
    description: "Test your understanding of different probability distributions",
    type: "quiz" as ContentType,
    duration: "5 questions",
    progress: 0,
    moduleId: 3,
  },
  {
    id: 11,
    title: "Standard Deviation Explained",
    description: "Visual explanation of standard deviation using mobile-friendly slides",
    type: "video" as ContentType,
    duration: "2:15",
    progress: 0,
    moduleId: 3,
    videoType: "vertical",
  },
  {
    id: 12,
    title: "Chat with Statistics Expert",
    description: "Ask questions about statistics concepts and applications",
    type: "conversation" as ContentType,
    duration: "Open-ended",
    progress: 0,
    moduleId: 3,
  },
  
  // Data Visualization Module
  {
    id: 13,
    title: "Chart Types Overview",
    description: "Learn when to use different types of charts and graphs",
    type: "video" as ContentType,
    duration: "3:45",
    progress: 0,
    moduleId: 4,
  },
  {
    id: 14,
    title: "Data Storytelling Techniques",
    description: "Mobile-first slides on crafting narratives with data",
    type: "video" as ContentType,
    duration: "1:50",
    progress: 0,
    moduleId: 4,
    videoType: "vertical",
  },
  {
    id: 15,
    title: "Chart Selection Quiz",
    description: "Test your knowledge on choosing the right chart for different data types",
    type: "quiz" as ContentType,
    duration: "8 questions",
    progress: 0,
    moduleId: 4,
  },
  {
    id: 16,
    title: "Color Theory in Data Visualization",
    description: "Learn how to use colors effectively in your visualizations",
    type: "flashcard" as ContentType,
    duration: "10 cards",
    progress: 0,
    moduleId: 4,
  }
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

export type Resource = {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  provider: string;
  duration?: string;
  free: boolean;
};

export const resources: Resource[] = [
  {
    id: 1,
    title: "UiPath Academy - RPA Developer Foundation",
    description: "Learn the fundamentals of RPA development with UiPath Studio.",
    link: "https://academy.uipath.com/",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    level: "Beginner",
    provider: "UiPath Academy",
    duration: "20 hours",
    free: true
  },
  {
    id: 2,
    title: "UiPath Advanced Training",
    description: "Master advanced UiPath features like AI Computer Vision, Document Understanding, and Process Mining.",
    link: "https://academy.uipath.com/",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
    level: "Advanced",
    provider: "UiPath Academy",
    duration: "40 hours",
    free: true
  },
  {
    id: 3,
    title: "RPA Essentials",
    description: "Introduction to robotic process automation concepts and business applications.",
    link: "#",
    image: "https://images.pexels.com/photos/7088482/pexels-photo-7088482.jpeg?auto=compress&cs=tinysrgb&w=600",
    level: "Beginner",
    provider: "RGMCET UiPath SDC",
    duration: "8 hours",
    free: true
  },
  {
    id: 4,
    title: "Automation in Finance & Banking",
    description: "Learn how to implement RPA solutions for finance and banking processes.",
    link: "#",
    image: "https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=600",
    level: "Intermediate",
    provider: "RGMCET UiPath SDC",
    duration: "15 hours",
    free: true
  },
  {
    id: 5,
    title: "UiPath Orchestrator Setup & Administration",
    description: "Learn to deploy, configure and manage UiPath Orchestrator for enterprise automation.",
    link: "#",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
    level: "Advanced",
    provider: "UiPath Academy",
    duration: "25 hours",
    free: true
  },
  {
    id: 6,
    title: "Building Your First Bot",
    description: "Hands-on tutorial to build your first automation robot with UiPath Studio.",
    link: "#",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    level: "Beginner",
    provider: "RGMCET UiPath SDC",
    duration: "5 hours",
    free: true
  }
];
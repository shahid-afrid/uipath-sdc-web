export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorImage: string;
  image: string;
  tags: string[];
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with UiPath: A Beginner's Guide",
    excerpt: "Learn how to set up UiPath Studio and create your first automation workflow in this comprehensive guide for beginners.",
    date: "May 10, 2025",
    author: "Priya Sharma",
    authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Beginner", "Tutorial", "UiPath Studio"],
    readTime: "8 min"
  },
  {
    id: 2,
    title: "Automating Excel Operations with UiPath",
    excerpt: "Discover powerful techniques to automate Excel operations using UiPath's built-in Excel activities.",
    date: "May 5, 2025",
    author: "Rahul Kumar",
    authorImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Excel", "Automation", "Data Processing"],
    readTime: "12 min"
  },
  {
    id: 3,
    title: "AI Computer Vision in UiPath: Complete Guide",
    excerpt: "Learn how to leverage UiPath's AI Computer Vision to automate applications that traditional automation methods can't handle.",
    date: "April 28, 2025",
    author: "Neha Gupta",
    authorImage: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["AI", "Computer Vision", "Advanced"],
    readTime: "15 min"
  },
  {
    id: 4,
    title: "Building Resilient RPA Workflows",
    excerpt: "Best practices for creating robust, error-handling automation workflows that can recover from exceptions.",
    date: "April 22, 2025",
    author: "Arjun Reddy",
    authorImage: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Error Handling", "Best Practices", "Intermediate"],
    readTime: "10 min"
  }
];
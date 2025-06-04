export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "SDC Lead",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "RPA Developer with 2+ years of experience. Passionate about teaching automation to students.",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 2,
    name: "Rahul Kumar",
    role: "Technical Lead",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "UiPath certified developer specializing in complex workflow automation and AI integration.",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Community Manager",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Connecting students with industry experts. Organizes community events and manages social media.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Workshop Coordinator",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Conducts hands-on workshops and training sessions on various RPA tools and technologies.",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: 5,
    name: "Neha Gupta",
    role: "Content Creator",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Creates learning materials, blogs, and documentation for RPA concepts and UiPath tools.",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 6,
    name: "Arjun Reddy",
    role: "Project Mentor",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Guides students through project development and implementation using UiPath.",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  }
];
export type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  participants?: number;
  link?: string;
};

export const events: Event[] = [
  {
    id: 1,
    title: "UiPath Fundamentals Workshop",
    date: "June 15, 2025",
    location: "RGMCET Auditorium",
    description: "Learn the basics of UiPath Studio and build your first bot in this hands-on workshop.",
    image: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=600",
    status: "upcoming",
    participants: 0,
    link: "#"
  },
  {
    id: 2,
    title: "RPA Hackathon 2025",
    date: "July 10-12, 2025",
    location: "Virtual Event",
    description: "48-hour hackathon to build innovative automation solutions for real-world problems.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "upcoming",
    participants: 0,
    link: "#"
  },
  {
    id: 3,
    title: "AI & RPA Integration Masterclass",
    date: "May 5, 2025",
    location: "RGMCET Computer Lab",
    description: "Advanced session on integrating AI capabilities with RPA workflows using UiPath.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "upcoming",
    participants: 0,
    link: "#"
  },
  {
    id: 4,
    title: "UiPath Certification Bootcamp",
    date: "April 20, 2025",
    location: "Online",
    description: "Intensive training to prepare for UiPath Associate Certification exam.",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "completed",
    participants: 75,
    link: "#"
  },
  {
    id: 5,
    title: "Industry Connect: RPA in Banking",
    date: "March 15, 2025",
    location: "RGMCET Seminar Hall",
    description: "Guest lecture by industry experts on RPA applications in the banking sector.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "completed",
    participants: 120,
    link: "#"
  }
];
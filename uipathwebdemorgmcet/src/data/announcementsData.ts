export type Announcement = {
  id: number;
  title: string;
  date: string;
  content: string;
  isUrgent?: boolean;
  link?: {
    url: string;
    text: string;
  };
};

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "UiPath SDC Recruitment Drive",
    date: "May 15, 2025",
    content: "Join our team! We're recruiting new core team members for UiPath SDC. Submit your application by May 25, 2025.",
    isUrgent: true,
    link: {
      url: "#",
      text: "Apply Now"
    }
  },
  {
    id: 2,
    title: "UiPath Certification Discount",
    date: "May 10, 2025",
    content: "Get 50% off on UiPath Certification exams for all RGMCET students until June 30, 2025.",
    link: {
      url: "#",
      text: "Get Discount"
    }
  },
  {
    id: 3,
    title: "New RPA Course Added",
    date: "May 5, 2025",
    content: "Check out our new course on Document Understanding with UiPath. Available now in the Learning section.",
    link: {
      url: "#learn",
      text: "View Course"
    }
  },
  {
    id: 4,
    title: "Industry Expert Talk",
    date: "April 28, 2025",
    content: "Don't miss our upcoming session with industry experts from UiPath on career opportunities in RPA.",
    link: {
      url: "#events",
      text: "Event Details"
    }
  },
  {
    id: 5,
    title: "Hackathon Registration Open",
    date: "April 20, 2025",
    content: "Registration for the annual RPA Hackathon is now open. Form your teams and register today!",
    isUrgent: true,
    link: {
      url: "#",
      text: "Register Now"
    }
  }
];
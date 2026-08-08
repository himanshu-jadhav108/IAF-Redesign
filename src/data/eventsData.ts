export interface EventItem {
  id: string;
  title: string;
  category: 'Community' | 'Education' | 'Environment' | 'Health' | 'Animal Welfare';
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  isUpcoming: boolean;
  registrationLink?: string;
}

export const eventsData: EventItem[] = [
  {
    id: "evt-1",
    title: "World Water Day 2025 Cleanup & Awareness",
    category: "Environment",
    date: "22 March 2025",
    time: "08:00 AM - 12:00 PM",
    location: "Arpa Riverbank, Bilaspur",
    description: "Join InAmigos Foundation volunteers for a riverfront plastic waste collection drive and water conservation awareness campaign under Project Prakriti.",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    isUpcoming: false
  },
  {
    id: "evt-2",
    title: "International Day of Happiness Community Meal Drive",
    category: "Community",
    date: "20 March 2025",
    time: "11:30 AM - 03:00 PM",
    location: "Sirgitti Community Center, Bilaspur",
    description: "Distributing 1,000+ freshly prepared hot meals and nutrition kits to daily wage families and unhoused community members under Project Sewa.",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    isUpcoming: false
  },
  {
    id: "evt-3",
    title: "International Day of Women and Girls in Science 2025",
    category: "Education",
    date: "11 February 2025",
    time: "02:00 PM - 05:00 PM",
    location: "Bachpanshala Learning Center 1, Bilaspur",
    description: "Interactive STEM workshops, science experiments, and inspirational mentorship sessions for young girls enrolled in Project Bachpanshala.",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    isUpcoming: false
  },
  {
    id: "evt-4",
    title: "Project Jeev: Summer Water Bowl & Reflective Collar Drive",
    category: "Animal Welfare",
    date: "15 April 2025",
    time: "07:30 AM - 11:00 AM",
    location: "Main Market & Ring Road, Bilaspur",
    description: "Installing 200 cement water bowls for stray animals and fitting high-visibility reflective collars on street dogs to reduce night accidents.",
    imageUrl: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=800&auto=format&fit=crop",
    isUpcoming: true,
    registrationLink: "/volunteer"
  },
  {
    id: "evt-5",
    title: "Project Udaan: Menstrual Hygiene & Wellness Camp",
    category: "Health",
    date: "28 May 2025",
    time: "10:00 AM - 02:00 PM",
    location: "Tifra Community Hall, Bilaspur",
    description: "Educational session on menstrual hygiene, distribution of free eco-friendly sanitary pad kits, and doctor consultations for local women.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    isUpcoming: true,
    registrationLink: "/volunteer"
  },
  {
    id: "evt-6",
    title: "Project Vikas: Youth Digital Literacy Bootcamp",
    category: "Education",
    date: "12 June 2025",
    time: "09:00 AM - 04:00 PM",
    location: "IT Park Community Hall, Bilaspur",
    description: "A full-day hands-on workshop covering computer basics, online job applications, resume creation, and basic digital banking safety.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    isUpcoming: true,
    registrationLink: "/volunteer"
  }
];

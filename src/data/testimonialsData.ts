export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  category: 'Volunteer' | 'Beneficiary' | 'Partner';
  avatarUrl: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Sagarika Jaiswal",
    role: "Head of Operations & Lead Volunteer",
    location: "Bilaspur, Chhattisgarh",
    quote: "Volunteering with InAmigos Foundation transformed my perspective on community action. Seeing children at Bachpanshala learn to write their names for the first time is the most rewarding experience of my life.",
    category: "Volunteer",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Khush Gupta",
    role: "Deputy Head of Core Team",
    location: "Raipur, Chhattisgarh",
    quote: "Through Project Sewa and Jeev, our teams ensure no one goes hungry—neither vulnerable families nor stray animals. The transparency and ground-level commitment of InAmigos Foundation is truly inspiring.",
    category: "Volunteer",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Sunita Verma",
    role: "Mother of Bachpanshala Student",
    location: "Sirgitti, Bilaspur",
    quote: "My daughter couldn't attend regular school due to financial hardship. The evening classes by InAmigos Foundation gave her confidence, books, and a real chance at a brighter future.",
    category: "Beneficiary",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "Ramesh Kumar Sharma",
    role: "CSR Relations Manager, Regional Logistics",
    location: "Korba, Chhattisgarh",
    quote: "Partnering with InAmigos Foundation on Project Prakriti was seamless. Their 80G and CSR-1 compliance, coupled with transparent impact reporting, makes them a trustworthy NGO partner.",
    category: "Partner",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  }
];

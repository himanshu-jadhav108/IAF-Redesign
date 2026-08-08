export interface TeamMember {
  name: string;
  role: string;
  location: string;
  bio: string;
  imageUrl: string;
}

export const teamData: TeamMember[] = [
  {
    name: "Mr. Govind Shukla",
    role: "Founder & Chief Executive Director",
    location: "Bilaspur, Chhattisgarh",
    bio: "Founded InAmigos Foundation in September 2020 with a vision to build a grassroots volunteer movement that serves underserved communities with dignity, transparency, and direct impact.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Sagarika Jaiswal",
    role: "Head of Core Execution & Operations",
    location: "Bilaspur, Chhattisgarh",
    bio: "Leads field logistics, volunteer coordination, and regional community outreach across Chhattisgarh and neighbouring districts.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Khush Gupta",
    role: "Deputy Head of Core Team & Youth Engagement",
    location: "Raipur, Chhattisgarh",
    bio: "Oversees student volunteer onboarding, digital media campaigns, and youth bootcamps under Project Vikas.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  }
];

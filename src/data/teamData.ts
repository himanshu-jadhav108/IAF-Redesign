import govindImg from '@/assets/govind_shukla.png';
import sagarikaImg from '@/assets/sagarika_jaiswal.png';
import khushImg from '@/assets/khush_gupta.png';

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
    imageUrl: govindImg
  },
  {
    name: "Sagarika Jaiswal",
    role: "Head of Core Execution & Operations",
    location: "Bilaspur, Chhattisgarh",
    bio: "Leads field logistics, volunteer coordination, and regional community outreach across Chhattisgarh and neighbouring districts.",
    imageUrl: sagarikaImg
  },
  {
    name: "Khush Gupta",
    role: "Deputy Head of Core Team & Youth Engagement",
    location: "Raipur, Chhattisgarh",
    bio: "Oversees student volunteer onboarding, digital media campaigns, and youth bootcamps under Project Vikas.",
    imageUrl: khushImg
  }
];

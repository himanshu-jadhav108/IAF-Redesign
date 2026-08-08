export interface GalleryImage {
  id: string;
  title: string;
  category: 'All' | 'Sewa' | 'Bachpanshala' | 'Jeev' | 'Udaan' | 'Prakriti' | 'Vikas';
  location: string;
  date: string;
  imageUrl: string;
  altText: string;
}

export const galleryData: GalleryImage[] = [
  {
    id: "g1",
    title: "Daily Hot Meal Distribution Drive",
    category: "Sewa",
    location: "Bilaspur, Chhattisgarh",
    date: "March 2025",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    altText: "InAmigos Foundation volunteers serving hot meals to community members in Bilaspur"
  },
  {
    id: "g2",
    title: "Bachpanshala Outdoor Classroom Session",
    category: "Bachpanshala",
    location: "Sirgitti, Bilaspur",
    date: "February 2025",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    altText: "Children sitting attentively in an informal evening classroom conducted by volunteer teachers"
  },
  {
    id: "g3",
    title: "Reflective Collar Fitting for Stray Dogs",
    category: "Jeev",
    location: "Raipur Highway",
    date: "January 2025",
    imageUrl: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=800&auto=format&fit=crop",
    altText: "Volunteers putting fluorescent safety collars on street dogs to prevent night road accidents"
  },
  {
    id: "g4",
    title: "Udaan Menstrual Health & Hygiene Kit Distribution",
    category: "Udaan",
    location: "Tifra, Bilaspur",
    date: "February 2025",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    altText: "Volunteers conducting hygiene awareness session and distributing eco-friendly sanitary products to young women"
  },
  {
    id: "g5",
    title: "Community Sapling Plantation Drive",
    category: "Prakriti",
    location: "Green Park, Bilaspur",
    date: "August 2024",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    altText: "Volunteers planting neem and banyan saplings during rainy season conservation drive"
  },
  {
    id: "g6",
    title: "Vikas Youth Computer Literacy Workshop",
    category: "Vikas",
    location: "Bilaspur Center",
    date: "November 2024",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    altText: "Young adult students learning computer basics and typing skills in a mentored laboratory"
  },
  {
    id: "g7",
    title: "Winter Blanket & Warm Sweater Distribution",
    category: "Sewa",
    location: "Bilaspur Railway Station",
    date: "December 2024",
    imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop",
    altText: "InAmigos Foundation team distributing heavy winter blankets to vulnerable unhoused elders"
  },
  {
    id: "g8",
    title: "Stationery & Book Kit Distribution for First-Gen Learners",
    category: "Bachpanshala",
    location: "Korba District",
    date: "October 2024",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
    altText: "Young students smiling with new school bags, notebooks, and pencil boxes"
  }
];

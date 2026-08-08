export interface Program {
  id: string;
  name: string;
  hindiName: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  accentColor: string;
  bgGradient: string;
  impactMetrics: {
    label: string;
    value: string;
  }[];
  keyActivities: string[];
  imageUrl: string;
}

export const programsData: Program[] = [
  {
    id: "sewa",
    name: "Project Sewa",
    hindiName: "सेवा",
    category: "Food Security & Hunger Relief",
    shortDescription: "Providing nutritious meals, emergency food kits, and warm clothing to underprivileged families and unhoused individuals across communities.",
    fullDescription: "Project Sewa is InAmigos Foundation's cornerstone initiative dedicated to eliminating hunger and food insecurity. Through daily food distribution drives, weekend community kitchens, and seasonal winter warmth drives, Sewa ensures that vulnerable children, elderly citizens, and daily-wage earners receive wholesome nourishment and basic dignity.",
    iconName: "Utensils",
    accentColor: "#006E25",
    bgGradient: "from-emerald-50 to-green-100",
    impactMetrics: [
      { label: "Meals Served", value: "150,000+" },
      { label: "Families Supported", value: "8,500+" },
      { label: "Active Kitchens", value: "12" }
    ],
    keyActivities: [
      "Daily cooked meal distribution in low-income neighborhoods",
      "Dry ration kit supply for daily-wage worker families",
      "Annual winter sweater and blanket distribution drives",
      "Disaster relief food response during floods and emergencies"
    ],
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "bachpanshala",
    name: "Project Bachpanshala",
    hindiName: "बचपनशाला",
    category: "Child Education & Literacy",
    shortDescription: "Bridging educational gaps by running free informal evening classes, providing school stationery, and mentoring first-generation learners.",
    fullDescription: "Bachpanshala aims to nurture every child's innate curiosity and right to quality education. We establish community learning centers in slum settlements and rural clusters where trained student volunteers teach foundational mathematics, literacy, digital basics, and life skills to children who lack access to formal schooling.",
    iconName: "GraduationCap",
    accentColor: "#003366",
    bgGradient: "from-blue-50 to-indigo-100",
    impactMetrics: [
      { label: "Children Enrolled", value: "3,200+" },
      { label: "Learning Centers", value: "24" },
      { label: "Volunteer Teachers", value: "150+" }
    ],
    keyActivities: [
      "After-school remedial tutoring for underprivileged children",
      "Distribution of school bags, notebooks, and study materials",
      "Digital literacy workshops with recycled tablets and laptops",
      "Mainstreaming out-of-school children into formal government schools"
    ],
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "jeev",
    name: "Project Jeev",
    hindiName: "जीव",
    category: "Animal Welfare & Care",
    shortDescription: "Protecting and caring for stray animals through daily feeding programs, emergency medical assistance, and reflective collar drives.",
    fullDescription: "Project Jeev addresses animal welfare in urban and semi-urban settings. Stray dogs, cattle, and birds often suffer from malnutrition, road accidents, and extreme weather. Our volunteer network feeds stray animals daily, conducts vaccination drives, fits reflective safety collars to prevent nighttime road accidents, and arranges veterinary care for injured strays.",
    iconName: "HeartHandshake",
    accentColor: "#EA8000",
    bgGradient: "from-amber-50 to-orange-100",
    impactMetrics: [
      { label: "Animals Fed Daily", value: "500+" },
      { label: "Reflective Collars Installed", value: "2,500+" },
      { label: "Rescues Handled", value: "850+" }
    ],
    keyActivities: [
      "Daily community street feeding for stray dogs and animals",
      "Reflective neck collar distribution to protect strays on highways",
      "Water bowl installation across cities during peak summer months",
      "Emergency veterinary first-aid and coordination with animal shelters"
    ],
    imageUrl: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "udaan",
    name: "Project Udaan",
    hindiName: "उड़ान",
    category: "Women Empowerment & Health",
    shortDescription: "Fostering gender equity through menstrual hygiene awareness, distribution of eco-friendly sanitary kits, and self-help group initiatives.",
    fullDescription: "Project Udaan empowers adolescent girls and women in underserved communities by breaking taboos around menstrual health. We conduct interactive health awareness workshops, distribute biodegradable sanitary pads, and provide vocational self-employment training so women can achieve financial independence and bodily dignity.",
    iconName: "Sparkles",
    accentColor: "#D946EF",
    bgGradient: "from-fuchsia-50 to-pink-100",
    impactMetrics: [
      { label: "Women Empowered", value: "12,000+" },
      { label: "Hygiene Kits Distributed", value: "25,000+" },
      { label: "Awareness Workshops", value: "140+" }
    ],
    keyActivities: [
      "Menstrual hygiene management (MHM) education sessions",
      "Free monthly distribution of eco-friendly sanitary napkins",
      "Tailoring, embroidery, and handicraft workshops for women",
      "Counseling on maternal health and legal rights awareness"
    ],
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "prakriti",
    name: "Project Prakriti",
    hindiName: "प्रकृति",
    category: "Environmental Conservation",
    shortDescription: "Promoting sustainability through mass tree plantation drives, plastic cleanup campaigns, and climate stewardship advocacy.",
    fullDescription: "Project Prakriti is dedicated to restoring local ecosystems and combating urban environmental degradation. Through community sapling plantation drives, riverbank cleanups, rainwater harvesting awareness, and zero-plastic campaigns, Prakriti engages youth in active ecological guardianship.",
    iconName: "Trees",
    accentColor: "#16A34A",
    bgGradient: "from-green-50 to-teal-100",
    impactMetrics: [
      { label: "Saplings Planted", value: "20,000+" },
      { label: "Plastic Cleaned (kg)", value: "15,000+" },
      { label: "Green Drives Held", value: "95+" }
    ],
    keyActivities: [
      "Mass tree plantation and sapling adoption programs",
      "Public park and water body cleanliness drives",
      "Distribution of cloth bags to reduce single-use plastic reliance",
      "Environmental education in schools and colleges"
    ],
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "vikas",
    name: "Project Vikas",
    hindiName: "विकास",
    category: "Skill Development & Youth Employment",
    shortDescription: "Equipping young adults from marginalized backgrounds with market-relevant skills, digital literacy, and career mentorship.",
    fullDescription: "Project Vikas bridges the gap between education and employability. We offer practical training modules in computer fundamentals, spoken English, resume writing, digital marketing, and soft skills to empower youth to secure dignified employment or start small micro-enterprises.",
    iconName: "Briefcase",
    accentColor: "#2563EB",
    bgGradient: "from-blue-50 to-cyan-100",
    impactMetrics: [
      { label: "Youth Trained", value: "4,500+" },
      { label: "Skill Bootcamps", value: "60+" },
      { label: "Job Placements Guided", value: "1,200+" }
    ],
    keyActivities: [
      "Basic & intermediate computer skill certification courses",
      "Spoken English and personality development classes",
      "Resume building and mock interview training bootcamps",
      "Internship placement facilitation for college students"
    ],
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
  }
];

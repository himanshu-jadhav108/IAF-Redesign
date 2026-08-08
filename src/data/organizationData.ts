export interface NGOInfo {
  name: string;
  tagline: string;
  foundedDate: string;
  founder: string;
  registrationNumber: string;
  registrations: {
    section8: string;
    tax80G: string;
    tax12A: string;
    csr1: string;
    nitiAayog: string;
    iso: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
    supportEmail: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
  impactStats: {
    volunteers: string;
    states: string;
    causes: number;
    beneficiaries: string;
    mealsServed: string;
    saplingsPlanted: string;
  };
}

export const organizationData: NGOInfo = {
  name: "InAmigos Foundation",
  tagline: "Serving Humanity with Compassion & Action",
  foundedDate: "23 September 2020",
  founder: "Mr. Govind Shukla",
  registrationNumber: "Section 8 Registered Non-Profit (CIN: U85300CT2020NPT010582)",
  registrations: {
    section8: "Section 8 Registered NGO under Govt of India",
    tax80G: "80G Certified — 50% Tax Exemption for Indian Donors",
    tax12A: "12A Certified — Income Tax Exemption for NGO",
    csr1: "CSR-1 Registered — Eligible for Corporate CSR Funding",
    nitiAayog: "NITI Aayog Darpan Registered (ID: CT/2021/0278451)",
    iso: "ISO 9001:2015 Certified Quality Management",
  },
  address: {
    street: "Ward No 5, Green Park, Sirgitti",
    city: "Bilaspur",
    state: "Chhattisgarh",
    pincode: "495004",
    country: "India",
  },
  contact: {
    phone: "+91 91114 44407",
    email: "contact@inamigosfoundation.org.in",
    supportEmail: "support@inamigosfoundation.org.in",
  },
  socialLinks: {
    facebook: "https://facebook.com/inamigosfoundation",
    instagram: "https://instagram.com/inamigosfoundation",
    linkedin: "https://linkedin.com/company/inamigos-foundation",
    youtube: "https://youtube.com/@inamigosfoundation",
  },
  impactStats: {
    volunteers: "200+",
    states: "28",
    causes: 6,
    beneficiaries: "50,000+",
    mealsServed: "150,000+",
    saplingsPlanted: "20,000+",
  },
};

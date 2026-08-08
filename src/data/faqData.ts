export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Donation & Tax' | 'Volunteering' | 'Programs';
}

export const faqData: FAQItem[] = [
  {
    question: "Is InAmigos Foundation a officially registered NGO?",
    answer: "Yes. InAmigos Foundation is a Section 8 registered non-profit organization under the Companies Act, Govt of India (CIN: U85300CT2020NPT010582). We hold valid 80G and 12A tax exemption registrations, CSR-1 registration, NITI Aayog Darpan ID (CT/2021/0278451), and ISO 9001:2015 certification.",
    category: "General"
  },
  {
    question: "Are donations to InAmigos Foundation tax-exempt under Section 80G?",
    answer: "Yes! All monetary contributions made by Indian tax-payers to InAmigos Foundation qualify for 50% tax exemption under Section 80G of the Income Tax Act. Upon successful payment, an 80G tax receipt is automatically generated and emailed to your registered email address.",
    category: "Donation & Tax"
  },
  {
    question: "How can I apply to become a volunteer or intern?",
    answer: "You can apply directly through our on-site Volunteer application form on the Volunteer page. Choose your preferred field of contribution (Teaching, Ground Fieldwork, Event Management, Digital Content, or Animal Care) and time availability. Our volunteer coordinator will reach out within 48 hours.",
    category: "Volunteering"
  },
  {
    question: "What happens after I submit a volunteer application?",
    answer: "Our team reviews your skill profile and location preference. You will receive an email invitation for a brief orientation call, followed by onboarding into your local chapter WhatsApp group and assignment to your chosen program.",
    category: "Volunteering"
  },
  {
    question: "Where does my donation money go?",
    answer: "100% of public donations are allocated directly to program execution across our 6 flagship causes (Sewa food kits, Bachpanshala stationery/teacher stipends, Jeev animal food/vet care, Udaan hygiene kits, Prakriti saplings, and Vikas training). Operational costs are kept minimal and transparently reported in our annual balance sheet.",
    category: "Donation & Tax"
  },
  {
    question: "Can corporate organizations collaborate under CSR partnership?",
    answer: "Absolutely. InAmigos Foundation is CSR-1 registered and fully compliant with Ministry of Corporate Affairs guidelines. We partner with corporates for employee volunteering drives, joint sustainability projects, and targeted community interventions.",
    category: "Programs"
  }
];

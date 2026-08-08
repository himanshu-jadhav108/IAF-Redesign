# InAmigos Foundation — Conceptual Redesign & Functional Prototype

> A modern, high-trust, responsive, and accessible non-profit NGO frontend prototype built for **InAmigos Foundation** as part of an AI Web Development Internship task.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-8-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-cyan)

---

## 📌 Project Overview

This project translates the findings from the **Website Improvement Analysis Report** (`docs/Task_01_Website_Audit.pdf`) and the visual design system from **Google Stitch** into a high-trust, responsive, and accessible web application.

### 🌟 Key Objectives Achieved
- **Restructured Homepage Flow**: Impact statistics strip moved directly beneath the hero for immediate trust building.
- **Dedicated 80G Tax Exemption & Trust Section**: Prominently highlights Section 8, 80G, 12A, CSR-1, NITI Aayog (ID: CT/2021/0278451), and ISO 9001:2015 credentials.
- **Single Unified Volunteer Intake**: Replaced duplicate forms with a streamlined 4-step onboarding timeline & on-site intake form.
- **On-Site High-Trust Donation Journey**: Preset impact amounts (₹500, ₹1000, ₹2500, Custom), program selection, PAN card input, and secure Razorpay payment modal.
- **Filterable Gallery & Lightbox**: Responsive photo grid with descriptive `alt` attributes and zoom popups.
- **AI Impact Assistant**: Interactive floating AI drawer widget answering visitor questions about programs, 80G tax rules, and volunteer opportunities.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 19, Vite, TypeScript
- **Styling**: Tailwind CSS v4 & Glassmorphism design system tokens
- **Iconography**: Lucide React
- **Client-Side Routing**: React Router DOM v7
- **Design Reference**: Google Stitch Specification (`#003366`, `#006E25`, `#FF8C00`, Inter typography)

---

## 📄 Pages Implemented

| Page | Route | Description |
|---|---|---|
| **Home** | `/` | Hero section, impact counter, mission statement, 6 cause cards, testimonials, events & gallery previews |
| **About** | `/about` | Founding story (23 Sept 2020, Mr. Govind Shukla), core values, leadership team, interactive timeline & FAQs |
| **Programs** | `/programs` | Detailed showcase of the 6 causes (**Sewa**, **Bachpanshala**, **Jeev**, **Udaan**, **Prakriti**, **Vikas**) with cause filters |
| **Volunteer** | `/volunteer` | 4-step onboarding timeline, role categories, and interactive intake application form with validation |
| **Donate** | `/donate` | Preset impact amounts, 80G tax receipt breakdown, PAN input, and secure Razorpay payment modal |
| **Events** | `/events` | Grid of past and upcoming community drives with category and status filters |
| **Gallery** | `/gallery` | Responsive filterable photo grid with Lightbox modal and accessible alt descriptions |
| **Contact** | `/contact` | Official office address (Bilaspur, CG), phone, email, and validated contact form |

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🌐 Deployment

Designed for effortless deployment on **Vercel** or Netlify with standard Vite single-page application routing.

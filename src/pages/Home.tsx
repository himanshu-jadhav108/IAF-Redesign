import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Heart, Users, MapPin, Award, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { TrustBadges } from '@/components/ui/TrustBadges';
import { ProgramCard } from '@/components/ui/ProgramCard';
import { EventCard } from '@/components/ui/EventCard';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { PageTransition } from '@/components/ui/PageTransition';

import { organizationData } from '@/data/organizationData';
import { programsData } from '@/data/programsData';
import { eventsData } from '@/data/eventsData';
import { testimonialsData } from '@/data/testimonialsData';
import { galleryData } from '@/data/galleryData';

export const Home: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const heroVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : i * 0.12,
        duration: 0.45,
        ease: 'easeOut' as const,
      },
    }),
  };

  return (
    <PageTransition>
      <ScrollProgress />

      <div className="flex flex-col w-full bg-[#F8F9FA] dark:bg-slate-900 transition-colors">
        {/* 1. HERO SECTION WITH STAGGERED REVEAL */}
        <section className="relative w-full bg-linear-to-b from-[#001E40] via-[#003366] to-[#001E40] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Hero Text Copy */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
              <motion.span
                custom={0}
                initial="hidden"
                animate="visible"
                variants={heroVariants}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/10 text-emerald-300 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Section 8 Registered Non-Profit • 80G Tax Exempted
              </motion.span>

              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={heroVariants}
                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]"
              >
                Serving Humanity with <span className="text-[#FF8C00] dark:text-amber-400">Compassion</span> & Ground Action.
              </motion.h1>

              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={heroVariants}
                className="text-base sm:text-lg text-slate-200 dark:text-slate-300 leading-relaxed font-normal max-w-2xl"
              >
                InAmigos Foundation empowers vulnerable communities across India through six flagship causes: food security, child education, animal welfare, women's health, environmental action, and youth skills.
              </motion.p>

              {/* Sub-Program Pill Context Strip */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={heroVariants}
                className="w-full bg-white/10 dark:bg-slate-800/60 backdrop-blur-md p-3 rounded-2xl border border-white/15 dark:border-slate-700"
              >
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                  Our 6 Flagship Initiatives:
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-400/30">सेवा Sewa (Food)</span>
                  <span className="bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-lg border border-blue-400/30">बचपनशाला Bachpanshala (Schooling)</span>
                  <span className="bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-lg border border-amber-400/30">जीव Jeev (Animals)</span>
                  <span className="bg-fuchsia-500/20 text-fuchsia-300 px-2.5 py-1 rounded-lg border border-fuchsia-400/30">उड़ान Udaan (Women)</span>
                  <span className="bg-green-500/20 text-green-300 px-2.5 py-1 rounded-lg border border-green-400/30">प्रकृति Prakriti (Trees)</span>
                  <span className="bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-lg border border-cyan-400/30">विकास Vikas (Skills)</span>
                </div>
              </motion.div>

              {/* CTAs with Distinct Visual Hierarchy */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={heroVariants}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <NavLink to="/donate">
                  <Button variant="primary" size="lg" icon={<Heart className="w-5 h-5 fill-white" />}>
                    Donate Now (80G Tax Exemption)
                  </Button>
                </NavLink>
                <NavLink to="/volunteer">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#001E40]">
                    Volunteer With Us
                  </Button>
                </NavLink>
              </motion.div>
            </div>

            {/* Hero Visual Card */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-slate-800 group">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
                  alt="InAmigos Foundation volunteers serving community members"
                  className="w-full h-100 object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-left">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Ground Impact Drive</span>
                  <h3 className="text-xl font-bold text-white mt-1">Project Sewa Food Distribution</h3>
                  <p className="text-xs text-slate-300 mt-1">Daily hot meals served to daily wage earners & unhoused elders in Bilaspur.</p>
                </div>
              </div>

              {/* Floating Trust Badge Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 text-[#001E40] dark:text-white p-4 rounded-2xl shadow-xl border border-[#E1E3E4] dark:border-slate-700 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#006E25]/10 dark:bg-emerald-500/20 flex items-center justify-center text-[#006E25] dark:text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-extrabold text-[#003366] dark:text-sky-400">NITI Aayog Registered</span>
                  <span className="text-[11px] text-[#737780] dark:text-slate-400">CT/2021/0278451</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. IMPACT STATS STRIP WITH ANIMATED COUNTER */}
        <section className="w-full bg-white dark:bg-slate-900 border-b border-[#E1E3E4] dark:border-slate-800 py-8 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <ScrollReveal delay={0.05} className="p-4 bg-[#F8F9FA] dark:bg-slate-800/80 rounded-2xl border border-[#E1E3E4] dark:border-slate-700">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#003366]/10 dark:bg-sky-500/20 flex items-center justify-center text-[#003366] dark:text-sky-400">
                  <Users className="w-5 h-5" />
                </div>
                <AnimatedCounter value={organizationData.impactStats.volunteers} className="text-2xl sm:text-3xl font-extrabold text-[#003366] dark:text-sky-400" />
                <p className="text-xs text-[#737780] dark:text-slate-400 font-medium mt-0.5">Active Youth Volunteers</p>
              </ScrollReveal>

              <ScrollReveal delay={0.1} className="p-4 bg-[#F8F9FA] dark:bg-slate-800/80 rounded-2xl border border-[#E1E3E4] dark:border-slate-700">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#006E25]/10 dark:bg-emerald-500/20 flex items-center justify-center text-[#006E25] dark:text-emerald-400">
                  <Heart className="w-5 h-5" />
                </div>
                <AnimatedCounter value={organizationData.impactStats.beneficiaries} className="text-2xl sm:text-3xl font-extrabold text-[#006E25] dark:text-emerald-400" />
                <p className="text-xs text-[#737780] dark:text-slate-400 font-medium mt-0.5">Lives Touched Across India</p>
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="p-4 bg-[#F8F9FA] dark:bg-slate-800/80 rounded-2xl border border-[#E1E3E4] dark:border-slate-700">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#EA8000]/10 dark:bg-amber-500/20 flex items-center justify-center text-[#EA8000] dark:text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <AnimatedCounter value={organizationData.impactStats.states} className="text-2xl sm:text-3xl font-extrabold text-[#EA8000] dark:text-amber-400" />
                <p className="text-xs text-[#737780] dark:text-slate-400 font-medium mt-0.5">States & Union Territories</p>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="p-4 bg-[#F8F9FA] dark:bg-slate-800/80 rounded-2xl border border-[#E1E3E4] dark:border-slate-700">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#003366]/10 dark:bg-sky-500/20 flex items-center justify-center text-[#003366] dark:text-sky-400">
                  <Award className="w-5 h-5" />
                </div>
                <AnimatedCounter value={String(organizationData.impactStats.causes)} className="text-2xl sm:text-3xl font-extrabold text-[#003366] dark:text-sky-400" />
                <p className="text-xs text-[#737780] dark:text-slate-400 font-medium mt-0.5">Flagship Causes Active</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 3. MISSION STATEMENT */}
        <section className="w-full py-16 bg-[#F8F9FA] dark:bg-slate-900/50">
          <ScrollReveal className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006E25] dark:text-emerald-400 bg-[#80F98B]/20 dark:bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
              OUR CORE PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#001E40] dark:text-white mt-3">
              Dignity, Equity, and Hope for Every Community Member
            </h2>
            <p className="text-base sm:text-lg text-[#43474F] dark:text-slate-300 mt-4 leading-relaxed">
              Founded on 23 September 2020 by Mr. Govind Shukla, InAmigos Foundation operates as a transparent Section 8 non-profit NGO. We bridge the gap between fortunate citizens and underserved communities through structured youth action.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <NavLink to="/about">
                <Button variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                  Read Our Story & Journey
                </Button>
              </NavLink>
            </div>
          </ScrollReveal>
        </section>

        {/* 4. FLAGSHIP PROGRAMS GRID */}
        <section className="w-full py-16 bg-white dark:bg-slate-900 border-y border-[#E1E3E4] dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#006E25] dark:text-emerald-400">WHAT WE DO</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001E40] dark:text-white mt-1">Our 6 Flagship Initiatives</h2>
              </div>
              <NavLink to="/programs">
                <Button variant="ghost" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                  View All Programs
                </Button>
              </NavLink>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programsData.map((program, idx) => (
                <ScrollReveal key={program.id} delay={idx * 0.08}>
                  <ProgramCard program={program} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TRUST BADGES STRIP */}
        <TrustBadges />

        {/* 6. TESTIMONIALS SECTION */}
        <section className="w-full py-16 bg-[#F8F9FA] dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006E25] dark:text-emerald-400">VOICES OF IMPACT</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001E40] dark:text-white mt-1">What Volunteers & Beneficiaries Say</h2>
              <p className="text-sm text-[#43474F] dark:text-slate-300 mt-2">Real testimonials from youth volunteers and families served by our projects.</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonialsData.map((t, idx) => (
                <ScrollReveal key={t.id} delay={idx * 0.08}>
                  <TestimonialCard testimonial={t} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 7. EVENTS PREVIEW */}
        <section className="w-full py-16 bg-white dark:bg-slate-900 border-y border-[#E1E3E4] dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#006E25] dark:text-emerald-400">COMMUNITY ACTION</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001E40] dark:text-white mt-1">Upcoming & Recent Drives</h2>
              </div>
              <NavLink to="/events">
                <Button variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                  View All Events
                </Button>
              </NavLink>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {eventsData.slice(0, 3).map((e, idx) => (
                <ScrollReveal key={e.id} delay={idx * 0.1}>
                  <EventCard event={e} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8. GALLERY PREVIEW */}
        <section className="w-full py-16 bg-[#F8F9FA] dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006E25] dark:text-emerald-400">FIELDWORK PROOF</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001E40] dark:text-white mt-1">Ground Level Action in Photos</h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {galleryData.slice(0, 4).map((g, idx) => (
                <ScrollReveal key={g.id} delay={idx * 0.08}>
                  <div className="relative rounded-2xl overflow-hidden h-48 group shadow-xs">
                    <img
                      src={g.imageUrl}
                      alt={g.altText}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-left text-white text-xs">
                      <span className="font-bold">{g.title}</span>
                      <span className="text-[10px] text-slate-200">{g.location}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-8">
              <NavLink to="/gallery">
                <Button variant="outline" size="sm">
                  Explore Full Gallery
                </Button>
              </NavLink>
            </div>
          </div>
        </section>

        {/* 9. FINAL CALL TO ACTION */}
        <section className="w-full py-16 bg-linear-to-r from-[#003366] to-[#006E25] dark:from-slate-950 dark:to-slate-900 text-white text-center border-t border-slate-800">
          <ScrollReveal className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Be the Catalyst for Change Today</h2>
            <p className="text-slate-200 dark:text-slate-300 text-sm sm:text-base mt-3 max-w-xl mx-auto">
              Whether you donate ₹500 to feed a family or give 2 hours a week to teach a child, your support creates tangible impact.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <NavLink to="/donate">
                <Button variant="primary" size="lg" icon={<Heart className="w-5 h-5 fill-white" />}>
                  Donate Now (80G Tax Exemption)
                </Button>
              </NavLink>
              <NavLink to="/volunteer">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#001E40]">
                  Apply as Volunteer
                </Button>
              </NavLink>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </PageTransition>
  );
};

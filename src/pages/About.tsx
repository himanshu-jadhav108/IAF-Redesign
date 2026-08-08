import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Target, Eye, Heart, ChevronDown } from 'lucide-react';
import { TrustBadges } from '@/components/ui/TrustBadges';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PageTransition } from '@/components/ui/PageTransition';
import { teamData } from '@/data/teamData';
import { faqData } from '@/data/faqData';

export const About: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const timelineEvents = [
    { year: "23 Sept 2020", title: "Foundation Established", desc: "Founded by Mr. Govind Shukla in Bilaspur, Chhattisgarh as a youth-led social welfare movement." },
    { year: "March 2021", title: "Project Sewa Launch", desc: "Initiated emergency food kit distribution during COVID-19 lockdown, feeding 10,000+ daily wage earners." },
    { year: "January 2022", title: "Bachpanshala Evening Centers", desc: "Opened 10 informal community learning centers for underprivileged children unable to access formal schools." },
    { year: "June 2023", title: "Section 8 & 80G Certification", desc: "Obtained Section 8 Non-Profit registration, 80G tax exemption, 12A certification, and NITI Aayog ID." },
    { year: "2024 - Present", title: "Pan-India Expansion", desc: "Grew network to 200+ volunteers across 28 states, serving 50,000+ beneficiaries across 6 causes." }
  ];

  return (
    <PageTransition>
      <div className="flex flex-col w-full bg-[#F8F9FA] dark:bg-slate-900 transition-colors">
        {/* Header Banner */}
        <section className="w-full bg-[#001E40] dark:bg-slate-950 text-white py-16 px-4 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
              WHO WE ARE
            </span>
            <h1 className="text-3xl sm:text-5xl font-black mt-3">About InAmigos Foundation</h1>
            <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              A Section 8 registered non-profit organization driven by youth volunteerism, radical transparency, and ground-level action across India.
            </p>
          </div>
        </section>

        {/* Trust Credentials Strip */}
        <TrustBadges compact />

        {/* Organization Overview & Story */}
        <section className="w-full py-16 bg-white dark:bg-slate-900 border-b border-[#E1E3E4] dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal className="lg:col-span-7 flex flex-col gap-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006E25] dark:text-emerald-400">FOUNDING STORY</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#001E40] dark:text-white">
                Empowering Grassroots Action Since September 2020
              </h2>
              <p className="text-sm sm:text-base text-[#43474F] dark:text-slate-300 leading-relaxed">
                InAmigos Foundation was established on <strong>23 September 2020</strong> in Bilaspur, Chhattisgarh, under the vision of founder <strong>Mr. Govind Shukla</strong>. What began as a small group of passionate students distributing meals during a crisis has grown into a structured, pan-India non-profit organization active in 28 states and union territories.
              </p>
              <p className="text-sm sm:text-base text-[#43474F] dark:text-slate-300 leading-relaxed">
                We operate on a simple principle: <strong>direct impact without bureaucratic overhead</strong>. Our volunteers work directly in slums, rural hamlets, street animal feeding zones, and informal schools to ensure that every rupee donated yields real human relief.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#F8F9FA] dark:bg-slate-800 border border-[#E1E3E4] dark:border-slate-700 rounded-2xl">
                  <span className="text-xs font-bold text-[#003366] dark:text-sky-400 uppercase">Registration</span>
                  <p className="text-xs text-[#43474F] dark:text-slate-300 mt-1 font-semibold">Section 8 Registered Non-Profit (Govt. of India)</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] dark:bg-slate-800 border border-[#E1E3E4] dark:border-slate-700 rounded-2xl">
                  <span className="text-xs font-bold text-[#006E25] dark:text-emerald-400 uppercase">Tax Benefit</span>
                  <p className="text-xs text-[#43474F] dark:text-slate-300 mt-1 font-semibold">80G Tax Exemption & 12A Certified</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                  alt="Founder Mr. Govind Shukla and team"
                  className="w-full h-95 object-cover"
                />
                <div className="bg-[#001E40] dark:bg-slate-950 text-white p-4 text-left">
                  <span className="text-xs font-bold text-emerald-400">FOUNDER ATTRIBUTION</span>
                  <h3 className="text-base font-bold mt-0.5">Mr. Govind Shukla</h3>
                  <p className="text-xs text-slate-300">Founder & Chief Executive Director</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="w-full py-16 bg-[#F8F9FA] dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.05} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-[#E1E3E4] dark:border-slate-700 shadow-xs flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-[#003366]/10 dark:bg-sky-500/20 flex items-center justify-center text-[#003366] dark:text-sky-400 mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#001E40] dark:text-white">Our Mission</h3>
                <p className="text-sm text-[#43474F] dark:text-slate-300 mt-3 leading-relaxed">
                  To create scalable, ground-level interventions in food security, child education, animal welfare, women's health, environmental action, and youth skills.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-[#E1E3E4] dark:border-slate-700 shadow-xs flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-[#006E25]/10 dark:bg-emerald-500/20 flex items-center justify-center text-[#006E25] dark:text-emerald-400 mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#001E40] dark:text-white">Our Vision</h3>
                <p className="text-sm text-[#43474F] dark:text-slate-300 mt-3 leading-relaxed">
                  An India where no individual suffers from hunger or illiteracy, stray animals are protected, women live with bodily dignity, and youth lead community change.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-[#E1E3E4] dark:border-slate-700 shadow-xs flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-[#EA8000]/10 dark:bg-amber-500/20 flex items-center justify-center text-[#EA8000] dark:text-amber-400 mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#001E40] dark:text-white">Our Values</h3>
                <p className="text-sm text-[#43474F] dark:text-slate-300 mt-3 leading-relaxed">
                  Radical financial transparency, 80G donor accountability, zero discrimination, and empowering youth volunteer leadership across communities.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Interactive Timeline */}
        <section className="w-full py-16 bg-white dark:bg-slate-900 border-y border-[#E1E3E4] dark:border-slate-800 transition-colors">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006E25] dark:text-emerald-400">OUR JOURNEY</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001E40] dark:text-white mt-1">Milestones & Growth</h2>
            </ScrollReveal>

            <div className="relative border-l-2 border-[#003366] dark:border-sky-400 pl-6 text-left flex flex-col gap-8 ml-4 sm:ml-8">
              {timelineEvents.map((event, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.08} className="relative group">
                  <div className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-[#003366] dark:bg-sky-400 border-4 border-white dark:border-slate-900 group-hover:bg-[#FF8C00] transition-colors" />
                  <span className="text-xs font-bold text-[#006E25] dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                    {event.year}
                  </span>
                  <h3 className="text-lg font-bold text-[#001E40] dark:text-white mt-1">{event.title}</h3>
                  <p className="text-sm text-[#43474F] dark:text-slate-300 mt-1 leading-relaxed">{event.desc}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership & Core Team */}
        <section className="w-full py-16 bg-[#F8F9FA] dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006E25] dark:text-emerald-400">LEADERSHIP & VOLUNTEERS</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001E40] dark:text-white mt-1">Our Core Team</h2>
              <p className="text-sm text-[#43474F] dark:text-slate-300 mt-2">Dedicated leaders driving ground execution and volunteer mobilization.</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamData.map((member, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-[#E1E3E4] dark:border-slate-700 shadow-xs flex flex-col items-center text-center">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-[#003366]/10 dark:border-sky-400/20 mb-4"
                    />
                    <h3 className="text-lg font-bold text-[#001E40] dark:text-white">{member.name}</h3>
                    <span className="text-xs font-bold text-[#006E25] dark:text-emerald-400 mt-0.5">{member.role}</span>
                    <span className="text-[11px] text-[#737780] dark:text-slate-400 mt-0.5">{member.location}</span>
                    <p className="text-xs text-[#43474F] dark:text-slate-300 mt-3 leading-relaxed">{member.bio}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Structured FAQ Section with Framer Motion Accordion */}
        <section className="w-full py-16 bg-white dark:bg-slate-900 border-t border-[#E1E3E4] dark:border-slate-800 transition-colors">
          <div className="max-w-4xl mx-auto px-4">
            <ScrollReveal className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006E25] dark:text-emerald-400">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001E40] dark:text-white mt-1">Everything You Need to Know</h2>
            </ScrollReveal>

            <div className="flex flex-col gap-3">
              {faqData.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <ScrollReveal key={idx} delay={idx * 0.05} className="border border-[#E1E3E4] dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-800">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#001E40] dark:text-white hover:bg-[#F8F9FA] dark:hover:bg-slate-700/50 transition-colors focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base">{faq.question}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0 text-[#003366] dark:text-sky-400"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          animate={shouldReduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                          exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 pt-0 text-sm text-[#43474F] dark:text-slate-300 leading-relaxed border-t border-[#E1E3E4]/50 dark:border-slate-700 bg-[#F8F9FA]/50 dark:bg-slate-850 text-left">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

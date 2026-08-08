import React, { useState } from 'react';
import { Target, Eye, Heart, ChevronDown, ChevronUp } from 'lucide-react';
import { TrustBadges } from '@/components/ui/TrustBadges';
import { teamData } from '@/data/teamData';
import { faqData } from '@/data/faqData';

export const About: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const timelineEvents = [
    { year: "23 Sept 2020", title: "Foundation Established", desc: "Founded by Mr. Govind Shukla in Bilaspur, Chhattisgarh as a youth-led social welfare movement." },
    { year: "March 2021", title: "Project Sewa Launch", desc: "Initiated emergency food kit distribution during COVID-19 lockdown, feeding 10,000+ daily wage earners." },
    { year: "January 2022", title: "Bachpanshala Evening Centers", desc: "Opened 10 informal community learning centers for underprivileged children unable to access formal schools." },
    { year: "June 2023", title: "Section 8 & 80G Certification", desc: "Obtained Section 8 Non-Profit registration, 80G tax exemption, 12A certification, and NITI Aayog ID." },
    { year: "2024 - Present", title: "Pan-India Expansion", desc: "Grew network to 200+ volunteers across 28 states, serving 50,000+ beneficiaries across 6 causes." }
  ];

  return (
    <div className="flex flex-col w-full bg-[#F8F9FA]">
      {/* Header Banner */}
      <section className="w-full bg-[#001E40] text-white py-16 px-4 text-center relative overflow-hidden">
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
      <section className="w-full py-16 bg-white border-b border-[#E1E3E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006E25]">FOUNDING STORY</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#001E40]">
              Empowering Grassroots Action Since September 2020
            </h2>
            <p className="text-sm sm:text-base text-[#43474F] leading-relaxed">
              InAmigos Foundation was established on <strong>23 September 2020</strong> in Bilaspur, Chhattisgarh, under the vision of founder <strong>Mr. Govind Shukla</strong>. What began as a small group of passionate students distributing meals during a crisis has grown into a structured, pan-India non-profit organization active in 28 states and union territories.
            </p>
            <p className="text-sm sm:text-base text-[#43474F] leading-relaxed">
              We operate on a simple principle: <strong>direct impact without bureaucratic overhead</strong>. Our volunteers work directly in slums, rural hamlets, street animal feeding zones, and informal schools to ensure that every rupee donated yields real human relief.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#F8F9FA] rounded-2xl border border-[#E1E3E4]">
                <span className="text-xs font-bold text-[#003366] uppercase">Registration</span>
                <p className="text-xs text-[#43474F] mt-1 font-semibold">Section 8 Registered Non-Profit (Govt. of India)</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] rounded-2xl border border-[#E1E3E4]">
                <span className="text-xs font-bold text-[#006E25] uppercase">Tax Benefit</span>
                <p className="text-xs text-[#43474F] mt-1 font-semibold">80G Tax Exemption & 12A Certified</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                alt="Founder Mr. Govind Shukla and team"
                className="w-full h-95 object-cover"
              />
              <div className="bg-[#001E40] text-white p-4 text-left">
                <span className="text-xs font-bold text-emerald-400">FOUNDER ATTRIBUTION</span>
                <h3 className="text-base font-bold mt-0.5">Mr. Govind Shukla</h3>
                <p className="text-xs text-slate-300">Founder & Chief Executive Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="w-full py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#E1E3E4] shadow-sm flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-xl bg-[#003366]/10 flex items-center justify-center text-[#003366] mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#001E40]">Our Mission</h3>
              <p className="text-sm text-[#43474F] mt-3 leading-relaxed">
                To create scalable, ground-level interventions in food security, child education, animal welfare, women's health, environmental action, and youth skills.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E1E3E4] shadow-sm flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-xl bg-[#006E25]/10 flex items-center justify-center text-[#006E25] mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#001E40]">Our Vision</h3>
              <p className="text-sm text-[#43474F] mt-3 leading-relaxed">
                An India where no individual suffers from hunger or illiteracy, stray animals are protected, women live with bodily dignity, and youth lead community change.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E1E3E4] shadow-sm flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-xl bg-[#EA8000]/10 flex items-center justify-center text-[#EA8000] mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#001E40]">Our Values</h3>
              <p className="text-sm text-[#43474F] mt-3 leading-relaxed">
                Radical financial transparency, 80G donor accountability, zero discrimination, and empowering youth volunteer leadership across communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="w-full py-16 bg-white border-y border-[#E1E3E4]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#006E25]">OUR JOURNEY</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001E40] mt-1 mb-10">Milestones & Growth</h2>

          <div className="relative border-l-2 border-[#003366] pl-6 text-left flex flex-col gap-8 ml-4 sm:ml-8">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-[#003366] border-4 border-white group-hover:bg-[#FF8C00] transition-colors" />
                <span className="text-xs font-bold text-[#006E25] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {event.year}
                </span>
                <h3 className="text-lg font-bold text-[#001E40] mt-1">{event.title}</h3>
                <p className="text-sm text-[#43474F] mt-1 leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Core Team */}
      <section className="w-full py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006E25]">LEADERSHIP & VOLUNTEERS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001E40] mt-1">Our Core Team</h2>
            <p className="text-sm text-[#43474F] mt-2">Dedicated leaders driving ground execution and volunteer mobilization.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData.map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E1E3E4] shadow-sm flex flex-col items-center text-center">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#003366]/10 mb-4"
                />
                <h3 className="text-lg font-bold text-[#001E40]">{member.name}</h3>
                <span className="text-xs font-bold text-[#006E25] mt-0.5">{member.role}</span>
                <span className="text-[11px] text-[#737780] mt-0.5">{member.location}</span>
                <p className="text-xs text-[#43474F] mt-3 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured FAQ Section (Solves Audit finding #14) */}
      <section className="w-full py-16 bg-white border-t border-[#E1E3E4]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006E25]">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001E40] mt-1">Everything You Need to Know</h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqData.map((faq, idx) => (
              <div key={idx} className="border border-[#E1E3E4] rounded-2xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#001E40] hover:bg-[#F8F9FA] transition-colors focus:outline-none"
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-[#003366] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#737780] shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-sm text-[#43474F] leading-relaxed border-t border-[#E1E3E4]/50 bg-[#F8F9FA]/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

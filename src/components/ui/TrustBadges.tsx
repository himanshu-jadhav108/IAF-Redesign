import React from 'react';
import { ShieldCheck, Award, FileCheck, CheckCircle2, Building2 } from 'lucide-react';
import { organizationData } from '@/data/organizationData';

export const TrustBadges: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const badges = [
    {
      title: "Section 8 NGO",
      desc: "Govt. Registered Non-Profit",
      icon: <Building2 className="w-5 h-5 text-[#003366] dark:text-sky-400" />,
      tag: "U85300CT2020NPT010582"
    },
    {
      title: "80G Certified",
      desc: "50% Tax Exemption for Donors",
      icon: <ShieldCheck className="w-5 h-5 text-[#006E25] dark:text-emerald-400" />,
      tag: "Tax Relief"
    },
    {
      title: "12A Certified",
      desc: "Income Tax Exempted",
      icon: <FileCheck className="w-5 h-5 text-[#003366] dark:text-sky-400" />,
      tag: "IT Exemption"
    },
    {
      title: "CSR-1 Registered",
      desc: "Eligible for Corporate Grants",
      icon: <Award className="w-5 h-5 text-[#EA8000] dark:text-amber-400" />,
      tag: "MCA Govt of India"
    },
    {
      title: "NITI Aayog Darpan",
      desc: "ID: CT/2021/0278451",
      icon: <CheckCircle2 className="w-5 h-5 text-[#006E25] dark:text-emerald-400" />,
      tag: "Govt NGO Portal"
    },
    {
      title: "ISO 9001:2015",
      desc: "Quality Management Certified",
      icon: <Award className="w-5 h-5 text-[#003366] dark:text-sky-400" />,
      tag: "Verified Quality"
    }
  ];

  if (compact) {
    return (
      <div className="w-full bg-[#001E40] dark:bg-slate-950 text-white py-3 px-4 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" /> Verified Non-Profit Credentials
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-300">
            <span>• Section 8 NGO</span>
            <span>• 80G Tax Exempted</span>
            <span>• 12A Certified</span>
            <span>• CSR-1 Registered</span>
            <span>• NITI Aayog: CT/2021/0278451</span>
            <span>• ISO 9001:2015</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full py-12 bg-white dark:bg-slate-900 border-y border-[#E1E3E4] dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#006E25] dark:text-emerald-400 bg-[#80F98B]/20 dark:bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
            INSTITUTIONAL TRUST & TRANSPARENCY
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001E40] dark:text-white mt-3">
            Government Registered & Compliant NGO
          </h2>
          <p className="text-sm text-[#43474F] dark:text-slate-300 mt-2">
            InAmigos Foundation operates with complete legal compliance, financial audit transparency, and official government certifications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#F8F9FA] dark:bg-slate-800/90 border border-[#E1E3E4] dark:border-slate-700 rounded-2xl flex flex-col items-center text-center transition-all duration-200 hover:shadow-md hover:border-[#003366]/30 dark:hover:border-sky-400/50 group"
            >
              <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-xs mb-3 group-hover:scale-110 transition-transform">
                {badge.icon}
              </div>
              <h3 className="text-xs font-bold text-[#001E40] dark:text-white">{badge.title}</h3>
              <p className="text-[11px] text-[#43474F] dark:text-slate-400 mt-1 leading-snug">{badge.desc}</p>
              <span className="mt-3 text-[10px] font-semibold text-[#006E25] dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                {badge.tag}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-[#737780] dark:text-slate-400 flex flex-wrap justify-center items-center gap-4">
          <span>Registered Office: {organizationData.address.city}, {organizationData.address.state}</span>
          <span>•</span>
          <span>Founder: {organizationData.founder}</span>
          <span>•</span>
          <span>Founded: {organizationData.foundedDate}</span>
        </div>
      </div>
    </section>
  );
};

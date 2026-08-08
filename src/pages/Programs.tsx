import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Utensils, GraduationCap, HeartHandshake, Sparkles, Trees, Briefcase, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { programsData } from '@/data/programsData';

const iconMap: Record<string, React.ReactNode> = {
  Utensils: <Utensils className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Trees: <Trees className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />
};

export const Programs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  const categories = ['All', 'Food Security', 'Child Education', 'Animal Welfare', 'Women Empowerment', 'Environment', 'Skill Development'];

  const filteredPrograms = activeCategory === 'All'
    ? programsData
    : programsData.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="flex flex-col w-full bg-[#F8F9FA] dark:bg-slate-900 transition-colors">
      {/* Header Banner */}
      <section className="w-full bg-[#001E40] dark:bg-slate-950 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
            OUR 6 FLAGSHIP CAUSES
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-3">Targeted Initiatives for Lasting Change</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            InAmigos Foundation structures its social work across six dedicated sub-brands, ensuring specialized focus, ground accountability, and measurable impact.
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="w-full bg-white dark:bg-slate-900 border-b border-[#E1E3E4] dark:border-slate-800 py-4 sticky top-16.25 z-30 shadow-xs transition-colors">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-none flex items-center justify-start md:justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-200 shrink-0 ${
                activeCategory === cat
                  ? 'bg-[#003366] dark:bg-sky-500 text-white shadow-xs'
                  : 'bg-[#F8F9FA] dark:bg-slate-800 text-[#43474F] dark:text-slate-300 hover:bg-[#E1E3E4] dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Program Detailed Cards Section */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              id={program.id}
              className="bg-white dark:bg-slate-800 rounded-3xl border border-[#E1E3E4] dark:border-slate-700 shadow-xs overflow-hidden scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Image Column */}
              <div className="lg:col-span-5 relative min-h-75 lg:min-h-full bg-slate-100 dark:bg-slate-900">
                <img
                  src={program.imageUrl}
                  alt={program.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent lg:hidden" />
                <span className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[#003366] dark:text-sky-300 text-xs font-bold px-3 py-1 rounded-full shadow-xs border border-white/20 dark:border-slate-700">
                  {program.category}
                </span>
              </div>

              {/* Information Column */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between gap-6 text-left">
                <div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0"
                      style={{ backgroundColor: program.accentColor }}
                    >
                      {iconMap[program.iconName] || <HeartHandshake className="w-6 h-6" />}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001E40] dark:text-white">{program.name}</h2>
                      <span className="text-sm font-semibold text-[#006E25] dark:text-emerald-400">{program.hindiName}</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#43474F] dark:text-slate-300 mt-4 leading-relaxed">
                    {program.fullDescription}
                  </p>

                  {/* Impact Stats Strip */}
                  <div className="grid grid-cols-3 gap-3 mt-6 p-4 bg-[#F8F9FA] dark:bg-slate-900/80 rounded-2xl border border-[#E1E3E4] dark:border-slate-700 text-center">
                    {program.impactMetrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-lg font-extrabold text-[#003366] dark:text-sky-400">{m.value}</span>
                        <span className="text-xs text-[#737780] dark:text-slate-400 font-medium">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Activities List */}
                  <div className="mt-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#003366] dark:text-sky-400 mb-3">Key Ground Interventions</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#43474F] dark:text-slate-300">
                      {program.keyActivities.map((act, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#006E25] dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-[#E1E3E4] dark:border-slate-700 flex flex-wrap items-center gap-4">
                  <NavLink to="/donate">
                    <Button variant="primary" size="sm" icon={<Heart className="w-4 h-4 fill-white" />}>
                      Support {program.name}
                    </Button>
                  </NavLink>
                  <NavLink to="/volunteer">
                    <Button variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                      Volunteer for Cause
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Utensils, GraduationCap, HeartHandshake, Sparkles, Trees, Briefcase, ArrowRight } from 'lucide-react';
import type { Program } from '@/data/programsData';
import { Button } from '@/components/ui/Button';

const iconMap: Record<string, React.ReactNode> = {
  Utensils: <Utensils className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Trees: <Trees className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />
};

export const ProgramCard: React.FC<{ program: Program }> = ({ program }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="bg-white dark:bg-slate-800 border border-[#E1E3E4] dark:border-slate-700 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col group h-full"
    >
      {/* Image with Accent Badge */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img
          src={program.imageUrl}
          alt={program.name}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Category Pill Badge */}
        <span className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[#003366] dark:text-sky-300 text-xs font-bold px-3 py-1 rounded-full shadow-xs border border-white/20 dark:border-slate-700">
          {program.category}
        </span>

        {/* Icon & Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2 text-left">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 group-hover:scale-105 transition-transform"
              style={{ backgroundColor: program.accentColor }}
            >
              {iconMap[program.iconName] || <HeartHandshake className="w-6 h-6" />}
            </div>
            <div>
              <h3 className="text-lg font-bold leading-tight">{program.name}</h3>
              <span className="text-xs text-white/80 font-medium">{program.hindiName}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between gap-4 text-left">
        <p className="text-sm text-[#43474F] dark:text-slate-300 leading-relaxed">
          {program.shortDescription}
        </p>

        {/* Verified Impact Metrics Strip */}
        <div className="grid grid-cols-3 gap-2 py-3 px-2 bg-[#F8F9FA] dark:bg-slate-900/80 rounded-xl border border-[#E1E3E4] dark:border-slate-700 text-center">
          {program.impactMetrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-sm font-extrabold text-[#003366] dark:text-sky-400">{metric.value}</span>
              <span className="text-[10px] font-medium text-[#737780] dark:text-slate-400 leading-tight">{metric.label}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="pt-2 flex items-center justify-between gap-3 border-t border-[#E1E3E4] dark:border-slate-700">
          <NavLink to={`/programs#${program.id}`} className="w-full">
            <Button variant="outline" fullWidth size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Initiative
            </Button>
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
};

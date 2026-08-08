import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import type { Testimonial } from '@/data/testimonialsData';

export const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white dark:bg-slate-800 border border-[#E1E3E4] dark:border-slate-700 p-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-4 relative">
      <Quote className="w-8 h-8 text-[#003366]/20 dark:text-sky-400/20 absolute top-4 right-4" />
      
      <p className="text-sm text-[#191C1D] dark:text-slate-200 italic leading-relaxed relative z-10 text-left">
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-[#E1E3E4] dark:border-slate-700">
        <img
          src={testimonial.avatarUrl}
          alt={testimonial.name}
          className="w-11 h-11 rounded-full object-cover border-2 border-[#003366]/20 dark:border-sky-400/30 shrink-0"
          loading="lazy"
        />
        <div className="flex flex-col min-w-0 text-left">
          <div className="flex items-center gap-1.5">
            <h4 className="text-sm font-bold text-[#001E40] dark:text-white truncate">{testimonial.name}</h4>
            <span title="Verified Volunteer/Partner" className="inline-flex">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#006E25] dark:text-emerald-400 shrink-0" />
            </span>
          </div>
          <span className="text-xs text-[#43474F] dark:text-slate-300 truncate">{testimonial.role}</span>
          <span className="text-[11px] text-[#737780] dark:text-slate-400 truncate">{testimonial.location}</span>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import type { EventItem } from '@/data/eventsData';
import { Button } from '@/components/ui/Button';

export const EventCard: React.FC<{ event: EventItem }> = ({ event }) => {
  return (
    <div className="bg-white dark:bg-slate-800 border border-[#E1E3E4] dark:border-slate-700 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group">
      {/* Event Header Image */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge Pill */}
        <span className="absolute top-3 left-3 bg-[#003366] dark:bg-sky-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
          {event.category}
        </span>

        {/* Status Indicator */}
        <span
          className={`absolute top-3 right-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-xs ${
            event.isUpcoming
              ? 'bg-[#006E25] dark:bg-emerald-600 text-white'
              : 'bg-slate-800/80 text-slate-200'
          }`}
        >
          {event.isUpcoming ? 'Upcoming Event' : 'Completed Event'}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-3 text-left">
        <div>
          <h3 className="text-base font-bold text-[#001E40] dark:text-white group-hover:text-[#003366] dark:group-hover:text-sky-400 transition-colors leading-snug">
            {event.title}
          </h3>
          <p className="text-xs text-[#43474F] dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Date / Time / Location metadata */}
        <div className="flex flex-col gap-1.5 pt-2 text-xs text-[#737780] dark:text-slate-400 border-t border-[#E1E3E4] dark:border-slate-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#003366] dark:text-sky-400" />
            <span className="font-semibold text-[#191C1D] dark:text-slate-200">{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#003366] dark:text-sky-400" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#006E25] dark:text-emerald-400" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          {event.isUpcoming ? (
            <NavLink to="/volunteer">
              <Button variant="primary" size="sm" fullWidth icon={<ArrowRight className="w-3.5 h-3.5" />}>
                Join as Volunteer
              </Button>
            </NavLink>
          ) : (
            <Button variant="ghost" size="sm" fullWidth disabled>
              Event Concluded
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

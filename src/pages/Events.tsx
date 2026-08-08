import React, { useState } from 'react';
import { eventsData } from '@/data/eventsData';
import { EventCard } from '@/components/ui/EventCard';

export const Events: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const filteredEvents = eventsData.filter((e) => {
    if (filter === 'upcoming') return e.isUpcoming;
    if (filter === 'past') return !e.isUpcoming;
    return true;
  });

  return (
    <div className="flex flex-col w-full bg-[#F8F9FA]">
      {/* Header Banner */}
      <section className="w-full bg-[#001E40] text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
            GROUND COMMUNITY ACTION
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-3">Events & Volunteer Drives</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Join InAmigos Foundation volunteers across ongoing cleanliness campaigns, meal distribution drives, animal care camps, and educational bootcamps.
          </p>
        </div>
      </section>

      {/* Filter Options */}
      <section className="w-full bg-white border-b border-[#E1E3E4] py-4 sticky top-[65px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs font-bold rounded-full transition-all ${
              filter === 'all' ? 'bg-[#003366] text-white' : 'bg-[#F8F9FA] text-[#43474F] hover:bg-[#E1E3E4]'
            }`}
          >
            All Events ({eventsData.length})
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 text-xs font-bold rounded-full transition-all ${
              filter === 'upcoming' ? 'bg-[#006E25] text-white' : 'bg-[#F8F9FA] text-[#43474F] hover:bg-[#E1E3E4]'
            }`}
          >
            Upcoming Drives ({eventsData.filter(e => e.isUpcoming).length})
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-4 py-2 text-xs font-bold rounded-full transition-all ${
              filter === 'past' ? 'bg-[#003366] text-white' : 'bg-[#F8F9FA] text-[#43474F] hover:bg-[#E1E3E4]'
            }`}
          >
            Completed Drives ({eventsData.filter(e => !e.isUpcoming).length})
          </button>
        </div>
      </section>

      {/* Grid */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { MapPin, ZoomIn } from 'lucide-react';
import { galleryData } from '@/data/galleryData';
import type { GalleryImage } from '@/data/galleryData';
import { Modal } from '@/components/ui/Modal';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PageTransition } from '@/components/ui/PageTransition';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = ['All', 'Sewa', 'Bachpanshala', 'Jeev', 'Udaan', 'Prakriti', 'Vikas'];

  const filteredImages = activeCategory === 'All'
    ? galleryData
    : galleryData.filter((img) => img.category === activeCategory);

  return (
    <PageTransition>
      <div className="flex flex-col w-full bg-[#F8F9FA] dark:bg-slate-900 transition-colors">
        {/* Header Banner */}
        <section className="w-full bg-[#001E40] dark:bg-slate-950 text-white py-16 px-4 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
              VISUAL PROOF OF FIELDWORK
            </span>
            <h1 className="text-3xl sm:text-5xl font-black mt-3">Fieldwork & Impact Gallery</h1>
            <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Documenting ground-level social interventions across food distribution, child education, animal welfare, women hygiene, and environmental conservation.
            </p>
          </div>
        </section>

        {/* Filter Category Bar */}
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

        {/* Accessible Filterable Image Grid */}
        <section className="w-full py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((img, idx) => (
                <ScrollReveal key={img.id} delay={idx * 0.05}>
                  <div
                    onClick={() => setSelectedImage(img)}
                    className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-[#E1E3E4] dark:border-slate-700 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
                  >
                    <div className="relative h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <img
                        src={img.imageUrl}
                        alt={img.altText}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                          <ZoomIn className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <span className="absolute top-3 left-3 bg-[#003366] dark:bg-sky-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                        {img.category}
                      </span>
                    </div>

                    <div className="p-4 text-left flex flex-col gap-1 flex-1 justify-between">
                      <h3 className="text-sm font-bold text-[#001E40] dark:text-white truncate">{img.title}</h3>
                      <div className="flex items-center justify-between text-[11px] text-[#737780] dark:text-slate-400 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#006E25] dark:text-emerald-400" /> {img.location}
                        </span>
                        <span>{img.date}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <Modal
            isOpen={!!selectedImage}
            onClose={() => setSelectedImage(null)}
            title={selectedImage.title}
          >
            <div className="flex flex-col gap-4 text-left">
              <div className="rounded-2xl overflow-hidden bg-black max-h-[60vh]">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.altText}
                  className="w-full h-full object-contain max-h-[60vh] mx-auto"
                />
              </div>
              <div className="flex flex-col gap-2 p-2">
                <span className="text-xs font-bold text-[#006E25] dark:text-emerald-400 uppercase tracking-wider">
                  Initiative: {selectedImage.category}
                </span>
                <p className="text-sm text-[#43474F] dark:text-slate-300">{selectedImage.altText}</p>
                <div className="flex items-center justify-between text-xs text-[#737780] dark:text-slate-400 pt-2 border-t border-[#E1E3E4] dark:border-slate-700">
                  <span>Location: {selectedImage.location}</span>
                  <span>Date: {selectedImage.date}</span>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </PageTransition>
  );
};

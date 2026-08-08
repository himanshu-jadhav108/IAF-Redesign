import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { organizationData } from '@/data/organizationData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#001E40] text-white pt-16 pb-8 border-t border-[#003366]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Mission (2 cols wide on desktop) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-emerald-500 to-green-600 flex items-center justify-center text-white shadow-md">
                <Heart className="w-6 h-6 fill-white/20" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight">
                  InAmigos Foundation
                </span>
                <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">
                  {organizationData.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              InAmigos Foundation is a Section 8 registered non-profit organization dedicated to human welfare, child education, animal care, women's dignity, environmental action, and youth skills.
            </p>

            {/* Compliance Badge pill */}
            <div className="mt-2 inline-flex items-center gap-2 bg-[#003366] text-emerald-400 text-xs px-3 py-1.5 rounded-full border border-emerald-500/30 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Section 8 NGO | 80G & 12A Certified</span>
            </div>

            {/* Verified Social Handles (Fixes Audit issue #20) */}
            <div className="mt-3 flex items-center gap-3 text-white">
              <a
                href={organizationData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow InAmigos Foundation on Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF8C00] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href={organizationData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow InAmigos Foundation on Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF8C00] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href={organizationData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with InAmigos Foundation on LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF8C00] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a
                href={organizationData.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to InAmigos Foundation on YouTube"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF8C00] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
              <li><NavLink to="/" className="hover:text-emerald-400 transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-emerald-400 transition-colors">About Us</NavLink></li>
              <li><NavLink to="/programs" className="hover:text-emerald-400 transition-colors">Our Programs</NavLink></li>
              <li><NavLink to="/volunteer" className="hover:text-emerald-400 transition-colors">Volunteer</NavLink></li>
              <li><NavLink to="/donate" className="hover:text-emerald-400 transition-colors">Donate Now</NavLink></li>
              <li><NavLink to="/events" className="hover:text-emerald-400 transition-colors">Events & Drives</NavLink></li>
              <li><NavLink to="/gallery" className="hover:text-emerald-400 transition-colors">Fieldwork Gallery</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Col 3: Flagship Programs */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Flagship Initiatives
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
              <li><NavLink to="/programs#sewa" className="hover:text-emerald-400 transition-colors">Sewa (Food Security)</NavLink></li>
              <li><NavLink to="/programs#bachpanshala" className="hover:text-emerald-400 transition-colors">Bachpanshala (Education)</NavLink></li>
              <li><NavLink to="/programs#jeev" className="hover:text-emerald-400 transition-colors">Jeev (Animal Welfare)</NavLink></li>
              <li><NavLink to="/programs#udaan" className="hover:text-emerald-400 transition-colors">Udaan (Women Hygiene)</NavLink></li>
              <li><NavLink to="/programs#prakriti" className="hover:text-emerald-400 transition-colors">Prakriti (Environment)</NavLink></li>
              <li><NavLink to="/programs#vikas" className="hover:text-emerald-400 transition-colors">Vikas (Youth Skill)</NavLink></li>
            </ul>
          </div>

          {/* Col 4: Canonical Contact Info (Single canonical block, fixing Audit duplicate issue) */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Canonical Address
            </h3>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {organizationData.address.street}, {organizationData.address.city}, {organizationData.address.state} — {organizationData.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${organizationData.contact.phone}`} className="hover:text-emerald-400">
                  {organizationData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${organizationData.contact.email}`} className="hover:text-emerald-400">
                  {organizationData.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center md:text-left">
            <span>© {new Date().getFullYear()} InAmigos Foundation. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-slate-300">NITI Aayog Darpan ID: CT/2021/0278451</span>
          </div>

          <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-slate-300 text-center">
            <span>Notice: Conceptual Redesign & Frontend Prototype</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

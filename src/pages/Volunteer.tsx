import React, { useState } from 'react';
import { Users, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input, TextArea } from '@/components/ui/Input';

export const Volunteer: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityState: '',
    preferredRole: 'Teaching & Mentorship',
    availability: 'Weekend Drives (4-6 hrs/week)',
    motivation: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const roles = [
    'Teaching & Mentorship (Bachpanshala)',
    'Field Food & Blanket Drives (Sewa)',
    'Animal Feeding & Care (Jeev)',
    'Women Hygiene Awareness (Udaan)',
    'Environmental Tree Plantation (Prakriti)',
    'Digital Media & Graphic Design',
    'Event Management & Logistics'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid Email address is required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid 10-digit Phone Number is required';
    if (!formData.cityState.trim()) newErrors.cityState = 'City & State are required';
    if (!formData.motivation.trim()) newErrors.motivation = 'Please share a short reason why you wish to join';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full bg-[#F8F9FA] dark:bg-slate-900 transition-colors">
      {/* Header Banner */}
      <section className="w-full bg-[#001E40] dark:bg-slate-950 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
            SINGLE UNIFIED VOLUNTEER PATHWAY
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-3">Join 200+ Active Youth Volunteers</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Lead ground-level drives, mentor first-generation learners, feed street animals, and build real leadership skills with InAmigos Foundation.
          </p>
        </div>
      </section>

      {/* Onboarding Steps Timeline */}
      <section className="w-full py-12 bg-white dark:bg-slate-900 border-b border-[#E1E3E4] dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006E25] dark:text-emerald-400">WHAT HAPPENS AFTER YOU APPLY</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001E40] dark:text-white mt-1">Our Transparent Onboarding Steps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            <div className="p-5 bg-[#F8F9FA] dark:bg-slate-800 border border-[#E1E3E4] dark:border-slate-700 rounded-2xl flex flex-col gap-2">
              <span className="w-8 h-8 rounded-full bg-[#003366] dark:bg-sky-500 text-white font-bold flex items-center justify-center text-xs">1</span>
              <h3 className="text-sm font-bold text-[#001E40] dark:text-white">Application Submission</h3>
              <p className="text-xs text-[#43474F] dark:text-slate-300">Submit your role interest & location via our verified on-site form below.</p>
            </div>

            <div className="p-5 bg-[#F8F9FA] dark:bg-slate-800 border border-[#E1E3E4] dark:border-slate-700 rounded-2xl flex flex-col gap-2">
              <span className="w-8 h-8 rounded-full bg-[#003366] dark:bg-sky-500 text-white font-bold flex items-center justify-center text-xs">2</span>
              <h3 className="text-sm font-bold text-[#001E40] dark:text-white">Coordinator Contact</h3>
              <p className="text-xs text-[#43474F] dark:text-slate-300">Our volunteer head contacts you within 48 hours for a brief orientation call.</p>
            </div>

            <div className="p-5 bg-[#F8F9FA] dark:bg-slate-800 border border-[#E1E3E4] dark:border-slate-700 rounded-2xl flex flex-col gap-2">
              <span className="w-8 h-8 rounded-full bg-[#003366] dark:bg-sky-500 text-white font-bold flex items-center justify-center text-xs">3</span>
              <h3 className="text-sm font-bold text-[#001E40] dark:text-white">Chapter Assignment</h3>
              <p className="text-xs text-[#43474F] dark:text-slate-300">Join your city WhatsApp chapter & get assigned to your chosen flagship project.</p>
            </div>

            <div className="p-5 bg-[#F8F9FA] dark:bg-slate-800 border border-[#E1E3E4] dark:border-slate-700 rounded-2xl flex flex-col gap-2">
              <span className="w-8 h-8 rounded-full bg-[#006E25] dark:bg-emerald-500 text-white font-bold flex items-center justify-center text-xs">4</span>
              <h3 className="text-sm font-bold text-[#001E40] dark:text-white">Ground Impact & Certificate</h3>
              <p className="text-xs text-[#43474F] dark:text-slate-300">Execute ground drives & receive official Section 8 internship/volunteer certificates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Application Form Section */}
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-[#E1E3E4] dark:border-slate-700 shadow-lg p-6 sm:p-10 text-left">
            <div className="flex items-center gap-3 pb-6 border-b border-[#E1E3E4] dark:border-slate-700 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#003366]/10 dark:bg-sky-500/20 flex items-center justify-center text-[#003366] dark:text-sky-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#001E40] dark:text-white">Volunteer Intake Application</h2>
                <p className="text-xs text-[#737780] dark:text-slate-400 mt-0.5">Please fill out your details to join the InAmigos Foundation volunteer network.</p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="py-12 px-6 text-center bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#006E25] dark:bg-emerald-500 text-white flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#001E40] dark:text-white">Application Received!</h3>
                <p className="text-sm text-[#43474F] dark:text-slate-300 max-w-md">
                  Thank you, <strong>{formData.fullName}</strong>! Your application for <strong>{formData.preferredRole}</strong> has been registered. Our regional volunteer lead will reach out to you at <strong>{formData.email}</strong> within 48 hours.
                </p>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-emerald-300 dark:border-emerald-700 text-xs text-[#006E25] dark:text-emerald-400 font-semibold">
                  Notice: Local Prototype Confirmation State
                </div>
                <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    required
                    placeholder="e.g. Ananya Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    error={errors.fullName}
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    required
                    placeholder="e.g. ananya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    error={errors.email}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    label="Phone Number (WhatsApp)"
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    error={errors.phone}
                  />

                  <Input
                    label="City & State"
                    required
                    placeholder="e.g. Bilaspur, Chhattisgarh"
                    value={formData.cityState}
                    onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                    error={errors.cityState}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#191C1D] dark:text-slate-200">
                    Preferred Field of Action <span className="text-[#BA1A1A] dark:text-rose-400">*</span>
                  </label>
                  <select
                    value={formData.preferredRole}
                    onChange={(e) => setFormData({ ...formData, preferredRole: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white dark:bg-slate-800 text-[#191C1D] dark:text-slate-100 border border-[#C3C6D1] dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003366] dark:focus:ring-sky-400"
                  >
                    {roles.map((r, i) => (
                      <option key={i} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#191C1D] dark:text-slate-200">
                    Time Commitment Availability
                  </label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white dark:bg-slate-800 text-[#191C1D] dark:text-slate-100 border border-[#C3C6D1] dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003366] dark:focus:ring-sky-400"
                  >
                    <option value="Weekend Drives (4-6 hrs/week)">Weekend Drives (4-6 hrs/week)</option>
                    <option value="Daily Evening Classes (Bachpanshala)">Daily Evening Classes (Bachpanshala)</option>
                    <option value="Flexible Online / Remote Tasks">Flexible Online / Remote Tasks</option>
                    <option value="Full-time Summer Internship (1-3 Months)">Full-time Summer Internship (1-3 Months)</option>
                  </select>
                </div>

                <TextArea
                  label="Why do you want to volunteer with InAmigos Foundation?"
                  required
                  placeholder="Share a short note on your motivation, past experiences, or skills..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  error={errors.motivation}
                  rows={4}
                />

                <div className="pt-4 border-t border-[#E1E3E4] dark:border-slate-700 flex items-center justify-between gap-4">
                  <span className="text-xs text-[#737780] dark:text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#006E25] dark:text-emerald-400" /> Verified On-Site Form
                  </span>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={isSubmitting ? undefined : <Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Volunteer Application'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

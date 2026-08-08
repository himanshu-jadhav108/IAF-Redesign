import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input, TextArea } from '@/components/ui/Input';
import { organizationData } from '@/data/organizationData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid Email is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message content is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full bg-[#F8F9FA] dark:bg-slate-900 transition-colors">
      {/* Header Banner */}
      <section className="w-full bg-[#001E40] dark:bg-slate-950 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
            CONNECT WITH US
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-3">Contact InAmigos Foundation</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Have questions regarding CSR partnerships, 80G tax receipts, volunteer internships, or program details? Our team is here to assist you.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Canonical Verified Contact Info (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-[#E1E3E4] dark:border-slate-700 shadow-xs flex flex-col gap-6">
              <h2 className="text-xl font-extrabold text-[#001E40] dark:text-white">Official Registered Office</h2>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#003366]/10 dark:bg-sky-500/20 flex items-center justify-center text-[#003366] dark:text-sky-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#006E25] dark:text-emerald-400 uppercase tracking-wider">Address</span>
                  <p className="text-sm font-semibold text-[#191C1D] dark:text-slate-200 mt-0.5">
                    {organizationData.address.street}, {organizationData.address.city}, {organizationData.address.state} — {organizationData.address.pincode}, {organizationData.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#003366]/10 dark:bg-sky-500/20 flex items-center justify-center text-[#003366] dark:text-sky-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#006E25] dark:text-emerald-400 uppercase tracking-wider">Official Phone</span>
                  <p className="text-sm font-semibold text-[#191C1D] dark:text-slate-200 mt-0.5">
                    <a href={`tel:${organizationData.contact.phone}`} className="hover:text-[#003366] dark:hover:text-sky-400">
                      {organizationData.contact.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#003366]/10 dark:bg-sky-500/20 flex items-center justify-center text-[#003366] dark:text-sky-400 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#006E25] dark:text-emerald-400 uppercase tracking-wider">Official Email</span>
                  <p className="text-sm font-semibold text-[#191C1D] dark:text-slate-200 mt-0.5">
                    <a href={`mailto:${organizationData.contact.email}`} className="hover:text-[#003366] dark:hover:text-sky-400">
                      {organizationData.contact.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#003366]/10 dark:bg-sky-500/20 flex items-center justify-center text-[#003366] dark:text-sky-400 shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#006E25] dark:text-emerald-400 uppercase tracking-wider">Registration Details</span>
                  <p className="text-xs text-[#43474F] dark:text-slate-300 mt-0.5">
                    Section 8 Registered NGO • CIN: U85300CT2020NPT010582 • NITI Aayog ID: CT/2021/0278451
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#001E40] dark:bg-slate-950 text-white p-6 rounded-3xl border border-[#003366] dark:border-slate-800">
              <h3 className="text-sm font-bold flex items-center gap-2 text-emerald-400">
                <Clock className="w-4 h-4" /> Office Response Hours
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Monday to Saturday: 10:00 AM – 06:00 PM IST. Inquiries submitted via form receive response within 2 business days.
              </p>
            </div>
          </div>

          {/* Accessible Interactive Contact Form (Col 7) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-3xl border border-[#E1E3E4] dark:border-slate-700 shadow-lg p-6 sm:p-10 text-left">
            <h2 className="text-xl font-extrabold text-[#001E40] dark:text-white mb-6">Send Us A Direct Message</h2>

            {isSubmitted ? (
              <div className="py-10 px-6 text-center bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 flex flex-col items-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-[#006E25] dark:text-emerald-400" />
                <h3 className="text-xl font-bold text-[#001E40] dark:text-white">Message Prepared!</h3>
                <p className="text-xs text-[#43474F] dark:text-slate-300 max-w-md">
                  Thank you, <strong>{formData.name}</strong>! Your inquiry regarding "{formData.subject}" has been formatted in local prototype state.
                </p>
                <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                <Input
                  label="Full Name"
                  required
                  placeholder="e.g. Rahul Verma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  error={errors.name}
                />

                <Input
                  label="Email Address"
                  type="email"
                  required
                  placeholder="e.g. rahul@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                />

                <Input
                  label="Subject"
                  required
                  placeholder="e.g. Inquiry regarding CSR partnership or 80G receipt"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  error={errors.subject}
                />

                <TextArea
                  label="Your Message"
                  required
                  placeholder="Write your message details here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  error={errors.message}
                  rows={5}
                />

                <div className="pt-2 flex items-center justify-between gap-4 border-t border-[#E1E3E4] dark:border-slate-700">
                  <span className="text-xs text-[#737780] dark:text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#006E25] dark:text-emerald-400" /> Persistent Labels & Validated Form
                  </span>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    icon={isSubmitting ? undefined : <Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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

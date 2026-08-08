import React, { useState } from 'react';
import { Heart, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { programsData } from '@/data/programsData';

export const Donate: React.FC = () => {
  const [donationFrequency, setDonationFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedProgram, setSelectedProgram] = useState<string>('all');
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
  const [panNumber, setPanNumber] = useState<string>('');

  const presetAmounts = [
    { amount: 500, impact: "Provides 10 hot meals under Project Sewa" },
    { amount: 1000, impact: "Provides 1 school kit (bag, books) under Bachpanshala" },
    { amount: 2500, impact: "Feeds 25 street dogs & fits 5 reflective collars" },
    { amount: 5000, impact: "Provides hygiene kits & empowerment to 10 women" },
  ];

  const finalAmount = selectedAmount === 'custom' ? Number(customAmount) || 0 : selectedAmount;

  return (
    <div className="flex flex-col w-full bg-[#F8F9FA]">
      {/* Header Banner */}
      <section className="w-full bg-[#001E40] text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
            50% TAX DEDUCTIBLE DONATION (SECTION 80G)
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-3">Empower Lives with 100% Transparent Giving</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Every contribution directly funds ground execution across our 6 flagship programs. Receive an instant 80G tax receipt for your contribution.
          </p>
        </div>
      </section>

      {/* Main Donation Selection Section */}
      <section className="w-full py-16">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Donation Form Controls (Col 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E1E3E4] shadow-lg p-6 sm:p-8 text-left">
            <div className="flex items-center justify-between pb-6 border-b border-[#E1E3E4] mb-6">
              <h2 className="text-xl font-extrabold text-[#001E40]">Select Donation Amount</h2>
              <span className="text-xs font-bold text-[#006E25] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                80G Tax Benefit
              </span>
            </div>

            {/* One-time vs Monthly Switch */}
            <div className="grid grid-cols-2 gap-2 p-1.5 bg-[#F8F9FA] rounded-2xl border border-[#E1E3E4] mb-6">
              <button
                type="button"
                onClick={() => setDonationFrequency('one-time')}
                className={`py-2.5 text-xs font-bold rounded-xl transition-all ${
                  donationFrequency === 'one-time'
                    ? 'bg-[#003366] text-white shadow-xs'
                    : 'text-[#43474F] hover:bg-white'
                }`}
              >
                One-Time Gift
              </button>
              <button
                type="button"
                onClick={() => setDonationFrequency('monthly')}
                className={`py-2.5 text-xs font-bold rounded-xl transition-all ${
                  donationFrequency === 'monthly'
                    ? 'bg-[#003366] text-white shadow-xs'
                    : 'text-[#43474F] hover:bg-white'
                }`}
              >
                Monthly Sustainer
              </button>
            </div>

            {/* Preset Amount Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {presetAmounts.map((item) => (
                <button
                  key={item.amount}
                  type="button"
                  onClick={() => setSelectedAmount(item.amount)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedAmount === item.amount
                      ? 'border-[#FF8C00] bg-[#FF8C00]/10 ring-2 ring-[#FF8C00]'
                      : 'border-[#E1E3E4] bg-white hover:border-[#003366]'
                  }`}
                >
                  <span className="text-lg font-black text-[#001E40]">₹{item.amount.toLocaleString()}</span>
                  <p className="text-[11px] text-[#43474F] mt-1 line-clamp-2 leading-tight">{item.impact}</p>
                </button>
              ))}
            </div>

            {/* Custom Amount Field */}
            <div className="mb-6">
              <label className="text-xs font-bold text-[#191C1D] block mb-2">Or Enter Custom Amount (INR ₹)</label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-sm font-bold text-[#737780]">₹</span>
                <input
                  type="number"
                  placeholder="e.g. 5000"
                  value={customAmount}
                  onChange={(e) => {
                    setSelectedAmount('custom');
                    setCustomAmount(e.target.value);
                  }}
                  className="w-full pl-8 pr-4 py-3 text-sm bg-white border border-[#C3C6D1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003366]"
                />
              </div>
            </div>

            {/* Program Preference Selector */}
            <div className="mb-8">
              <label className="text-xs font-bold text-[#191C1D] block mb-2">Direct My Gift To A Specific Program</label>
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="w-full px-4 py-3 text-sm bg-white border border-[#C3C6D1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003366]"
              >
                <option value="all">Where Needed Most (General Fund)</option>
                {programsData.map((p) => (
                  <option key={p.id} value={p.id}>{p.name} ({p.category})</option>
                ))}
              </select>
            </div>

            {/* Proceed Action Button */}
            <Button
              variant="primary"
              size="lg"
              fullWidth
              disabled={finalAmount <= 0}
              icon={<Heart className="w-5 h-5 fill-white" />}
              onClick={() => setShowPaymentModal(true)}
            >
              Proceed to Donate ₹{finalAmount > 0 ? finalAmount.toLocaleString() : '0'}
            </Button>
          </div>

          {/* Trust & Transparency Details (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="bg-white p-6 rounded-3xl border border-[#E1E3E4] shadow-sm flex flex-col gap-4">
              <h3 className="text-lg font-bold text-[#001E40] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#006E25]" /> 80G Tax Receipt Guarantee
              </h3>
              <p className="text-xs text-[#43474F] leading-relaxed">
                InAmigos Foundation is registered under Section 80G of the Income Tax Act. Indian donors receive 50% tax exemption on all monetary contributions.
              </p>
              <ul className="text-xs text-[#43474F] flex flex-col gap-2 pt-2 border-t border-[#E1E3E4]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#006E25] shrink-0" />
                  <span>Instant PDF receipt generated & emailed</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#006E25] shrink-0" />
                  <span>Valid 80G Reg: Section 8 / NITI Aayog</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#006E25] shrink-0" />
                  <span>Transparent financial balance sheet audit</span>
                </li>
              </ul>
            </div>

            {/* Razorpay Gateway Notice */}
            <div className="bg-[#001E40] text-white p-6 rounded-3xl border border-[#003366] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Payment Partner</span>
                <Lock className="w-4 h-4 text-emerald-400" />
              </div>
              <h4 className="text-base font-bold">100% Encrypted & Secure Payment Gateway</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Payments are securely processed via Razorpay supporting Credit/Debit Cards, UPI, Net Banking, and Wallets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Gateway Modal (Solves Audit finding #18) */}
      <Modal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        title={`Complete Donation: ₹${finalAmount.toLocaleString()}`}
      >
        <div className="flex flex-col gap-4 text-left">
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-[#006E25] flex items-center justify-between">
            <span className="font-bold">50% Tax Benefit Applied (80G)</span>
            <ShieldCheck className="w-4 h-4" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#191C1D]">
              PAN Card Number (Required for 80G Tax Exemption Certificate)
            </label>
            <input
              type="text"
              placeholder="e.g. ABCDE1234F"
              maxLength={10}
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
              className="px-3.5 py-2.5 text-xs bg-[#F8F9FA] border border-[#C3C6D1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003366] font-mono tracking-wider"
            />
          </div>

          <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#E1E3E4] text-xs text-[#737780] space-y-1">
            <p><strong>Selected Program:</strong> {selectedProgram === 'all' ? 'General Community Fund' : selectedProgram}</p>
            <p><strong>Frequency:</strong> {donationFrequency === 'one-time' ? 'One-time gift' : 'Monthly recurring'}</p>
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-800">
            <strong>Prototype Notice:</strong> Clicking below simulates the secure Razorpay payment gateway checkout destination.
          </div>

          <a
            href="https://razorpay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button variant="primary" size="lg" fullWidth icon={<Lock className="w-4 h-4" />}>
              Proceed to Secure Razorpay Payment (₹{finalAmount.toLocaleString()})
            </Button>
          </a>
        </div>
      </Modal>
    </div>
  );
};

import React from 'react';
import { Calendar, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function HeroBanner() {
  const features = [
    "100% Scam-Free Guarantee",
    "Real-Time Verification",
    "Scam Risk Scoring",
    "Direct Portal Links",
    "Application Tracking",
    "Verified Partner Network"
  ];

  return (
    <div className="bg-slate-50 bg-dot-pattern border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
      <div className="text-center space-y-3">
        <span className="text-3xl sm:text-5xl font-black text-brand-dark uppercase tracking-tight block">
          Verified Scholarship
        </span>
        <div className="inline-block bg-brand-dark text-white text-2xl sm:text-4xl font-black px-8 py-2 rounded-2xl shadow-lg uppercase tracking-wide">
          Opportunity Engine
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-brand-dark p-3 rounded-xl text-white">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase">Cycle Starts:</p>
            <p className="text-lg font-black text-brand-dark">November 29, 2026</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-brand-red p-3 rounded-xl text-white">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-brand-red uppercase">Application Deadline:</p>
            <p className="text-lg font-black text-brand-red">November 25, 2026</p>
          </div>
        </div>
      </div>

      <div className="bg-brand-dark text-white rounded-2xl p-6 shadow-md">
        <h3 className="text-center font-bold text-sm tracking-widest text-blue-200 uppercase mb-4">
          All Listed Opportunities Include:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-blue-300 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
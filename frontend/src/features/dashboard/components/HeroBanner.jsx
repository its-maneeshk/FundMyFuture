import React from 'react';
import { Search, ShieldCheck, Sparkles, CheckCircle2, TrendingUp, Users } from 'lucide-react';

export default function HeroBanner({ searchQuery, setSearchQuery }) {
  const highlights = [
    "100% AI-Verified",
    "Zero Application Fees",
    "Direct Portal Links",
    "Real-Time Fraud Guard"
  ];

  return (
    <div className="relative bg-gradient-to-br from-brand-dark via-blue-950 to-brand-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl overflow-hidden border border-blue-900/50">
      
      {/* Decorative Glow Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        
        {/* Trust Pill */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold text-blue-200">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>ISO Standard AI Scam Detection Engine</span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-[2.5rem] font-black tracking-tight leading-tight uppercase">
          Find Genuine <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-white">
            Scholarships
          </span> Without Scams
        </h1>

        <p className="text-blue-100/80 text-sm sm:text-base max-w-xl mx-auto">
          FundMyFuture uses real-time Google Gemini AI verification to scan, score, and filter out fake aid programs before you apply.
        </p>

        {/* Search Bar */}
        {/* <div className="relative max-w-2xl mx-auto pt-2">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by degree, category, or title (e.g. Data Science, DevOps)..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-900 placeholder-slate-400 font-medium shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-blue/50 text-sm sm:text-base"
            />
          </div>
        </div> */}

        {/* Feature Badges */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Stats Bar Bottom */}
      <div className="relative z-10 mt-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl sm:text-3xl font-black text-amber-400">100%</p>
          <p className="text-xs text-blue-200 font-semibold uppercase">Scam-Free Guard</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-black text-emerald-400">95%+</p>
          <p className="text-xs text-blue-200 font-semibold uppercase">Average AI Trust Score</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <p className="text-2xl sm:text-3xl font-black text-sky-300">24/7</p>
          <p className="text-xs text-blue-200 font-semibold uppercase">Automated Web Verification</p>
        </div>
      </div>

    </div>
  );
}
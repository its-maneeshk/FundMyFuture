import React from 'react';
import { ShieldCheck, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-brand-dark p-2.5 rounded-xl text-white shadow-md">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight text-brand-dark block leading-none">
              FundMyFuture
            </span>
            <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
              ScholaVerify
            </span>
          </div>
        </Link>

        {/* Right ISO / Verification Badge */}
        <div className="flex items-center gap-2 border-2 border-brand-dark rounded-xl px-3 py-1.5 bg-brand-light">
          <ShieldCheck className="w-6 h-6 text-brand-dark" />
          <div className="text-left leading-tight">
            <span className="text-[10px] font-bold text-slate-500 block uppercase">ISO Standard</span>
            <span className="text-xs font-bold text-brand-dark">AI VERIFIED</span>
          </div>
        </div>

      </div>
    </header>
  );
}
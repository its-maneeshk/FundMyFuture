import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ShieldCheck, Mail, Phone, MapPin, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-blue-900/60 mt-auto">
      {/* Upper Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-brand-blue p-2 rounded-xl text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight block leading-none">
                  FundMyFuture
                </span>
                <span className="text-[10px] font-bold text-blue-300 tracking-wider uppercase">
                  ScholaVerify Engine
                </span>
              </div>
            </div>
            <p className="text-xs text-blue-200/80 leading-relaxed">
              Empowering students with automated web scraping and real-time Google Gemini AI verification to eliminate scholarship fraud worldwide.
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-950/80 px-3 py-1.5 rounded-xl border border-blue-800/50 text-xs text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Scam-Guard Active</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-300">
              Platform Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-blue-100/80">
              <li>
                <Link to="/" className="hover:text-white transition flex items-center gap-1">
                  <span>Opportunity Engine</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition flex items-center gap-1">
                  <span>About Verification</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regional Support & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-300">
              Direct Helplines
            </h4>
            <div className="space-y-2 text-xs text-blue-100/80">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Canada & USA</p>
                  <p>+1 548 468 7968, +1 437 837 0325</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Nepal Office</p>
                  <p>+977 9709152334, +977 9709152335</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Verification Standard Badge */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-300">
              Trust & Compliance
            </h4>
            <div className="bg-blue-950/60 p-4 rounded-2xl border border-blue-800/40 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>ISO Standard AI Guard</span>
              </div>
              <p className="text-[11px] text-blue-200/70 leading-snug">
                All scholarship listings are continuously evaluated using structured machine learning models to detect deceptive fees.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Bar / Copyright */}
      <div className="border-t border-blue-900/40 bg-blue-950/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-300/80">
          <p>© {new Date().getFullYear()} FundMyFuture Platform. All rights reserved.</p>
          <div className="flex items-center gap-1 text-xs">
            <span>Built with precision for scam-free education aid</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { ShieldCheck, Cpu, Database, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 py-4">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-brand-dark transition">
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>

      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-black text-brand-dark tracking-tight">
          About FundMyFuture
        </h1>
        <p className="text-slate-600 text-base max-w-2xl mx-auto">
          We are dedicated to protecting students worldwide from financial aid fraud by pairing automated web intelligence with Google Gemini AI scam verification.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-brand-blue">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">AI Verification</h3>
          <p className="text-slate-600 text-sm">
            Every scraped scholarship is parsed by Gemini models to detect hidden fees, phishing links, and deceptive criteria.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-600">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">Scam-Free Index</h3>
          <p className="text-slate-600 text-sm">
            Only programs meeting our strict Trust Score threshold (80%+) are indexed for public viewing and application.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center text-purple-600">
            <Database className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">Automated Ingestion</h3>
          <p className="text-slate-600 text-sm">
            Our automated scraper continuously pulls new grant announcements from verified educational foundations.
          </p>
        </div>
      </div>
    </div>
  );
}
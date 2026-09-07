import React from 'react';
import { ShieldCheck, Calendar, DollarSign, ArrowRight } from 'lucide-react';

export default function ScholarshipCard({ item }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            {item.category}
          </span>
          <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-200 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{item.trust_score}% Trust Score</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Provided by {item.provider}</p>
        </div>

        <p className="text-sm text-slate-600 line-clamp-2">{item.description}</p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-xs font-semibold text-slate-500">
            <DollarSign className="w-3.5 h-3.5 text-brand-dark" />
            <span>{item.amount}</span>
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-brand-red" />
            <span>{item.deadline}</span>
          </div>
        </div>

        <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-dark text-white text-xs font-bold rounded-xl hover:bg-brand-blue transition cursor-pointer">
          Apply Now
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
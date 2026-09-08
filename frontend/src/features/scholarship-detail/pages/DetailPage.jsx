import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getScholarships } from '../../../services/scholarshipService';
import { ShieldCheck, AlertTriangle, ArrowLeft, Building2, Calendar, DollarSign, ExternalLink } from 'lucide-react';

export default function DetailPage() {
  const { id } = useParams();
  const [scholarship, setScholarship] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getScholarships()
      .then((res) => {
        if (res.success) {
          const item = res.data.find((s) => s.id.toString() === id);
          setScholarship(item);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-slate-500">Loading opportunity details...</div>;
  }

  if (!scholarship) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Scholarship Not Found</h2>
        <Link to="/" className="text-brand-blue font-bold hover:underline">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-brand-dark transition">
        <ArrowLeft className="w-4 h-4" />
        Back to Listings
      </Link>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
        {/* Header Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              {scholarship.category}
            </span>
            <h1 className="text-3xl font-black text-brand-dark mt-3">{scholarship.title}</h1>
            <p className="text-sm font-semibold text-slate-500 mt-1 flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              {scholarship.provider}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-2xl border border-emerald-200">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase">AI Trust Score</p>
              <p className="text-lg font-black">{scholarship.trust_score}% ({scholarship.status})</p>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center gap-3">
            <DollarSign className="w-5 h-5 text-brand-dark" />
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase">Award Value</p>
              <p className="text-base font-bold text-slate-900">{scholarship.amount}</p>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center gap-3">
            <Calendar className="w-5 h-5 text-brand-red" />
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase">Deadline</p>
              <p className="text-base font-bold text-slate-900">{scholarship.deadline}</p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-brand-dark">Program Overview</h3>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            {scholarship.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white font-bold rounded-2xl hover:bg-brand-blue transition shadow-md cursor-pointer">
            <span>Apply on Official Portal</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
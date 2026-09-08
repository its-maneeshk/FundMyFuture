import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getScholarships, verifyScholarship } from '../../../services/scholarshipService';
import { ShieldCheck, ArrowLeft, Building2, Calendar, DollarSign, ExternalLink, Sparkles, Loader2 } from 'lucide-react';

export default function DetailPage() {
  const { id } = useParams();
  const [scholarship, setScholarship] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Custom Verification State
  const [customTitle, setCustomTitle] = useState('');
  const [customDescription, setCustomDescription] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState(null);

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

  const handleCustomVerify = async (e) => {
    e.preventDefault();
    if (!customTitle || !customDescription) return;

    setVerifying(true);
    setAiAnalysis(null);

    try {
      const res = await verifyScholarship({
        title: customTitle,
        provider: scholarship?.provider || 'External Provider',
        description: customDescription,
      });
      if (res.success) {
        setAiAnalysis(res.analysis);
      }
    } catch (err) {
      console.error('AI Verification failed:', err);
    } finally {
      setVerifying(false);
    }
  };

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
    <div className="max-w-4xl mx-auto space-y-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-brand-dark transition">
        <ArrowLeft className="w-4 h-4" />
        Back to Listings
      </Link>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
        {/* Header */}
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

        {/* Description */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-brand-dark">Program Overview</h3>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            {scholarship.description}
          </p>
        </div>
      </div>

      {/* Interactive AI Verification Widget */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6">
        <div className="flex items-center gap-2 text-brand-dark">
          <Sparkles className="w-6 h-6 text-brand-blue" />
          <h3 className="text-xl font-bold">Run Live Gemini AI Fraud Scan</h3>
        </div>
        <p className="text-sm text-slate-600">
          Have an unverified scholarship offer? Paste its details below to run an instant Google Gemini AI scam risk analysis.
        </p>

        <form onSubmit={handleCustomVerify} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Scholarship Title</label>
            <input
              type="text"
              required
              placeholder="e.g. Free Merit Grant 2026"
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Listing Requirements / Details</label>
            <textarea
              required
              rows={3}
              placeholder="Paste email or website details here..."
              value={customDescription}
              onChange={(e) => setCustomDescription(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue"
            />
          </div>

          <button
            type="submit"
            disabled={verifying}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white font-bold text-xs rounded-xl hover:bg-brand-blue transition disabled:opacity-50 cursor-pointer"
          >
            {verifying ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            {verifying ? 'Analyzing with Gemini AI...' : 'Verify Listing Now'}
          </button>
        </form>

        {/* AI Analysis Result */}
        {aiAnalysis && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 mt-4">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900">Analysis Verdict:</span>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                aiAnalysis.trust_score >= 80 ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
              }`}>
                {aiAnalysis.trust_score}% Trust Rating ({aiAnalysis.status})
              </span>
            </div>
            
            {aiAnalysis.flags && aiAnalysis.flags.length > 0 && (
              <div>
                <p className="text-xs font-bold text-red-600 uppercase mb-1">Detected Risk Indicators:</p>
                <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                  {aiAnalysis.flags.map((flag, idx) => (
                    <li key={idx}>{flag}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
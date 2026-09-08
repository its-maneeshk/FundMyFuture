import React, { useEffect, useState, useMemo } from 'react';
import HeroBanner from '../components/HeroBanner';
import CategoryHub from '../components/CategoryHub';
import ScholarshipCard from '../components/ScholarshipCard';
import { getScholarships, triggerScrape } from '../../../services/scholarshipService';
import { Loader2, RefreshCw, Search, Filter } from 'lucide-react';

export default function DashboardPage() {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scraping, setScraping] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Data Science with AI',
    'Data Analytics with AI',
    'DevOps with AI',
    'QA with AI',
    'CyberSecurity with AI',
    'Data Engineering with AI',
  ];

  const loadData = () => {
    setLoading(true);
    getScholarships()
      .then((res) => {
        if (res.success) setScholarships(res.data);
      })
      .catch((err) => console.error('Failed to load scholarships:', err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleScrape = async () => {
    setScraping(true);
    try {
      await triggerScrape();
      loadData();
    } catch (err) {
      console.error('Scrape error:', err);
    } finally {
      setScraping(false);
    }
  };

  // Dynamic search and filtering logic
  const filteredScholarships = useMemo(() => {
    return scholarships.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.provider.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [scholarships, searchQuery, selectedCategory]);

  return (
    <div className="space-y-10">
      <HeroBanner />
      <CategoryHub />

      <div className="space-y-6">
        {/* Section Header & Sync Button */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-2xl font-black text-brand-dark tracking-tight">
            Verified Opportunities ({filteredScholarships.length})
          </h2>

          <button
            onClick={handleScrape}
            disabled={scraping}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light text-brand-dark border border-brand-dark/20 rounded-xl font-bold text-xs hover:bg-brand-blue hover:text-white transition disabled:opacity-50 cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${scraping ? 'animate-spin' : ''}`} />
            {scraping ? 'Syncing Scraping Pipeline...' : 'Sync & Scrape Web'}
          </button>
        </div>

        {/* Search Bar & Category Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search Input */}
          <div className="relative w-full md:w-1/2">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title or sponsor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue"
            />
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-slate-500 shrink-0" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-auto px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-brand-blue"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Listings Grid */}
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-brand-blue" />
          </div>
        ) : filteredScholarships.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 font-medium">
              No verified opportunities match your search query or category filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScholarships.map((item) => (
              <ScholarshipCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
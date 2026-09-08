import React, { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import CategoryHub from '../components/CategoryHub';
import ScholarshipCard from '../components/ScholarshipCard';
import { getScholarships, triggerScrape } from '../../../services/scholarshipService';
import { Loader2, RefreshCw } from 'lucide-react';

export default function DashboardPage() {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scraping, setScraping] = useState(false);

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
      loadData(); // Reload list after scrape complete
    } catch (err) {
      console.error('Scrape error:', err);
    } finally {
      setScraping(false);
    }
  };

  return (
    <div className="space-y-10">
      <HeroBanner />
      <CategoryHub />

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-brand-dark tracking-tight">
            Verified Opportunities ({scholarships.length})
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

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-brand-blue" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarships.map((item) => (
              <ScholarshipCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
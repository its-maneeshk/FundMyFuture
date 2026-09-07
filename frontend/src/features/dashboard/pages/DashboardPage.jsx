import React, { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import CategoryHub from '../components/CategoryHub';
import ScholarshipCard from '../components/ScholarshipCard';
import { getScholarships } from '../../../services/scholarshipService';
import { Loader2 } from 'lucide-react';

export default function DashboardPage() {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getScholarships()
      .then((res) => {
        if (res.success) setScholarships(res.data);
      })
      .catch((err) => console.error('Failed to load scholarships:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-10">
      <HeroBanner />
      <CategoryHub />

      <div className="space-y-6">
        <h2 className="text-2xl font-black text-brand-dark tracking-tight">
          Verified Opportunities ({scholarships.length})
        </h2>

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
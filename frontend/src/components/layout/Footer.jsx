import React from 'react';
import { Phone, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-blue-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-blue-300 shrink-0" />
          <div>
            <p className="font-semibold">Canada & USA: +1 548 468 7968, +1 437 837 0325</p>
            <p className="text-blue-200 text-xs">Nepal: +977 9709152334, +977 9709152335</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-blue-300 shrink-0" />
          <div>
            <span className="text-xs text-blue-200 uppercase block">Official Portal</span>
            <span className="font-bold">www.fundmyfuture.org</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
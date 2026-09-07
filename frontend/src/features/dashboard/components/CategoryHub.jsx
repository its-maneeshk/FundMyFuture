import React from 'react';
import { Database, Shield, Cpu, BarChart3, Infinity, CheckSquare } from 'lucide-react';

export default function CategoryHub() {
  const categories = [
    { title: "Data Science with AI", icon: Cpu },
    { title: "Data Analytics with AI", icon: BarChart3 },
    { title: "DevOps with AI", icon: Infinity },
    { title: "QA with AI", icon: CheckSquare },
    { title: "CyberSecurity with AI", icon: Shield },
    { title: "Data Engineering with AI", icon: Database },
  ];

  return (
    <div className="py-4">
      <h2 className="text-center text-xl font-bold text-brand-dark mb-6 uppercase tracking-wider">
        Browse Fields of Study
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div 
              key={idx}
              className="bg-white p-4 rounded-2xl border-2 border-brand-blue/20 hover:border-brand-blue transition shadow-sm flex items-center gap-4 cursor-pointer group"
            >
              <div className="p-3 rounded-full border-2 border-brand-blue text-brand-blue bg-blue-50 group-hover:bg-brand-blue group-hover:text-white transition">
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-bold text-brand-dark text-sm">
                {cat.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
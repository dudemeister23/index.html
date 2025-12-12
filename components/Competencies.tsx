import React from 'react';
import { CORE_COMPETENCIES } from '../constants';
import { Brain, Stethoscope, Briefcase, PenTool } from 'lucide-react';

const icons = [Brain, Stethoscope, Briefcase, PenTool];

const Competencies: React.FC = () => {
  return (
    <section id="competencies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Core Competencies</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Combining clinical authority with business acumen to deliver scientifically rigorous and commercially viable programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_COMPETENCIES.map((comp, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={comp.category} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-slate-100 group">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{comp.category}</h3>
                <ul className="space-y-2">
                  {comp.items.map((item) => (
                    <li key={item} className="flex items-start text-sm text-slate-600">
                      <span className="mr-2 text-teal-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Competencies;
import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Education & Training</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="bg-slate-50 rounded-xl p-8 border border-slate-100 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm text-teal-600 border border-teal-100">
                  {edu.id === 'goethe' ? <GraduationCap size={28} /> : <Award size={28} />}
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                  <span className="text-sm font-medium text-slate-500 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
                    {edu.year}
                  </span>
                </div>
                <div className="text-lg text-teal-700 font-medium mb-1">{edu.institution}</div>
                <div className="text-sm text-slate-500 mb-4">{edu.location}</div>
                
                <ul className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-start">
                      <span className="mr-2 mt-1.5 w-1 h-1 bg-teal-400 rounded-full flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
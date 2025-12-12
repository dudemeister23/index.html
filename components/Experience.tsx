import React from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-teal-500 rounded-full"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-teal-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                  <span className="inline-flex items-center text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded mt-2 sm:mt-0">
                    <Calendar size={12} className="mr-1" />
                    {job.period}
                  </span>
                </div>
                
                <div className="flex items-center text-sm text-slate-500 mb-4">
                  <span className="font-semibold text-slate-700 mr-2">{job.company}</span>
                  <span>|</span>
                  <span className="flex items-center ml-2">
                    <MapPin size={12} className="mr-1" />
                    {job.location}
                  </span>
                </div>

                {job.description && (
                  <p className="text-sm text-slate-600 mb-4 italic border-l-2 border-teal-100 pl-3">
                    {job.description}
                  </p>
                )}

                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-slate-600 leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                      {achievement}
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

export default Experience;
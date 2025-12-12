import React from 'react';
import { PORTFOLIO_PLACEHOLDERS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-400 font-bold tracking-wider uppercase text-sm">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">Featured Programs</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of strategic CME initiatives and medical communication projects.
            <br />
            <span className="text-xs text-slate-500 uppercase tracking-widest mt-2 block">(Portfolio content currently being updated)</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PLACEHOLDERS.map((item) => (
            <div key={item.id} className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 shadow-xl border border-slate-700">
              <div className="relative h-48 overflow-hidden group">
                <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-slate-700">
                  <span className="text-teal-400 text-sm font-medium flex items-center cursor-pointer hover:text-teal-300">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
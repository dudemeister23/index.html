import React from 'react';
import { CONTACT_INFO } from '../constants';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-slate-50">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-semibold tracking-wide uppercase">
              Available for Freelance & Permanent Roles
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Medical Education Strategist <br className="hidden lg:block"/>
              <span className="text-teal-600">& Scientific Director</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              {CONTACT_INFO.summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/resume.pdf" // Placeholder link
                className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
              >
                <Download className="mr-2 h-5 w-5 text-teal-600" />
                Download CV
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
            <div className="absolute inset-0 bg-teal-600 rounded-full opacity-10 blur-xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://picsum.photos/800/800" 
              alt="Fabian Bresan, MD" 
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
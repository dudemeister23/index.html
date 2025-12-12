import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white">FABIAN BRESAN, MD</h2>
            <p className="text-slate-400 max-w-xs">
              Delivering commercially viable, scientifically rigorous educational programs through strategic leadership.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Contact Information</h3>
            <div className="space-y-3">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center hover:text-teal-400 transition-colors">
                <Mail size={18} className="mr-3 text-teal-500" />
                {CONTACT_INFO.email}
              </a>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`} className="flex items-center hover:text-teal-400 transition-colors">
                <Phone size={18} className="mr-3 text-teal-500" />
                {CONTACT_INFO.phone}
              </a>
              <div className="flex items-center">
                <MapPin size={18} className="mr-3 text-teal-500" />
                {CONTACT_INFO.location}
              </div>
            </div>
          </div>

          {/* Social / CTA */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <a 
              href={`https://${CONTACT_INFO.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-slate-300 hover:text-white transition-colors group"
            >
              <span className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors mr-3">
                <Linkedin size={20} />
              </span>
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Fabian Bresan, MD. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center text-sm font-medium text-teal-500 hover:text-teal-400 transition-colors"
          >
            Back to Top
            <ArrowUp size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
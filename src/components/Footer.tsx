
import React from 'react';
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-pakmobility-navy text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/ea886e63-97a0-48f1-be54-b308905bd273.png" 
                alt="Pak Mobility Logo" 
                className="h-10 w-auto" 
              />
            </div>
            <p className="text-white/80 max-w-md">
              Pak Mobility is leading the charge in Pakistan's EV revolution through innovative financing, insurance, and technology solutions tailored for businesses.
            </p>
            <div className="mt-6 flex gap-4">
              <a 
                href="https://www.linkedin.com/company/pakmobility" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Solutions', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li>Lahore, Pakistan</li>
              <li>+92 300 446 7041</li>
              <li>contact@rockvntrs.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pak Mobility. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className={cn(
              "p-3 rounded-full bg-pakmobility-blue/20 hover:bg-pakmobility-blue/30 transition-colors",
              "flex items-center justify-center"
            )}
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

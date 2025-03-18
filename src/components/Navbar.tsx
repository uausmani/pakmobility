
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out h-20",
        scrolled ? "glassmorphism border-b border-gray-100" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/ea886e63-97a0-48f1-be54-b308905bd273.png" 
            alt="Pak Mobility Logo" 
            className="h-10 w-auto animate-fade-in" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-pakmobility-navy font-medium hover:text-pakmobility-blue transition-all-ease",
                "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0",
                "after:bg-pakmobility-blue after:transition-all after:duration-300",
                "hover:after:w-full",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:block animate-fade-in" style={{ animationDelay: "500ms" }}>
          <a 
            href="#contact" 
            className={cn(
              "px-5 py-2.5 rounded-md bg-pakmobility-blue text-white",
              "hover:shadow-btn transition-all-ease"
            )}
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-pakmobility-navy transition-all-ease"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-20 px-6 transition-all duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-6 pt-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-pakmobility-navy hover:text-pakmobility-blue transition-all-ease"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mt-4 px-5 py-2.5 rounded-md bg-pakmobility-blue text-white text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

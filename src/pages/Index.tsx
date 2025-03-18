
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize scroll reveal animations
    const initScrollReveal = () => {
      const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      };

      const observer = new IntersectionObserver(callback, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      });

      const elements = document.querySelectorAll('.section-scroll-reveal > *');
      elements.forEach(el => observer.observe(el));

      return observer;
    };

    const observer = initScrollReveal();
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

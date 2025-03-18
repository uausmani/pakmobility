
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen w-full relative flex flex-col justify-center pt-20 bg-gradient-radial from-pakmobility-light to-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-pattern z-0"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pakmobility-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pakmobility-blue/10 rounded-full blur-3xl"></div>
      
      <div 
        ref={heroRef}
        className="section-container flex flex-col items-center justify-center relative z-10 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="mb-6 animate-scale-up">
          <img 
            src="/lovable-uploads/51dfa9fa-a996-4d09-9178-388eeb0438c4.png" 
            alt="Pak Mobility Logo" 
            className="h-16 md:h-20 w-auto logo-no-bg"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-6 animate-fade-up text-pakmobility-navy">
          <span className="text-pakmobility-blue">Enabling</span> Electric Vehicle <br />
          Ecosystem in Pakistan
        </h1>
        
        <div className="flex justify-center my-8">
          <img 
            src="/lovable-uploads/9ec75535-8772-4661-98b0-be1297622d2d.png" 
            alt="Zero Emission" 
            className="h-20 md:h-24 w-auto animate-fade-up" 
            style={{ animationDelay: "150ms" }}
          />
        </div>
        
        <p className="text-pakmobility-gray text-lg md:text-xl text-center max-w-3xl mb-10 animate-fade-up" style={{ animationDelay: "200ms" }}>
          Providing innovative financing, insurance, and technology solutions for the electric vehicle industry, empowering businesses across Pakistan.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
          <a 
            href="#services" 
            className={cn(
              "px-6 py-3 rounded-lg bg-pakmobility-blue text-white font-medium",
              "hover:shadow-btn transform hover:-translate-y-1 transition-all duration-300"
            )}
          >
            Explore Our Services
          </a>
          <a 
            href="#contact" 
            className={cn(
              "px-6 py-3 rounded-lg border border-pakmobility-blue text-pakmobility-blue font-medium",
              "hover:bg-pakmobility-blue/5 transform hover:-translate-y-1 transition-all duration-300",
              "flex items-center justify-center gap-2"
            )}
          >
            Get in Touch <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-pakmobility-blue"
            >
              <path 
                d="M12 5L12 19M12 19L19 12M12 19L5 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

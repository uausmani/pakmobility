
import React, { useEffect, useRef } from 'react';
import { Shield, Zap, TrendingUp, Users } from "lucide-react";
import evAboutImage from "@/assets/ev-about.jpg";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.reveal-item');
    elements?.forEach(el => observer.observe(el));
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      icon: <Zap size={24} className="text-pakmobility-green" />,
      title: "Innovative Solutions",
      description: "Pioneering customized financing and technology solutions for Pakistan's growing EV industry."
    },
    {
      icon: <Shield size={24} className="text-pakmobility-green" />,
      title: "Comprehensive Protection",
      description: "Specialized insurance coverage designed specifically for electric vehicles and related infrastructure."
    },
    {
      icon: <TrendingUp size={24} className="text-pakmobility-green" />,
      title: "Growth-Focused",
      description: "Supporting business expansion with flexible financing options and industry expertise."
    },
    {
      icon: <Users size={24} className="text-pakmobility-green" />,
      title: "Partnership Approach",
      description: "Building strong B2B relationships to drive Pakistan's sustainable transportation future."
    }
  ];

  return (
    <section id="about" className="relative py-20 md:py-28 bg-white">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-pakmobility-light to-white"></div>
      
      <div ref={sectionRef} className="section-container section-scroll-reveal">
        <div className="reveal-item delay-[100ms]">
          <h2 className="section-title">About Pak Mobility</h2>
          <p className="section-subtitle">
            Pak Mobility is at the forefront of Pakistan's electric vehicle revolution, offering innovative B2B solutions to accelerate the adoption of sustainable transportation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="reveal-item bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-elevation hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 bg-pakmobility-green/10 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-pakmobility-navy">{feature.title}</h3>
              <p className="text-pakmobility-gray">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal-item delay-[500ms]">
            <h3 className="text-2xl md:text-3xl font-bold text-pakmobility-navy mb-4">
              Driving Pakistan's Electric Future
            </h3>
            <p className="text-pakmobility-gray mb-6">
              Pak Mobility is addressing critical challenges in Pakistan's EV ecosystem through strategic partnerships and innovative business solutions. We combine deep industry expertise with cutting-edge financial models to make electric mobility accessible and profitable.
            </p>
            <p className="text-pakmobility-gray">
              Our focus on the B2B sector allows us to create scalable solutions that empower fleet operators, dealers, and manufacturers in the 2-wheeler and 3-wheeler EV market, while also exploring broader market opportunities.
            </p>
            
            <div className="mt-6 flex items-center">
              <img 
                src="/lovable-uploads/707f413b-b773-4cae-b84b-ade4b910542e.png" 
                alt="Zero Emission" 
                className="h-16 w-auto mr-4" 
              />
              <p className="text-pakmobility-green font-medium">
                Supporting Pakistan's transition to zero-emission mobility
              </p>
            </div>
          </div>
          
          <div className="reveal-item delay-[600ms] relative">
            <div className="aspect-video bg-gradient-to-r from-pakmobility-blue/10 to-pakmobility-blue/5 rounded-xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                 <img 
                   src={evAboutImage}
                   alt="Electric vehicle" 
                   className="object-cover w-full h-full rounded-xl"
                   loading="lazy"
                   width={1000}
                   height={562}
                 />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pakmobility-navy/40 to-transparent"></div>
              <div className="relative z-10 text-white text-center p-6">
                <p className="text-xl font-semibold">Sustainable Transportation Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

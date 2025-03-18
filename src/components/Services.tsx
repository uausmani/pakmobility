
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { CreditCard, Shield, BarChart3, Lightbulb } from "lucide-react";

const Services = () => {
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

  const services = [
    {
      icon: <CreditCard className="h-10 w-10 text-pakmobility-blue" />,
      title: "EV Financing Solutions",
      description: "Flexible financing options for 2 and 3-wheeler electric vehicles with easy monthly installments tailored for businesses.",
      features: [
        "Customized payment plans",
        "Competitive interest rates",
        "Streamlined approval process",
        "Fleet financing packages"
      ]
    },
    {
      icon: <Shield className="h-10 w-10 text-pakmobility-blue" />,
      title: "EV Insurance Coverage",
      description: "Specialized insurance solutions designed specifically for electric vehicles, providing comprehensive protection.",
      features: [
        "Battery coverage",
        "Charging infrastructure protection",
        "Commercial fleet policies",
        "Risk management services"
      ]
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-pakmobility-blue" />,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize fleet operations and maximize the return on your EV investments.",
      features: [
        "Performance tracking",
        "Cost analysis tools",
        "Efficiency reports",
        "Customizable dashboards"
      ]
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-pakmobility-blue" />,
      title: "Innovation Lab",
      description: "Exploring cutting-edge solutions for Pakistan's evolving EV ecosystem to keep your business ahead of the curve.",
      features: [
        "Battery technology research",
        "Charging infrastructure solutions",
        "Renewable energy integration",
        "Smart mobility concepts"
      ]
    }
  ];

  return (
    <section id="services" className="bg-pakmobility-light py-20 md:py-28">
      <div ref={sectionRef} className="section-container section-scroll-reveal">
        <div className="reveal-item delay-[100ms]">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions designed to accelerate adoption and growth in Pakistan's electric vehicle market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={cn(
                "reveal-item p-8 rounded-xl transition-all duration-500 hover:shadow-elevation",
                "bg-white border border-gray-100 hover:-translate-y-1"
              )}
              style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="p-3 bg-pakmobility-blue/10 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-pakmobility-navy">{service.title}</h3>
                  <p className="text-pakmobility-gray mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-pakmobility-blue"></div>
                        <span className="text-sm text-pakmobility-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="reveal-item mt-16 p-8 rounded-xl bg-gradient-to-r from-pakmobility-navy to-pakmobility-navy/90 text-white shadow-xl delay-[500ms]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Ready to electrify your business?</h3>
              <p className="text-white/80">
                Our team of experts is ready to help you find the perfect EV solution.
              </p>
            </div>
            <a 
              href="#contact" 
              className={cn(
                "whitespace-nowrap px-8 py-3 bg-white text-pakmobility-navy rounded-lg font-medium",
                "hover:bg-pakmobility-blue hover:text-white transition-all duration-300"
              )}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

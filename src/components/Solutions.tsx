
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { Truck, Building, ShoppingBag, Factory } from "lucide-react";

const Solutions = () => {
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

  const solutions = [
    {
      icon: <Truck className="h-10 w-10 text-white" />,
      title: "Fleet Operations",
      description: "Complete financing and insurance packages for businesses looking to electrify their delivery and logistics fleets.",
      bgClass: "bg-pakmobility-blue",
    },
    {
      icon: <Building className="h-10 w-10 text-pakmobility-navy" />,
      title: "Corporate Mobility",
      description: "Sustainable transportation solutions for companies looking to reduce their carbon footprint and operational costs.",
      bgClass: "bg-white border border-gray-200",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-white" />,
      title: "Retail Networks",
      description: "Partnership opportunities for dealerships and retail outlets to offer EV financing and insurance to customers.",
      bgClass: "bg-pakmobility-navy",
    },
    {
      icon: <Factory className="h-10 w-10 text-pakmobility-navy" />,
      title: "Manufacturers",
      description: "Strategic alliances with EV manufacturers to create integrated financing solutions at the point of production.",
      bgClass: "bg-white border border-gray-200",
    },
  ];

  const caseStudies = [
    {
      title: "Last-Mile Delivery Fleet",
      challenge: "A logistics company needed to electrify their delivery fleet while managing cash flow.",
      solution: "Tailored financing with flexible repayment terms based on delivery volume and seasonal patterns.",
      result: "30% reduction in operational costs and expanded delivery capacity."
    },
    {
      title: "E-Rickshaw Network",
      challenge: "Individual operators unable to afford the upfront cost of electric rickshaws.",
      solution: "Micro-financing program with daily repayment options and comprehensive insurance.",
      result: "Created sustainable livelihoods for 200+ drivers with improved income stability."
    }
  ];

  return (
    <section id="solutions" className="bg-white py-20 md:py-28">
      <div ref={sectionRef} className="section-container section-scroll-reveal">
        <div className="reveal-item">
          <h2 className="section-title">Tailored B2B Solutions</h2>
          <p className="section-subtitle">
            Customized electric mobility packages designed for different business sectors and operational needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
          {solutions.map((solution, idx) => (
            <div 
              key={idx}
              className={cn(
                "reveal-item p-6 rounded-xl transition-all duration-300 hover:shadow-lg",
                solution.bgClass,
                solution.bgClass.includes("bg-white") ? "text-pakmobility-navy" : "text-white",
                "hover:-translate-y-1"
              )}
              style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className={cn(
                "p-3 rounded-lg inline-flex mb-4",
                solution.bgClass.includes("bg-white") ? "bg-pakmobility-blue/10" : "bg-white/10"
              )}>
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className={solution.bgClass.includes("bg-white") ? "text-pakmobility-gray" : "text-white/80"}>
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="reveal-item delay-[500ms]">
            <h3 className="text-2xl md:text-3xl font-bold text-pakmobility-navy text-center mb-4">
              Success Stories
            </h3>
            <p className="text-pakmobility-gray text-center max-w-3xl mx-auto mb-12">
              See how our solutions have transformed businesses across Pakistan's electric mobility landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <div 
                key={idx}
                className="reveal-item bg-pakmobility-light rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-elevation transition-all duration-300"
                style={{ transitionDelay: `${(idx + 5) * 100}ms` }}
              >
                <div className="bg-pakmobility-blue/10 p-6 border-b border-gray-200">
                  <h4 className="text-xl font-semibold text-pakmobility-navy">{study.title}</h4>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm font-medium text-pakmobility-gray mb-1">Challenge:</p>
                    <p className="text-pakmobility-navy">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-pakmobility-gray mb-1">Solution:</p>
                    <p className="text-pakmobility-navy">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-pakmobility-gray mb-1">Result:</p>
                    <p className="text-pakmobility-blue font-medium">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;


import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    _gotcha: ''
  });
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xvzdgzoa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-pakmobility-blue" />,
      label: "Phone",
      value: "+92 300 446 7041"
    },
    {
      icon: <Mail className="h-5 w-5 text-pakmobility-blue" />,
      label: "Email",
      value: "contact@rockvntrs.com"
    },
    {
      icon: <MapPin className="h-5 w-5 text-pakmobility-blue" />,
      label: "Address",
      value: "Lahore, Pakistan"
    }
  ];

  return (
    <section id="contact" className="bg-pakmobility-light py-20 md:py-28">
      <div ref={sectionRef} className="section-container section-scroll-reveal">
        <div className="reveal-item">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Ready to transform your business with innovative EV solutions? Our team is here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="reveal-item delay-[200ms] order-2 md:order-1">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-pakmobility-navy mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="p-2 bg-pakmobility-blue/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-pakmobility-gray">{info.label}</p>
                      <p className="text-pakmobility-navy font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <h4 className="text-lg font-medium text-pakmobility-navy mb-4">Connect With Us</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/company/pakmobility" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-[#0A66C2] text-white rounded-lg hover:opacity-90 transition-opacity"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal-item delay-[300ms] order-1 md:order-2">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-2xl font-semibold text-pakmobility-navy mb-6">Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-pakmobility-navy">Thank You!</h4>
                  <p className="text-pakmobility-gray max-w-md">
                    Your message has been sent successfully. Our team will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="_gotcha"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-pakmobility-gray mb-1">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border border-gray-200",
                          "focus:outline-none focus:ring-2 focus:ring-pakmobility-blue/20 focus:border-pakmobility-blue",
                          "transition-all duration-200"
                        )}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-pakmobility-gray mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border border-gray-200",
                          "focus:outline-none focus:ring-2 focus:ring-pakmobility-blue/20 focus:border-pakmobility-blue",
                          "transition-all duration-200"
                        )}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-pakmobility-gray mb-1">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border border-gray-200",
                        "focus:outline-none focus:ring-2 focus:ring-pakmobility-blue/20 focus:border-pakmobility-blue",
                        "transition-all duration-200"
                      )}
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-pakmobility-gray mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border border-gray-200",
                        "focus:outline-none focus:ring-2 focus:ring-pakmobility-blue/20 focus:border-pakmobility-blue",
                        "transition-all duration-200"
                      )}
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className={cn(
                      "w-full py-3 px-4 bg-pakmobility-blue text-white rounded-lg font-medium",
                      "flex items-center justify-center gap-2",
                      "hover:shadow-btn transition-all duration-300 transform hover:-translate-y-1"
                    )}
                  >
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

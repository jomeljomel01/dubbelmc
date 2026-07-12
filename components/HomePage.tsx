'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { VisionMissionSection, OurGoalsSection, OurValuesSection } from '@/components/sections';
import { ContactView } from '@/components/contact-view';

type ViewType = 'home' | 'contact';

const NAV_ITEMS: { view: ViewType; label: string }[] = [
  { view: 'home', label: 'Home' },
  { view: 'contact', label: 'Contact Us' },
];

// --- ULTRA-SMOOTH SCROLL ANIMATION WRAPPER ---
const FadeInOnScroll = ({ 
  children, 
  delay = 0,
  direction = 'up' // 'up' means it slides up from below
}: { 
  children: React.ReactNode; 
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Animates only once when scrolling down
          }
        });
      },
      { 
        rootMargin: '0px 0px -100px 0px', // Waits until the element is a bit further into the screen
        threshold: 0.1 
      } 
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Determine starting position based on direction
  const getTransform = () => {
    if (direction === 'left') return 'translate-x-16';
    if (direction === 'right') return '-translate-x-16';
    return 'translate-y-16'; // default 'up'
  };

  return (
    <div
      ref={domRef}
      style={{ 
        transitionDelay: `${delay}ms`,
        // Custom easing curve for that fluid, premium glide
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' 
      }}
      className={`transition-all duration-[1200ms] ${
        isVisible 
          ? 'opacity-100 translate-y-0 translate-x-0 blur-none' 
          : `opacity-0 blur-[4px] ${getTransform()}`
      }`}
    >
      {children}
    </div>
  );
};

export default function HomePage() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = useCallback((view: ViewType) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentView]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white text-zinc-800 antialiased font-sans overflow-x-hidden">
      {/* --- NAVBAR --- */}
      <header className="w-full bg-white border-b border-zinc-100 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          
          <button 
            onClick={() => navigateTo('home')} 
            className="flex items-center space-x-3 focus:outline-hidden text-left group"
          >
            <Image
              src="/dmclogo.jpg"
              alt="DMC Logo"
              width={32}
              height={32}
              className="h-8 w-auto transform transition-transform group-hover:scale-105"
              priority
            />
            <span className="font-serif font-bold text-lg text-zinc-900 tracking-tight transition-colors group-hover:text-[#1a4636]">
              Dubbel Medical Corporation
            </span>
          </button>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {NAV_ITEMS.map(({ view, label }) => (
              <button
                key={view}
                onClick={() => navigateTo(view)}
                className={`relative transition-colors ${
                  currentView === view ? 'text-[#1a4636] font-bold' : 'text-zinc-600 hover:text-zinc-900'
                } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#1a4636] after:transition-transform after:duration-300 ${
                  currentView === view ? 'after:scale-x-100' : 'after:scale-x-0'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              className="p-2 text-zinc-500 hover:text-zinc-900 focus:outline-hidden"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-100 bg-white px-4 py-3 space-y-2 shadow-md animate-in slide-in-from-top-4 duration-300">
            {NAV_ITEMS.map(({ view, label }) => (
              <button
                key={view}
                onClick={() => navigateTo(view)}
                className={`block w-full text-left py-2 text-base transition-colors ${
                  currentView === view ? 'text-[#1a4636] font-bold' : 'text-zinc-600 hover:text-[#1a4636]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* --- MAIN CONTENT --- */}
      <main>
        {currentView === 'home' && (
          <>
            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[580px] md:min-h-[640px] flex items-center overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transform scale-105 animate-out"
                style={{ backgroundImage: `url('/hero-medical.jpg')` }}
              />
              <div className="absolute inset-0 bg-emerald-50/80 backdrop-blur-[2px]" />

              <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 z-10">
                <div className="max-w-2xl">
                  <FadeInOnScroll direction="left">
                    <h1 className="text-4xl font-serif font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl leading-[1.15]">
                      Advanced Medical &<br />Surgical Devices
                    </h1>
                  </FadeInOnScroll>
                  
                  <FadeInOnScroll delay={200} direction="left">
                    <p className="mt-6 text-sm sm:text-base text-zinc-700 max-w-xl font-normal leading-relaxed">
                      DUBBEL MEDICAL CORPORATION (DMC) is a duly registered corporation in the Philippines, committed to be the country&apos;s most trusted supplier of advanced medical and surgical devices.
                    </p>
                  </FadeInOnScroll>
                  
                  <FadeInOnScroll delay={400} direction="left">
                    <div className="mt-8 flex flex-wrap gap-4">
                      <button 
                        onClick={() => navigateTo('contact')} 
                        className="rounded-lg border-2 border-[#1a4636] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#1a4636] bg-transparent hover:bg-[#1a4636] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        Contact Us
                      </button>
                    </div>
                  </FadeInOnScroll>
                </div>
              </div>
            </section>

            {/* --- ABOUT SECTION --- */}
            <section className="bg-white py-20 md:py-24 overflow-hidden">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <FadeInOnScroll>
                  <h2 className="text-3xl font-serif font-bold text-zinc-950 sm:text-4xl tracking-tight relative inline-block">
                    About Dubbel Medical Corporation
                    <span className="absolute -bottom-4 left-1/2 w-12 h-1 bg-[#1a4636] -translate-x-1/2 rounded-full"></span>
                  </h2>
                </FadeInOnScroll>
                
                <FadeInOnScroll delay={200}>
                  <p className="mt-12 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-3xl mx-auto font-normal">
                    A duly registered corporation in the Philippines, Securities and Exchange Commission with Business Permit License issued by Quezon City. DMC is committed to continuously upgrading the standard of its people to be imparted to all its partners in the fields of healthcare profession.
                  </p>
                </FadeInOnScroll>
              </div>
            </section>

            {/* --- INTERACTIVE SCROLL SECTIONS --- */}
            <div className="space-y-4 bg-zinc-50/50 py-12 overflow-hidden">
              <FadeInOnScroll direction="up">
                <VisionMissionSection />
              </FadeInOnScroll>
              
              <FadeInOnScroll delay={150} direction="up">
                <OurGoalsSection />
              </FadeInOnScroll>
              
              <FadeInOnScroll delay={150} direction="up">
                <OurValuesSection />
              </FadeInOnScroll>
            </div>
          </>
        )}

        {/* --- ROUTED VIEWS --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {currentView === 'contact' && (
            <FadeInOnScroll direction="up">
              <ContactView />
            </FadeInOnScroll>
          )}
        </div>

      </main>
    </div>
  );
}
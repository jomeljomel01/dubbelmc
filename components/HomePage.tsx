'use client';

import React, { useState } from 'react';
import { VisionMissionSection, OurGoalsSection, OurValuesSection } from '@/components/sections';
import ContactView from '@/components/contact-view';
import DivisionsView from '@/components/divisions-view';

export default function HomePage() {
  const [currentView, setCurrentView] = useState<'home' | 'divisions' | 'contact'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (view: 'home' | 'divisions' | 'contact') => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 antialiased font-sans">
      {/* --- NAVBAR --- */}
      <header className="w-full bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo Brand */}
          <button 
            onClick={() => navigateTo('home')} 
            className="flex items-center space-x-3 focus:outline-hidden text-left"
          >
            <div className="bg-[#1a4636] text-white font-bold px-2 py-1 rounded-sm text-xs tracking-wider">
              DMC
            </div>
            <span className="font-serif font-bold text-lg text-zinc-900 tracking-tight">
              Dubbel Medical Corporation
            </span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <button 
              onClick={() => navigateTo('home')} 
              className={`transition-colors ${currentView === 'home' ? 'text-[#1a4636] font-bold' : 'text-zinc-600 hover:text-zinc-900'}`}
            >
              Home
            </button>
            <button 
              onClick={() => navigateTo('divisions')} 
              className={`transition-colors ${currentView === 'divisions' ? 'text-[#1a4636] font-bold' : 'text-zinc-600 hover:text-zinc-900'}`}
            >
              Divisions
            </button>
            <button 
              onClick={() => navigateTo('contact')} 
              className={`transition-colors ${currentView === 'contact' ? 'text-[#1a4636] font-bold' : 'text-zinc-600 hover:text-zinc-900'}`}
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

        {/* Mobile Dropdown Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-100 bg-white px-4 py-3 space-y-2 shadow-md">
            <button
              onClick={() => navigateTo('home')}
              className={`block w-full text-left py-2 text-base ${currentView === 'home' ? 'text-[#1a4636] font-bold' : 'text-zinc-600'}`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('divisions')}
              className={`block w-full text-left py-2 text-base ${currentView === 'divisions' ? 'text-[#1a4636] font-bold' : 'text-zinc-600'}`}
            >
              Divisions
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`block w-full text-left py-2 text-base ${currentView === 'contact' ? 'text-[#1a4636] font-bold' : 'text-zinc-600'}`}
            >
              Contact Us
            </button>
          </div>
        )}
      </header>

      {/* --- MAIN CONTENT --- */}
      <main>
        {currentView === 'home' && (
          <>
            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[580px] md:min-h-[640px] flex items-center overflow-hidden">
              {/* Surgical Room Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-80"
                style={{ backgroundImage: `url('/hero-medical.jpg')` }}
              />
              
              {/* Green Tint Overlay to match the design tone */}
              <div className="absolute inset-0 bg-[#1a4636]/60 mix-blend-color" />

              <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 z-10">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.15]">
                    Advanced Medical &<br />Surgical Devices
                  </h1>
                  <p className="mt-6 text-sm sm:text-base text-zinc-100/90 max-w-xl font-normal leading-relaxed">
                    DUBBEL MEDICAL CORPORATION (DMC) is a duly registered corporation in the Philippines, committed to be the country&apos;s most trusted supplier of advanced medical and surgical devices.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button 
                      onClick={() => navigateTo('divisions')} 
                      className="rounded-lg bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#1a4636] shadow-sm hover:bg-zinc-100 transition-colors cursor-pointer"
                    >
                      Explore Our Divisions
                    </button>
                    <button 
                      onClick={() => navigateTo('contact')} 
                      className="rounded-lg border-2 border-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-transparent hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* --- ABOUT SECTION --- */}
            <section className="bg-white py-20 md:py-24">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-serif font-bold text-zinc-950 sm:text-4xl tracking-tight">
                  About Dubbel Medical Corporation
                </h2>
                
                <p className="mt-8 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-3xl mx-auto font-normal">
                  A duly registered corporation in the Philippines, Securities and Exchange Commission with Business Permit License issued by Quezon City. DMC is committed to continuously upgrading the standard of its people to be imparted to all its partners in the fields of healthcare profession.
                </p>
              </div>
            </section>

            {/* --- INTERACTIVE SCROLL SECTIONS --- */}
            <div className="space-y-4 bg-zinc-50/50 py-4">
              <VisionMissionSection />
              <OurGoalsSection />
              <OurValuesSection onViewDivisions={() => navigateTo('divisions')} />
            </div>
          </>
        )}

        {/* --- ROUTED VIEWS --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {currentView === 'divisions' && <DivisionsView />}
          {currentView === 'contact' && <ContactView />}
        </div>
      </main>
    </div>
  );
}
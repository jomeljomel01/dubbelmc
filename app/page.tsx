'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { VisionMissionSection, OurGoalsSection, OurValuesSection } from '@/components/sections';
import { ContactView } from '@/components/contact-view';

export default function HomePage() {
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'contact'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Smoothly trigger modal entrance animation
  useEffect(() => {
    if (currentView === 'products') {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [currentView]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-[#114227] selection:text-white">
      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
          <button type="button" onClick={() => setCurrentView('home')} className="flex items-center space-x-3 focus:outline-hidden group">
            <div className="bg-[#114227] text-white font-bold px-2.5 py-1.5 rounded-md text-sm tracking-wider shadow-md group-hover:bg-emerald-700 group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all duration-300">
              DMC
            </div>
            <span className="font-serif font-bold text-lg tracking-tight text-zinc-900 group-hover:text-[#114227] transition-colors duration-300">
              Dubbel Medical Corporation
            </span>
          </button>
          
          <nav className="flex items-center space-x-8 text-sm font-medium">
            <button type="button"
              onClick={() => setCurrentView('home')} 
              className={`transition-all duration-300 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#114227] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${currentView === 'home' ? 'text-[#114227] font-semibold after:scale-x-100 after:origin-bottom-left' : 'text-zinc-600 hover:text-zinc-900'}`}
            >
              Home
            </button>

            <button type="button"
              onClick={() => setCurrentView('products')} 
              className={`transition-all duration-300 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#114227] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${currentView === 'products' ? 'text-[#114227] font-semibold after:scale-x-100 after:origin-bottom-left' : 'text-zinc-600 hover:text-zinc-900'}`}
            >
              Divisions
            </button>

            <button type="button"
              onClick={() => setCurrentView('contact')} 
              className={`transition-all duration-300 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#114227] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${currentView === 'contact' ? 'text-[#114227] font-semibold after:scale-x-100 after:origin-bottom-left' : 'text-zinc-600 hover:text-zinc-900'}`}
            >
              Contact Us
            </button>
          </nav>
        </div>
      </header>

      {/* CORE VIEWPORT COMPOSER */}
      <main className="transition-all duration-500 relative">
        
        {/* Render Home components for both 'home' and 'products' so the modal overlays it smoothly */}
        {(currentView === 'home' || currentView === 'products') && (
          <div className={`transition-opacity duration-500 ${isModalOpen ? 'opacity-40 blur-[2px]' : 'opacity-100 blur-0'}`}>
            {/* HERO SECTION */}
            <section className="relative min-h-[520px] flex items-center bg-emerald-900 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
                style={{ backgroundImage: `url('/hero-medical.jpg')` }}
              />
              <div className="absolute inset-0 bg-emerald-900/60" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#114227]/80 via-emerald-900/70 to-teal-800/60 mix-blend-multiply" />

              <div className="relative max-w-7xl mx-auto w-full px-6 py-20 z-10">
                <div className="max-w-3xl transform transition-all duration-700 translate-y-0 opacity-100">
                  <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.15] drop-shadow-lg">
                    Advanced Medical &<br />Surgical Devices
                  </h1>
                  <p className="mt-6 text-lg text-zinc-100 max-w-2xl font-light leading-relaxed drop-shadow-md">
                    DUBBEL MEDICAL CORPORATION (DMC) is a duly registered corporation in the Philippines, committed to be the country&apos;s most trusted supplier of advanced medical and surgical devices.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <button 
                      type="button" 
                      onClick={() => setCurrentView('contact')} 
                      className="rounded-full border-2 border-white/90 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-[#114227] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="bg-white py-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white -z-10" />
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-serif font-bold text-zinc-900 tracking-wide">About Dubbel Medical Corporation</h2>
                <div className="w-16 h-1.5 bg-[#114227] mx-auto mt-6 rounded-full opacity-80" />
                <p className="mt-8 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-3xl mx-auto font-light">
                  A duly registered corporation in the Philippines, Securities and Exchange Commission with Business Permit License issued by Quezon City. DMC is committed to continuously upgrading the standard of its people to be imparted to all its partners in the fields of health care profession.
                </p>
              </div>
            </section>

            {/* INTERACTIVE SCROLL SECTIONS */}
            <VisionMissionSection />
            <OurGoalsSection />
            <OurValuesSection />
          </div>
        )}

        {/* CONTACT VIEW */}
        {currentView === 'contact' && <ContactView />}

        {/* PRODUCTS / DIVISIONS MODAL OVERLAY */}
        {currentView === 'products' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/50 backdrop-blur-md p-4 pt-20 transition-all duration-300">
            <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] w-full max-w-[800px] p-10 relative border border-zinc-100 transform transition-all duration-500 scale-100 opacity-100 translate-y-0">
              
              {/* Close Button */}
              <button 
                onClick={() => setCurrentView('home')}
                className="absolute top-6 right-6 text-zinc-400 hover:text-red-500 hover:rotate-90 hover:bg-red-50 p-2 rounded-full transition-all duration-300"
                aria-label="Close"
              >
                <svg className="w-7 h-7 font-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-4xl font-serif font-bold text-center text-zinc-900 mb-12 mt-2 tracking-tight">
                Choose Division
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 max-w-3xl mx-auto">
                {/* Left Column */}
                <div className="flex flex-col gap-5">
                  {/* Elliquence Logo */}
                  <div className="relative w-full h-[72px] rounded-full overflow-hidden border border-zinc-200 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 group">
                    <Image src="/download (6).jpg" alt="Elliquence" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  {/* Nouvag Logo */}
                  <div className="relative w-full h-[72px] rounded-full overflow-hidden border border-zinc-200 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-[#1a1b41]/10 hover:-translate-y-1 hover:border-[#1a1b41]/30 transition-all duration-300 group">
                    <Image src="/download (5).jpg" alt="Nouvag" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  {/* 99 Logo */}
                  <div className="relative w-full h-[72px] rounded-full overflow-hidden border border-zinc-200 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1 hover:border-teal-200 transition-all duration-300 group">
                    <Image src="/download (7).jpg" alt="99" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  {/* Empty Pillars - Left */}
                  <div className="w-full h-[72px] rounded-full bg-gradient-to-r from-[#1c0d0d] to-zinc-800 cursor-pointer shadow-md hover:shadow-xl hover:shadow-zinc-900/20 hover:-translate-y-1 hover:from-black hover:to-zinc-900 transition-all duration-300"></div>
                  <div className="w-full h-[72px] rounded-full bg-gradient-to-r from-[#1c0d0d] to-zinc-800 cursor-pointer shadow-md hover:shadow-xl hover:shadow-zinc-900/20 hover:-translate-y-1 hover:from-black hover:to-zinc-900 transition-all duration-300"></div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-5">
                  {/* Empty Pillars - Right */}
                  <div className="w-full h-[72px] rounded-full bg-gradient-to-r from-[#1c0d0d] to-zinc-800 cursor-pointer shadow-md hover:shadow-xl hover:shadow-zinc-900/20 hover:-translate-y-1 hover:from-black hover:to-zinc-900 transition-all duration-300"></div>
                  <div className="w-full h-[72px] rounded-full bg-gradient-to-r from-[#1c0d0d] to-zinc-800 cursor-pointer shadow-md hover:shadow-xl hover:shadow-zinc-900/20 hover:-translate-y-1 hover:from-black hover:to-zinc-900 transition-all duration-300"></div>
                  <div className="w-full h-[72px] rounded-full bg-gradient-to-r from-[#1c0d0d] to-zinc-800 cursor-pointer shadow-md hover:shadow-xl hover:shadow-zinc-900/20 hover:-translate-y-1 hover:from-black hover:to-zinc-900 transition-all duration-300"></div>
                  <div className="w-full h-[72px] rounded-full bg-gradient-to-r from-[#1c0d0d] to-zinc-800 cursor-pointer shadow-md hover:shadow-xl hover:shadow-zinc-900/20 hover:-translate-y-1 hover:from-black hover:to-zinc-900 transition-all duration-300"></div>
                  <div className="w-full h-[72px] rounded-full bg-gradient-to-r from-[#1c0d0d] to-zinc-800 cursor-pointer shadow-md hover:shadow-xl hover:shadow-zinc-900/20 hover:-translate-y-1 hover:from-black hover:to-zinc-900 transition-all duration-300"></div>
                </div>
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
}
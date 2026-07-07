'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { VisionMissionSection, OurGoalsSection, OurValuesSection } from '@/components/sections';
import { ContactView } from '@/components/contact-view';






export default function HomePage() {
  const [currentView, setCurrentView] = useState<'home' | 'contact'>('home');


  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-zinc-100">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
          <button type="button" onClick={() => setCurrentView('home')} className="flex items-center space-x-2 focus:outline-hidden group">
            <div className="bg-[#114227] text-white font-bold px-2 py-1 rounded text-sm tracking-wider group-hover:bg-emerald-800 transition-colors">
              DMC
            </div>
            <span className="font-serif font-bold text-lg tracking-tight text-zinc-900">
              Dubbel Medical Corporation
            </span>
          </button>
          
          
          <nav className="flex items-center space-x-8 text-sm font-medium">
            <button type="button"
              onClick={() => setCurrentView('home')} 

              className={`transition-colors py-1 ${currentView === 'home' ? 'text-[#114227] font-semibold border-b-2 border-[#114227]' : 'text-zinc-600 hover:text-zinc-900'}`}
            >
              Home
            </button>

            <button type="button"
              onClick={() => setCurrentView('contact')} 

              className={`transition-colors py-1 ${currentView === 'contact' ? 'text-[#114227] font-semibold border-b-2 border-[#114227]' : 'text-zinc-600 hover:text-zinc-900'}`}
            >
              Contact Us
            </button>
          </nav>
        </div>
      </header>

      {/* CORE VIEWPORT COMPOSER */}
      <main className="transition-all duration-300">
        {currentView === 'home' && (
          <>
            {/* HERO HERO SECTION */}
            <section className="relative min-h-[520px] flex items-center bg-emerald-900 overflow-hidden">
              {/* Green-tinted background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/hero-medical.jpg')` }}
              />
              {/* Green overlay for consistent green look */}
              <div className="absolute inset-0 bg-emerald-900/50" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#114227]/70 via-emerald-900/70 to-teal-800/60 mix-blend-multiply" />


              <div className="relative max-w-7xl mx-auto w-full px-6 py-20 z-10">
                <div className="max-w-3xl">
                  <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.15]">
                    Advanced Medical &<br />Surgical Devices
                  </h1>
                  <p className="mt-6 text-lg text-zinc-100 max-w-2xl font-light leading-relaxed">
DUBBEL MEDICAL CORPORATION (DMC) is a duly registered corporation in the Philippines, committed to be the country&apos;s most trusted supplier of advanced medical and surgical devices.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">

                    <button type="button" onClick={() => setCurrentView('contact')} className="rounded-md border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="bg-white py-16 text-center">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-serif font-bold text-zinc-900">About Dubbel Medical Corporation</h2>
                <div className="w-12 h-1 bg-[#114227] mx-auto mt-4 rounded-full" />
                <p className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-3xl mx-auto">
                  A duly registered corporation in the Philippines, Securities and Exchange Commission with Business Permit License issued by Quezon City. DMC is committed to continuously upgrading the standard of its people to be imparted to all its partners in the fields of health care profession.
                </p>
              </div>
            </section>

            {/* INTERACTIVE SCROLL SECTIONS */}
            <VisionMissionSection />
            <OurGoalsSection />
            <OurValuesSection />

          </>
        )}


        {currentView === 'contact' && <ContactView />}

      </main>
    </div>
  );
}
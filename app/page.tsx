'use client';

import React, { useState, useEffect } from 'react';
import { VisionMissionSection, OurGoalsSection, OurValuesSection } from '@/components/sections';
import { ContactView } from '@/components/contact-view';
import HyperDRYMistPage from '@/components/product/99tech';

export default function HomePage() {
  // Use a descriptive state name
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'contact' | 'hyperdrymist'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(currentView === 'products');
  }, [currentView]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-[#114227] selection:text-white">
      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
          <button type="button" onClick={() => setCurrentView('home')} className="flex items-center space-x-3 group">
            <div className="bg-[#114227] text-white font-bold px-2.5 py-1.5 rounded-md text-sm tracking-wider shadow-md">DMC</div>
            <span className="font-serif font-bold text-lg text-zinc-900">Dubbel Medical Corporation</span>
          </button>
          
          <nav className="flex items-center space-x-8 text-sm font-medium">
            {['home', 'products', 'contact'].map((view) => (
              <button 
                key={view}
                type="button"
                onClick={() => setCurrentView(view as any)} 
                className={`transition-colors duration-300 capitalize ${currentView === view ? 'text-[#114227] font-semibold' : 'text-zinc-600 hover:text-zinc-900'}`}
              >
                {view === 'contact' ? 'Contact Us' : view}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="transition-all duration-500 relative">
        {(currentView === 'home' || currentView === 'products') && (
          <div className={`transition-all duration-500 ${isModalOpen ? 'opacity-40 blur-[2px] pointer-events-none' : 'opacity-100'}`}>
            <section className="relative min-h-[520px] flex items-center bg-emerald-900 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/hero-medical.jpg')` }} />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#114227]/90 to-teal-800/60" />
              <div className="relative max-w-7xl mx-auto w-full px-6">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-[1.15]">Advanced Medical &<br />Surgical Devices</h1>
                <p className="mt-6 text-lg text-zinc-100 max-w-2xl font-light">DUBBEL MEDICAL CORPORATION (DMC) is committed to being the country's most trusted supplier of advanced medical and surgical devices.</p>
                <button onClick={() => setCurrentView('contact')} className="mt-10 rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-[#114227] transition-all">Contact Us</button>
              </div>
            </section>
            <VisionMissionSection />
            <OurGoalsSection />
            <OurValuesSection />
          </div>
        )}

        {currentView === 'contact' && <ContactView />}
        {currentView === 'hyperdrymist' && <HyperDRYMistPage onContactClick={() => setCurrentView('contact')} />}

        {/* PRODUCTS MODAL */}
        {currentView === 'products' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-[600px] p-10 relative border border-zinc-100 animate-in fade-in zoom-in duration-300">
              <button onClick={() => setCurrentView('home')} className="absolute top-6 right-6 text-zinc-400 hover:text-red-500 transition-colors">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <h2 className="text-3xl font-serif font-bold text-center mb-10">Our Products</h2>
              
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => setCurrentView('hyperdrymist')}
                  className="w-full h-[72px] rounded-2xl bg-[#114227] text-white font-semibold text-lg shadow-lg hover:bg-emerald-800 transition-all"
                >
                  HyperDRYMist®
                </button>
                
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-full h-[72px] rounded-2xl border-2 border-dashed border-zinc-200 flex items-center justify-center text-zinc-400">
                    Coming Soon
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
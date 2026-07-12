'use client';

import React from 'react';
import Image from 'next/image';

const SHADOW_MAP: Record<'blue' | 'teal', string> = {
  blue: '#3b82f6',
  teal: '#14b8a6',
};

function resolveShadow(color: 'blue' | 'teal' | string): string {
  return SHADOW_MAP[color as 'blue' | 'teal'] ?? color;
}

interface ProductButtonProps {
  src: string;
  alt: string;
  shadowColor: 'blue' | 'teal' | string;
  borderColor: string;
  onClick: () => void;
}

export function ProductButton({
  src,
  alt,
  shadowColor,
  borderColor,
  onClick,
}: ProductButtonProps) {
  const shadow = resolveShadow(shadowColor);

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full h-[72px] rounded-full overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      style={{ boxShadow: `0 4px 14px ${shadow}50` }}
    >
      <div
        className="w-full h-full rounded-full relative"
        style={{
          background: `linear-gradient(to right, ${borderColor}20, ${borderColor}60)`,
          border: `2px solid ${borderColor}`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-4"
        />
      </div>
    </button>
  );
}

export function Tech99View() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#eaf6f1] via-[#f4faf7] to-[#e6f2f7] text-slate-800 font-sans antialiased relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Decorative Organic Blurry Blobs matching image_1fbd42.jpg */}
      <div 
        className="absolute -bottom-12 -left-16 w-96 h-96 bg-emerald-800/80 rounded-full blur-3xl pointer-events-none mix-blend-multiply" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-12 -right-20 w-[450px] h-[450px] bg-emerald-600/30 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-10 w-80 h-80 bg-teal-600/20 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Main Content Wrapper */}
      <div className="relative max-w-4xl mx-auto space-y-6">
        
        {/* Top Hero Card */}
        <section className="bg-white/60 backdrop-blur-md border border-slate-300/50 rounded-2xl p-6 sm:p-8 text-center shadow-xs">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-slate-200/60 rounded-full px-3 py-1 text-xs text-slate-600 shadow-2xs mx-auto">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="font-medium text-[11px] tracking-wide text-slate-700">99 Technologies (99T)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-slate-900 tracking-tight mt-4 max-w-xl mx-auto leading-tight">
            Enhancing Disinfection to True Prevention.
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            99 Technologies introduces a new paradigm in the use of no-touch high-level disinfection systems that opens new modalities in the fight against Healthcare Acquired Infections (HAI).
          </p>
        </section>

        {/* Middle Dual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Column: HyperDRYMist Technology */}
          <article className="bg-white/60 backdrop-blur-md border border-slate-300/50 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 tracking-tight">HyperDRYMist® Technology</h2>
              
              {/* Image Container 16:9 */}
              <div className="mt-4 relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-2xs">
                <Image 
                  src="/image_77fc9c.jpg" 
                  alt="HyperDRYMist Technology Illustration" 
                  fill 
                  className="object-cover"
                />
                <span className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-md">
                  16:9
                </span>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-xs text-slate-600 list-disc pl-4 marker:text-slate-400">
              <li>Aerosolization of fine mist® fine mist mist.</li>
              <li>Gas-like behavior in gas-like mist filling every crevice.</li>
              <li>Safety with electronics and it with electronics.</li>
              <li>Cost-effectiveness and cost medirical movens.</li>
            </ul>
          </article>

          {/* Right Column: Modulators Micro-Nebulizers */}
          <article className="bg-white/60 backdrop-blur-md border border-slate-300/50 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Modulators Micro-Nebulizers</h2>
              
              {/* Twin 4:3 Images */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-2xs">
                  <Image 
                    src="/background.jpg" 
                    alt="HDM System Device View" 
                    fill 
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-1.5 py-0.5 rounded-md">
                    4:3
                  </span>
                </div>
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-2xs">
                  <Image 
                    src="/image_77fd15.jpg" 
                    alt="Micro-Nebulizer Nozzle Close-up" 
                    fill 
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-1.5 py-0.5 rounded-md">
                    4:3
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                Kf HyperDRYMist is a conceptual design the HDM integrated System in a bottle attachment via Micro-Nebulizer.
              </p>
            </div>

            <ul className="mt-4 space-y-2 text-xs text-slate-600 list-disc pl-4 marker:text-slate-400">
              <li>Autonomous recognition and tamper resistant.</li>
              <li>Tamper resistance and programmability.</li>
              <li>Programmability and imevved data feed.</li>
            </ul>
          </article>
        </div>

        {/* Bottom Section: Advanced Disinfectant Solutions */}
        <section className="bg-white/60 backdrop-blur-md border border-slate-300/50 rounded-2xl p-6 sm:p-8 shadow-xs">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Advanced Disinfectant Solutions</h2>
          
          <div className="mt-4 flex flex-col md:flex-row gap-6 items-start">
            {/* Image Container 16:11 */}
            <div className="relative aspect-[16/11] w-full md:w-[42%] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-2xs shrink-0">
              <Image 
                src="/image_77fcdc.jpg" 
                alt="Disinfectant Solutions Bottles Range" 
                fill 
                className="object-cover"
              />
              <span className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-md">
                16:11
              </span>
            </div>

            {/* Typography Details */}
            <div className="space-y-3 flex-1">
              <h3 className="text-sm font-medium text-slate-900">Moving beyond sheer hydrogen peroxide</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The synergy between of disinfectant solutions in stylte added elements can shnooizee synergutennative to hydrogen peroxide for enhanced efficacy.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                The cuper elements aments added to between added to peroxide and capon-elements, vroicsoe added to hydrogen peroxide and the see effocant or androgen-roation precorder to enhanced efficacy.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
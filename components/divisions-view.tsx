'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { divisions, type DivisionKey } from '@/lib/divisions';


export default function DivisionsView() {
  const [selected, setSelected] = useState(divisions[0].key);
  const [showOnlySelected, setShowOnlySelected] = useState(false);

  const selectedDivision = useMemo(
    () => divisions.find((d) => d.key === selected) ?? divisions[0],
    [divisions, selected]
  );

  const handleDivisionClick = (key: DivisionKey) => {
    setSelected(key);
    setShowOnlySelected(true);
  };

  const handleBack = () => {
    setShowOnlySelected(false);
  };

  return (
    <section className="min-h-screen bg-white">
      <div className="relative overflow-hidden bg-zinc-900">
        <div
          className="absolute inset-0 opacity-25 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580281658628-3bf0a1f1f4d1?auto=format&fit=crop&q=80&w=1600')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#114227]/95 via-emerald-900/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-4xl font-serif font-bold text-white sm:text-5xl">
                Active Supply
              </h1>
              <p className="mt-4 text-zinc-100 max-w-2xl leading-relaxed">
                Explore the areas where DMC supports healthcare professionals with
                dependable medical and surgical device solutions.
              </p>
            </div>

            
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {showOnlySelected ? (
          <div className="max-w-3xl mx-auto">
            <button
              onClick={handleBack}
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#114227] hover:text-emerald-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to all divisions
            </button>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <div className="flex items-center gap-3">
                {(() => {
                  const Icon = selectedDivision.icon;
                  return (
                    <Icon
                      className="w-7 h-7 text-[#114227]"
                      aria-hidden={true}
                    />
                  );
                })()}
                <h3 className="text-2xl font-serif font-bold text-zinc-900">
                  {selectedDivision.title}
                </h3>
              </div>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                {selectedDivision.description}
              </p>
              <div className="mt-6">
                <div className="text-sm font-semibold text-zinc-900 mb-3">
                  What we provide
                </div>
                <ul className="space-y-2">
                  {selectedDivision.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-zinc-700">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#114227] inline-block" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex w-full items-center justify-center rounded-md bg-[#114227] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0d3320] transition-colors"
                >
                  Discuss this division
                </Link>
                <p className="mt-3 text-xs text-zinc-500">
                  We’ll route your inquiry to the right team.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-zinc-900">
                  Select a division
                </h2>
                <span className="text-sm text-zinc-500">{divisions.length} areas</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {divisions.map((d) => {
                  const isActive = d.key === selected;
                  const Icon = d.icon;
                  return (
                    <button
                      key={d.key}
                      onClick={() => handleDivisionClick(d.key)}
                      className={
                        `block rounded-xl border p-4 transition-all text-left ` +
                        (isActive
                          ? 'border-[#114227] bg-[#114227]/5 ring-1 ring-[#114227]/25'
                          : 'border-zinc-200 hover:border-[#114227]/40 hover:bg-zinc-50')
                      }
                      aria-pressed={isActive}
                    >
                      <div className="flex items-start gap-3">
                        <Icon
                          className={
                            'w-6 h-6 ' +
                            (isActive ? 'text-[#114227]' : 'text-zinc-500')
                          }
                          aria-hidden={true}
                        />
                        <div>
                          <div className="font-semibold text-zinc-900">{d.title}</div>
                          <div className="mt-1 text-sm text-zinc-600 line-clamp-2">
                            {d.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <aside className="lg:col-span-2">
              <div className="sticky top-24 rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = selectedDivision.icon;
                    return (
                      <Icon
                        className="w-7 h-7 text-[#114227]"
                        aria-hidden={true}
                      />
                    );
                  })()}
                  <h3 className="text-2xl font-serif font-bold text-zinc-900">

                    {selectedDivision.title}
                  </h3>
                </div>

                <p className="mt-4 text-zinc-600 leading-relaxed">
                  {selectedDivision.description}
                </p>

                <div className="mt-6">
                  <div className="text-sm font-semibold text-zinc-900 mb-3">
                    What we provide
                  </div>
                  <ul className="space-y-2">
                    {selectedDivision.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-zinc-700">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#114227] inline-block" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href="/"
                    className="inline-flex w-full items-center justify-center rounded-md bg-[#114227] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0d3320] transition-colors"
                  >
                    Discuss this division
                  </Link>
                  <p className="mt-3 text-xs text-zinc-500">
                    We’ll route your inquiry to the right team.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}


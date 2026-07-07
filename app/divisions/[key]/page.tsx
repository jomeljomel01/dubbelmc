import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { divisions, getDivision } from '@/lib/divisions';

export function generateStaticParams() {
  return divisions.map((d) => ({ key: d.key }));
}

export default async function DivisionDetailPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const division = getDivision(key);

  if (!division) {
    notFound();
  }

  const Icon = division.icon;

  return (
    <main className="min-h-screen bg-white text-zinc-900">
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
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition-colors"
          >
              <ArrowLeft className="mr-2 w-4 h-4" aria-hidden={true} />
            Back to Home
          </Link>

          <div className="mt-8 flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
              <Icon className="w-7 h-7 text-white" aria-hidden={true} />
            </span>
            <h1 className="text-4xl font-serif font-bold text-white sm:text-5xl">
              {division.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#114227]">
          About this division
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-zinc-700">
          {division.description}
        </p>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-zinc-900">
            What we provide
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {division.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#114227] inline-block" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 rounded-2xl border border-zinc-200 p-6 text-center">
          <p className="text-zinc-600">
            Interested in {division.title}? Our team can help you find the right
            solution for your facility.
          </p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-[#114227] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0d3320] transition-colors"
          >
            Contact DMC
          </Link>
        </div>
      </div>
    </main>
  );
}

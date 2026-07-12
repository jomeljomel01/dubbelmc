import { Target, Crosshair, Rocket, ShieldCheck, HeartHandshake, type LucideIcon } from 'lucide-react';

interface SectionProps {
  className?: string;
}

interface IconCardProps extends SectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function IconCard({ icon: Icon, title, description, className = '' }: IconCardProps) {
  return (
    <div className={`p-6 border border-zinc-100 rounded-lg ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-6 h-6 text-[#114227]" aria-hidden="true" />
        <h3 className="text-xl font-semibold text-[#114227]">{title}</h3>
      </div>
      <p className="text-zinc-600 leading-relaxed">{description}</p>
    </div>
  );
}

function VisionMissionSection({ className = '' }: SectionProps) {
  return (
    <section className={`bg-white py-16 ${className}`} aria-labelledby="vision-mission-heading">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 id="vision-mission-heading" className="text-3xl font-serif font-bold text-zinc-900 mb-6">
          Vision &amp; Mission
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <IconCard
            icon={Target}
            title="Vision"
            description="To be the country&apos;s most trusted supplier of advanced medical and surgical devices, delivering excellence in healthcare innovation and service."
          />
          <IconCard
            icon={Crosshair}
            title="Mission"
            description="To continuously upgrade the standards of our people to provide exceptional value to all our partners in the healthcare profession."
          />
        </div>
      </div>
    </section>
  );
}

function OurGoalsSection({ className = '' }: SectionProps) {
  return (
    <section className={`bg-zinc-50 py-16 ${className}`} aria-labelledby="goals-heading">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 id="goals-heading" className="text-3xl font-serif font-bold text-zinc-900 mb-6">
          Our Goals
        </h2>
        <p className="text-zinc-600 leading-relaxed max-w-3xl mx-auto">
          We strive to expand our reach across the Philippines, ensuring every healthcare facility has access to reliable, high-quality medical devices and dedicated support.
        </p>
      </div>
    </section>
  );
}

interface OurValuesSectionProps extends SectionProps {
  onViewProducts?: () => void;
}

function OurValuesSection({ className = '', onViewProducts }: OurValuesSectionProps) {
  const values = [
    { Icon: ShieldCheck, label: 'Integrity', text: 'We uphold the highest ethical standards in all our partnerships and operations.' },
    { Icon: HeartHandshake, label: 'Compassion', text: 'We care deeply about the wellbeing of the communities we serve.' },
    { Icon: Rocket, label: 'Excellence', text: 'We deliver superior products and services through continuous improvement.' },
  ] as const;

  return (
    <section className={`bg-white py-16 ${className}`} aria-labelledby="values-heading">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 id="values-heading" className="text-3xl font-serif font-bold text-zinc-900 mb-6">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map(({ Icon, label, text }) => (
            <div key={label} className="p-6">
              <Icon className="w-8 h-8 text-[#114227] mx-auto mb-4" aria-hidden="true" />
              <div className="text-3xl font-bold text-[#114227] mb-2">{label}</div>
              <p className="text-zinc-600 text-sm">{text}</p>
            </div>
          ))}
        </div>
        {onViewProducts && (
          <div className="mt-10">
            <button
              type="button"
              onClick={onViewProducts}
              className="rounded-md bg-[#114227] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0d3320] transition-all focus:outline-none focus:ring-2 focus:ring-[#114227] focus:ring-offset-2"
            >
              Explore Our Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export { VisionMissionSection, OurGoalsSection, OurValuesSection };

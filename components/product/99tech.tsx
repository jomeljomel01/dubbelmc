import { CheckCircle2, Zap, ShieldCheck, Droplets, Laptop, RotateCcw, Box, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

const PreventionCards = [
  { title: "Healthcare Acquired Infections", text: "Environmental surfaces contribute to disease transmission." },
  { title: "Cross Contamination", text: "Preventing the spread between patients and staff." },
  { title: "Surface Pathogens", text: "Eliminating invisible threats on high-touch surfaces." },
  { title: "Environmental Disinfection", text: "Ensuring sterile spaces for all environments." }
];

const Benefits = [
  { icon: <Zap size={24}/>, title: "Fast turnaround" },
  { icon: <Laptop size={24}/>, title: "Safe for electronics" },
  { icon: <ShieldCheck size={24}/>, title: "High compatibility" },
  { icon: <RotateCcw size={24}/>, title: "No manual wiping" },
  { icon: <Box size={24}/>, title: "Complete room coverage" },
  { icon: <CheckCircle2 size={24}/>, title: "Easy operation" }
];

// Animation variants for sections
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

type HyperDRYMistPageProps = {
  onContactClick?: () => void;
};

export default function HyperDRYMistPage({ onContactClick }: HyperDRYMistPageProps) {
  return (
    <main className="bg-[#EDF8F4] text-[#1E293B] p-4 md:p-8 space-y-24">
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-white/30 shadow-2xl min-h-[620px] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/Background3.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
        </div>

        <div className="relative z-10 p-8 lg:p-14 max-w-2xl">
          <span className="inline-flex rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/20 px-4 py-1 text-xs font-semibold text-[#064e3b]">
            High-Level No-Touch Disinfection Systems
          </span>

          <h1 className="mt-6 text-5xl font-serif leading-tight text-slate-900 drop-shadow-sm">
            Enhancing Disinfection
            <br />
            to True Prevention
          </h1>

          <p className="mt-6 text-slate-700 leading-7 font-medium bg-white/30 backdrop-blur-sm p-4 rounded-xl border border-white/20">
            HyperDRYMist® introduces an innovative environmental disinfection
            technology using ultra-fine dry mist capable of reaching every exposed
            and hidden surface.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-full bg-[#0F766E] px-6 py-3 text-white transition hover:bg-[#15803D] shadow-lg">
              Learn More
            </button>
            <button
              type="button"
              onClick={onContactClick}
              className="rounded-full border border-slate-200 bg-white/60 backdrop-blur-sm px-6 py-3 transition hover:bg-white shadow-sm"
            >
              Contact Us
            </button>
          </div>
        </div>
      </motion.section>

      {/* Prevention Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-bold mb-10">Prevention is Paramount</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PreventionCards.map((c, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/50 shadow-sm">
              <CheckCircle2 className="text-[#15803D] mb-4" />
              <h3 className="font-bold text-xl mb-2">{c.title}</h3>
              <p className="text-slate-600 text-sm">{c.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Technology Section */}
      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid lg:grid-cols-2 gap-12 items-center"
      >
        <div className="flex justify-center">
          <Image
            src="/Machined.png"
            alt="HyperDRYMist® Machine"
            width={1200}
            height={1200}
            priority
            quality={100}
            className="w-full max-w-[650px] h-[600px] object-cover rounded-3xl"
          />
        </div>

        <div>
            <h2 className="text-3xl font-bold mb-6">
            Introducing HyperDRYMist®
            </h2>
            <ul className="space-y-4">
            {[
                "Dry mist technology",
                "No residue",
                "Safe for electronics",
                "Automated process",
                "Uniform coverage",
            ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                <span className="text-[#15803D] text-lg">●</span>
                {item}
                </li>
            ))}
            </ul>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-bold mb-10">User Benefits</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-4 p-6 bg-white/60 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="p-3 bg-emerald-100 text-[#15803D] rounded-lg">{b.icon}</div>
              <span className="font-semibold">{b.title}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Solutions Section */}
      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-8 p-10 bg-white/40 rounded-3xl items-center border border-white/50"
      >
        <div className="flex justify-center">
            <Image
            src="/Solutionsd.png"
            alt="Hydrogen Peroxide Solutions"
            width={1600}
            height={900}
            quality={100}
            priority
            className="w-full max-w-[700px] h-[420px] object-contain rounded-3xl"
            />
        </div>

        <div>
            <h2 className="text-3xl font-bold mb-4">
            Hydrogen Peroxide Solutions
            </h2>
            <ul className="space-y-4 text-slate-700 text-lg">
            <li className="flex items-center gap-3"><span className="text-[#15803D]">✓</span> Broad spectrum</li>
            <li className="flex items-center gap-3"><span className="text-[#15803D]">✓</span> Biodegradable</li>
            <li className="flex items-center gap-3"><span className="text-[#15803D]">✓</span> Residue free</li>
            <li className="flex items-center gap-3"><span className="text-[#15803D]">✓</span> Non corrosive</li>
            </ul>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-gradient-to-r from-[#0F766E] to-[#15803D] rounded-3xl p-12 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to improve environmental disinfection?</h2>
        <button type="button" onClick={onContactClick} className="bg-white text-[#15803D] px-8 py-4 rounded-full font-bold flex items-center gap-2 mx-auto hover:scale-105 transition">
          Contact Dubbel Medical Corp. <ArrowRight size={20} />
        </button>
      </motion.section>
    </main>
  );
}
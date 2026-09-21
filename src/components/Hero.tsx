import { Calendar, Phone, CheckCircle2, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0c10] via-[#12161f] to-[#0e1015] pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-orange-950/40">
      {/* Subtle warm orange & golden ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 -left-20 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tag / Eyebrow Badge with Brand Emblem */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#181d26] border border-orange-500/40 text-orange-300 text-xs font-bold shadow-md">
              <span className="flex h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
              <span>Affordable Pet Grooming Dog Spa in Pacifica, CA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-white tracking-tight leading-[1.15] font-['Outfit',sans-serif]">
              Gentle, Cage-Free Dog Grooming <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400">Without the Rush</span>.
            </h1>

            {/* Description */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Why waste money on rushed mobile pet grooming vans? At <strong className="text-white font-bold">Best Buddies</strong>, we take our time so your pet gets the perfect grooming in a calm, stress-free spa environment. Serving Pacifica, Daly City, San Mateo, and throughout the Bay Area.
            </p>

            {/* Value Pillars List */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-sm font-medium text-white">
                <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>100% Cage-Free & Hand-Dried</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-white">
                <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>30%–40% Less Than Mobile Vans</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-white">
                <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>Gentle Handling for Anxious Pups</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-white">
                <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>Organic Hypoallergenic Shampoos</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="hero-book-btn"
                onClick={onOpenBooking}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-black text-sm sm:text-base bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 shadow-xl shadow-orange-950/80 hover:shadow-orange-500/30 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-slate-950" />
                <span>Book Your Dog’s Spa Day</span>
              </button>

              <a
                id="hero-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-[#181d26] hover:bg-[#222834] text-orange-300 hover:text-white border border-orange-500/40 transition-all"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call or Text: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Live Trust Metrics Strip */}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">4.9 / 5.0</span>
                <span>(380+ Bay Area Pet Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 text-orange-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Licensed & Insured Salon</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card with Logo Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden bg-[#131720] border border-orange-500/30 shadow-2xl shadow-orange-950/60 group">
                <SafeImage
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80"
                  alt="Happy pampered dog at Best Buddies Dog Grooming Pacifica"
                  className="w-full h-[380px] sm:h-[420px] object-cover object-center filter saturate-105"
                  loading="eager"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1117] via-transparent to-black/20" />

                {/* Floating Badge: Availability with Logo */}
                <div className="absolute top-4 left-4 bg-[#12161f]/95 backdrop-blur-md border border-orange-500/40 rounded-xl px-3.5 py-2 flex items-center gap-2.5 shadow-lg">
                  <div className="w-7 h-7 rounded-full bg-white p-0.5 overflow-hidden flex items-center justify-center ring-1 ring-orange-400">
                    <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs font-bold text-white">Accepting New Pups This Week</span>
                </div>

                {/* Floating Card Bottom: Location & Feature */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#141822]/95 backdrop-blur-md border border-orange-900/40 rounded-xl p-4 shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🐶</span>
                      <span className="font-bold text-white text-sm">Pacifica Dog Spa</span>
                    </div>
                    <span className="text-[11px] font-bold text-orange-300 bg-[#212735] px-2.5 py-0.5 rounded-full border border-orange-500/30">
                      Right off Hwy 1
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    Comfortable, quiet grooming environment with warm organic baths, custom scissor styling, and zero cage anxiety.
                  </p>
                  
                  <div className="mt-3 pt-2.5 border-t border-zinc-800 flex items-center justify-between text-xs">
                    <span className="text-orange-400 font-extrabold">Starting at $45</span>
                    <a
                      href="#estimator"
                      className="text-white hover:text-orange-400 font-bold flex items-center gap-1 transition-colors"
                    >
                      <span>Check Your Dog’s Price</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Decorative side accent pill */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#171c26] border border-orange-500/40 rounded-xl px-4 py-2.5 items-center gap-3 shadow-xl">
                <div className="w-10 h-10 rounded-full bg-white p-1 overflow-hidden ring-1 ring-orange-400">
                  <img src="/logo.svg" alt="Comb Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-white">No Cage Dryers</div>
                  <div className="text-[10px] text-orange-400 font-bold">100% Gentle Hand Drying</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

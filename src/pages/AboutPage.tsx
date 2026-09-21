import { Heart, ShieldCheck, Award, Sparkles, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { SafeImage } from '../components/SafeImage';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export function AboutPage({ onOpenBooking }: AboutPageProps) {
  return (
    <div className="py-12 sm:py-20 bg-[#0a0d13] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181d26] border border-orange-500/40 text-orange-300 text-xs font-bold">
            <Heart className="w-3.5 h-3.5 text-orange-400" />
            <span>Our Pacifica Story & Philosophy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
            Passionate About Dogs, <span className="text-orange-400">Never in a Rush</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Founded right here on the Pacifica coast, Best Buddies was born from a fundamental belief: pet grooming should feel like a calming spa day, not a noisy industrial assembly line.
          </p>
        </div>

        {/* Narrative & Visual Section */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit',sans-serif]">
              Why We Chose a Spacious Pacifica Salon Over Mobile Vans
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              In recent years, mobile grooming vans have flooded the Bay Area charging upwards of $180 to $220. But mobile groomers face strict time constraints — running loud diesel generators on residential curbs and rushing through each dog in 40 minutes to make the next driveway appointment.
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              At <strong className="text-white">Best Buddies</strong>, we chose a different path: a calm, permanent coastal salon where your dog has room to breathe. Because we are not mobile, we don't rush. We have all the time needed to gently soothe nervous rescues, carefully de-mat sensitive curls, and ensure your best buddy feels secure and adored.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>Zero heated cage drying boxes — only gentle hand velocity drying</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>100% natural, biodegradable botanical shampoos and conditioners</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>Individual low-stress scheduling tailored to your dog’s emotional pace</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>30% to 40% lower cost than street-side mobile vans</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-[#121620]">
              <SafeImage
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=80"
                alt="Gentle groomer caring for a happy golden retriever in Pacifica"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="p-5 bg-[#0f121a] border-t border-zinc-800">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-bold text-white">Gentle Handling First</span>
                  <span className="text-orange-400 font-bold">Pacifica, CA 94044</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-[#121620] border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Safety & Hygiene Standards</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every grooming station and scissor set is hospital-grade sanitized between pets. All clients must be vaccinated for rabies and DHPP for communal safety.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121620] border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Organic Natural Formulas</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We never use harsh industrial sulfates or artificial perfumes. Our coat treatments contain aloe vera, oatmeal, coconut oil, and shea butter for sensitive skin.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121620] border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Senior & Nervous Pet Care</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Senior dogs with arthritis or vision loss receive orthotic resting mats and frequent pauses. Pups with dryer anxiety are slowly hand-combed and towel dried.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#181d28] via-[#202838] to-[#181d28] border border-orange-500/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">Experience the Best Buddies difference</h3>
            <p className="text-xs text-orange-300 font-medium">Drop off your dog and enjoy a peaceful stroll along Pacifica's Linda Mar beach.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onOpenBooking}
              className="py-3 px-5 rounded-xl font-black text-xs bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 flex items-center gap-2 cursor-pointer shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="py-3 px-4 rounded-xl font-bold text-xs bg-[#141822] hover:bg-[#1c2230] text-orange-300 border border-orange-500/40 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

import { ServiceAreaChecker } from '../components/ServiceAreaChecker';
import { Navigation, Car, Coffee, Compass, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface ServiceAreasPageProps {
  onOpenBooking: () => void;
}

export function ServiceAreasPage({ onOpenBooking }: ServiceAreasPageProps) {
  return (
    <div className="py-12 sm:py-20 bg-[#0a0d13] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181d26] border border-orange-500/40 text-orange-300 text-xs font-bold">
            <Navigation className="w-3.5 h-3.5 text-orange-400" />
            <span>Bay Area Communities Served</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
            Centrally Located in <span className="text-orange-400">Pacifica, CA</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Conveniently situated right off Highway 1. Pet parents throughout San Mateo County, San Francisco, and Silicon Valley trust Best Buddies for stress-free grooming.
          </p>
        </div>

        {/* Embedded Interactive Service Area Checker */}
        <ServiceAreaChecker onOpenBooking={onOpenBooking} />

        {/* Pacifica Day Trip Guide for Pet Parents */}
        <div className="p-8 rounded-2xl bg-[#121620] border border-zinc-800 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Drop-Off Experience
            </span>
            <h2 className="text-2xl font-black text-white font-['Outfit',sans-serif]">
              Enjoy Pacifica While Your Best Buddy Gets Pampered
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              Since appointments typically take 1.5 to 2.5 hours, many clients make a pleasant morning out of their visit to coastal Pacifica! Here is what pet parents love doing nearby:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-[#0b0e14] border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
                <Coffee className="w-4 h-4" />
                <span>Local Coastal Cafes</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Grab an artisan coffee, fresh pastries, or breakfast right along the coastal promenade just 5 minutes from our salon.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0b0e14] border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
                <Compass className="w-4 h-4" />
                <span>Scenic Ocean Trails</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Take an invigorating walk along Linda Mar State Beach or the Mori Point bluffs while enjoying fresh Pacific ocean breezes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0b0e14] border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
                <Car className="w-4 h-4" />
                <span>Effortless Parking</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                No circling congested city blocks or parking meters. Dedicated easy parking right outside our salon door makes drop-off a breeze.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              We send an automatic text notification <strong>15–20 minutes before</strong> your pup is finished so you have ample time to wrap up.
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-orange-400 hover:text-white font-bold flex items-center gap-1.5 flex-shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Questions? Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

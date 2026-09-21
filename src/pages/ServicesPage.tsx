import { DogSize, CoatType } from '../types';
import { SERVICES, ADD_ONS } from '../data/mockData';
import { PriceEstimator } from '../components/PriceEstimator';
import { Check, Clock, Sparkles, Calendar } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

interface ServicesPageProps {
  onOpenBooking: (serviceId?: string) => void;
  onBookEstimated: (selection: {
    size: DogSize;
    coatType: CoatType;
    serviceId: string;
    addOnIds: string[];
    estimatedTotal: number;
  }) => void;
}

export function ServicesPage({ onOpenBooking, onBookEstimated }: ServicesPageProps) {
  return (
    <div className="py-12 sm:py-16 bg-[#0a0d13] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181d26] border border-orange-500/40 text-orange-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Salon Menu & Transparent Rates</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
            Dog Grooming Packages in <span className="text-orange-400">Pacifica, CA</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every session at Best Buddies includes 100% gentle hand-blow drying, organic tearless hydromassage, and zero rushed handling. No heated drying cages ever.
          </p>
        </div>

        {/* Core Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl bg-[#121620] border transition-all flex flex-col justify-between overflow-hidden shadow-xl ${
                service.popular
                  ? 'border-orange-500/80 ring-1 ring-orange-500/40'
                  : 'border-zinc-800 hover:border-orange-500/40'
              }`}
            >
              {/* Photo & Duration Header */}
              <div className="relative h-48 w-full overflow-hidden bg-black/40">
                <SafeImage
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121620] via-transparent to-black/30 pointer-events-none" />

                <div className="absolute top-3 left-3 flex gap-2">
                  {service.popular && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-orange-500 text-slate-950 shadow">
                      Most Popular
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-2xl font-black text-white font-['Outfit',sans-serif]">
                    From ${service.priceStartingAt}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-orange-300 font-semibold bg-[#0d1016]/90 px-2.5 py-1 rounded-full border border-orange-500/30">
                    <Clock className="w-3 h-3 text-orange-400" />
                    <span>{service.duration}</span>
                  </span>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{service.name}</h3>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{service.description}</p>

                  <div className="mt-4 pt-4 border-t border-zinc-800 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-orange-400">
                      Everything Included:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {service.includes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="w-full py-3 px-4 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 transition-all flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>Book {service.name.split(' ')[0]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Walk-in & A La Carte Care */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#121620] border border-zinc-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <h2 className="text-xl font-bold text-white">Walk-in Hygiene & A La Carte Add-Ons</h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Quick 15-minute maintenance appointments for nails, face tidy, or teeth cleaning between full grooms.
              </p>
            </div>
            <div className="text-xs font-bold text-orange-400 bg-[#181d28] px-3 py-1 rounded-full border border-orange-500/40 self-start md:self-auto">
              Mon - Sat Walk-ins Welcome
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADD_ONS.map((add) => (
              <div key={add.id} className="p-4 bg-[#0d1016] rounded-xl border border-zinc-800 flex justify-between items-center">
                <div>
                  <div className="text-sm font-bold text-white">{add.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{add.description}</div>
                </div>
                <div className="text-base font-black text-orange-400 ml-3 flex-shrink-0">
                  ${add.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Estimator section on this page */}
        <PriceEstimator onBookEstimated={onBookEstimated} />

      </div>
    </div>
  );
}

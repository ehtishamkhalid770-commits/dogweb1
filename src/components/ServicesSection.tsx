import { useState } from 'react';
import { SERVICES, ADD_ONS } from '../data/mockData';
import { Check, Clock, Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'groom', label: 'Full Haircuts & Styling' },
    { id: 'bath', label: 'Baths & Blowouts' },
    { id: 'vip', label: 'VIP Luxury Spa' },
    { id: 'alacarte', label: 'Touch-Ups & Hygiene' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#0a0d13] border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181d26] border border-orange-500/40 text-orange-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Gentle Spa Menu</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
            Tailored Grooming Packages in <span className="text-orange-400">Pacifica</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Every session includes certified hand drying, organic tearless hydromassage, and zero rushed handling. Pick the perfect service for your furry best friend.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-950'
                  : 'bg-[#151922] text-slate-200 border border-zinc-800 hover:border-orange-500/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl bg-[#121620] border transition-all flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-orange-950/40 ${
                service.popular
                  ? 'border-orange-500/70 ring-1 ring-orange-500/30'
                  : 'border-zinc-800 hover:border-orange-500/50'
              }`}
            >
              {/* Image & Badges */}
              <div className="relative h-48 w-full overflow-hidden bg-black/40">
                <SafeImage
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
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
                  <span className="text-xl font-black text-white font-['Outfit',sans-serif]">
                    From ${service.priceStartingAt}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-orange-300 font-bold bg-[#181d28]/95 px-2.5 py-0.5 rounded-full border border-orange-500/30">
                    <Clock className="w-3 h-3 text-orange-400" />
                    <span>{service.duration}</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{service.name}</h3>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{service.description}</p>

                  {/* Bullet inclusions */}
                  <div className="mt-4 pt-4 border-t border-zinc-800 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-orange-400">
                      What’s Included:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {service.includes.slice(0, 4).map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{inc}</span>
                        </li>
                      ))}
                      {service.includes.length > 4 && (
                        <li className="text-[11px] text-orange-400 font-semibold pl-5">
                          + {service.includes.length - 4} more spa perks
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Card Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-[#1a202c] hover:bg-orange-500 hover:text-slate-950 text-orange-300 border border-orange-500/30 hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book This Service</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Walk-in & A La Carte Add-on Grid Highlight */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#121620] border border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Walk-in & Quick Add-on Touch-Ups</h3>
              <p className="text-xs sm:text-sm text-slate-300">No appointment needed for quick nail clips, gland expressions, or facial scrubs.</p>
            </div>
            <span className="text-xs font-bold text-orange-300 bg-[#1d2330] px-3 py-1 rounded-full border border-orange-500/30 self-start md:self-auto">
              Drop by Mon - Sat
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {ADD_ONS.map((add) => (
              <div key={add.id} className="p-3 bg-[#0d1016] rounded-xl border border-zinc-800 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-white">{add.name}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{add.description}</div>
                </div>
                <div className="text-xs font-bold text-orange-400 mt-2 pt-1 border-t border-zinc-800/80">
                  ${add.price}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

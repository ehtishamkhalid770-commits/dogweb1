import { useState, useMemo } from 'react';
import { SERVICE_CITIES, BUSINESS_INFO } from '../data/mockData';
import { MapPin, Search, CheckCircle2, Clock, Navigation, Phone } from 'lucide-react';

interface ServiceAreaCheckerProps {
  onOpenBooking: () => void;
}

export function ServiceAreaChecker({ onOpenBooking }: ServiceAreaCheckerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCounty, setSelectedCounty] = useState<string>('all');

  const counties = [
    { id: 'all', label: 'All Bay Area' },
    { id: 'San Mateo County', label: 'San Mateo County / Peninsula' },
    { id: 'Santa Clara County', label: 'Santa Clara / South Bay' },
    { id: 'San Francisco', label: 'San Francisco' },
  ];

  const filteredCities = useMemo(() => {
    return SERVICE_CITIES.filter((city) => {
      const matchesSearch = city.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
      const matchesCounty = selectedCounty === 'all' || city.county === selectedCounty;
      return matchesSearch && matchesCounty;
    });
  }, [searchQuery, selectedCounty]);

  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-[#0a0d13] border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181d26] border border-orange-500/40 text-orange-300 text-xs font-bold">
            <Navigation className="w-3.5 h-3.5 text-orange-400" />
            <span>Bay Area Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
            Serving Pacifica & All <span className="text-orange-400">Bay Area Communities</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Conveniently located in coastal Pacifica, California right off Highway 1. Pet parents regularly visit us from across San Mateo, San Francisco, and Santa Clara counties.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-2xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-orange-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your city (e.g. Daly City, San Mateo, Burlingame, Palo Alto)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#141822] border border-zinc-800 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 text-white placeholder-slate-400 text-sm shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {counties.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCounty(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCounty === c.id
                    ? 'bg-orange-500 text-slate-950'
                    : 'bg-[#141822] text-slate-300 border border-zinc-800 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info Banner */}
        {searchQuery.trim().length > 0 && (
          <div className="max-w-2xl mx-auto mb-8 p-3.5 rounded-xl bg-[#1a202c] border border-orange-500/50 flex items-center justify-between text-xs text-orange-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
              <span>
                {filteredCities.length > 0
                  ? `Yes! We welcome clients from ${filteredCities.map((c) => c.name).join(', ')}.`
                  : `Looking for "${searchQuery}"? If you are anywhere in the SF Bay Area, our Pacifica salon is an easy drive down Hwy 1 or I-280!`}
              </span>
            </div>
            <button
              onClick={onOpenBooking}
              className="text-slate-950 bg-orange-500 hover:bg-orange-400 px-3 py-1 rounded font-bold ml-2 flex-shrink-0"
            >
              Book Now
            </button>
          </div>
        )}

        {/* Cities Grid and Pacifica Hub Map Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Cities Chips Grid */}
          <div className="lg:col-span-7 bg-[#121620] p-6 rounded-2xl border border-zinc-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Cities & Driving Distances to Salon
              </span>
              <span className="text-xs text-slate-400">
                {filteredCities.length} locations listed
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
              {filteredCities.map((city) => (
                <div
                  key={city.name}
                  className={`p-2.5 rounded-xl border flex items-center justify-between transition-colors ${
                    city.highlight
                      ? 'bg-[#1c2230] border-orange-500/40 text-white'
                      : 'bg-[#151922] border-zinc-800/80 text-slate-300 hover:border-orange-500/30'
                  }`}
                >
                  <div className="truncate pr-1">
                    <div className="text-xs font-bold text-white truncate">{city.name}</div>
                    <div className="text-[10px] text-slate-400 truncate">{city.county.replace(' County', '')}</div>
                  </div>
                  <div className="text-[11px] font-bold text-orange-400 flex-shrink-0 flex items-center gap-0.5">
                    <Clock className="w-2.5 h-2.5" />
                    <span>{city.driveTimeMin === 0 ? 'Local' : `~${city.driveTimeMin}m`}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-800 text-xs text-slate-400 flex items-center justify-between">
              <span>*Average drive times via CA-1, I-280, or US-101.</span>
              <a
                href={BUSINESS_INFO.smsUrl}
                className="text-orange-400 hover:text-orange-300 font-bold"
              >
                Text us your address →
              </a>
            </div>
          </div>

          {/* Pacifica Salon Location Info & Map Graphic */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#181d28] to-[#121620] p-6 rounded-2xl border border-zinc-800 shadow-xl space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Pacifica Salon Location</h3>
                <p className="text-xs text-orange-300">Pacifica, CA 94044 • Near Pacific Coast Hwy</p>
              </div>
            </div>

            {/* Stylized Map View */}
            <div className="relative rounded-xl overflow-hidden bg-[#0c0f16] border border-zinc-800 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="font-bold text-white">Central Coastal Access</span>
                <span className="text-[11px] bg-[#1a202c] text-orange-400 px-2 py-0.5 rounded border border-orange-500/30 font-bold">
                  Easy Parking
                </span>
              </div>

              <div className="bg-[#141822] rounded-lg p-3 text-xs space-y-2 border border-zinc-800">
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  <span><strong>15 mins</strong> south of San Francisco</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  <span><strong>12 mins</strong> west of Daly City & San Bruno</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  <span><strong>20 mins</strong> north of San Mateo & Burlingame</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-300 leading-normal">
                Drop your dog off for their peaceful pamper session and take a scenic stroll along Pacifica’s Linda Mar beach or grab a coffee while we make them look fabulous!
              </p>
            </div>

            {/* Contact Callouts */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="py-2.5 px-3 rounded-xl bg-[#1a202c] border border-orange-500/40 text-orange-300 hover:text-white text-xs font-bold text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={onOpenBooking}
                className="py-2.5 px-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-slate-950 text-xs font-bold text-center flex items-center justify-center gap-1.5 cursor-pointer shadow"
              >
                <span>Schedule Appointment</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

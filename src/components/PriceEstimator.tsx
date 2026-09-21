import { useState, useMemo } from 'react';
import { DogSize, CoatType } from '../types';
import { ADD_ONS, SERVICES } from '../data/mockData';
import { Calculator, Check, Sparkles, Clock, Calendar } from 'lucide-react';

interface PriceEstimatorProps {
  onBookEstimated: (selection: {
    size: DogSize;
    coatType: CoatType;
    serviceId: string;
    addOnIds: string[];
    estimatedTotal: number;
  }) => void;
}

export function PriceEstimator({ onBookEstimated }: PriceEstimatorProps) {
  const [size, setSize] = useState<DogSize>('small');
  const [coatType, setCoatType] = useState<CoatType>('short');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('full-groom');
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>(['teeth']);

  // Base pricing adjustments according to size
  const sizeMultipliers: Record<DogSize, { label: string; sub: string; weight: string; baseAdd: number }> = {
    small: { label: 'Toy / Small', sub: 'Yorkie, Maltese, Chihuahua', weight: 'Under 20 lbs', baseAdd: 0 },
    medium: { label: 'Medium', sub: 'Frenchie, Mini Doodle, Cocker', weight: '20 - 45 lbs', baseAdd: 15 },
    large: { label: 'Large', sub: 'Golden, Lab, German Shepherd', weight: '46 - 75 lbs', baseAdd: 30 },
    giant: { label: 'Giant / XL', sub: 'Bernese, Great Dane, St. Bernard', weight: '76+ lbs', baseAdd: 50 },
  };

  const coatMultipliers: Record<CoatType, { label: string; add: number; desc: string }> = {
    short: { label: 'Smooth / Short Coat', add: 0, desc: 'Pug, Boxer, Pitbull' },
    medium: { label: 'Medium / Wire Coat', add: 10, desc: 'Schnauzer, Border Collie' },
    double: { label: 'Thick / Double Coat', add: 20, desc: 'Husky, Golden, Aussie' },
    curly_doodle: { label: 'Curly / Doodle / Poodle', add: 25, desc: 'High maintenance scissor styling' },
  };

  const currentService = useMemo(() => {
    return SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  }, [selectedServiceId]);

  // Calculate estimated total
  const estimatedPrice = useMemo(() => {
    let total = currentService.priceStartingAt;
    total += sizeMultipliers[size].baseAdd;
    total += coatMultipliers[coatType].add;

    selectedAddOnIds.forEach((addId) => {
      const addon = ADD_ONS.find((a) => a.id === addId);
      if (addon) total += addon.price;
    });

    return total;
  }, [currentService, size, coatType, selectedAddOnIds]);

  // Estimated Duration
  const estimatedTime = useMemo(() => {
    if (currentService.id === 'dog-bath') {
      return size === 'small' ? '45 - 60 min' : '60 - 80 min';
    }
    if (currentService.id === 'vip-grooming') {
      return size === 'small' ? '90 - 110 min' : '120 - 150 min';
    }
    return size === 'small' ? '75 - 90 min' : '90 - 120 min';
  }, [currentService, size]);

  const toggleAddOn = (id: string) => {
    setSelectedAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBookClick = () => {
    onBookEstimated({
      size,
      coatType,
      serviceId: selectedServiceId,
      addOnIds: selectedAddOnIds,
      estimatedTotal: estimatedPrice,
    });
  };

  return (
    <section id="estimator" className="py-16 sm:py-20 bg-[#0a0d13] border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181d26] border border-orange-500/40 text-orange-300 text-xs font-bold">
            <Calculator className="w-3.5 h-3.5 text-orange-400" />
            <span>Transparent Pricing Guide</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
            Instant Dog Grooming <span className="text-orange-400">Price Estimator</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            No hidden surcharges or surprise invoices. Select your dog’s weight, coat type, and desired service to calculate an upfront estimate before booking.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 space-y-8 bg-[#121620] p-6 sm:p-8 rounded-2xl border border-zinc-800 shadow-xl">
            
            {/* Step 1: Dog Size */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-orange-500 text-slate-950 text-xs flex items-center justify-center font-black">1</span>
                  <span>Select Dog Size / Weight</span>
                </label>
                <span className="text-xs text-orange-400 font-bold">{sizeMultipliers[size].weight}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(Object.keys(sizeMultipliers) as DogSize[]).map((key) => {
                  const item = sizeMultipliers[key];
                  const isSelected = size === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSize(key)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-orange-500 text-slate-950 font-bold border-orange-400 shadow-md shadow-orange-950'
                          : 'bg-[#181d28] border-zinc-800 text-slate-200 hover:border-orange-500/50 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold">{item.label}</div>
                      <div className={`text-[11px] font-semibold ${isSelected ? 'text-slate-900' : 'text-orange-400'}`}>{item.weight}</div>
                      <div className={`text-[10px] mt-1 truncate ${isSelected ? 'text-slate-800' : 'text-slate-400'}`}>{item.sub}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Service Selection */}
            <div>
              <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-orange-500 text-slate-950 text-xs flex items-center justify-center font-black">2</span>
                <span>Choose Core Service</span>
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {SERVICES.filter((s) => s.category !== 'alacarte').slice(0, 3).map((srv) => {
                  const isSelected = selectedServiceId === srv.id;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#1f2635] border-orange-500 ring-1 ring-orange-500 shadow-md text-white'
                          : 'bg-[#181d28] border-zinc-800 text-slate-300 hover:border-orange-500/40 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-bold text-white">{srv.name}</span>
                          {srv.popular && (
                            <span className="text-[9px] bg-orange-500 text-slate-950 px-1.5 py-0.5 rounded font-black uppercase">
                              Best
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                          {srv.tagline}
                        </p>
                      </div>
                      <div className="text-xs font-bold text-orange-400 mt-2.5 pt-2 border-t border-zinc-800">
                        From ${srv.priceStartingAt}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Coat Condition */}
            <div>
              <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-orange-500 text-slate-950 text-xs flex items-center justify-center font-black">3</span>
                <span>Coat Type & Maintenance Level</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(Object.keys(coatMultipliers) as CoatType[]).map((key) => {
                  const coat = coatMultipliers[key];
                  const isSelected = coatType === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setCoatType(key)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#1f2635] border-orange-500 ring-1 ring-orange-500 text-white'
                          : 'bg-[#181d28] border-zinc-800 text-slate-300 hover:border-orange-500/40 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{coat.label}</div>
                        <div className="text-[11px] text-slate-400">{coat.desc}</div>
                      </div>
                      <span className="text-xs font-bold text-orange-400">
                        {coat.add === 0 ? 'Included' : `+$${coat.add}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Optional Add-ons */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-orange-500 text-slate-950 text-xs flex items-center justify-center font-black">4</span>
                  <span>Optional Spa Add-Ons</span>
                </label>
                <span className="text-xs text-slate-400">Select any extra care</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ADD_ONS.map((addon) => {
                  const isChecked = selectedAddOnIds.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-2.5 rounded-lg border flex items-center justify-between gap-2 cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#1f2635] border-orange-500/80 text-white'
                          : 'bg-[#181d28] border-zinc-800 text-slate-300 hover:border-orange-500/40'
                      }`}
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border flex-shrink-0 ${
                            isChecked
                              ? 'bg-orange-500 border-orange-400 text-slate-950 font-bold'
                              : 'border-slate-600 bg-transparent'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div className="truncate">
                          <div className="text-xs font-bold text-white truncate">{addon.name}</div>
                          <div className="text-[10px] text-slate-400 truncate">{addon.description}</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-orange-400 flex-shrink-0">
                        +${addon.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-time Summary Card (Right) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-gradient-to-b from-[#181d28] to-[#121620] rounded-2xl border-2 border-orange-500/40 p-6 sm:p-7 shadow-2xl shadow-orange-950/50 space-y-6">
              
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Estimated Total</span>
                  <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit',sans-serif] mt-0.5">
                    ${estimatedPrice}
                    <span className="text-sm font-normal text-slate-400 ml-1.5">est.</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Est. Duration</span>
                  <div className="flex items-center gap-1.5 text-orange-300 text-sm font-bold mt-1">
                    <Clock className="w-4 h-4 text-orange-400" />
                    <span>{estimatedTime}</span>
                  </div>
                </div>
              </div>

              {/* Chosen Configuration details */}
              <div className="space-y-3 text-xs">
                <div className="text-slate-400 font-bold uppercase tracking-wider">Estimated Service Summary</div>
                
                <div className="bg-[#0f1218] p-3.5 rounded-xl border border-zinc-800 space-y-2">
                  <div className="flex justify-between font-bold">
                    <span className="text-white">{currentService.name}</span>
                    <span className="text-orange-400">${currentService.priceStartingAt}</span>
                  </div>
                  
                  <div className="flex justify-between text-slate-300">
                    <span>Size: {sizeMultipliers[size].label} ({sizeMultipliers[size].weight})</span>
                    <span>+{sizeMultipliers[size].baseAdd === 0 ? '$0' : `$${sizeMultipliers[size].baseAdd}`}</span>
                  </div>

                  <div className="flex justify-between text-slate-300">
                    <span>Coat: {coatMultipliers[coatType].label}</span>
                    <span>+{coatMultipliers[coatType].add === 0 ? '$0' : `$${coatMultipliers[coatType].add}`}</span>
                  </div>

                  {selectedAddOnIds.length > 0 && (
                    <div className="pt-2 border-t border-zinc-800 space-y-1">
                      <span className="text-[11px] font-bold text-orange-400 block">Selected Add-ons:</span>
                      {selectedAddOnIds.map((aid) => {
                        const addon = ADD_ONS.find((a) => a.id === aid);
                        if (!addon) return null;
                        return (
                          <div key={aid} className="flex justify-between text-slate-300 text-[11px]">
                            <span>+ {addon.name}</span>
                            <span>${addon.price}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* What's always included checklist */}
              <div className="space-y-2 text-xs">
                <span className="text-white font-bold block">Included in Every Appointment:</span>
                <ul className="space-y-1.5 text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                    <span>100% Gentle Hand Drying (No Heated Cages)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                    <span>Hydromassage Organic Tearless Bath</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                    <span>Nail Trim & Sanitary Area Hygiene</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                    <span>Text notification 15 mins before pick-up</span>
                  </li>
                </ul>
              </div>

              {/* CTA Action */}
              <button
                id="book-estimate-btn"
                onClick={handleBookClick}
                className="w-full py-3.5 px-4 rounded-xl font-black text-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 shadow-lg shadow-orange-950/80 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Book This Estimated Package</span>
              </button>

              <div className="text-[11px] text-slate-400 text-center leading-normal">
                *Final price may vary slightly depending on coat matting or extreme pet temperament.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

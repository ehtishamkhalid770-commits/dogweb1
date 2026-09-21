import { useState } from 'react';
import { BEFORE_AFTER_ITEMS } from '../data/mockData';
import { Sparkles, Check, Heart } from 'lucide-react';
import { SafeImage } from './SafeImage';

export function BeforeAfterGallery() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'after' | 'before' | 'both'>('both');

  const currentItem = BEFORE_AFTER_ITEMS[selectedIdx];

  return (
    <section id="transformations" className="py-16 sm:py-24 bg-[#0a0d13] border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181d26] border border-orange-500/40 text-orange-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Proven Craftsmanship</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
            Real Transformations, <span className="text-orange-400">Zero Stress</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From tangled doodle curls and heavy shedding undercoats to precision breed haircuts, see what gentle, unhurried care accomplishes.
          </p>
        </div>

        {/* Pup Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelectedIdx(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedIdx === idx
                  ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-950'
                  : 'bg-[#151922] text-slate-200 border border-zinc-800 hover:border-orange-500/40 hover:text-white'
              }`}
            >
              <span>🐾</span>
              <span>{item.dogName}</span>
              <span className={`text-[11px] hidden sm:inline ${selectedIdx === idx ? 'text-slate-900' : 'text-slate-400'}`}>
                ({item.breed.split(' ')[0]})
              </span>
            </button>
          ))}
        </div>

        {/* Main Transformation Showcase Card */}
        <div className="bg-[#121620] rounded-2xl border border-zinc-800 p-6 sm:p-8 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Photos (Side-by-side or Toggled) */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Mobile View Toggle Buttons */}
              <div className="flex sm:hidden justify-center gap-2 mb-2">
                <button
                  onClick={() => setActiveTab('before')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                    activeTab === 'before' ? 'bg-amber-500 text-slate-950' : 'bg-[#1a202c] text-slate-300'
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setActiveTab('after')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                    activeTab === 'after' ? 'bg-orange-500 text-slate-950' : 'bg-[#1a202c] text-slate-300'
                  }`}
                >
                  After
                </button>
                <button
                  onClick={() => setActiveTab('both')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                    activeTab === 'both' ? 'bg-white text-slate-950' : 'bg-[#1a202c] text-slate-300'
                  }`}
                >
                  Both
                </button>
              </div>

              {/* Photos Container */}
              <div className="grid sm:grid-cols-2 gap-4">
                
                {/* Before Photo */}
                {(activeTab === 'before' || activeTab === 'both' || window.innerWidth >= 640) && (
                  <div className="relative rounded-xl overflow-hidden bg-black/50 border border-zinc-800 group">
                    <SafeImage
                      src={currentItem.beforeImg}
                      alt={`Before grooming ${currentItem.dogName}`}
                      className="w-full h-72 sm:h-80 object-cover object-center filter saturate-90"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-300 border border-amber-500/30">
                      Before Arrival
                    </div>
                  </div>
                )}

                {/* After Photo */}
                {(activeTab === 'after' || activeTab === 'both' || window.innerWidth >= 640) && (
                  <div className="relative rounded-xl overflow-hidden bg-black/50 border-2 border-orange-500/60 group shadow-lg shadow-orange-950/40">
                    <SafeImage
                      src={currentItem.afterImg}
                      alt={`After grooming ${currentItem.dogName}`}
                      className="w-full h-72 sm:h-80 object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 bg-orange-500 text-slate-950 px-3 py-1 rounded-full text-xs font-black shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Spa Fresh & Pampered</span>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Right: Pet Profile & Story */}
            <div className="lg:col-span-4 space-y-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-black text-white">{currentItem.dogName}</h3>
                  <span className="text-xs bg-[#1f2533] text-orange-400 px-2.5 py-0.5 rounded-full border border-orange-500/30 font-bold">
                    {currentItem.breed}
                  </span>
                </div>
                <p className="text-xs text-orange-400 font-semibold">{currentItem.service}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0e1117] border border-zinc-800 space-y-2">
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-orange-400" />
                  <span>The Grooming Challenge:</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentItem.story}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">Techniques Applied:</span>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                    <span>Hydrating Argan Oil conditioning soak</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                    <span>Custom Japanese scissor teddy-bear face blend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                    <span>Gentle pad trimming & blueberry facial scrub</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#estimator"
                  className="block text-center py-2.5 px-4 rounded-xl text-xs font-bold text-orange-300 hover:text-white bg-[#1a202c] hover:bg-[#232b3c] border border-orange-500/30 transition-all"
                >
                  Estimate Price for Your {currentItem.breed.split(' ')[0]} →
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

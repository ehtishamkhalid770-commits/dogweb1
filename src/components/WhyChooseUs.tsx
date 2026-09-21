import { Check, X, Shield, Clock, Award, Heart } from 'lucide-react';

export function WhyChooseUs() {
  const comparisonData = [
    {
      feature: 'Pacing & Attention',
      bestBuddies: 'Unhurried, dedicated 1-on-1 time so anxious dogs settle in peacefully',
      mobileVans: 'Rushed 40-min quotas to rush to the next driveway appointment',
      chains: 'High-volume conveyor belt with constantly rotating groomers',
    },
    {
      feature: 'Pricing & Value',
      bestBuddies: 'Fair, transparent rates starting at $45-$65 (30-40% lower)',
      mobileVans: 'Expensive premiums starting at $150–$220+ per dog',
      chains: 'Hidden add-on fees for basic shampoo, conditioner & drying',
    },
    {
      feature: 'Drying Method',
      bestBuddies: '100% Hand-held variable-speed blowouts with zero cage bake',
      mobileVans: 'Cramped quarters with hot, loud generators outside your window',
      chains: 'Stacked metal cages with forced industrial heat dryers',
    },
    {
      feature: 'Facility Environment',
      bestBuddies: 'Spacious, climate-controlled Pacifica salon with fresh ocean breeze',
      mobileVans: 'Tight, humid van interior with diesel fumes and generator rumble',
      chains: 'Noisy, echoing store floors surrounded by unfamiliar shoppers',
    },
    {
      feature: 'Products Used',
      bestBuddies: 'Organic, tearless botanical shampoos with restorative conditioners',
      mobileVans: 'Limited tank water, often generic diluted cleansers',
      chains: 'Mass-market bulk detergents that can irritate sensitive skin',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#0a0d13] border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181d26] border border-orange-500/40 text-orange-300 text-xs font-bold">
            <Heart className="w-3.5 h-3.5 text-orange-400" />
            <span>The Best Buddies Difference</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
            Why Waste Money on <span className="text-orange-400">Rushed Mobile Vans?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our mission has always been simple: <strong className="text-white">“The Perfect Grooming” at affordable prices.</strong> Because we are not mobile, we never rush to beat street traffic. We have all the time your best buddy needs to feel loved, pampered, and completely at ease.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <div className="p-6 rounded-2xl bg-[#121620] border border-zinc-800 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#1a202c] border border-orange-500/30 text-orange-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">We Never Rush</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mobile groomers are in a hurry to get to their next block or driveway. We operate at your pet’s natural pace, pausing whenever an anxious or senior pup needs a break.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121620] border border-orange-500/50 ring-1 ring-orange-500/30 shadow-lg space-y-3 relative">
            <div className="absolute top-4 right-4 text-[10px] uppercase font-black tracking-wider bg-orange-500 text-slate-950 px-2.5 py-0.5 rounded-full">
              Promise
            </div>
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-300 flex items-center justify-center">
              <Shield className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-base font-bold text-white">100% Cage-Free Salon</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              No heated cage dryer boxes, no dark enclosures. Your dog is gently held, hand-dried with safe velocity dryers, and surrounded by quiet calming vibes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121620] border border-zinc-800 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#1a202c] border border-orange-500/30 text-orange-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Spa Quality, Fair Prices</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Save up to 40% compared to typical Bay Area mobile grooming fees while giving your pet a true salon experience with unlimited warm water and premium botanicals.
            </p>
          </div>
        </div>

        {/* Detailed Comparison Matrix */}
        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-[#121620] shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-zinc-800 bg-[#0c0f16]">
                <th className="py-4 px-4 sm:px-6 font-bold text-slate-400 uppercase tracking-wider text-xs">
                  Feature / Care Standard
                </th>
                <th className="py-4 px-4 sm:px-6 font-black text-orange-300 bg-[#1a202c] border-x border-orange-500/30">
                  🐾 Best Buddies Pacifica
                </th>
                <th className="py-4 px-4 sm:px-6 font-semibold text-slate-400">
                  Mobile Grooming Vans
                </th>
                <th className="py-4 px-4 sm:px-6 font-semibold text-slate-400">
                  Big-Box Commercial Chains
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/70">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#181d28] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-white">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-white bg-[#1a202c]/70 border-x border-orange-500/20 font-medium">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>{row.bestBuddies}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-400">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-400/80 flex-shrink-0 mt-0.5" />
                      <span>{row.mobileVans}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-400">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-400/80 flex-shrink-0 mt-0.5" />
                      <span>{row.chains}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

import { TESTIMONIALS, BUSINESS_INFO } from '../data/mockData';
import { Star, ShieldCheck, ThumbsUp } from 'lucide-react';
import { SafeImage } from './SafeImage';

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#0a0d13] border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181d26] border border-orange-500/40 text-orange-300 text-xs font-bold">
            <ThumbsUp className="w-3.5 h-3.5 text-orange-400" />
            <span>Verified Pet Parents</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
            Loved by Dogs & Owners Across the <span className="text-orange-400">Bay Area</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Read what pet families from Pacifica, Daly City, San Mateo, and Burlingame say about our gentle, unhurried care.
          </p>

          {/* Rating Summary Bar */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#141822] border border-zinc-800 mt-2 shadow-lg">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-black text-white text-sm">4.9 / 5.0</span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs text-orange-400 font-bold">Over 380+ 5-Star Reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#121620] border border-zinc-800 hover:border-orange-500/40 transition-all flex flex-col justify-between shadow-xl space-y-4"
            >
              <div className="space-y-3">
                
                {/* Header of review */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <SafeImage
                      src={item.avatarUrl}
                      alt={item.ownerName}
                      className="w-11 h-11 rounded-full object-cover border border-orange-500/40"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{item.ownerName}</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                      </h4>
                      <div className="text-[11px] text-orange-300/90 font-medium">{item.city}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex text-amber-400 justify-end">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{item.date}</span>
                  </div>
                </div>

                {/* Comment quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Dog info strip */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <SafeImage
                    src={item.dogImgUrl}
                    alt={item.dogName}
                    className="w-7 h-7 rounded-full object-cover border border-zinc-700"
                  />
                  <div>
                    <span className="font-bold text-white">{item.dogName}</span>
                    <span className="text-slate-400 ml-1.5 text-[11px]">({item.breed})</span>
                  </div>
                </div>
                <span className="text-[10px] text-orange-400 font-bold bg-[#1a202c] px-2.5 py-0.5 rounded border border-orange-500/30">
                  Verified Client
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            Have you visited us recently? We love seeing your happy updates!{' '}
            <a
              href={BUSINESS_INFO.smsUrl}
              className="text-orange-400 hover:text-orange-300 font-bold underline"
            >
              Text us your dog’s photo
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

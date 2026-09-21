import { Phone, MessageSquare, MapPin, Clock, ArrowUp, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export function Footer({ onNavigate, onOpenBooking }: FooterProps) {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080b0f] border-t border-zinc-800 text-slate-300 relative">
      
      {/* Pre-footer Call-To-Action Banner */}
      <div className="border-b border-zinc-800 bg-gradient-to-r from-[#121620] via-[#1a202c] to-[#121620] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-3xl font-black text-white font-['Outfit',sans-serif]">
              Ready to Give Your Best Buddy the Royal Treatment?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Spacious, cage-free salon in Pacifica with unhurried care and upfront pricing. Appointments book quickly for weekends.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 shadow-lg shadow-orange-950/60 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Appointment</span>
            </button>
            
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#121620] hover:bg-[#1a202c] text-orange-300 border border-orange-500/40 hover:text-white transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (Cols 1-4) with Official Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-0.5 overflow-hidden flex items-center justify-center ring-2 ring-orange-500/50 shadow-md">
                <img
                  src="/logo.svg"
                  alt="Best Buddies Dog Grooming Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-black text-lg text-white font-['Outfit',sans-serif] block leading-none">
                  Best Buddies
                </span>
                <span className="text-[11px] text-orange-400 font-bold tracking-wide">
                  Dog Grooming Bay Area
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Affordable, cage-free pet grooming & dog spa in Pacifica, CA. Dedicated unhurried attention, warm organic hydromassage, and gentle care for all breeds.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-orange-300 font-semibold">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>Pacifica, CA 94044 (Serving Greater Bay Area)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>Mon-Fri: 9am-6pm • Sat: 9am-1pm • Sun: Appt Only</span>
              </div>
            </div>
          </div>

          {/* Quick Pages Navigation (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Website Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-orange-300 transition-colors text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-orange-300 transition-colors text-left cursor-pointer"
                >
                  Services & Pricing Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-orange-300 transition-colors text-left cursor-pointer"
                >
                  About Us (Why We Never Rush)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-orange-300 transition-colors text-left cursor-pointer"
                >
                  Photos & Transformations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('service-areas')}
                  className="hover:text-orange-300 transition-colors text-left cursor-pointer"
                >
                  Bay Area Service Cities
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('reviews')}
                  className="hover:text-orange-300 transition-colors text-left cursor-pointer"
                >
                  Customer Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-orange-400 hover:text-orange-300 font-bold transition-colors text-left cursor-pointer"
                >
                  Contact & Book Appointment →
                </button>
              </li>
            </ul>
          </div>

          {/* Service Areas (Cols 8-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Bay Area Service Cities
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Pacifica • Daly City • San Bruno • South San Francisco • Colma • Burlingame • Millbrae • San Mateo • Belmont • San Carlos • Redwood City • Menlo Park • Palo Alto • Stanford • Woodside • Atherton.
            </p>
            <div className="pt-1">
              <button
                onClick={() => handleNav('service-areas')}
                className="text-xs font-bold text-orange-400 hover:text-white transition-colors cursor-pointer"
              >
                Check Driving Times to Pacifica →
              </button>
            </div>
          </div>

          {/* Direct Contact & WhatsApp (Cols 10-12) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="block text-white font-bold hover:text-orange-400 transition-colors"
              >
                📞 {BUSINESS_INFO.phone}
              </a>
              <a
                href={BUSINESS_INFO.smsUrl}
                className="block text-orange-300 hover:text-white transition-colors"
              >
                💬 Text Us Anytime
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14231d] text-emerald-300 border border-emerald-700/50 hover:bg-[#1b352b] text-[11px] font-bold"
              >
                <span>WhatsApp Message</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Copyright © {new Date().getFullYear()} Best Buddies Dog Grooming Bay Area • Affordable Pet Grooming Dog Spa in Pacifica. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-orange-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Floating Bottom Action Bar for Mobile Devices */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d1016]/95 backdrop-blur-md border-t border-zinc-800 p-2.5 px-4 shadow-2xl flex items-center justify-between gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 py-2.5 px-2 rounded-xl bg-[#181d28] border border-orange-500/40 text-orange-300 text-center text-xs font-bold flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call (970) 987-3091</span>
        </a>

        <a
          href={BUSINESS_INFO.smsUrl}
          className="p-2.5 rounded-xl bg-[#181d28] border border-zinc-800 text-orange-400 flex items-center justify-center"
          title="Send SMS"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 py-2.5 px-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 text-center text-xs font-black flex items-center justify-center gap-1.5 shadow cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Online</span>
        </button>
      </div>

    </footer>
  );
}

import { useState } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  Calendar, 
  Home, 
  Sparkles, 
  Image as ImageIcon, 
  MapPin, 
  Star, 
  Info, 
  Mail 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export function Header({ currentPage, onNavigate, onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Services', icon: Sparkles },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'service-areas', label: 'Service Areas', icon: MapPin },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'about', label: 'About', icon: Info },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0d1015]/95 backdrop-blur-md border-b border-orange-500/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Brand Logo & Name */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer transition-opacity hover:opacity-95"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white p-0.5 shadow-md shadow-orange-950/40 ring-2 ring-orange-500 group-hover:ring-orange-400 transition-all flex items-center justify-center overflow-hidden flex-shrink-0">
              <img
                src="/logo.svg"
                alt="Best Buddies Dog Grooming Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-['Outfit',sans-serif] leading-tight group-hover:text-orange-400 transition-colors">
                Best Buddies
              </span>
              <span className="text-[11px] sm:text-xs text-orange-400 font-medium tracking-wide">
                Dog Grooming • Pacifica, CA
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Clean, Uncluttered, Easy to use) */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'text-orange-400 font-bold bg-orange-500/10 border border-orange-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA Controls */}
          <div className="hidden md:flex items-center gap-4">
            <a
              id="nav-call-link"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-orange-400 transition-colors py-1.5"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="nav-book-btn"
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-orange-500 hover:bg-orange-400 text-slate-950 shadow-md shadow-orange-950/40 transition-all cursor-pointer hover:shadow-orange-500/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Online</span>
            </button>
          </div>

          {/* Mobile & Tablet Right Controls */}
          <div className="flex xl:hidden items-center gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500/20 transition-colors"
              title="Call Us"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-2 rounded-xl bg-orange-500 hover:bg-orange-400 text-slate-950 text-xs sm:text-sm font-bold cursor-pointer transition-all shadow-sm"
            >
              Book Now
            </button>

            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white cursor-pointer transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Clean Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-white/10 py-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-orange-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-200 hover:bg-white/5 hover:text-orange-400'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-orange-400'}`} />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl font-bold text-sm bg-orange-500 text-slate-950 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-orange-950/40 hover:bg-orange-400 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-orange-400 text-xs font-semibold text-center flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

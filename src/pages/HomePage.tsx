import { PageId, DogSize, CoatType } from '../types';
import { Hero } from '../components/Hero';
import { PriceEstimator } from '../components/PriceEstimator';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { BeforeAfterGallery } from '../components/BeforeAfterGallery';
import { ServiceAreaChecker } from '../components/ServiceAreaChecker';
import { ReviewsSection } from '../components/ReviewsSection';
import { FaqSection } from '../components/FaqSection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string) => void;
  onBookEstimated: (selection: {
    size: DogSize;
    coatType: CoatType;
    serviceId: string;
    addOnIds: string[];
    estimatedTotal: number;
  }) => void;
}

export function HomePage({ onNavigate, onOpenBooking, onBookEstimated }: HomePageProps) {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero onOpenBooking={() => onOpenBooking()} />

      {/* Quick Navigation Cards Bar */}
      <section className="bg-[#0a0d13] border-b border-zinc-800 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => onNavigate('services')}
            className="p-4 rounded-xl bg-[#121620] border border-zinc-800 hover:border-orange-500/50 text-left transition-all group cursor-pointer shadow"
          >
            <div className="text-xl mb-1">✂️</div>
            <div className="font-bold text-white text-xs sm:text-sm group-hover:text-orange-400 transition-colors">
              Grooming Menu
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Haircuts, baths & VIP spa</div>
          </button>

          <button
            onClick={() => onNavigate('about')}
            className="p-4 rounded-xl bg-[#121620] border border-zinc-800 hover:border-orange-500/50 text-left transition-all group cursor-pointer shadow"
          >
            <div className="text-xl mb-1">🏡</div>
            <div className="font-bold text-white text-xs sm:text-sm group-hover:text-orange-400 transition-colors">
              Cage-Free Spa
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Why we never rush your dog</div>
          </button>

          <button
            onClick={() => onNavigate('gallery')}
            className="p-4 rounded-xl bg-[#121620] border border-zinc-800 hover:border-orange-500/50 text-left transition-all group cursor-pointer shadow"
          >
            <div className="text-xl mb-1">📸</div>
            <div className="font-bold text-white text-xs sm:text-sm group-hover:text-orange-400 transition-colors">
              Before & After
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Real client transformations</div>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="p-4 rounded-xl bg-[#121620] border border-zinc-800 hover:border-orange-500/50 text-left transition-all group cursor-pointer shadow"
          >
            <div className="text-xl mb-1">📅</div>
            <div className="font-bold text-white text-xs sm:text-sm group-hover:text-orange-400 transition-colors">
              Book & Contact
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Call/Text (970) 987-3091</div>
          </button>
        </div>
      </section>

      {/* Services Section Preview with Link to Full Services */}
      <ServicesSection onSelectService={onOpenBooking} />

      {/* Instant Interactive Price Estimator */}
      <PriceEstimator onBookEstimated={onBookEstimated} />

      {/* Why Choose Us vs Mobile Vans */}
      <WhyChooseUs />

      {/* Before & After Craftsmanship Preview */}
      <BeforeAfterGallery />

      {/* Bay Area Coverage Preview */}
      <ServiceAreaChecker onOpenBooking={() => onOpenBooking()} />

      {/* Testimonials */}
      <ReviewsSection />

      {/* FAQ Accordion */}
      <FaqSection />
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { PageId, DogSize, CoatType } from './types';
import { ChevronRight, Home } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [initialSize, setInitialSize] = useState<DogSize | undefined>(undefined);
  const [initialCoat, setInitialCoat] = useState<CoatType | undefined>(undefined);
  const [initialAddOns, setInitialAddOns] = useState<string[] | undefined>(undefined);
  const [estimatedTotal, setEstimatedTotal] = useState<number | undefined>(undefined);

  // Sync hash routing on mount and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'services', 'about', 'gallery', 'service-areas', 'reviews', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId || 'full-groom');
    setInitialSize(undefined);
    setInitialCoat(undefined);
    setInitialAddOns(undefined);
    setEstimatedTotal(undefined);
    setIsBookingOpen(true);
  };

  const handleBookFromEstimator = (selection: {
    size: DogSize;
    coatType: CoatType;
    serviceId: string;
    addOnIds: string[];
    estimatedTotal: number;
  }) => {
    setSelectedServiceId(selection.serviceId);
    setInitialSize(selection.size);
    setInitialCoat(selection.coatType);
    setInitialAddOns(selection.addOnIds);
    setEstimatedTotal(selection.estimatedTotal);
    setIsBookingOpen(true);
  };

  const pageNames: Record<PageId, string> = {
    home: 'Home',
    services: 'Services & Pricing',
    about: 'About Us',
    gallery: 'Photo Gallery',
    'service-areas': 'Bay Area Service Cities',
    reviews: 'Customer Reviews',
    contact: 'Contact & Booking',
  };

  return (
    <div className="min-h-screen bg-[#0a0d13] text-slate-100 flex flex-col selection:bg-orange-500 selection:text-slate-950 pb-16 lg:pb-0">
      {/* Top Header with Multi-Page Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Breadcrumb Bar for Inner Pages (Enhanced User-Friendliness) */}
      {currentPage !== 'home' && (
        <div className="bg-[#0e121a] border-b border-zinc-800 px-4 sm:px-6 py-2.5">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-400">
            <button
              onClick={() => handleNavigate('home')}
              className="hover:text-orange-300 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5 text-orange-400" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-orange-300 font-bold">{pageNames[currentPage]}</span>
          </div>
        </div>
      )}

      {/* Main Multi-Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onBookEstimated={handleBookFromEstimator}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenBooking={handleOpenBooking}
            onBookEstimated={handleBookFromEstimator}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onOpenBooking={handleOpenBooking} />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage />
        )}

        {currentPage === 'service-areas' && (
          <ServiceAreasPage onOpenBooking={handleOpenBooking} />
        )}

        {currentPage === 'reviews' && (
          <ReviewsPage />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer with Multi-Page Links & Contact Info */}
      <Footer onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />

      {/* Global Interactive Booking Drawer / Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={selectedServiceId}
        initialSize={initialSize}
        initialCoat={initialCoat}
        initialAddOns={initialAddOns}
        estimatedTotal={estimatedTotal}
      />
    </div>
  );
}

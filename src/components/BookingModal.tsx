import { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, Phone, MessageSquare, Dog, User, AlertCircle } from 'lucide-react';
import { SERVICES, ADD_ONS, BUSINESS_INFO } from '../data/mockData';
import { DogSize, CoatType } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialSize?: DogSize;
  initialCoat?: CoatType;
  initialAddOns?: string[];
  estimatedTotal?: number;
}

export function BookingModal({
  isOpen,
  onClose,
  initialServiceId,
  initialSize,
  initialCoat,
  initialAddOns,
}: BookingModalProps) {
  const [dogName, setDogName] = useState('');
  const [breed, setBreed] = useState('');
  const [size, setSize] = useState<DogSize>(initialSize || 'small');
  const [serviceId, setServiceId] = useState<string>(initialServiceId || 'full-groom');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(initialAddOns || []);
  
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (9:00 AM - 12:00 PM)');
  const [notes, setNotes] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Sync props when opening
  useEffect(() => {
    if (initialServiceId) setServiceId(initialServiceId);
    if (initialSize) setSize(initialSize);
    if (initialAddOns) setSelectedAddOns(initialAddOns);
  }, [initialServiceId, initialSize, initialCoat, initialAddOns, isOpen]);

  // Set default preferred date to tomorrow if empty
  useEffect(() => {
    if (!preferredDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const yyyy = tomorrow.getFullYear();
      const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
      const dd = String(tomorrow.getDate()).padStart(2, '0');
      setPreferredDate(`${yyyy}-${mm}-${dd}`);
    }
  }, [preferredDate]);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dogName.trim()) {
      setFormError('Please enter your dog’s name.');
      return;
    }
    if (!ownerName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!phone.trim()) {
      setFormError('Please enter your phone number so we can confirm.');
      return;
    }

    setFormError('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  // Prepare custom SMS link with all details pre-filled for user convenience
  const smsBody = encodeURIComponent(
    `Hi Best Buddies! I would like to book a grooming appointment:\n` +
    `• Dog: ${dogName} (${breed || 'Mixed'}, ${size})\n` +
    `• Service: ${currentService.name}\n` +
    `• Preferred Date: ${preferredDate} (${preferredTime})\n` +
    `• Owner: ${ownerName}, Phone: ${phone}\n` +
    `${notes ? `• Notes: ${notes}` : ''}`
  );
  const directSmsUrl = `sms:+19709873091?body=${smsBody}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#121620] border border-orange-500/50 rounded-2xl shadow-2xl overflow-hidden my-6">
        
        {/* Modal Top Header with Logo */}
        <div className="bg-[#0b0e14] px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white p-0.5 overflow-hidden flex items-center justify-center ring-1 ring-orange-400">
              <img src="/logo.svg" alt="Best Buddies Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-base font-black text-white font-['Outfit',sans-serif]">
                Book Grooming at Pacifica Salon
              </h3>
              <p className="text-[11px] text-orange-400 font-bold">
                Cage-Free • Gentle Care • Phone: (970) 987-3091
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            /* Confirmation State */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 border-2 border-orange-400 text-orange-400 flex items-center justify-center mx-auto shadow-lg shadow-orange-950">
                <CheckCircle2 className="w-9 h-9 text-orange-400" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-black text-white font-['Outfit',sans-serif]">
                  Appointment Request Received!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Thank you <strong className="text-white">{ownerName}</strong>! We have logged your request for <strong className="text-orange-400">{dogName}</strong> for <strong className="text-white">{preferredDate}</strong>.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-[#0b0e14] p-4 rounded-xl border border-zinc-800 text-left text-xs max-w-md mx-auto space-y-2">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Dog:</span>
                  <span className="font-bold text-white">{dogName} ({breed || 'Dog'}, {size})</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Service:</span>
                  <span className="font-bold text-orange-400">{currentService.name}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Date & Window:</span>
                  <span className="font-bold text-white">{preferredDate} • {preferredTime.split(' ')[0]}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Owner Phone:</span>
                  <span className="font-bold text-white">{phone}</span>
                </div>
              </div>

              {/* Action triggers for rapid client confirmation */}
              <div className="space-y-3 max-w-md mx-auto pt-2">
                <p className="text-xs text-slate-300 font-medium">
                  To confirm in real time or ask urgent questions, send our groomers a direct text:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-2.5">
                  <a
                    href={directSmsUrl}
                    className="py-3 px-4 rounded-xl font-black text-xs bg-orange-500 hover:bg-orange-400 text-slate-950 flex items-center justify-center gap-2 shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send SMS to (970) 987-3091</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="py-3 px-4 rounded-xl font-bold text-xs bg-[#1a202c] hover:bg-[#222a3a] text-orange-300 border border-orange-500/40 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-orange-400" />
                    <span>Call To Confirm</span>
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Close & Return to Website
                </button>
              </div>

            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {formError && (
                <div className="p-3 rounded-xl bg-rose-950/70 border border-rose-600/50 flex items-center gap-2 text-xs text-rose-200">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Section 1: Dog Details */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                  <Dog className="w-4 h-4" />
                  <span>1. Pet Details</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Dog’s Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={dogName}
                      onChange={(e) => setDogName(e.target.value)}
                      placeholder="e.g. Teddy, Bella, Charlie"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white placeholder-slate-500 text-xs focus:border-orange-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Breed
                    </label>
                    <input
                      type="text"
                      value={breed}
                      onChange={(e) => setBreed(e.target.value)}
                      placeholder="e.g. Doodle, Frenchie, Husky, Shih Tzu"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white placeholder-slate-500 text-xs focus:border-orange-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Size Pills */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Dog Size
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: 'small', label: 'Small', sub: '<20 lbs' },
                      { id: 'medium', label: 'Medium', sub: '20-45 lbs' },
                      { id: 'large', label: 'Large', sub: '46-75 lbs' },
                      { id: 'giant', label: 'Giant', sub: '76+ lbs' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSize(item.id as DogSize)}
                        className={`p-2 rounded-xl text-center border text-xs cursor-pointer transition-all ${
                          size === item.id
                            ? 'bg-orange-500 border-orange-400 text-slate-950 font-black shadow'
                            : 'bg-[#0b0e14] border-zinc-800 text-slate-300 hover:text-white'
                        }`}
                      >
                        <div>{item.label}</div>
                        <div className="text-[10px] opacity-80">{item.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 2: Service & Date */}
              <div className="space-y-3 pt-2 border-t border-zinc-800">
                <div className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>2. Service & Scheduling</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Select Grooming Service
                  </label>
                  <select
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white text-xs focus:border-orange-400 focus:outline-none cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id} className="bg-[#121620]">
                        {s.name} (from ${s.priceStartingAt} • {s.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white text-xs focus:border-orange-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Preferred Arrival Window
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white text-xs focus:border-orange-400 focus:outline-none cursor-pointer"
                    >
                      <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="Early Afternoon (12:00 PM - 3:00 PM)">Early Afternoon (12:00 PM - 3:00 PM)</option>
                      <option value="Late Afternoon (3:00 PM - 5:30 PM)">Late Afternoon (3:00 PM - 5:30 PM)</option>
                      <option value="Saturday Morning (9:00 AM - 1:00 PM)">Saturday Slot (9:00 AM - 1:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Optional add-on pills */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Add-on Spa Services (Optional)
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {ADD_ONS.slice(0, 5).map((addon) => {
                      const active = selectedAddOns.includes(addon.id);
                      return (
                        <button
                          key={addon.id}
                          type="button"
                          onClick={() => toggleAddOn(addon.id)}
                          className={`px-2.5 py-1 rounded-lg text-xs transition-colors cursor-pointer border ${
                            active
                              ? 'bg-orange-500 text-slate-950 font-bold border-orange-400'
                              : 'bg-[#0b0e14] border-zinc-800 text-slate-300 hover:text-white'
                          }`}
                        >
                          + {addon.name} (${addon.price})
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Section 3: Owner Details */}
              <div className="space-y-3 pt-2 border-t border-zinc-800">
                <div className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  <span>3. Your Contact Information</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white placeholder-slate-500 text-xs focus:border-orange-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Phone Number (For Text Confirmation) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(415) 555-0199"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white placeholder-slate-500 text-xs focus:border-orange-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Special Notes / Temperament (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Nervous around loud clippers, sensitive skin, hip dysplasia, senior dog..."
                    className="w-full px-3.5 py-2 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white placeholder-slate-500 text-xs focus:border-orange-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-black text-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 shadow-lg shadow-orange-950/80 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>Submit Appointment Request</span>
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  No advance credit card required. We will confirm via SMS within 2 hours.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}

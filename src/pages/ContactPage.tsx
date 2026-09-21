import { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Calendar, CheckCircle2, CreditCard } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/mockData';
import { DogSize } from '../types';

export function ContactPage() {
  const [dogName, setDogName] = useState('');
  const [breed, setBreed] = useState('');
  const [size, setSize] = useState<DogSize>('small');
  const [serviceId, setServiceId] = useState('full-groom');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (9:00 AM - 12:00 PM)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dogName || !ownerName || !phone) return;
    setSubmitted(true);
  };

  const currentService = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  const smsDirect = encodeURIComponent(
    `Hi Best Buddies! I want to book an appointment:\nDog: ${dogName || 'My Dog'} (${size})\nService: ${currentService.name}\nDate: ${preferredDate || 'Soon'}\nName: ${ownerName || 'Pet Parent'}\nPhone: ${phone}`
  );

  return (
    <div className="py-12 sm:py-20 bg-[#0a0d13] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181d26] border border-orange-500/40 text-orange-300 text-xs font-bold">
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            <span>Direct Salon Contact & Scheduling</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
            Get in Touch With <span className="text-orange-400">Best Buddies</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Have questions about grooming styles, anxious dog care, or availability? Call or text our groomers directly at <strong className="text-orange-300">(970) 987-3091</strong> or schedule below.
          </p>
        </div>

        {/* 2-Column Contact Info & Direct Booking Form */}
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Hours (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="p-6 rounded-2xl bg-[#121620] border border-zinc-800 space-y-5">
              <h2 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
                Pacifica Salon Information
              </h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 font-medium">Phone & Text / SMS</div>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-sm font-bold text-white hover:text-orange-400 block"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <span className="text-[11px] text-orange-400 font-semibold">Call or SMS for rapid response</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 font-medium">Salon Location</div>
                    <div className="text-sm font-bold text-white">Pacifica, CA 94044</div>
                    <span className="text-[11px] text-slate-400">Easy Highway 1 access with dedicated parking</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 font-medium">Salon Hours</div>
                    <div className="text-xs text-white font-bold mt-0.5">Monday – Friday: 9:00 AM – 6:00 PM</div>
                    <div className="text-xs text-white font-bold">Saturday: 9:00 AM – 1:00 PM</div>
                    <div className="text-[11px] text-orange-400 font-semibold">Sunday: By Special Appointment</div>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="py-2.5 px-3 rounded-xl font-black text-xs bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 text-center flex items-center justify-center gap-1.5 shadow"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-950" />
                  <span>Call Now</span>
                </a>

                <a
                  href={BUSINESS_INFO.smsUrl}
                  className="py-2.5 px-3 rounded-xl font-bold text-xs bg-[#181d28] border border-orange-500/40 text-orange-300 text-center flex items-center justify-center gap-1.5 hover:text-white"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-orange-400" />
                  <span>Text (SMS)</span>
                </a>
              </div>
            </div>

            {/* Payment & Security Card */}
            <div className="p-5 rounded-2xl bg-[#121620] border border-zinc-800 space-y-3">
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-orange-400" />
                <span>Accepted Payment Methods</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We accept all major Credit/Debit Cards (Visa, Mastercard, American Express, Discover), Apple Pay, Google Pay, and Cash upon pickup. No advance deposit required.
              </p>
            </div>

          </div>

          {/* Right: Embedded Appointment Booking Form (Cols 6-12) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121620] border border-zinc-800 shadow-xl space-y-6">
              
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-white font-['Outfit',sans-serif]">
                  Request an Appointment Online
                </h2>
                <p className="text-xs text-slate-400">
                  Fill in your pet details and we will confirm your time slot within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-orange-500/20 border-2 border-orange-400 text-orange-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9 text-orange-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-white">Booking Request Received!</h3>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      Thank you, {ownerName}! We will review your request for <strong>{dogName}</strong> for <strong>{preferredDate}</strong> and send an SMS confirmation.
                    </p>
                  </div>

                  <div className="pt-2 flex justify-center gap-3">
                    <a
                      href={`sms:+19709873091?body=${smsDirect}`}
                      className="py-2.5 px-4 rounded-xl font-black text-xs bg-orange-500 text-slate-950 flex items-center gap-1.5 shadow"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-slate-950" />
                      <span>Send Quick Confirmation SMS</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-orange-400 underline cursor-pointer font-bold"
                    >
                      New Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Dog's Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Teddy"
                        value={dogName}
                        onChange={(e) => setDogName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white placeholder-slate-500 text-xs focus:border-orange-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Breed
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Doodle, Husky, Shih Tzu"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white placeholder-slate-500 text-xs focus:border-orange-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Size buttons */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Dog Weight Category
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

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Service
                      </label>
                      <select
                        value={serviceId}
                        onChange={(e) => setServiceId(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white text-xs focus:border-orange-400 focus:outline-none cursor-pointer"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id} className="bg-[#121620]">
                            {s.name} (from ${s.priceStartingAt})
                          </option>
                        ))}
                      </select>
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

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white placeholder-slate-500 text-xs focus:border-orange-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Phone (for text confirmation) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(415) 555-0199"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                      placeholder="e.g. Senior dog, sensitive skin, clipper anxiety..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white placeholder-slate-500 text-xs focus:border-orange-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-950/80"
                  >
                    <Calendar className="w-4 h-4 text-slate-950" />
                    <span>Submit Appointment Request</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

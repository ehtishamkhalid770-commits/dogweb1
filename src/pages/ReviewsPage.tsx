import { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Testimonial } from '../types';
import { Star, ShieldCheck, ThumbsUp, Send, CheckCircle2 } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

export function ReviewsPage() {
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'Pacifica' | 'San Mateo' | 'Daly City' | 'Burlingame'>('all');

  // Form state for leaving a review
  const [reviewerName, setReviewerName] = useState('');
  const [dogName, setDogName] = useState('');
  const [breed, setBreed] = useState('');
  const [city, setCity] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const filteredReviews = selectedFilter === 'all'
    ? reviewsList
    : reviewsList.filter((r) => r.city.toLowerCase().includes(selectedFilter.toLowerCase()));

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName || !comment) return;

    const newRev: Testimonial = {
      id: `user-rev-${Date.now()}`,
      ownerName: reviewerName,
      city: city || 'Bay Area, CA',
      dogName: dogName || 'My Dog',
      breed: breed || 'Pup',
      rating,
      comment,
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      dogImgUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=300&q=80',
      date: 'Just now',
    };

    setReviewsList([newRev, ...reviewsList]);
    setReviewSubmitted(true);
    setComment('');
    setReviewerName('');
    setDogName('');
  };

  return (
    <div className="py-12 sm:py-20 bg-[#0a0d13] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181d26] border border-orange-500/40 text-orange-300 text-xs font-bold">
            <ThumbsUp className="w-3.5 h-3.5 text-orange-400" />
            <span>Verified Pet Parent Stories</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
            Real Reviews From <span className="text-orange-400">Bay Area Families</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            See why pet parents travel from Pacifica, Daly City, San Mateo, and San Francisco to trust Best Buddies with their furry family members.
          </p>

          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#121620] border border-zinc-800 mt-2 shadow-lg">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-black text-white text-sm">4.9 / 5.0</span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs text-orange-400 font-bold">380+ Community Reviews</span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'Pacifica', label: 'Pacifica Locals' },
            { id: 'San Mateo', label: 'San Mateo' },
            { id: 'Daly City', label: 'Daly City' },
            { id: 'Burlingame', label: 'Burlingame' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setSelectedFilter(btn.id as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                selectedFilter === btn.id
                  ? 'bg-orange-500 text-slate-950 shadow'
                  : 'bg-[#121620] text-slate-300 border border-zinc-800 hover:text-white'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#121620] border border-zinc-800 hover:border-orange-500/40 flex flex-col justify-between shadow-xl space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <SafeImage
                      src={item.avatarUrl}
                      alt={item.ownerName}
                      className="w-11 h-11 rounded-full object-cover border border-orange-500/40"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{item.ownerName}</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                      </h3>
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

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

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

        {/* Leave a Review Interactive Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#121620] border border-zinc-800 max-w-2xl mx-auto space-y-5">
          <div className="space-y-1 text-center">
            <h2 className="text-xl font-bold text-white">Share Your Experience</h2>
            <p className="text-xs text-slate-400">
              Have you brought your furry buddy to our Pacifica salon? Let fellow pet parents know how we did!
            </p>
          </div>

          {reviewSubmitted ? (
            <div className="p-4 rounded-xl bg-[#1a202c] border border-orange-500/60 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-orange-400 mx-auto" />
              <div className="font-bold text-white text-sm">Thank You for Your Feedback!</div>
              <p className="text-xs text-slate-300">Your review has been added to our community testimonials.</p>
              <button
                onClick={() => setReviewSubmitted(false)}
                className="text-xs text-orange-400 underline pt-1 block mx-auto font-bold"
              >
                Submit another review
              </button>
            </div>
          ) : (
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((starVal) => (
                  <button
                    key={starVal}
                    type="button"
                    onClick={() => setRating(starVal)}
                    className="p-1 text-amber-400 cursor-pointer"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        starVal <= rating ? 'fill-amber-400 text-amber-400' : 'text-zinc-600'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={reviewerName}
                  onChange={(e) => setReviewerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white placeholder-slate-500 text-xs focus:border-orange-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="City (e.g. Pacifica, CA)"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white placeholder-slate-500 text-xs focus:border-orange-400 focus:outline-none"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Dog's Name"
                  value={dogName}
                  onChange={(e) => setDogName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white placeholder-slate-500 text-xs focus:border-orange-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Breed (e.g. Golden Retriever)"
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white placeholder-slate-500 text-xs focus:border-orange-400 focus:outline-none"
                />
              </div>

              <textarea
                required
                rows={3}
                placeholder="Write your review here... *"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-[#0b0e14] border border-zinc-800 text-white placeholder-slate-500 text-xs focus:border-orange-400 focus:outline-none"
              />

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl font-black text-xs bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 flex items-center justify-center gap-2 cursor-pointer shadow"
              >
                <Send className="w-3.5 h-3.5 text-slate-950" />
                <span>Post Review</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

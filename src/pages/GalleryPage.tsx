import { useState } from 'react';
import { BeforeAfterGallery } from '../components/BeforeAfterGallery';
import { Camera, MessageSquare, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { SafeImage } from '../components/SafeImage';

export function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'doodles' | 'double' | 'small' | 'baths'>('all');

  const galleryPhotos = [
    {
      id: 1,
      name: 'Oliver',
      breed: 'Mini Goldendoodle',
      tag: 'doodles',
      caption: 'Teddy bear haircut & blueberry facial',
      img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      name: 'Koda',
      breed: 'Siberian Husky',
      tag: 'double',
      caption: 'De-shedding undercoat blowout',
      img: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      name: 'Bella',
      breed: 'Shih Tzu',
      tag: 'small',
      caption: 'Asian fusion face styling & bow',
      img: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      name: 'Charlie',
      breed: 'Golden Retriever',
      tag: 'double',
      caption: 'Hydromassage botanical bath & paw pad trim',
      img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      name: 'Archie',
      breed: 'French Bulldog',
      tag: 'small',
      caption: 'Wrinkle cleanse & paw pad shea balm',
      img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      name: 'Coco',
      breed: 'Standard Poodle',
      tag: 'doodles',
      caption: 'Show-quality scissor finish & topknot',
      img: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 7,
      name: 'Finn',
      breed: 'Welsh Corgi',
      tag: 'double',
      caption: 'Sanitary trim, de-shed & ear botanical clean',
      img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 8,
      name: 'Daisy',
      breed: 'Maltese Puppy',
      tag: 'small',
      caption: 'Puppy first groom introduction',
      img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 9,
      name: 'Barnaby',
      breed: 'Basset Hound',
      tag: 'baths',
      caption: 'Deep de-odorizing bath & ear care',
      img: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&q=80',
    }
  ];

  const filtered = filter === 'all'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.tag === filter);

  return (
    <div className="py-12 sm:py-20 bg-[#0a0d13] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181d26] border border-orange-500/40 text-orange-300 text-xs font-bold">
            <Camera className="w-3.5 h-3.5 text-orange-400" />
            <span>Salon Photo Showcase</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
            Happy Dogs, <span className="text-orange-400">Flawless Finishes</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every photo shown here is a real client pampered right at Best Buddies Dog Grooming Pacifica. Take a look at our scissor work, de-shedding results, and joyful pups!
          </p>
        </div>

        {/* Embedded Before & After Interactive Showcase */}
        <BeforeAfterGallery />

        {/* Filterable Breed Gallery Grid */}
        <div className="space-y-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <h2 className="text-xl font-bold text-white">Recent Salon Graduates</h2>
              <p className="text-xs text-slate-400">Browse by breed and grooming category</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Pups' },
                { id: 'doodles', label: 'Doodles & Poodles' },
                { id: 'double', label: 'Double Coats & Huskies' },
                { id: 'small', label: 'Small / Toy Breeds' },
                { id: 'baths', label: 'Baths & Spas' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setFilter(btn.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    filter === btn.id
                      ? 'bg-orange-500 text-slate-950 shadow'
                      : 'bg-[#121620] text-slate-300 border border-zinc-800 hover:text-white'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl overflow-hidden bg-[#121620] border border-zinc-800 shadow-lg hover:border-orange-500/50 transition-all flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden bg-black/40">
                  <SafeImage
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121620] via-transparent to-transparent opacity-80 pointer-events-none" />
                  <div className="absolute top-3 right-3 bg-[#0d1016]/90 text-orange-300 border border-orange-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    Pacifica Spa
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">{item.name}</h3>
                    <span className="text-[11px] text-orange-400 font-semibold">{item.breed}</span>
                  </div>
                  <p className="text-xs text-slate-400">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Photo Submission Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#121620] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <span>Have a photo of your dog after their visit?</span>
              <Heart className="w-4 h-4 text-orange-400" />
            </h3>
            <p className="text-xs text-slate-300 max-w-lg">
              We love celebrating our furry guests! Text us your dog’s photo to be featured on our Pacifica wall of fame.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.smsUrl}
            className="py-2.5 px-4 rounded-xl font-bold text-xs bg-[#181d26] border border-orange-500/40 text-orange-300 hover:text-white flex items-center gap-2 flex-shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-orange-400" />
            <span>Text Your Pup’s Photo</span>
          </a>
        </div>

      </div>
    </div>
  );
}

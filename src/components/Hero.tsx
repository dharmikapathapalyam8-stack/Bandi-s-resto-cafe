import { ArrowDownRight, MapPin } from 'lucide-react';
import { HERO_MEDIA, RESTAURANT_INFO } from '../data/restaurantData';
import ImageWithFallback from './ImageWithFallback';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-end bg-[#12110F] overflow-hidden"
    >
      {/* Full-bleed atmospheric background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={HERO_MEDIA.backgroundImage}
          alt={HERO_MEDIA.backgroundAlt}
          loading="eager"
          fetchPriority="high"
          fallbackTitle={RESTAURANT_INFO.wordmark}
          className="w-full h-full object-cover object-center scale-[1.01]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#12110F] via-[#12110F]/72 to-[#12110F]/45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#12110F]/80 via-[#12110F]/35 to-transparent"
        />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-8 pt-28 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-4xl">
          <p className="text-xs sm:text-sm font-medium tracking-[0.16em] text-[#C99A3B] mb-5">
            Tirupati, Andhra Pradesh <span aria-hidden="true" className="mx-2 text-[#FAF6F0]/40">·</span> Biryani Restaurant &amp; Cafe
          </p>

          <h1
            className="font-display font-semibold text-[#FAF6F0] tracking-[-0.01em] leading-[1.08] text-balance"
            style={{ fontSize: 'clamp(2.25rem, 4.6vw, 4.1rem)' }}
          >
            GOOD FOOD. GREAT MOOD. UNFORGETTABLE MOMENTS.
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#FAF6F0]/88 leading-relaxed">
            Discover delicious biryanis, irresistible starters and refreshing beverages at Bandi&apos;s Resto Cafe.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#12110F] bg-[#C99A3B] hover:bg-[#D8AE52] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF6F0]"
            >
              <span>Explore Our Menu</span>
              <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="#location"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#FAF6F0] bg-[#1A1815]/80 hover:bg-[#2A2118] border border-[#FAF6F0]/25 hover:border-[#C99A3B]/60 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3B]"
            >
              <MapPin className="w-4 h-4 text-[#C99A3B]" aria-hidden="true" />
              <span>Find Our Location</span>
            </a>
          </div>
        </div>

        {/* Clean Unboxed Metadata Bar */}
        <div className="mt-14 pt-6 border-t border-[#FAF6F0]/15 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#D8CFC0]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-[#FAF6F0] font-medium">Services:</span>
            <span>Dine-in</span>
            <span aria-hidden="true" className="text-[#C99A3B]">·</span>
            <span>Drive-through</span>
            <span aria-hidden="true" className="text-[#C99A3B]">·</span>
            <span>No-contact delivery</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 tabular-nums">
            <span className="text-[#C99A3B] font-semibold">
              {RESTAURANT_INFO.googleRating.toFixed(1)}/5 Google Rating
            </span>
            <span aria-hidden="true" className="text-[#FAF6F0]/35">·</span>
            <span>{RESTAURANT_INFO.googleReviewCount} Reviews</span>
            <span aria-hidden="true" className="text-[#FAF6F0]/35">·</span>
            <span>{RESTAURANT_INFO.hoursSummary} (Verify hours)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

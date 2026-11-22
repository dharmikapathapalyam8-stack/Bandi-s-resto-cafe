import { ExternalLink, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Reviews() {
  const fullStars = Math.floor(RESTAURANT_INFO.googleRating);

  return (
    <section
      id="reviews"
      className="bg-[#2A2118] text-[#FAF6F0] py-20 sm:py-24 border-t border-[#FAF6F0]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Verified Google Rating Summary */}
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.14em] text-[#C99A3B] mb-3">
              Customer Reviews
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#FAF6F0] text-balance">
              Trusted by Diners Across Tirupati
            </h2>
            <p className="mt-4 text-base text-[#EAE0D0] leading-relaxed max-w-2xl">
              Guests recognize Bandi&apos;s Resto Cafe on Google for its welcoming ambience,
              signature biryanis, starters, and refreshing cafe beverages. To preserve
              authenticity, we publish only our verified Google listing metrics rather than
              fabricated testimonials.
            </p>
          </div>

          {/* Right: Google Rating Card */}
          <div className="lg:col-span-5 bg-[#1A1815] border border-[#FAF6F0]/15 rounded-2xl p-7 sm:p-8">
            <div className="flex items-baseline gap-3 tabular-nums">
              <span className="font-display text-5xl sm:text-6xl font-bold text-[#FAF6F0]">
                {RESTAURANT_INFO.googleRating.toFixed(1)}
              </span>
              <span className="text-xl text-[#D8CFC0]/75 font-medium">/ 5</span>
            </div>

            <div className="mt-4 flex items-center gap-1.5" aria-label="4.4 out of 5 stars">
              {Array.from({ length: 5 }).map((_, idx) => {
                const isFilled = idx < fullStars;
                const isPartial = idx === fullStars;
                return (
                  <span key={idx} className="relative inline-flex w-5 h-5">
                    <Star
                      className="w-5 h-5 text-[#FAF6F0]/20"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    {(isFilled || isPartial) && (
                      <span
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: isFilled ? '100%' : '45%' }}
                      >
                        <Star
                          className="w-5 h-5 text-[#C99A3B] fill-[#C99A3B]"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </span>
                    )}
                  </span>
                );
              })}
            </div>

            <p className="mt-3 text-sm sm:text-base font-medium text-[#FAF6F0] tabular-nums">
              Based on {RESTAURANT_INFO.googleReviewCount} Google Reviews
            </p>
            <p className="mt-1 text-xs text-[#D8CFC0]/75">
              Google Business Profile · {RESTAURANT_INFO.city}
            </p>

            <div className="mt-7">
              <a
                href={RESTAURANT_INFO.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3 text-sm font-semibold text-[#12110F] bg-[#C99A3B] hover:bg-[#D8AE52] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF6F0]"
              >
                <span>View Google Reviews</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

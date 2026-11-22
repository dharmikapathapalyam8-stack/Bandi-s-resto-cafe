import { ABOUT_MEDIA, RESTAURANT_INFO } from '../data/restaurantData';
import ImageWithFallback from './ImageWithFallback';

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FAF6F0] text-[#171512] py-20 sm:py-28 border-b border-[#E5DCCD]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Editorial Copy Column */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-8">
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-[0.14em] text-[#8C6318] mb-3">
                About Bandi&apos;s Resto Cafe
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] text-[#171512] text-balance">
                A Place for Every Food Lover
              </h2>

              <div className="mt-6 space-y-4 text-base text-[#3D352B] leading-[1.7]">
                <p>
                  Located in Avilali, M.R. Pally in Tirupati, Bandi&apos;s Resto Cafe is a
                  welcoming dining destination bringing together the richness of comforting
                  biryanis and the relaxed energy of a neighborhood cafe.
                </p>
                <p>
                  Whether you are gathering with family for a full dinner, stopping by with
                  friends for smoky starters and chilled milkshakes, or picking up a quick meal
                  on the move, our space is designed for unhurried conversation and dependable
                  hospitality.
                </p>
              </div>
            </div>

            {/* Structured Pillars — No nested card boxes, clean hairline grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-[#DFD4C3]">
              <div>
                <h3 className="font-display text-lg font-semibold text-[#171512]">
                  Restaurant Atmosphere
                </h3>
                <p className="mt-1.5 text-sm text-[#4F4539] leading-relaxed">
                  Warm ambient lighting, comfortable seating, and a tidy dining room suited for
                  families, college groups, and casual evening meals.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#171512]">
                  Dining Experience
                </h3>
                <p className="mt-1.5 text-sm text-[#4F4539] leading-relaxed">
                  Flexible ways to enjoy your meal with dine-in table service, convenient
                  drive-through pickup, and no-contact delivery.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#171512]">
                  Food Highlights
                </h3>
                <p className="mt-1.5 text-sm text-[#4F4539] leading-relaxed">
                  Celebrated locally for Bandi&apos;s Special Biriyani, Chicken Tikka, Dragon
                  Chicken, crisp French Fries, and Mango Milkshake.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#171512]">
                  Customer Satisfaction
                </h3>
                <p className="mt-1.5 text-sm text-[#4F4539] leading-relaxed tabular-nums">
                  Rated {RESTAURANT_INFO.googleRating.toFixed(1)}/5 across{' '}
                  {RESTAURANT_INFO.googleReviewCount} Google reviews by diners across Tirupati.
                </p>
              </div>
            </div>
          </div>

          {/* Photography Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 min-h-[340px] lg:min-h-0 rounded-2xl overflow-hidden bg-[#23201B]">
              <ImageWithFallback
                src={ABOUT_MEDIA.image}
                alt={ABOUT_MEDIA.imageAlt}
                variant="light"
                fallbackTitle="Dining Room Showcase"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-[#6B5F51]">
              Illustrative dining ambience showcase · Located at Padmavathi Nagar, Avilali, Tirupati
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Phone } from 'lucide-react';
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  RESTAURANT_INFO,
  formatInrPrice,
  type MenuCategory,
} from '../data/restaurantData';
import ImageWithFallback from './ImageWithFallback';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<'All' | MenuCategory>('All');

  const filteredItems =
    activeCategory === 'All'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="bg-[#12110F] text-[#FAF6F0] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.14em] text-[#C99A3B] mb-3">
              Signature Menu
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-[#FAF6F0] text-balance">
              Biryanis, Starters &amp; Cafe Favorites
            </h2>
          </div>

          <p className="text-sm text-[#D8CFC0] max-w-md leading-relaxed">
            Explore our signature highlights and menu categories. Dish pricing is confirmed
            directly at the restaurant or by phone until the full menu card is uploaded.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div
          role="group"
          aria-label="Filter menu by category"
          className="flex flex-wrap items-center gap-2 pb-8 mb-10 border-b border-[#FAF6F0]/12"
        >
          {MENU_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3B] ${
                  isActive
                    ? 'bg-[#C99A3B] text-[#12110F] font-semibold'
                    : 'bg-[#1A1815] text-[#FAF6F0]/80 border border-[#FAF6F0]/12 hover:text-[#FAF6F0] hover:border-[#C99A3B]/50'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center bg-[#1A1815] border border-[#FAF6F0]/10 rounded-2xl">
            <p className="font-display text-xl text-[#FAF6F0]">
              No dishes listed in this category yet.
            </p>
            <p className="mt-2 text-sm text-[#D8CFC0]">
              Select another category or call us to ask about today&apos;s kitchen specials.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col bg-[#1A1815] border border-[#FAF6F0]/10 rounded-2xl overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#C99A3B]/35"
              >
                {/* Dish Image (4:3) */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#23201B]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.imageAlt}
                    variant="dark"
                    fallbackTitle={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Dish Details */}
                <div className="flex flex-col flex-1 justify-between p-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-[#D8CFC0]/75 mb-2">
                      <span>{item.category}</span>
                      {item.isSignatureHighlight && (
                        <>
                          <span aria-hidden="true" className="text-[#C99A3B]">·</span>
                          <span className="text-[#C99A3B]">Signature Highlight</span>
                        </>
                      )}
                    </div>

                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-xl font-semibold text-[#FAF6F0] leading-snug">
                        {item.name}
                      </h3>
                    </div>

                    <p className="mt-2.5 text-sm text-[#D8CFC0]/90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#FAF6F0]/10 flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-[#C99A3B] tabular-nums">
                      {formatInrPrice(item.priceInr)}
                    </span>
                    <a
                      href={RESTAURANT_INFO.phoneHref}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FAF6F0]/80 hover:text-[#C99A3B] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#C99A3B]"
                    >
                      <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Ask / Order</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

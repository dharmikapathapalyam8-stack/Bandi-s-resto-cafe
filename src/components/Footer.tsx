import { useState } from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Signature Menu', href: '#menu' },
  { label: 'Food Gallery', href: '#gallery' },
  { label: 'Customer Reviews', href: '#reviews' },
  { label: 'Location & Contact', href: '#location' },
] as const;

export default function Footer() {
  const [showInstagramNote, setShowInstagramNote] = useState(false);

  return (
    <footer className="bg-[#12110F] text-[#FAF6F0] border-t border-[#FAF6F0]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="inline-block font-display text-xl sm:text-2xl font-semibold tracking-[0.06em] text-[#FAF6F0] hover:text-[#C99A3B] transition-colors"
            >
              {RESTAURANT_INFO.wordmark}
            </a>
            <p className="text-sm text-[#D8CFC0] leading-relaxed max-w-sm">
              Biryani restaurant and neighborhood cafe in Tirupati offering dine-in,
              drive-through, and no-contact delivery.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowInstagramNote((prev) => !prev)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#FAF6F0]/85 bg-[#1A1815] border border-[#FAF6F0]/15 hover:border-[#C99A3B]/60 rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C99A3B]"
              >
                <Instagram className="w-4 h-4 text-[#C99A3B]" aria-hidden="true" />
                <span>Instagram (Placeholder)</span>
              </button>
              {showInstagramNote && (
                <p className="mt-2 text-xs text-[#C99A3B]">
                  {RESTAURANT_INFO.instagramPlaceholderLabel}
                </p>
              )}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.14em] text-[#C99A3B] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#D8CFC0] hover:text-[#FAF6F0] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.14em] text-[#C99A3B]">
              Visit &amp; Contact
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-[#D8CFC0]">
              <MapPin className="w-4 h-4 text-[#C99A3B] shrink-0 mt-1" aria-hidden="true" />
              <p className="leading-relaxed">{RESTAURANT_INFO.address}</p>
            </div>
            <div className="flex items-center gap-2.5 text-sm">
              <Phone className="w-4 h-4 text-[#C99A3B] shrink-0" aria-hidden="true" />
              <a
                href={RESTAURANT_INFO.phoneHref}
                className="text-[#FAF6F0] font-medium hover:text-[#C99A3B] transition-colors tabular-nums"
              >
                {RESTAURANT_INFO.phoneDisplay}
              </a>
            </div>
            <p className="text-xs text-[#D8CFC0]/70">
              {RESTAURANT_INFO.hoursSummary} · Verify phone and hours before publishing.
            </p>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="mt-12 pt-6 border-t border-[#FAF6F0]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#D8CFC0]/75">
          <p>
            &copy; {new Date().getFullYear()} Bandi&apos;s Resto Cafe, Tirupati. All rights reserved.
          </p>
          <p>JC94+W5, Avilali, Andhra Pradesh 517502</p>
        </div>
      </div>
    </footer>
  );
}

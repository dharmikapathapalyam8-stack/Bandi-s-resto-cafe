import { useEffect, useState } from 'react';
import { Menu as MenuIcon, Phone, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#12110F]/95 backdrop-blur-md border-b border-[#FAF6F0]/10'
          : 'bg-gradient-to-b from-[#12110F]/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line text wordmark */}
        <a
          href="#home"
          className="font-display text-lg sm:text-xl font-semibold tracking-[0.06em] text-[#FAF6F0] hover:text-[#C99A3B] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C99A3B]"
        >
          {RESTAURANT_INFO.wordmark}
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-sm font-medium text-[#FAF6F0]/85 hover:text-[#C99A3B] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#C99A3B] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C99A3B]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action + mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={RESTAURANT_INFO.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-[#12110F] bg-[#C99A3B] hover:bg-[#D8AE52] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF6F0]"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Call Now</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#FAF6F0] hover:text-[#C99A3B] hover:bg-[#FAF6F0]/10 transition-colors focus-visible:outline-2 focus-visible:outline-[#C99A3B]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <MenuIcon className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-[#12110F] border-t border-[#FAF6F0]/10 px-5 py-5"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-2 text-base font-medium text-[#FAF6F0] hover:text-[#C99A3B] border-b border-[#FAF6F0]/10 last:border-b-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-3 flex flex-col gap-3">
            <a
              href={RESTAURANT_INFO.phoneHref}
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 text-sm font-semibold text-[#12110F] bg-[#C99A3B] hover:bg-[#D8AE52] rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call {RESTAURANT_INFO.phoneDisplay}</span>
            </a>
            <p className="text-xs text-[#D8CFC0]/75 text-center">
              {RESTAURANT_INFO.phoneVerificationNote}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

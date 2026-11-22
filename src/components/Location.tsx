import { useState } from 'react';
import { Check, Clock, Copy, MapPin, Navigation, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Location() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(RESTAURANT_INFO.address);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2200);
    } catch {
      setCopiedAddress(false);
    }
  };

  return (
    <section
      id="location"
      className="bg-[#FAF6F0] text-[#171512] py-20 sm:py-28 border-t border-[#E5DCCD]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.14em] text-[#8C6318] mb-3">
            Location &amp; Contact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-[#171512] text-balance">
            Visit Bandi&apos;s Resto Cafe in Tirupati
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Contact & Hours Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 bg-[#F5EFE6] border border-[#E2D6C3] rounded-2xl p-7 sm:p-8">
            <div className="space-y-6">
              {/* Address */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8C6318]">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>Address</span>
                </div>
                <p className="mt-2 font-display text-xl font-semibold text-[#171512]">
                  Bandi&apos;s Resto Cafe
                </p>
                <p className="mt-1.5 text-sm sm:text-[15px] text-[#3D352B] leading-relaxed">
                  {RESTAURANT_INFO.address}
                </p>
                <p className="mt-2 text-xs font-medium text-[#5C5042]">
                  Google Maps Code: {RESTAURANT_INFO.plusCode}
                </p>
              </div>

              <hr className="border-[#DFD4C3]" />

              {/* Phone */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8C6318]">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Phone</span>
                </div>
                <a
                  href={RESTAURANT_INFO.phoneHref}
                  className="mt-2 inline-block text-lg font-semibold text-[#171512] hover:text-[#8C6318] transition-colors tabular-nums"
                >
                  {RESTAURANT_INFO.phoneDisplay}
                </a>
                <p className="mt-1 text-xs text-[#6B5F51]">
                  Owner verification required: {RESTAURANT_INFO.phoneVerificationNote}.
                </p>
              </div>

              <hr className="border-[#DFD4C3]" />

              {/* Opening Hours */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8C6318]">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>Opening Hours</span>
                </div>
                <p className="mt-2 text-base font-semibold text-[#171512]">
                  {RESTAURANT_INFO.hoursSummary}
                </p>
                <p className="mt-1 text-xs text-[#6B5F51] leading-relaxed">
                  Owner verification required: {RESTAURANT_INFO.hoursVerificationNote}
                </p>
              </div>

              <hr className="border-[#DFD4C3]" />

              {/* Available Services */}
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#8C6318]">
                  Available Services
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-[#171512]">
                  {RESTAURANT_INFO.services.map((service, index) => (
                    <span key={service} className="inline-flex items-center gap-3">
                      <span>{service}</span>
                      {index < RESTAURANT_INFO.services.length - 1 && (
                        <span aria-hidden="true" className="text-[#8C6318]">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <a
                href={RESTAURANT_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#FAF6F0] bg-[#12110F] hover:bg-[#2A2118] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12110F]"
              >
                <Phone className="w-4 h-4 text-[#C99A3B]" aria-hidden="true" />
                <span>Call Restaurant</span>
              </a>

              <a
                href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#12110F] bg-[#C99A3B] hover:bg-[#D8AE52] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12110F]"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                <span>Get Directions</span>
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#171512] bg-[#FAF6F0] border border-[#D4C5AF] hover:border-[#8C6318] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#8C6318]"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-4 h-4 text-[#8C6318]" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" aria-hidden="true" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: Embedded Google Map + Direct Link Card */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl overflow-hidden border border-[#E2D6C3] bg-[#EAE1D2] min-h-[380px] lg:min-h-0">
            <div className="relative flex-1 min-h-[320px]">
              <iframe
                title="Google Map location for Bandi's Resto Cafe in Avilali, Tirupati"
                src={RESTAURANT_INFO.googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[340px] border-0"
                allowFullScreen
              />
            </div>

            <div className="bg-[#12110F] text-[#FAF6F0] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-[#D8CFC0]">
                <span className="font-semibold text-[#FAF6F0]">Plus Code:</span>{' '}
                {RESTAURANT_INFO.plusCode}
              </div>
              <a
                href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#C99A3B] hover:text-[#D8AE52] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Open in Google Maps</span>
                <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

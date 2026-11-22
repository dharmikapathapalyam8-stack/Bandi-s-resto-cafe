import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import {
  GALLERY_CATEGORIES,
  GALLERY_PHOTOS,
  type GalleryCategory,
} from '../data/restaurantData';
import ImageWithFallback from './ImageWithFallback';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visiblePhotos =
    activeFilter === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === activeFilter);

  const currentPhoto =
    lightboxIndex !== null && visiblePhotos[lightboxIndex]
      ? visiblePhotos[lightboxIndex]
      : null;

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      } else if (event.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % visiblePhotos.length
        );
      } else if (event.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + visiblePhotos.length) % visiblePhotos.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, visiblePhotos.length]);

  const handleFilterChange = (category: GalleryCategory) => {
    setActiveFilter(category);
    setLightboxIndex(null);
  };

  return (
    <section
      id="gallery"
      className="bg-[#1A1815] text-[#FAF6F0] py-20 sm:py-28 border-t border-[#FAF6F0]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.14em] text-[#C99A3B] mb-3">
              Food &amp; Ambience Gallery
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-[#FAF6F0] text-balance">
              Inside Bandi&apos;s Resto Cafe
            </h2>
          </div>

          <p className="text-sm text-[#D8CFC0] max-w-md leading-relaxed">
            Browse dishes, biryanis, drinks, and dining spaces. Select any photograph to view it
            in full detail.
          </p>
        </div>

        {/* Category Filters */}
        <div
          role="group"
          aria-label="Filter gallery photos"
          className="flex flex-wrap items-center gap-2 pb-8 mb-10 border-b border-[#FAF6F0]/12"
        >
          {GALLERY_CATEGORIES.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleFilterChange(category)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3B] ${
                  isActive
                    ? 'bg-[#C99A3B] text-[#12110F] font-semibold'
                    : 'bg-[#12110F] text-[#FAF6F0]/80 border border-[#FAF6F0]/12 hover:text-[#FAF6F0] hover:border-[#C99A3B]/50'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visiblePhotos.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`Open ${photo.title} in lightbox`}
              className="group relative text-left rounded-2xl overflow-hidden bg-[#12110F] border border-[#FAF6F0]/10 hover:border-[#C99A3B]/50 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3B]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <ImageWithFallback
                  src={photo.image}
                  alt={photo.imageAlt}
                  variant="dark"
                  fallbackTitle={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#12110F]/85 via-[#12110F]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-3 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#12110F]/75 text-[#FAF6F0] border border-[#FAF6F0]/15 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Expand className="w-4 h-4" />
                </span>
              </div>

              <div className="p-4">
                <p className="text-xs text-[#C99A3B] font-medium">{photo.category}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-[#FAF6F0] truncate">
                  {photo.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#D8CFC0]/70">
          Illustrative showcase imagery. Owner-uploaded restaurant photographs can replace any slot
          directly in the gallery data configuration.
        </p>
      </div>

      {/* Lightbox Modal */}
      {currentPhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentPhoto.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#12110F]/92 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#1A1815] border border-[#FAF6F0]/15 rounded-2xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Top Controls */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#FAF6F0]/10">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#D8CFC0] tabular-nums">
                <span className="text-[#C99A3B] font-medium">{currentPhoto.category}</span>
                <span aria-hidden="true">·</span>
                <span>
                  {lightboxIndex + 1} / {visiblePhotos.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close lightbox"
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#FAF6F0] hover:text-[#C99A3B] hover:bg-[#FAF6F0]/10 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C99A3B]"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Lightbox Photo */}
            <div className="relative aspect-[16/10] w-full bg-[#12110F]">
              <ImageWithFallback
                src={currentPhoto.image}
                alt={currentPhoto.imageAlt}
                variant="dark"
                fallbackTitle={currentPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Caption & Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-5 py-5 border-t border-[#FAF6F0]/10">
              <div>
                <h3 className="font-display text-xl font-semibold text-[#FAF6F0]">
                  {currentPhoto.title}
                </h3>
                <p className="mt-1 text-sm text-[#D8CFC0]">{currentPhoto.caption}</p>
              </div>

              {visiblePhotos.length > 1 && (
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + visiblePhotos.length) % visiblePhotos.length
                      )
                    }
                    aria-label="Previous image"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#12110F] border border-[#FAF6F0]/15 text-[#FAF6F0] hover:border-[#C99A3B] hover:text-[#C99A3B] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C99A3B]"
                  >
                    <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((lightboxIndex + 1) % visiblePhotos.length)
                    }
                    aria-label="Next image"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#12110F] border border-[#FAF6F0]/15 text-[#FAF6F0] hover:border-[#C99A3B] hover:text-[#C99A3B] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C99A3B]"
                  >
                    <ChevronRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

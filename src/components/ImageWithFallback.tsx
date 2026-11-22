import { useState } from 'react';
import { Utensils } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  fallbackTitle?: string;
  variant?: 'dark' | 'light';
}

export default function ImageWithFallback({
  src,
  alt,
  className = 'w-full h-full object-cover',
  loading = 'lazy',
  fetchPriority = 'auto',
  fallbackTitle,
  variant = 'dark',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    const isDark = variant === 'dark';
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 p-6 text-center ${
          isDark
            ? 'bg-gradient-to-br from-[#23201B] via-[#1A1815] to-[#12110F] text-[#D8CFC0]'
            : 'bg-gradient-to-br from-[#EFE6D8] via-[#F5EFE6] to-[#E7DCCB] text-[#3B2E22]'
        } ${className}`}
      >
        <Utensils className="w-7 h-7 text-[#C99A3B]" aria-hidden="true" />
        <span className="font-display text-base font-medium tracking-wide">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

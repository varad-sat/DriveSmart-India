import React, { useState, useEffect } from 'react';
import { Car, Image as ImageIcon } from 'lucide-react';

interface SmartImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: 'lazy' | 'eager';
  className?: string;
  caption?: string;
  fallbackText?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  className = '',
  caption,
  fallbackText,
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    // If .webp fails to load (e.g., user hasn't uploaded webp yet),
    // automatically attempt the corresponding .svg asset in /public/images/
    if (currentSrc.endsWith('.webp')) {
      setCurrentSrc(currentSrc.replace(/\.webp$/, '.svg'));
    } else {
      setHasError(true);
    }
  };

  // If both webp and svg failed, show the clean neutral container
  if (hasError) {
    return (
      <figure className="my-3">
        <div
          style={{ aspectRatio: `${width} / ${height}` }}
          className={`w-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl flex flex-col items-center justify-center p-4 text-center text-slate-500 dark:text-slate-400 shadow-inner select-none ${className}`}
        >
          <div className="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center mb-2">
            {fallbackText ? (
              <Car className="w-6 h-6 text-slate-600 dark:text-slate-300" aria-hidden="true" />
            ) : (
              <ImageIcon className="w-6 h-6 text-slate-600 dark:text-slate-300" aria-hidden="true" />
            )}
          </div>
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 max-w-sm px-2 truncate">
            {fallbackText || alt}
          </span>
          <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 font-mono">
            {src} ({width}×{height})
          </span>
        </div>
        {caption && (
          <figcaption className="text-xs text-slate-500 dark:text-slate-400 text-center mt-2 italic">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="my-3">
      <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs bg-slate-100 dark:bg-slate-800">
        <img
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          referrerPolicy="no-referrer"
          onError={handleError}
          className={`w-full h-auto object-cover transition-opacity duration-300 ${className}`}
        />
      </div>
      {caption && (
        <figcaption className="text-xs text-slate-500 dark:text-slate-400 text-center mt-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

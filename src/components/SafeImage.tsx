import React, { useState } from 'react';

// Reliable high-resolution dog grooming fallback images
const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Best Buddies Dog Grooming',
  className = '',
  fallbackSrc = DEFAULT_FALLBACK,
  onError,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [hasFailed, setHasFailed] = useState(false);

  // Sync if src prop changes
  React.useEffect(() => {
    setImgSrc(src);
    setHasFailed(false);
  }, [src]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasFailed && fallbackSrc && imgSrc !== fallbackSrc) {
      setHasFailed(true);
      setImgSrc(fallbackSrc);
    }
    if (onError) {
      onError(e);
    }
  };

  return (
    <img
      src={imgSrc || fallbackSrc}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      loading={props.loading || 'lazy'}
      onError={handleError}
      {...props}
    />
  );
};
